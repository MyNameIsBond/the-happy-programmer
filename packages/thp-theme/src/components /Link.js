import { connect, styled, css } from "frontity";
import React from "react";

export const Link = ({ href, actions, children }) => {
  return (
    <div>
      <a
        href={href}
        css={LinkStyle}
        onClick={(e) => {
          e.preventDefault();
          actions.router.set(href);
        }}
      >
        {children}
      </a>
    </div>
  );
};

const LinkStyle = css`
  text-decoration: none;
  color: var(--text-colour);
  @media screen and (min-width 600px) {
    color: red;
  }
`;

export default connect(Link);
