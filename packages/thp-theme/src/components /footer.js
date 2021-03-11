import React from "react";
import { homeConstants } from "./constants/constants-string";
import { connect, styled } from "frontity";
import Logo from "./constants/logo";
import { SubscribeButton } from "./reusableComponents/subscribe";
const Footer = () => (
  <FooterContainer>
    <LogoSocials>
      <Logo />
      <Socials>
        {homeConstants.AuthorInfo.socials.map(([icon, link]) => (
          <a key={link} href={link}>
            <img src={icon} />
          </a>
        ))}
      </Socials>
    </LogoSocials>
    <Credentials>
      <HighlightedText>{homeConstants.footer.contact}</HighlightedText>
      <p>{homeConstants.footer.country}</p>
      <a href={`mailto:${homeConstants.footer.email}`}>
        {homeConstants.footer.email}
      </a>
    </Credentials>
    <Subscribe>
      <HighlightedText>Subscribe</HighlightedText>
      <SubscribeText>{homeConstants.footer.subscribe}</SubscribeText>
      <SubscribeButton />
    </Subscribe>
  </FooterContainer>
);

const SubscribeText = styled.p`
  overflow-wrap: break-word;
  word-wrap: break-word;
`;
const Socials = styled.div`
  display: flex;
  flex-direction: row;
  text-align: center;
  img {
    filter: brightness(0) invert(1);
    height: 20px;
    width: auto;
  }
  a {
    margin: 2em 1em;
  }
`;
const Credentials = styled.div`
  padding: 4.5em 0em;
  text-align: center;
`;
const Subscribe = styled.div`
  text-align: center;
  p {
    overflow-wrap: break-word;
  }
`;

const FooterContainer = styled.div`
  width: auto;
  padding: 4.5em 2em;
  background-color: var(--footer-background);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  p {
    color: var(--footer-text);
  }
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

const HighlightedText = styled.p`
  font-weight: 500;
`;

const LogoSocials = styled.div``;

export { Footer };
