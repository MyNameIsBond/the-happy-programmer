import React from "react";
import { connect, Global, styled, Head, css } from "frontity";
import { globalStyles } from "./style/global-style";
import Switch from "@frontity/components/switch";
import Title from "./title";
import Home from "./home";
import Archive from "./Archive/Archive";
import Loading from "./Loading";
import Nav from "./nav";
import Footer from "./footer";
import Post from "./Post/Post";
import Error404 from "./Error404";
import SearchPage from "./Search/SearchPage";
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
        <Archive when={data.isCategory} />
        <Loading when={data.isFetching} />
        <Post when={data.isPostType} />
        <Error404 when={data.isError} />
        <SearchPage when={data.isSearch} />
      </Switch>
      <Footer />
    </>
  );
};

export default connect(Root);
