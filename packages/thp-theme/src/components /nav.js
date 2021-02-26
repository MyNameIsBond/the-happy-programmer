import React from "react";
import { connect, styled } from "frontity";
import Link from "@frontity/components/link";
import Logo from "./constants/logo";

const Nav = ({ state, actions }) => {
  return (
    <>
      <NavContainer>
        <LogoContainer
          onClick={(e) => {
            actions.router.set("/");
          }}
        >
          <Logo />
        </LogoContainer>
        <MenuStyle>
          {state.theme.menu.map(([name, link]) => {
            return (
              <Link key={name} link={link}>
                {name}
              </Link>
            );
          })}
        </MenuStyle>
      </NavContainer>
    </>
  );
};

export default connect(Nav);

const MenuStyle = styled.div`
  a {
    padding: 0em 1.5em;
    font-size: 14px;
  }
`;

const NavContainer = styled.nav`
  padding: 2em 1em 1em 2em;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LogoContainer = styled.css`
  fill: var(--text-colour);
  circle:nth-child(2) {
    stroke: var(--text-colour);
  }

  svg:hover {
    fill: var(--accent-colour);
    text-decoration: none !important;
    font-family: SF Pro Text;
    cursor: pointer;
  }
`;
