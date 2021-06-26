import { homeConstants, breakpoints } from "./constants/constants-string";
import Link from "@frontity/components/link";
import Image from "@frontity/components/image";
import { styled } from "frontity";
import Logo from "./constants/logo";
import { SubscribeButton } from "./reusableComponents/subscribe";
import { ContainerDiv } from "./reusableComponents/container";

const Footer = () => {
  return (
    <FooterContainerDiv>
      <ContainerDiv>
        <FooterContainer>
          <LogoSocials>
            <Link link={"/"}>
              <Logo />
            </Link>
            <Socials>
              {homeConstants.AuthorInfo.socials.map(([icon, link]) => (
                <SocialContainer key={link}>
                  <a rel="noreferrer" href={link} target="_blank">
                    <Image height="20" width="auto" src={icon} />
                  </a>
                </SocialContainer>
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
      </ContainerDiv>
    </FooterContainerDiv>
  );
};

export default Footer;

const FooterContainerDiv = styled.div`
  background-color: var(--footer-background);
  width: 100%;
`;

const SubscribeText = styled.p`
  overflow-wrap: break-word;
  word-wrap: break-word;
  max-width: 320px;

  ${breakpoints.tablet} {
    max-width: 300px;
  }
`;

const Socials = styled.div`
  padding-top: 1.5em;
  display: flex;
  flex-direction: row;
  text-align: center;
  ${breakpoints.tablet} {
    justify-content: start;
  }
  img {
    filter: var(--footer-social);
  }
  a {
    margin: 2em 1em;
  }
`;
const Credentials = styled.div`
  padding: 4.5em 0em;
  text-align: center;
  ${breakpoints.tablet} {
    padding: 0em;
    text-align: left;
  }
`;
const Subscribe = styled.div`
  text-align: center;
  p {
    overflow-wrap: break-word;
  }

  ${breakpoints.tablet} {
    text-align: left;
  }
`;

const FooterContainer = styled.div`
  width: auto;
  padding: 4.5em 0em;
  background-color: var(--footer-background);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  ${breakpoints.tablet} {
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
  }
  p {
    color: var(--footer-text);
  }
  svg {
    fill: var(--footer-logo-Colour);
    circle:nth-of-type(2) {
      stroke: var(--footer-logo-Colour);
    }
  }
  text {
    font-family: var(--font-titles);
    fill: var(--footer-logo-Colour);
  }
`;

const HighlightedText = styled.p`
  font-weight: var(--font-weight-title);
`;

const LogoSocials = styled.div`
  a:hover {
    text-decoration: none;
  }
  display: flex;
  flex-direction: column;
  ${breakpoints.tablet} {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-end;
  }
`;

const SocialContainer = styled.div`
  height: 30px;
  width: 3.4em;
`;
