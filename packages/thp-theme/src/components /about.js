import { connect, styled } from "frontity";
import Image from "@frontity/components/image";
import ParagraphDisplay from "./reusableComponents/ParagraphDisplay";
import { MainContainer } from "./reusableComponents/container";
import {
  homeConstants,
  breakpoints,
  aboutConst,
  aboutExplain,
} from "./constants/constants-string";
const SocialsMap = () => (
  <>
    {homeConstants.AuthorInfo.socials.map(([icon, link, label]) => (
      <a rel="noreferrer" href={link} aria-label={label} key={link}>
        {icon}
      </a>
    ))}
  </>
);

const About = ({ state }) => {
  return (
    <MainContainer>
      <AboutMeContainer>
        <ImageContainer>
          <Image src={aboutConst.image} alt={aboutConst.alt} />
        </ImageContainer>
        <InformationContainer>
          <ParagraphDisplay
            subtitle={aboutConst.subtitle}
            title={aboutConst.title}
            subtext={aboutConst.text}
          >
            <Socials>
              <SocialsMap />
            </Socials>
          </ParagraphDisplay>
        </InformationContainer>
      </AboutMeContainer>
      <WhatIdoContainer>
        <WhatIdoDiv>
          <WhatIDoTitle>{aboutExplain.h2}</WhatIDoTitle>
          <WhatIDoDesc>
            {aboutExplain.explain.map(([title, subtitle, icon]) => (
              <div>
                {icon}
                <h3>{title}</h3>
                <p>{subtitle}</p>
              </div>
            ))}
          </WhatIDoDesc>
        </WhatIdoDiv>
      </WhatIdoContainer>
    </MainContainer>
  );
};
// About me Landing
const InformationContainer = styled.div`
  width: 100%;
  ${breakpoints.tablet} {
    width: 50%;
  }
`;
const AboutMeContainer = styled.div`
  padding: 1em 1em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${breakpoints.tablet} {
    flex-direction: row-reverse;
    justify-content: space-between;
  }
`;

const Socials = styled.div`
  margin-top: 1em;
  display: flex;
  width: 100%;
  justify-content: center;
  ${breakpoints.tablet} {
    justify-content: flex-start;
  }
  svg {
    fill: var(--text-colour);
    height: 1.2em;
  }
  svg:hover {
    fill: var(--decoration-colour);
  }
  a {
    margin: 1em 2em 0em 0em;
  }
`;
const ImageContainer = styled.div`
  margin: 5em 0em;
  height: 330px;
  width: 330px;
  border-radius: 100%;
  display: flex;
  background-color: var(--secondary-background-colour);
  justify-content: center;
  align-items: center;
  img {
    object-fit: cover;

    height: 300px;
    width: 300px;
    border-radius: 100%;
  }
`;
// What do I do
const WhatIdoContainer = styled.div``;
const WhatIDoTitle = styled.h2``;
const WhatIDoDesc = styled.div`
  padding: 3em 0em;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  ${breakpoints.tablet} {
    flex-direction: row;
    align-items: flex-start;
  }
  justify-content: space-between;
  div {
    padding-bottom: 3em;
    width: 40%;
    ${breakpoints.tablet} {
      width: 20%;
    }
  }
  svg {
    height: 2em;
    fill: var(--secondary-text-colour);
  }
  h3 {
    font-size: 1.5em;
    margin-block-end: 0em;
    margin-block-start: 1em;
  }
  p {
    margin-block-start: 0.7em;
  }
`;
const WhatIdoDiv = styled.div`
  padding: 1em;
  text-align: center;
  ${breakpoints.tablet} {
    text-align: left;
  }
`;

export default connect(About);
