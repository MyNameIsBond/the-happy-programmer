import { connect, Global, Head, styled, css } from "frontity";
import React from "react";
import Link from "./Link";

const Root = ({ state }) => {
  return (
    <>
      <Global styles={globalStyles} />
      <Container>
        <NaBar>
          <nav>
            <Link href="/">Home</Link>
            <Link href="/category/swiftui/">SwiftUI</Link>
            <Link href="/category/flutter/">Flutter</Link>
            <Link href="/category/web/">Web</Link>
            <Link href="/category/react-native/">React Native</Link>
          </nav>
        </NaBar>
      </Container>
    </>
  );
};

const Container = styled.div`
  background: red;
`;

const NaBar = styled.nav`
  background: green;
  padding: 2em;
`;

const globalStyles = css`
  body {
    margin-right: auto;
    margin-left: auto;
    max-width: 90em;
    padding-right: 10px;
    padding-left: 10px;
  }
`;

export default connect(Root);
