import React from "react";
import { homeConstants } from "./constants/constants-string";
import { connect, styled } from "frontity";
import Logo from "./constants/logo";
import { Primary } from "./reusableComponents/buttons";
const Footer = () => (
  <FooterContainer>
    <Socials>
      <Logo />
      {homeConstants.AuthorInfo.socials.map(([icon, link]) => (
        <img src={icon} to={link} />
      ))}
    </Socials>
    <Credentials>
      <p>{homeConstants.footer.contact}</p>
      <p>{homeConstants.footer.country}</p>
      <a href={`mailto:${homeConstants.footer.email}`}>
        {homeConstants.footer.email}
      </a>
    </Credentials>
    <Subscribe>
      <p>Subscribe</p>
      <SubscribeText>{homeConstants.footer.subscribe}</SubscribeText>
    </Subscribe>
  </FooterContainer>
);

const SubscribeText = styled.p`
  overflow-wrap: break-word;
  word-wrap: break-word;
`;
const Socials = styled.div`
  text-align: center;
`;
const Credentials = styled.div`
  text-align: center;
`;
const Subscribe = styled.div`
  text-align: center;
  p {
    overflow-wrap: break-word;
  }
`;

const FooterContainer = styled.div`
  width: 100%;
  padding: 2em;
  background-color: var(--footer-background);
  color: var(--footer-text);
  display: flex;
  flex-direction: column;
  align-items: center;

  svg {
    fill: var(--footer-logo-Colour);
    circle:nth-child(2) {
      stroke: var(--footer-logo-Colour);
    }
  }

  svg:hover {
    fill: var(--accent-colour);
    text-decoration: none !important;
    font-family: SF Pro Text;
    cursor: pointer;
  }
`;

export { Footer };
