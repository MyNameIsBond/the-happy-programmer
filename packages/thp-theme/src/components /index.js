import React from "react";
import { connect, Global, styled, Head, css } from "frontity";
import Link from "@frontity/components/link";
import { globalStyles } from "./style/global-style";
import Switch from "@frontity/components/switch";
import Title from "./title";
import Home from "./home";
const Root = ({ state }) => {
  const data = state.source.get(state.router.link);

  return (
    <>
      <Title />
      <Head>
        <meta name="description" content={state.frontity.description} />
        <html lang="en" />
      </Head>

      <Global styles={globalStyles} />
      <nav>
        <Link link="/">Home</Link>
        <Link link="/category/swiftui/">SwiftUI</Link>
        <Link link="/category/web/">Web</Link>
      </nav>

      <Switch>
        <Home when={data.isHome} />
      </Switch>
    </>
  );
};

export default connect(Root);
