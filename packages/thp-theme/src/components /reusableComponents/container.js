import { styled } from "frontity";
import { breakpoints } from "../constants/constants-string";
const MainContainer = styled.div`
  margin-right: auto;
  margin-left: auto;
  max-width: 65em;
  ${breakpoints.smallMobile} {
    max-width: 31.25em;
  }
  ${breakpoints.mobile} {
    max-width: 40.625em;
  }
  ${breakpoints.tablet} {
    max-width: 65em;
  }
  ${breakpoints.web} {
    max-width: 65em;
  }
`;

const ContainerDiv = styled.div`
  margin-right: auto;
  margin-left: auto;
  max-width: 65em;
`;

export { MainContainer, ContainerDiv };
