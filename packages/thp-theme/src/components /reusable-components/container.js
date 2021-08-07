import { styled } from "frontity";
import breakpoints from "../constants/constants-string";

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

const ContainerDiv = styled.div`
  margin-right: auto;
  margin-left: auto;
  max-width: 80em;
`;
export { MainContainer, ContainerDiv };
