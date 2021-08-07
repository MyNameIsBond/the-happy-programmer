import { styled } from "frontity";
import { Primary, DecorationLink } from "./reusable-components/buttons";
import { MyInput } from "./reusable-components/inputs";
import Link from "@frontity/components/link";
import Image from "@frontity/components/image";
import breakpoints from "./constants/constants-string";
import homeConstants from "./constants/home-const";

import MainContainer from "./reusable-components/container";
import Socials from "./constants/socials";
import LessonContent from "./Home/lesson-content";
import CoursesContent from "./Home/courses-content";

export default () => {
  return (
    <>
      <MainContainer>
        <NavContainer>
          {homeConstants.homeSvg}
          <LandingCredentials>
            <HeaderDescription>{homeConstants.mainHeader}</HeaderDescription>
            <p>
              Programming blog focused on{" "}
              <Link link={"/category/swiftui/"}>SwiftUI</Link>, Flutter and
              React Native. You can also find courses in mobile development.
              Clones of famous websites and Apps. Subscribe to get notified for
              new content.
            </p>
            <Subcribe>
              <MyInput placeholder={"example@email.com"} />
              <Primary>Subscribe</Primary>
            </Subcribe>
          </LandingCredentials>
        </NavContainer>
      </MainContainer>
      <LessonContent />
      <GridCourses>
        <CoursesContent />
      </GridCourses>
      <AuthorContainer>
        <AuthorAvatar>
          <Image src={homeConstants.userImage} alt={homeConstants.alt} />
        </AuthorAvatar>
        <h2>{homeConstants.AuthorInfo.title}</h2>
        <p>{homeConstants.AuthorInfo.description}</p>
        <SocialContainer>
          <Socials />
        </SocialContainer>
        <DecorationLink link={homeConstants.AuthorInfo.link}>
          About Me
        </DecorationLink>
      </AuthorContainer>
    </>
  );
};
// ------------------Landing Page------------------

const LandingCredentials = styled.div`
  ${breakpoints.tablet} {
    p {
      max-width: 410px;
    }
  }
`;

const Subcribe = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  align-content: center;
  width: 90%;
  padding: 1.5em 1em 0em 1em;
  ${breakpoints.tablet} {
    align-items: flex-start;
    justify-content: flex-start;
    align-content: flex-start;
    text-align: left;
    padding-left: 0;
  }
  input {
    margin-left: 0;
  }
`;

const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 4em;
  margin: auto;
  svg {
    width: 50%;
    height: auto;
  }

  p {
    margin-block-start: 0em;
    padding: 0em 1em;
    text-align: center;
  }

  ${breakpoints.tablet} {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: space-between;
    align-self: center;
    padding: 4em 2em 0em 1em;

    img {
      width: 40%;
      height: auto;
    }

    p {
      text-align: left;
      font-weight: var(--font-weight-text);
      padding: 0;
    }

    h1 {
      text-align: left;
      padding-top: 0;
    }

    ${breakpoints.web} {
      overflow-x: initial;
      img {
        width: 40%;
      }
    }

    ${breakpoints.bigWeb} {
      img {
        position: relative;
        width: 40%;
        right: -6em;
      }
    }
  }
`;

const HeaderDescription = styled.h1`
  padding-top: 1em;
  text-align: center;
`;

// ------------------Courses Container------------------

const GridCourses = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  grid-gap: 1em;
  margin: 1em;

  ${breakpoints.mobile} {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
  }
`;

// ------------------Author Container------------------

const AuthorAvatar = styled.div`
  img {
    border-radius: 100%;
    height: 200px;
    width: 200px;
    position: relative;
    object-fit: cover;
  }
`;

const AuthorContainer = styled.div`
  display: flex;
  padding: 2em 2em;
  flex-direction: column;
  align-items: center;

  background: var(--secondary-background-colour);
  p {
    text-align: center;
    font-weight: var(--font-weight-text);
    max-width: 650px;
  }
  h2 {
    text-align: center;
    margin-block-start: 1.5em;
    margin-block-end: 0.5em;
  }
  button {
    margin: 2em 0em;
  }
`;

const SocialContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: baseline;
  svg {
    height: 1.2em;
    fill: var(--secondary-text-colour);
  }
  svg:hover {
    fill: var(--decoration-colour);
  }
  a {
    margin: 3em 2em;
    ${breakpoints.smallMobile} {
      margin: 3em 1em;
    }
  }
`;
