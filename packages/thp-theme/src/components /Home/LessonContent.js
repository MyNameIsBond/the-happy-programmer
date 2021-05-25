import { connect, styled } from "frontity";
import { homeConstants } from "../constants/constants-string";
import { ContainerDiv } from "../reusableComponents/container";
import Image from "@frontity/components/image";
const LessonContent = ({ state }) => {
  const breakpoints = state.theme.breakpoints;

  return (
    <LessonBackgroundContainer>
      <ContainerDiv>
        <ContainerDiv>
          <LessonContainer breakpoints={breakpoints}>
            <ParagraphLesson>{homeConstants.header}</ParagraphLesson>
            <HeadingLesson>{homeConstants.subheader}</HeadingLesson>
            <LessonContainerDiv breakpoints={breakpoints}>
              {homeConstants.lessonContainer.map(([icon, title, desc]) => (
                <DescriptionPanel breakpoints={breakpoints} key={title}>
                  <Image src={icon} />
                  <h4>{title}</h4>
                  <p>{desc}</p>
                </DescriptionPanel>
              ))}
            </LessonContainerDiv>
          </LessonContainer>
        </ContainerDiv>
      </ContainerDiv>
    </LessonBackgroundContainer>
  );
};

export default connect(LessonContent);

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
  font-weight: 500;
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
  @media screen and (min-width: ${(props) => props.breakpoints.mobile}) {
    display: grid;
    grid-template-columns: auto auto;
    grid-template-rows: auto auto;
    justify-items: center;
    align-items: center;
  }

  @media screen and (min-width: ${(props) => props.breakpoints.tablet}) {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  }

  @media screen and (min-width: ${(props) => props.breakpoints.web}) {
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
    font-weight: 400;
  }
  h4 {
    margin-block-end: 0em;
  }
  @media screen and (min-width: ${(props) => props.breakpoints.smallMobile}) {
    width: 30%;
  }
  @media screen and (min-width: ${(props) => props.breakpoints.mobile}) {
    width: 60%;
  }
  @media screen and (min-width: ${(props) => props.breakpoints.tablet}) {
    width: 13%;
  }
  @media screen and (min-width: ${(props) => props.breakpoints.web}) {
    width: 60%;
  }
`;
