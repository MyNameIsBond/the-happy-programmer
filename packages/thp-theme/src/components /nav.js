import React from "react";
import { connect, styled } from "frontity";
import Link from "@frontity/components/link";
import Logo from "./constants/logo";

const Nav = ({ state }) => {
  return (
    <>
      <NavContainer>
        <Logo />

        <Link link={"/"}>
          <Logo />
        </Link>
        {state.theme.menu.map(([name, link]) => {
          return (
            <Link key={name} link={link}>
              {name}
            </Link>
          );
        })}
      </NavContainer>
    </>
  );
};

export default connect(Nav);

const NavContainer = styled.nav`
  padding: 1em;
  height: 60px;
`;

const LogoContainer = styled.css`
  svg:hover {
    fill: var(--accent-colour);
    text-decoration: none !important;
  }
  p {
    text-decoration: none !important;
  }
`;
