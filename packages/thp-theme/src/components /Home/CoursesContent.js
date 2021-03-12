import React from "react";
import { homeConstants } from "../constants/constants-string";
import { connect, styled } from "frontity";
import { Primary, Secondary } from "../reusableComponents/buttons";
const CoursesContent = ({ state }) => {
  const breakpoints = state.theme.breakpoints;

  return (
    <>
      {homeConstants.coursesContainer.map(
        ([icon, title, desc, link, width, disabled]) => (
          <CourseDiv key={title}>
            <img src={icon} width={width} />
            <h2>{title}</h2>
            <p>{desc}</p>
            <ButtonContainer>
              <Primary>Subcribe</Primary>
              <Secondary disabled={disabled}>
                {disabled ? "Coming Soon..." : "Read More"}
              </Secondary>
            </ButtonContainer>
          </CourseDiv>
        )
      )}
    </>
  );
};

const ButtonContainer = styled.div`
  justify-content: center;
  padding: 3em 0em 6em 0em;
  width: 100%;
  display: flex;
  button {
    margin: 0em 1em;
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
  }
  h2 {
    margin-block-end: 0em;
    margin-block-start: 1.5em;
  }
  p {
    font-weight: 300;
  }
`;

export default connect(CoursesContent);
