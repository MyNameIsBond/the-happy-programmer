import { styled } from "frontity";
import { breakpoints } from "../constants/constants-string";

const ParagraphDisplay = ({ subtitle, title, subtext, children }) => (
  <ParagraphContainer>
    <Subtitle>{subtitle}</Subtitle>
    <Title>{title}</Title>
    <Subtext>{subtext}</Subtext>
    {children}
  </ParagraphContainer>
);

const ParagraphContainer = styled.div`
  width: 100%;
`;
const Subtitle = styled.h5`
  text-align: center;
  margin: 0.1em 0em;
  color: var(--accent-colour);
  font-weight: var(--font-weight-text);
  ${breakpoints.tablet} {
    text-align: left;
  }
`;
const Title = styled.h1`
  margin-top: 0;
  text-align: center;

  ${breakpoints.tablet} {
    text-align: left;
  }
`;

const Subtext = styled.p`
  text-align: center;
  ${breakpoints.tablet} {
    text-align: left;
  }
`;

export default ParagraphDisplay;
