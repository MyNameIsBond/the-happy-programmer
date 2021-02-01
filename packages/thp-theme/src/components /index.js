import { connect } from "frontity";
import React from "react";
import Link from "./Link";

const Root = ({ state }) => {
  return (
    <>
      <h1> This is the link: {state.router.link} </h1>
      <h2> This is the link: {state.router.link} </h2>
      <h3> This is the link: {state.router.link} </h3>
      <h4> This is the link: {state.router.link} </h4>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/category/swiftui/">SwiftUI</Link>
        <Link href="/category/flutter/">Flutter</Link>
        <Link href="/category/web/">Web</Link>
        <Link href="/category/react-native/">React Native</Link>
      </nav>
    </>
  );
};

export default connect(Root);
