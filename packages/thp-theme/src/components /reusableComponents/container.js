import React from "react";
import { connect, styled } from "frontity";

const MainContainer = styled.div`
  margin-right: auto;
  margin-left: auto;
  max-width: 90em;
  @media screen and (min-width: ${(props) => props.breakpoints.smallMobile}) {
    max-width: 500px;
  }
  @media screen and (min-width: ${(props) => props.breakpoints.mobile}) {
    max-width: 650px;
  }
  @media screen and (min-width: ${(props) => props.breakpoints.tablet}) {
  }
  @media screen and (min-width: ${(props) => props.breakpoints.web}) {
    background-color: green;
  }
`;

let NavContainer = styled.div`
  margin-right: auto;
  margin-left: auto;
  max-width: 90em;
  background: var(--background-colour);
`;

export default connect(MainContainer);
