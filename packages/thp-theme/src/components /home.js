import React from "react";
import { connect, Head, styled } from "frontity";
import { Primary, Secondary } from "./reusableComponents/buttons";
import Link from "@frontity/components/link";
import Image from "@frontity/components/image";
import { homeConstants } from "./constants/constants-string";
import { MainContainer } from "./reusableComponents/container";
import LessonContent from "./Home/LessonContent";
import CoursesContent from "./Home/CoursesContent";
import { MyInput } from "./reusableComponents/inputs";

const Home = ({ state }) => {
  const breakpoints = state.theme.breakpoints;
  return (
    <>
      <MainContainer breakpoints={breakpoints}>
        <NavContainer breakpoints={breakpoints}>
          <Image loading="lazy" src={homeConstants.homeSvg} />
          <LandingCredentials breakpoints={breakpoints}>
            <HeaderDescription>{homeConstants.mainHeader}</HeaderDescription>
            <p>
              Programming blog focused on{" "}
              <Link link={"/category/swiftui/"}>SwiftUI</Link>, Flutter and
              React Native. You can also find courses in mobile development.
              Clones of famous websites and Apps. Subscribe to get notified for
              new content.
            </p>
            <Subcribe breakpoints={breakpoints}>
              <MyInput placeholder={"example@email.com"} />
              <Primary>Subscribe</Primary>
            </Subcribe>
          </LandingCredentials>
        </NavContainer>
      </MainContainer>
      <LessonContent />
      <CoursesContent />
      <AuthorContainer>
        <AuthorAvatar>
          <Image loading="lazy" src={homeConstants.userImage} />
        </AuthorAvatar>
        <h2>{homeConstants.AuthorInfo.title}</h2>
        <p>{homeConstants.AuthorInfo.description}</p>
        <SocialContainer breakpoints={breakpoints}>
          {homeConstants.AuthorInfo.socials.map(([icon, link]) => (
            <a href={link} key={link} target="_blank">
              <Image loading="lazy" src={icon} />
            </a>
          ))}
        </SocialContainer>
        <Secondary>Read More</Secondary>
      </AuthorContainer>
    </>
  );
};

// ------------------Landing Page------------------

const LandingCredentials = styled.div`
  @media screen and (min-width: ${(props) => props.breakpoints.tablet}) {
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
  button {
    padding: 1rem 1rem;
  }

  @media screen and (min-width: ${(props) => props.breakpoints.tablet}) {
    align-items: flex-start;
    justify-content: flex-start;
    align-content: flex-start;
    text-aligh: left;
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
  img {
    width: 80%;
    height: auto;
  }
  p {
    margin-block-start: 0em;
    padding: 0em 1em;
    text-align: center;
    font-weight: 300;
  }

  @media screen and (min-width: ${(props) => props.breakpoints.tablet}) {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: space-between;
    align-self: center;
    padding: 4em 2em 0em 1em;

    img {
      width: 50%;
      height: auto;
    }

    p {
      text-align: left;
      font-weight: 300;
      padding: 0;
    }

    h1 {
      text-align: left;
      padding-top: 0;
    }

    @media screen and (min-width: ${(props) => props.breakpoints.web}) {
      overflow-x: initial;
      img {
        width: 50%;
      }
    }

    @media screen and (min-width: ${(props) => props.breakpoints.bigWeb}) {
      img {
        position: relative;
        width: 50%;
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

// ------------------Author Container------------------

const AuthorAvatar = styled.div`
  height: 200px;
  width: 200px;
  border-radius: 100%;
  overflow: hidden;

  img {
    position: relative;
    object-fit: cover;
    left: -35px;
    width: auto;
    height: 100%;
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
    font-weight: 300;
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
  a {
    margin: 3em 2em;
    @media screen and (max-width: ${(props) => props.breakpoints.smallMobile}) {
      margin: 3em 1em;
    }
  }
`;

export default connect(Home);
