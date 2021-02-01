import { connect } from "frontity";
import React from "react";

export const Link = ({ href, actions, children }) => {
  return (
    <div>
      <a
        href={href}
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

export default connect(Link);
