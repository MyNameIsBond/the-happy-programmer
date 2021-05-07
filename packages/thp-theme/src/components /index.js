import React from "react";
import { connect, Global, Head, loadable } from "frontity";
import { globalStyles } from "./style/global-style";
import Switch from "@frontity/components/switch";
import Title from "./title";
import Home from "./home";
import Archive from "./Archive/Archive";
import Nav from "./nav";
import Footer from "./footer";
import Post from "./Post/Post";
import Error404 from "./Error404";
import SearchPage from "./Search/SearchPage";
import Contact from "./contact";
import Arch from "./Archive/Archive.js";

const Loader = loadable(() => import("./Loading"));

const Root = ({ state }) => {
  const data = state.source.get(state.router.link);

  return (
    <>
      <Title />
      <Head>
        <meta name="description" content={state.frontity.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <html lang="en" />
      </Head>
      <Global styles={globalStyles} />
      <Nav />
      <Switch>
        <Home when={data.isHome} />
        <Archive when={data.isCategory} />
        <Loader when={data.isFetching} />
        <Post when={data.isPostType && data.isPost} />
        <Error404 when={data.isError} />
        <SearchPage when={data.isSearch} />
        <Arch when={data.isAuthor} />
        <Contact when={data.link == "/contact/"} />
      </Switch>
      <Footer />
    </>
  );
};

export default connect(Root);
