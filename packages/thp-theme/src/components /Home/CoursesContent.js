import { homeConstants, breakpoints } from "../constants/constants-string";
import { styled } from "frontity";
import { Secondary, DecorationLink } from "../reusableComponents/buttons";

const CoursesContent = () => {
  return (
    <>
      {homeConstants.coursesContainer.map(
        ([icon, title, desc, link, width, disabled, name]) => (
          <CoursesContainer key={title}>
            <CourseDiv>
              <h2>{title}</h2>
              <p>{desc}</p>
              {disabled ? (
                <Secondary disabled={true}>Coming Soon...</Secondary>
              ) : (
                <DecorationLink link={link}>{name}</DecorationLink>
              )}

              {icon}
            </CourseDiv>
          </CoursesContainer>
        )
      )}
    </>
  );
};

export default CoursesContent;

const CoursesContainer = styled.div`
  width: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: var(--secondary-background-colour);
  svg {
    max-height: 20em;
    width: auto;
    padding-top: 4em;
  }
  p,
  h2 {
    text-align: center;
    text-overflow: ellipsis;
    word-break: break-word;
    overflow: hidden;
    word-wrap: break-word;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }
`;

const CourseDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  margin: auto;
  padding: 3em;
  h2,
  p {
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
    h2 {
      margin-block-start: 0em;
    }
  }
`;
