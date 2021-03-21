import React from "react";
import { connect, Global, styled, Head, css } from "frontity";
import { globalStyles } from "./style/global-style";
import Switch from "@frontity/components/switch";
import Title from "./title";
import Home from "./home";
import SwiftUI from "./Archive/SwiftUI";
import Loading from "./Loading";
import Nav from "./nav";
import Footer from "./footer";
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
      <Nav />
      <Switch>
        <Home when={data.isHome} />
        <SwiftUI when={data.isCategory} />
        <Loading when={data.isFetching} />
      </Switch>
      <Footer />
    </>
  );
};

export default connect(Root);
