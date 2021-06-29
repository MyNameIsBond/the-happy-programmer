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
import Link from "@frontity/components/link";
const SocialsMap = () => (
  <>
    {homeConstants.AuthorInfo.socials.map(([icon, link]) => (
      <Link link={link} key={link}>
        {icon}
      </Link>
    ))}
  </>
);

const About = ({ state }) => {
  return (
    <MainContainer>
      <AboutMeContainer>
        <ImageContainer>
          <Image src={aboutConst.image} />
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
                <h4>{title}</h4>
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
  padding-top: 1em;
  display: flex;
  width: 100%;
  justify-content: center;
  ${breakpoints.tablet} {
    justify-content: flex-start;
  }
  svg {
    padding: 1em 2em 0em 0em;
    fill: var(--secondary-colour);
    height: 1.5em;
  }
`;
const ImageContainer = styled.div`
  margin: 5em 0em;
  height: 330px;
  width: 330px;
  border-radius: 100%;
  display: flex;
  background: linear-gradient(
    to right,
    var(--accent-colour),
    var(--secondary-colour)
  );
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
    fill: var(--primary-colour);
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
