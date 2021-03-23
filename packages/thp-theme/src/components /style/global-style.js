import { css } from "frontity";

const globalStyles = css`
  @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap");

  * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  html {
    font-family: "Roboto", sans-serif;
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
    font-weight: 300;
  }
  h1,
  h2,
  h3,
  h4 {
    font-weight: 500;
    display: block;
  }

  h1,
  h2,
  h3,
  h4 {
    color: var(--text-colour);
    text-decoration: none;
    letter-spacing: 0.00938rem;
  }
  a {
    color: var(--secondary-colour);
    text-decoration: none;
    letter-spacing: 0.00938rem;
  }
  h1 {
    font-size: 3.052rem;
  }
  h2 {
    font-size: 2.441rem;
  }
  h3 {
    font-size: 1.953rem;
  }
  h4 {
    font-size: 1.563rem;
  }
  h5 {
    font-size: 1.25rem;
  }
  caption {
    font-size: 0.8rem;
  }

  button {
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    letter-spacing: 0.02857rem;
    font-weight: 400;
  }

  a:hover {
    text-decoration: underline;
  }
  :root {
    --border-radius: 0.2em;
    --background-colour: #f8f8f8;
    --text-colour: #030303;
    --accent-colour: #8241c7;
    --secondary-colour: #ff6584;
    --secondary-text-colour: #5a5a5a;
    --secondary-background-colour: #f2f2f2;
    --disabled-components: #a0a0a0;
    --disabled-text: #777777;
    --hover-nav-colour: #1c1c1c;
    --hover-shadow: 0px 1px 1px lightgray;
    --logo-Colour: black;
    --input-text-colour: #030303;
    // Footer Style
    --footer-background: #242424;
    --footer-text: #ffffff;
    --footer-logo-Colour: #ffffff;
    --footer-shadow: 0px 1px 1px lightgray;
    --footer-social: brightness(0) invert(1);
  }

  @media (prefers-color-scheme: dark) {
    :root {
      --secondary-text-colour: #969696;
      --disabled-text: #a0a0a0;
      --hover-shadow: 0px 1px 1px black;
      --logo-Colour: #ffffff;
      --background-colour: #242424;
      --text-colour: #f8f8f8;
      --hover-nav-colour: #bcbcbc;
      --secondary-background-colour: #333333;
      // Footer Style
      --footer-logo-Colour: black;
      --footer-background: #e9e9e9;
      --footer-text: #030303;
      --footer-social: brightness(0) invert(0);
    }
  }
`;

export { globalStyles };
