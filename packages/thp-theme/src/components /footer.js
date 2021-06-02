import { homeConstants } from "./constants/constants-string";
import Link from "@frontity/components/link";
import Image from "@frontity/components/image";
import { connect, styled } from "frontity";
import Logo from "./constants/logo";
import SubscribeButton from "./reusableComponents/subscribe";
import { ContainerDiv } from "./reusableComponents/container";

const Footer = ({ state }) => {
  const breakpoints = state.theme.breakpoints;
  return (
    <FooterContainerDiv>
      <ContainerDiv>
        <FooterContainer breakpoints={breakpoints}>
          <LogoSocials breakpoints={breakpoints}>
            <Link link={"/"}>
              <Logo />
            </Link>
            <Socials>
              {homeConstants.AuthorInfo.socials.map(([icon, link]) => (
                <a rel="noreferrer" key={link} href={link} target="_blank">
                  <Image src={icon} />
                </a>
              ))}
            </Socials>
          </LogoSocials>
          <Credentials breakpoints={breakpoints}>
            <HighlightedText>{homeConstants.footer.contact}</HighlightedText>
            <p>{homeConstants.footer.country}</p>
            <a href={`mailto:${homeConstants.footer.email}`}>
              {homeConstants.footer.email}
            </a>
          </Credentials>
          <Subscribe breakpoints={breakpoints}>
            <HighlightedText>Subscribe</HighlightedText>
            <SubscribeText breakpoints={breakpoints}>
              {homeConstants.footer.subscribe}
            </SubscribeText>
            <SubscribeButton />
          </Subscribe>
        </FooterContainer>
      </ContainerDiv>
    </FooterContainerDiv>
  );
};

const FooterContainerDiv = styled.div`
  background-color: var(--footer-background);
  width: 100%;
`;

const SubscribeText = styled.p`
  overflow-wrap: break-word;
  word-wrap: break-word;
  max-width: 320px;

  @media screen and (min-width: ${(props) => props.breakpoints.tablet}) {
    max-width: 300px;
  }
`;

const Socials = styled.div`
  display: flex;
  flex-direction: row;
  text-align: center;
  img {
    filter: var(--footer-social);
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
  @media screen and (min-width: ${(props) => props.breakpoints.tablet}) {
    padding: 0em;
    text-align: left;
  }
`;
const Subscribe = styled.div`
  text-align: center;
  p {
    overflow-wrap: break-word;
  }

  @media screen and (min-width: ${(props) => props.breakpoints.tablet}) {
    text-align: left;
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
  @media screen and (min-width: ${(props) => props.breakpoints.tablet}) {
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
  @media screen and (min-width: ${(props) => props.breakpoints.tablet}) {
    padding-top: 1em;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-end;
  }
`;

export default connect(Footer);
