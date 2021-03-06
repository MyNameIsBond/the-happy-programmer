import React from "react";
import { connect, styled } from "frontity";

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
          Native. You can also find courses in mobile development.
        </p>
        <Subcribe>
          <input
            type="text"
            id="email"
            placeholder="example@email.com"
            name="email"
          ></input>
          <button>Subscribe</button>
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
  button {
    padding: 1em 1em;
    border-radius: 0.3em;
    text-transform: uppercase;
    font-size: 1rem;
    background: var(--accent-colour);
    color: #f8f8f8;
    border-style: none;
    margin-left: 0.3em;
    -webkit-transition-duration: 0.4s;
    transition-duration: 0.4s;
  }
  button:hover {
    cursor: pointer;
    box-shadow: var(--hover-shadow);
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

export default connect(Home);
