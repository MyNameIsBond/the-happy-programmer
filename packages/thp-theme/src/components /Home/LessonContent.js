import { connect, styled } from "frontity";
import { homeConstants, breakpoints } from "../constants/constants-string";
import { ContainerDiv } from "../reusableComponents/container";
import Image from "@frontity/components/image";
const LessonContent = () => {
  return (
    <LessonBackgroundContainer>
      <ContainerDiv>
        <ContainerDiv>
          <LessonContainer>
            <ParagraphLesson>{homeConstants.header}</ParagraphLesson>
            <HeadingLesson>{homeConstants.subheader}</HeadingLesson>
            <LessonContainerDiv>
              {homeConstants.lessonContainer.map(([icon, title, desc]) => (
                <DescriptionPanel key={title}>
                  <Image height="60" width="auto" src={icon} />
                  <h4>{title}</h4>
                  <p>{desc}</p>
                  <a>Read More</a>
                </DescriptionPanel>
              ))}
            </LessonContainerDiv>
          </LessonContainer>
        </ContainerDiv>
      </ContainerDiv>
    </LessonBackgroundContainer>
  );
};

export default LessonContent;

const LessonContainer = styled.div`
  margin-top: 15%;
  padding: 4em 0em 2em 0em;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ParagraphLesson = styled.p`
  text-transform: uppercase;
  text-align: center;
  font-size: 0.8em;
  font-weight: var(--font-weight-title);
  margin-block-end: 0em;
`;

const HeadingLesson = styled.h3`
  text-align: center;
  margin-block-start: 0em;
`;

const LessonBackgroundContainer = styled.div`
  width: 100%;
  background: var(--secondary-background-colour);
`;

const LessonContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 2em 0em;
  ${breakpoints.mobile} {
    display: grid;
    grid-template-columns: auto auto;
    grid-template-rows: auto auto;
    justify-items: center;
    align-items: center;
  }

  ${breakpoints.tablet} {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  }

  ${breakpoints.web} {
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
  }
`;

const DescriptionPanel = styled.div`
  padding: 1em 0em;
  width: 30%;
  text-align: center;
  p {
    font-weight: var(--font-weight-text);
  }
  h4 {
    margin-block-end: 0em;
  }
  ${breakpoints.smallMobile} {
    width: 30%;
  }
  ${breakpoints.mobile} {
    width: 60%;
  }
  ${breakpoints.tablet} {
    width: 13%;
  }
  ${breakpoints.web} {
    width: 60%;
  }
`;
