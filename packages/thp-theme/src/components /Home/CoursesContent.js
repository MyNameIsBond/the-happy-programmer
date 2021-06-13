import { homeConstants, breakpoints } from "../constants/constants-string";
import { styled } from "frontity";
import { Primary, Secondary } from "../reusableComponents/buttons";
import { ContainerDiv } from "../reusableComponents/container";
import Image from "@frontity/components/image";

const CoursesContent = () => {
  return (
    <>
      {homeConstants.coursesContainer.map(
        ([icon, title, desc, link, width, disabled, row]) => (
          <CoursesContainer key={title}>
            <ContainerDiv>
              <CourseDiv row={row}>
                <Image src={icon} width={width} />
                <CoursesCredentials>
                  <h2>{title}</h2>
                  <p>{desc}</p>
                  <ButtonContainer>
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

  ${breakpoints.mobile} {
    background-color: var(--secondary-background-colour);
    margin: 1em 0em;
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

  ${breakpoints.mobile} {
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
  ${breakpoints.mobile} {
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
    font-weight: var(--font-weight-text);
  }
  ${breakpoints.mobile} {
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

export default CoursesContent;
