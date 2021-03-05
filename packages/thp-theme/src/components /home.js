import React from "react";
import { connect, styled } from "frontity";
import { default as svgHome } from "./constants/svgHome.svg";
const Home = ({ state }) => {
  return (
    <>
      <NavContainer>
        <img src={svgHome} />
        <HeaderDescription>Hello From the Other side</HeaderDescription>
        <p>
          This is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry’s standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book.
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
        <p>Everything about Mobile and Web</p>
        <h2>What you can learn here</h2>
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
    font-size: 20px;
    box-shadow: 0px 1px 4em lightgray;
    color: var(--text-colour);
  }
  input::placeholder {
    color: lightgray;
    opacity: 1; /* Firefox */
    font-weight: light;
  }
  button {
    padding: 1em 1em;
    border-radius: 0.3em;
    text-transform: uppercase;
    font-size: 20px;
    background: var(--accent-colour);
    color: #f8f8f8;
    border-style: none;
    margin-left: 0.3em;
    -webkit-transition-duration: 0.4s;
    transition-duration: 0.4s;
  }
  button:hover {
    cursor: pointer;
    box-shadow: 0px 1px 4em lightgray;
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
    line-height: 32.39px;
    text-align: center;
    font-weight: 400;
  }
`;

const HeaderDescription = styled.h1`
  padding-top: 1em;
`;

// ------------------Landing Page------------------

const LessonContainer = styled.div`
  margin-top: 30%;
  display: block;
  background: var(--secondary-background-colour);
  > p {
    text-transform: uppercase;
  }
`;

const DescriptionPanel = styled.div``;

export default connect(Home);
