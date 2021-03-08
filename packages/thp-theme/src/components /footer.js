import React from "react";
import { homeConstants } from "./constants/constants-string";
import { connect, styled } from "frontity";
import Logo from "./constants/logo";
const Footer = () => (
  <FooterContainer>
    <Logo></Logo>
  </FooterContainer>
);

const FooterContainer = styled.div`
  width: 100%;
  padding: 2em;
  background-color: var(--footer-background);
  color: var(--footer-text);
`;

export { Footer };
