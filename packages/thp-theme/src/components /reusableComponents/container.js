import { connect, styled } from "frontity";

const MainContainer = styled.div`
  margin-right: auto;
  margin-left: auto;
  max-width: 90em;
  @media screen and (min-width: ${(props) => props.breakpoints.smallMobile}) {
    max-width: 31.25em;
  }
  @media screen and (min-width: ${(props) => props.breakpoints.mobile}) {
    max-width: 40.625em;
  }
  @media screen and (min-width: ${(props) => props.breakpoints.tablet}) {
    // max-width: 55.75em;
    max-width: 100%;
  }
  @media screen and (min-width: ${(props) => props.breakpoints.web}) {
    max-width: 90em;
  }
`;

const ContainerDiv = styled.div`
  margin-right: auto;
  margin-left: auto;
  max-width: 90em;
  p {
  }
`;

export { MainContainer, ContainerDiv };
