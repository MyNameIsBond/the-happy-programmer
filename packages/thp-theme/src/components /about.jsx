import { connect, styled } from "frontity";
import Image from "@frontity/components/image";
import ParagraphDisplay from "./reusable-components/paragraph-display";
import MainContainer from "./reusable-components/main-container";
import breakpoints from "./constants/constants-string";
import aboutExplain from "./constants/about-explain";
import aboutConst from "./constants/about-const";
import Socials from "./constants/socials";

const About = () => {
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
            <SocialsCon>
              <Socials />
            </SocialsCon>
          </ParagraphDisplay>
        </InformationContainer>
      </AboutMeContainer>
      <WhatIdoContainer>
        <WhatIdoDiv>
          <WhatIDoTitle>{aboutExplain.h2}</WhatIDoTitle>
          <WhatIDoDesc>
            {aboutExplain.explain.map(([title, subtitle, icon]) => (
              <div key={title}>
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

export default connect(About);

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

const SocialsCon = styled.div`
  margin-top: 1em;
  display: flex;
  width: 100%;
  justify-content: center;
  ${breakpoints.tablet} {
    justify-content: flex-start;
  }
  svg {
    fill: var(--secondary-text-colour);
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
const WhatIdoContainer = styled.div``;
const WhatIDoTitle = styled.h2``;
const WhatIDoDesc = styled.div`
  padding: 1em 0em;
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
