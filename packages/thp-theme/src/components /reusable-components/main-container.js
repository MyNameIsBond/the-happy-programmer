import breakpoints from "../constants/constants-string";
import { styled } from "frontity";

const MainContainer = styled.div`
  margin-right: auto;
  margin-left: auto;
  max-width: 80em;
  ${breakpoints.smallMobile} {
    max-width: 31.25em;
  }
  ${breakpoints.mobile} {
    max-width: 40.625em;
  }
  ${breakpoints.tablet} {
    max-width: 80em;
  }
  ${breakpoints.web} {
    max-width: 80em;
  }
`;

export default MainContainer;
