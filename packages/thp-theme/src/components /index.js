import { connect, Global, Head, styled, css } from "frontity";
import React from "react";
import Link from "./Link";
import { globalStyles } from "./style/global-style";

const Root = ({ state }) => {
  return (
    <>
      <Global styles={globalStyles} />
      <Container>
        <NaBar>
          <nav>
            <Link href="/">Home</Link>
            <Link href="/category/swiftui/"> SwiftUI</Link>
            <Link href="/category/flutter/">Flutter</Link>
            <Link href="/category/web/">Web</Link>
            <Link href="/category/react-native/">React Native</Link>
          </nav>
        </NaBar>
      </Container>
    </>
  );
};

const Container = styled.div``;

const NaBar = styled.nav`
  padding: 2em;
`;

export default connect(Root);
