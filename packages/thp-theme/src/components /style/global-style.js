import { css } from "frontity";

const globalStyles = css`
  * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  html {
  }
  body {
    margin: 0;
    background: var(--background-colour);
  }
  p {
    color: var(--text-colour);
    font-size: 1rem;
    line-height: 2.024rem;
    letter-spacing: 0.00938em;
    font-weight: var(--font-weight-text);
    font-family: var(--font-text);
  }
  h1,
  h2,
  h3,
  h4 {
    font-weight: var(--font-weight-title);
    display: block;
    font-family: var(--font-title);
  }

  h1,
  h2,
  h3,
  h4 {
    color: var(--text-colour);
    text-decoration: none;
    letter-spacing: 0.00938rem;
  }

  h1 {
    font-size: 2.488rem;
  }
  h2 {
    font-size: 2.074rem;
  }
  h3 {
    font-size: 1.728rem;
  }
  h4 {
    font-size: 1.44rem;
  }
  h5 {
    font-size: 1.2rem;
  }
  caption {
    font-size: 0.8rem;
  }

  button {
    letter-spacing: 0.02857rem;
    font-weight:var( --font-weight-text);
    
  }
  a {
    color: var(--secondary-colour);
    letter-spacing: 0.00938rem;
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }
  :root {
    --font-titles: font-family: "SF Pro Display", "SF Pro Icons", "Helvetica Neue", "Helvetica",
      "Arial", sans-serif;
    --font-text: "SF Pro Text", "SF Pro Icons", "Helvetica Neue", "Helvetica",
      "Arial", sans-serif;
    --font-weight-title: 600;
    --font-weight-text: 400;
    --border-radius: 0.2em;
    --background-colour: #ffffff;
    --text-colour: #1d1d1f;
    --accent-colour: #8241c7;
    --secondary-colour: #e91e63;
    --secondary-text-colour: rgba(51, 51, 51, 0.6);
    --secondary-background-colour: #f5f5f5;
    --disabled-components: #a0a0a0;
    --disabled-text: #777777;
    --hover-nav-colour: #1c1c1c;
    --button-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%),
      0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
    --secondary-button-hover: rgba(0, 0, 0, 0.08);
    --hover-shadow: 3px 2px 2px lightgray;
    --logo-Colour: black;
    --input-text-colour: #202124;
    --loader-colour: #aaaaaa;
    --border-input: #f1f3f4;
    --input-background-colour: #f1f3f4;
    --category-border: rgba(32, 33, 36, 0.16);
    // Footer Style
    --footer-background: #242424;
    --footer-text: #ffffff;
    --footer-logo-Colour: #ffffff;
    --footer-shadow: 0px 1px 1px lightgray;
    --footer-social: brightness(0) invert(1);
    --hover-border-input: black;
  }

  @media (prefers-color-scheme: dark) {
    :root {
      --category-border: rgba(183, 183, 183, 0.16);
      --secondary-colour: #e91e63;
      --secondary-button-hover: rgba(255, 255, 255, 0.08);
      --secondary-text-colour: rgba(255, 255, 255, 0.7);
      --disabled-text: #a0a0a0;
      --hover-shadow: 0px 1px 1px black;
      --logo-Colour: #ffffff;
      --background-colour: #212121;
      --text-colour: #ffffff;
      --hover-nav-colour: #bcbcbc;
      --secondary-background-colour: #333;
      --loader-colour: #696969;
      --border-input: #3a3a3a;
      --input-background-colour: #212121;
      --hover-border-input: white;
      // Footer Style
      --footer-logo-Colour: white;
      --footer-background: #080808;
      --footer-text: #efefef;
      --footer-social: brightness(5) invert(0);
    }
  }
`;

export { globalStyles };
