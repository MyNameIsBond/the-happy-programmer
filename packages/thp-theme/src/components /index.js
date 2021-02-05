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

const Container = styled.div``;

const NaBar = styled.nav`
  padding: 2em;
`;

const globalStyles = css`
  html {
    font-family: "Roboto", monospace;
  }
  body {
    margin-right: auto;
    margin-left: auto;
    max-width: 90em;
    padding-right: 10px;
    padding-left: 10px;
    background: var(--background-colour);
  }
  p {
    color: var(--text-colour);
  }

  @media (prefers-color-scheme: light) {
    :root {
      --background-colour: #f8f8f8;
      --text-colour: #242424;
      --accent-colour: #9a61d7;
      --secondary-colour: #ff6584;
    }
  }

  @media (prefers-color-scheme: dark) {
    :root {
      --background-colour: #242424;
      --text-colour: #f8f8f8;
    }
  }
`;

export default connect(Root);
