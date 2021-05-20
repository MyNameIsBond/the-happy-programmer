import { connect, styled } from "frontity";
import Image from "@frontity/components/image";

const About = ({ state }) => {
  const data = state.source.get(state.router.link);

  console.log("DATA:", data);
  return (
    <>
      <AboutMeContainer>
        <div>
          <Subtitle></Subtitle>
          <Title></Title>
          <Subtext></Subtext>
          <Socials></Socials>
        </div>
        <div>
          <Image></Image>
        </div>
      </AboutMeContainer>
      <WhatIdoContainer>
        <WhatIdoDiv>
          {/* <Image></Image> */}
          <WhatIDoTitle></WhatIDoTitle>
          <WhatIDoDesc></WhatIDoDesc>
        </WhatIdoDiv>
      </WhatIdoContainer>
    </>
  );
};
// About me Landing
const AboutMeContainer = styled.div``;
const Subtitle = styled.h6``;
const Title = styled.h1``;
const Subtext = styled.p``;
const Socials = styled.div``;

// What do I do
const WhatIdoContainer = styled.div``;
const WhatIDoTitle = styled.h3``;
const WhatIDoDesc = styled.p``;
const WhatIdoDiv = styled.div``;

export default connect(About);
