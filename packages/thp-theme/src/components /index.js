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
        <link
          ref="prefetch"
          href="https://thehappyprogrammer.com/wp-content/uploads/2021/05/Group-76.svg"
        />
        <link
          ref="prefetch"
          href="http://localhost:3000/static/the-happy-programmer.module.js"
        />
        <link
          ref="prefetch"
          href="https://thehappyprogrammer.com/wp-content/uploads/2021/05/Group-27.svg"
        />
        <link
          ref="prefetch"
          href="https://thehappyprogrammer.com/wp-content/uploads/2021/05/svgReactNative.svg"
        />
        <link
          ref="prefetch"
          href="https://thehappyprogrammer.com/wp-content/uploads/2021/05/svgFlutterMobile.svg"
        />
        <link
          ref="prefetch"
          href="http://localhost:3000/static/the-happy-programmer.module.js"
        />
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
