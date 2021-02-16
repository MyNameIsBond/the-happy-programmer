import { connect, Global, Head, styled, css } from "frontity";
import React from "react";

import Link from "@frontity/components/link";
import { globalStyles } from "./style/global-style";

const Root = ({ state }) => {
  return (
    <>
      <Global styles={globalStyles} />
      <nav>
        <Link link="/">Home</Link>
        <Link link="/category/swiftui/"> SwiftUI</Link>
        <Link link="/category/web/">We b</Link>
      </nav>
    </>
  );
};

export default connect(Root);
