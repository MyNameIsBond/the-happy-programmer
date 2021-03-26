import React from "react";
import { homeConstants } from "../constants/constants-string";
import { connect, styled } from "frontity";
import { Primary, Secondary } from "../reusableComponents/buttons";
import { ContainerDiv } from "../reusableComponents/container";

const CoursesContent = ({ state }) => {
  const breakpoints = state.theme.breakpoints;

  return (
    <>
      {homeConstants.coursesContainer.map(
        ([icon, title, desc, link, width, disabled, row]) => (
          <CoursesContainer breakpoints={breakpoints} key={title}>
            <ContainerDiv>
              <CourseDiv breakpoints={breakpoints} row={row}>
                <img src={icon} width={width} />
                <CoursesCredentials breakpoints={breakpoints}>
                  <h2>{title}</h2>
                  <p>{desc}</p>
                  <ButtonContainer breakpoints={breakpoints}>
                    <Primary>Subcribe</Primary>
                    <Secondary disabled={disabled}>
                      {disabled ? "Coming Soon..." : "Read More"}
                    </Secondary>
                  </ButtonContainer>
                </CoursesCredentials>
              </CourseDiv>
            </ContainerDiv>
          </CoursesContainer>
        )
      )}
    </>
  );
};

const CoursesContainer = styled.div`
  width: 100%;
  display: flex;
  margin: 3em 0em;

  @media screen and (min-width: ${(props) => props.breakpoints.mobile}) {
    background-color: var(--secondary-background-colour);
    margin: 8em 0em;
  }
`;

const ButtonContainer = styled.div`
  justify-content: center;
  flex-direction: column;
  padding-top: 3em;
  width: 100%;
  display: flex;

  button {
    margin: 1em 1em;
  }

  @media screen and (min-width: ${(props) => props.breakpoints.mobile}) {
    justify-content: flex-start;
    flex-direction: row;

    button {
      margin: 0em 2em 0em 0em;
    }
  }
`;

const CoursesCredentials = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: ${(props) => props.breakpoints.mobile}) {
    align-items: flex-start;
  }
`;

const CourseDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 3em 3em 4em 3em;
  h2,
  p {
    text-align: center;
    max-width: 25em;
  }
  h2 {
    margin-block-end: 0em;
    margin-block-start: 1.5em;
  }
  p {
    font-weight: 300;
  }
  @media screen and (min-width: ${(props) => props.breakpoints.mobile}) {
    width: 100%;
    flex-direction: ${(props) => props.row};
    justify-content: space-between;
    align-items: center;
    h2 {
      margin-block-start: 0em;
    }
    h2,
    p {
      text-align: left;
    }
    img {
      max-width: 200px;
    }
  }
`;

export default connect(CoursesContent);
