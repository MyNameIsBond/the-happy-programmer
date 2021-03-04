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

        <input
          type="text"
          id="fname"
          name="firstname"
          placeholder="Your name.."
        ></input>
        <button>Subscribe</button>
      </NavContainer>
    </>
  );
};

const Subcribe = styled.div``;

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
    padding: 0em 1em;
    line-height: 32.39px;
    text-align: center;
  }
`;

const HeaderDescription = styled.h1`
  padding-top: 1em;
`;

export default connect(Home);
