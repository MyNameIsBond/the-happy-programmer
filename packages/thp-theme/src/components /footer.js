import { homeConstants, breakpoints } from "./constants/constants-string";
import Link from "@frontity/components/link";
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
            <HighlightedText>Socials</HighlightedText>
            <Socials>
              {homeConstants.AuthorInfo.socials.map(([icon, link]) => (
                <SocialContainer key={link}>
                  <a rel="noreferrer" href={link} target="_blank">
                    {icon}
                  </a>
                </SocialContainer>
              ))}
            </Socials>
          </LogoSocials>
          <Credentials>
            <HighlightedText>{homeConstants.footer.contact}</HighlightedText>
            <SubscribeText>{homeConstants.footer.country}</SubscribeText>
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
  width: 100%;
`;

const SubscribeText = styled.p`
  font-size: 0.8em;
  overflow-wrap: break-word;
  word-wrap: break-word;
  color: var(--secondary-text-colour);
  max-width: 320px;
  ${breakpoints.tablet} {
    max-width: 300px;
  }
`;

const Socials = styled.div`
  display: flex;
  flex-direction: row;
  text-align: center;
  ${breakpoints.tablet} {
    justify-content: flex-start;
  }
`;
const Credentials = styled.div`
  padding: 4.5em 0em;
  text-align: center;
  ${breakpoints.tablet} {
    padding: 0em;
    text-align: left;
  }
  a {
    font-size: 0.8em;
  }
`;
const Subscribe = styled.div`
  text-align: center;
  ${breakpoints.tablet} {
    text-align: left;
  }
`;

const FooterContainer = styled.div`
  width: auto;
  padding: 4em 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  ${breakpoints.tablet} {
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
  }
`;

const HighlightedText = styled.p`
  font-weight: var(--font-weight-title);
  font-size: 0.8em;
  color: var(--text-colour);
  text-align: center;

  ${breakpoints.mobile} {
    text-align: center;
  }
  ${breakpoints.tablet} {
    text-align: left;
  }
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
    align-items: flex-start;
    justify-content: flex-end;
  }
`;

const SocialContainer = styled.div`
  a {
    padding: 0em 1em 0em 0em;
  }
  svg {
    fill: var(--secondary-text-colour);
    height: 0.8em;
    width: auto;
  }
  svg:hover {
    fill: var(--text-colour);
  }
`;
