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
              <Secondary disabled={disabled}>Read More</Secondary>
            </ButtonContainer>
          </CourseDiv>
        )
      )}
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
    font-weight: light;
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
  padding: 3em 0em;
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
    margin-block-start: 1em;
  }
  p {
    font-weight: 300;
  }
`;

export default connect(Home);
