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
            const isCurrentPage = state.router.link === link;
            return (
              <Link
                key={name}
                link={link}
                aria-current={isCurrentPage ? "page" : undefined}
              >
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
    margin: 0em 1.5em;
    font-size: 14px;
    font-weight: 500;
    position: relative;
    transition: 0.3s;
  }
  a:hover {
    text-decoration: none;
    color: var(--hover-nav-colour);
    transition: 0.3s;
  }

  a[aria-current="page"]:after {
    content: "";
    display: inline-block;
    position: absolute;
    border-radius: 100px;
    height: 3px;
    bottom: -6px;
    margin: 0 auto;
    left: 0;
    width: 40%;
    background: var(--accent-colour);
    -o-transition: 0.3s;
    -ms-transition: 0.3s;
    -moz-transition: 0.3s;
    -webkit-transition: 0.3s;
    transition: 0.3s;
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
  fill: var(--logo-Colour);
  circle:nth-child(2) {
    stroke: var(--logo-Colour);
  }

  svg:hover {
    fill: var(--accent-colour);
    text-decoration: none !important;
    font-family: SF Pro Text;
    cursor: pointer;
  }
`;
