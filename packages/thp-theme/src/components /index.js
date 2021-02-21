import React from "react";
import { connect, Global, styled, Head, css } from "frontity";
import Link from "@frontity/components/link";
import { globalStyles } from "./style/global-style";

const Root = ({ state }) => {
  return (
    <>
      <Head>
        <title>{state.frontity.title}</title>
      </Head>

      <Global styles={globalStyles} />
      <nav>
        <Link link="/">Home</Link>
        <Link link="/category/swiftui/">SwiftUI</Link>
        <Link link="/category/web/">Web</Link>
      </nav>
    </>
  );
};

export default connect(Root);
