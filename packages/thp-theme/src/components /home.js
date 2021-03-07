import React from "react";
import { connect, styled } from "frontity";
import { Primary, Secondary } from "./reusableComponents/buttons";
import Link from "@frontity/components/link";
import { homeConstants } from "./constants/constants-string";
const Home = ({ state }) => {
  return (
    <>
      <NavContainer>
        <img src={homeConstants.homeSvg} />
        <HeaderDescription>{homeConstants.mainHeader}</HeaderDescription>
        <p>
          Programming blog focused on{" "}
          <Link link={"/category/swiftui/"}>SwiftUI</Link>, Flutter and React
          Native. You can also find courses in mobile development. Clones of
          famous websites and Apps. Subscribe to get notified for new content.
        </p>
        <Subcribe>
          <input
            type="text"
            id="email"
            placeholder="example@email.com"
            name="email"
          ></input>
          <Primary>Subscribe</Primary>
        </Subcribe>
      </NavContainer>
      <LessonContainer>
        <p>{homeConstants.header}</p>
        <h3>{homeConstants.subheader}</h3>
        {homeConstants.lessonContainer.map(([icon, title, desc]) => (
          <DescriptionPanel key={title}>
            <img src={icon} />
            <h4>{title}</h4>
            <p>{desc}</p>
          </DescriptionPanel>
        ))}
      </LessonContainer>
      {homeConstants.coursesContainer.map(
        ([icon, title, desc, link, width, disabled]) => (
          <CourseDiv key={title}>
            <img src={icon} width={width} />
            <h2>{title}</h2>
            <p>{desc}</p>
            <ButtonContainer>
              <Primary>Subcribe</Primary>
              <Secondary disabled={disabled}>
                {disabled ? "Coming Soon..." : "Read More"}
              </Secondary>
            </ButtonContainer>
          </CourseDiv>
        )
      )}
      <AuthorContainer>
        <AuthorAvatar>
          <img src={homeConstants.userImage} />
        </AuthorAvatar>
        <h2>{homeConstants.AuthorInfo.title}</h2>
        <p>{homeConstants.AuthorInfo.description}</p>
        <SocialContainer>
          {homeConstants.AuthorInfo.socials.map(([icon, link]) => (
            <a href={link} key={link} target="_blank">
              <img src={icon} />
            </a>
          ))}
        </SocialContainer>
        <Secondary>Read More</Secondary>
      </AuthorContainer>
    </>
  );
};

// ------------------Landing Page------------------

const Subcribe = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  align-content: cetner;
  width: 100%;
  padding: 1.5em 1em 0em 1em;
  button {
    padding: 1rem 1rem;
  }
  input {
    width: 40%;
    padding: 1em 1em;
    border-radius: 0.3em;
    margin: 0em 0.5em;
    border-style: none;
    font-size: 1rem;
    box-shadow: var(--hover-shadow);
    color: var(--text-colour);
  }
  input::placeholder {
    color: lightgray;
    opacity: 1; /* Firefox */
    font-family: "Roboto", sans-serif;
    font-weight: 300;
  }
`;

const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 4em;
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
`;

const HeaderDescription = styled.h1`
  padding-top: 1em;
  text-align: center;
`;

// ------------------Landing Page------------------

const LessonContainer = styled.div`
  width: 100%;
  margin-top: 30%;
  background: var(--secondary-background-colour);
  padding: 4em 0em 2em 0em;
  display: flex;
  flex-direction: column;
  align-items: center;
  > p {
    text-transform: uppercase;
    text-align: center;
    font-size: 0.8em;
    font-weight: 500;
    margin-block-end: 0em;
  }
  > h3 {
    text-align: center;
    margin-block-start: 0em;
  }
`;

const DescriptionPanel = styled.div`
  padding: 1em 0em;
  width: 30%;
  text-align: center;
  p {
    font-weight: 300;
  }
  h4 {
    margin-block-end: 0em;
  }
`;

// ------------------Courses Container------------------

const ButtonContainer = styled.div`
  justify-content: center;
  padding: 3em 0em 6em 0em;
  width: 100%;
  display: flex;
  button {
    margin: 0em 1em;
  }
`;

const CourseDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 3em 3em 4em 3em;
  h2,
  p {
    text-align: center;
  }
  h2 {
    margin-block-end: 0em;
    margin-block-start: 1.5em;
  }
  p {
    font-weight: 300;
  }
`;

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

  a {
    padding: 3em 2em;
  }
`;

export default connect(Home);
