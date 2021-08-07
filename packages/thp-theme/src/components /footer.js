import breakpoints from "./constants/constants-string";
import { styled } from "frontity";
import { SubscribeButton } from "./reusable-components/subscribe";
import ContainerDiv from "./reusable-components/container";
import Socials from "./constants/socials";
import footerconst from "./constants/footer-const";
const Footer = () => {
  return (
    <FooterContainerDiv>
      <ContainerDiv>
        <FooterContainer>
          <LogoSocials>
            <HighlightedText>Socials</HighlightedText>
            <SocialDiv>
              <SocialContainer>
                <Socials />
              </SocialContainer>
            </SocialDiv>
          </LogoSocials>
          <Credentials>
            <HighlightedText>{footerconst.contact}</HighlightedText>
            <SubscribeText>{footerconst.country}</SubscribeText>
            <a rel="noreferrer" href={`mailto:${footerconst.email}`}>
              {footerconst.email}
            </a>
          </Credentials>
          <Subscribe>
            <HighlightedText>Subscribe</HighlightedText>
            <SubscribeText>{footerconst.subscribe}</SubscribeText>
            <SubscribeButton />
          </Subscribe>
        </FooterContainer>
      </ContainerDiv>
    </FooterContainerDiv>
  );
};

export default Footer;

const FooterContainerDiv = styled.div`
  border-top: 1px solid var(--light-border);
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

const SocialDiv = styled.div`
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
    margin: 0em 1em 0em 0em;
  }
  svg {
    fill: var(--decoration-neutral-colour);
    height: 0.8em;
    width: auto;
  }
  svg:hover {
    fill: var(--text-colour);
  }
`;
