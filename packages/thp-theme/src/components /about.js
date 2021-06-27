import { connect, styled } from "frontity";
import Image from "@frontity/components/image";
import ParagraphDisplay from "./reusableComponents/ParagraphDisplay";
import { MainContainer } from "./reusableComponents/container";
import { homeConstants, breakpoints } from "./constants/constants-string";
import Link from "@frontity/components/link";

const SocialsMap = () => (
  <>
    {homeConstants.AuthorInfo.socials.map(([icon, link]) => (
      <Link link={link} key={link}>
        <Image height="25px" src={icon} />
      </Link>
    ))}
  </>
);

const About = ({ state }) => {
  const data = state.source.get(state.router.link);
  return (
    <MainContainer>
      <AboutMeContainer>
        <ImageContainer>
          <Image
            src={
              "https://thehappyprogrammer.com/wp-content/uploads/2021/06/IMG_0487-1-1839829635-1624717729242.jpg"
            }
          />
        </ImageContainer>
        <InformationContainer>
          <ParagraphDisplay
            subtitle="Software Developer"
            title="My name is Tony"
            subtext="I have developed numerous of iOS and Android apps. I have participated in many open sourse 
          projects. An experienced developer in web development, 
          enterprise and mobile development. 
          Enthusiastic about programming and technology"
          >
            <Socials>
              <SocialsMap />
            </Socials>
          </ParagraphDisplay>
        </InformationContainer>
      </AboutMeContainer>
      <WhatIdoContainer>
        <WhatIdoDiv>
          <WhatIDoTitle></WhatIDoTitle>
          <WhatIDoDesc></WhatIDoDesc>
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
  img {
    padding: 1em 2em 0em 0em;
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
const WhatIDoTitle = styled.h3``;
const WhatIDoDesc = styled.p``;
const WhatIdoDiv = styled.div``;

export default connect(About);
