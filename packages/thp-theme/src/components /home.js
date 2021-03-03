import React from "react";
import { connect, styled } from "frontity";
import { default as svgHome } from "./constants/svgHome.svg";
const Home = ({ state }) => {
  return (
    <>
      <NavContainer>
        <img src={svgHome} />
        <HeaderDescription>Hello From the Other side</HeaderDescription>
        <p></p>
      </NavContainer>
    </>
  );
};

const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 4em;
  img {
    width: 80%;
    height: auto;
  }
`;

const HeaderDescription = styled.h1`
  padding-top: 1em;
`;

export default connect(Home);
