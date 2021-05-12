import { styled } from "frontity";

const MainContainer = styled.div`
  margin-right: auto;
  margin-left: auto;
  max-width: 65em;
  @media screen and (min-width: ${(props) => props.breakpoints.smallMobile}) {
    max-width: 31.25em;
  }
  @media screen and (min-width: ${(props) => props.breakpoints.mobile}) {
    max-width: 40.625em;
  }
  @media screen and (min-width: ${(props) => props.breakpoints.tablet}) {
    max-width: 65em;
  }
  @media screen and (min-width: ${(props) => props.breakpoints.web}) {
    max-width: 65em;
  }
`;

const ContainerDiv = styled.div`
  margin-right: auto;
  margin-left: auto;
  max-width: 65em;
  p {
  }
`;

export { MainContainer, ContainerDiv };
