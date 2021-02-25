import React from "react";
import { connect, styled } from "frontity";
import Link from "@frontity/components/link";

const Nav = ({ state }) => {
  return (
    <>
      <NavContainer>
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
`;
