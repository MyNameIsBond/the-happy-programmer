import { css } from "frontity";

const globalStyles = css`
  * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
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
    display: block;
    font-family: var(--font-titles);
    color: var(--text-colour);
    text-decoration: none;
    letter-spacing: 0.00938rem;
  }
  h1 {
    font-size: 2.488rem;
    font-weight: var(--font-weight-title);
  }
  h2 {
    font-size: 2.074rem;
    font-weight: var(--font-weight-title);
  }
  h3 {
    font-size: 1.728rem;
    font-weight: var(--font-weight-title);
  }
  h4 {
    font-size: 1.44rem;
    font-weight: var(--font-weight-title);
  }
  h5 {
    font-size: 1.2rem;
    font-family: var(--font-titles);
    font-weight: var(--font-weight-title);
  }
  caption {
    font-size: 0.8rem;
    color: var(--text-colour);
  }

  button {
    letter-spacing: 0.02857rem;
    font-weight: var(--font-weight-text);
  }
  a {
    font-family: var(--font-titles);
    color: var(--secondary-colour);
    letter-spacing: 0.00938rem;
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }
  :root {
    --font-titles: "SF Pro Display", "SF Pro Icons", "Helvetica Neue",
      "Helvetica", "Arial", sans-serif;
    --font-text: "SF Pro Text", "SF Pro Icons", "Helvetica Neue", "Helvetica",
      "Arial", sans-serif;
    --font-weight-title: 500;
    --font-weight-text: 400;
    --light-border: #dbdbdb;
    --border-radius: 0.4em;
    --background-colour: #f9f9f9;
    --text-colour: #000;
    --accent-colour: #8241c7;
    --secondary-colour: #0046ca;
    --decoration-colour: #c379ea;
    --decoration-neutral-colour: #9c9c9c;
    --secondary-text-colour: #545454;
    --third-text-colour: #aeaeae;
    --secondary-background-colour: #ffffff;
    --disabled-components: #a0a0a0;
    --disabled-text: #777777;
    --button-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%),
      0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
    --secondary-button-hover: rgba(0, 0, 0, 0.08);
    --hover-shadow: 3px 2px 2px lightgray;
    --logo-colour: black;
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
    --card-background-color: #ffffff;
    --card-shadow: #e1e1e1;
    // Home SVGs
    --sceleton-colour: #cecece;
  }

  @media (prefers-color-scheme: dark) {
    :root {
      --card-background-color: #333;
      --category-border: rgba(183, 183, 183, 0.16);
      --secondary-colour: #3e97ff;
      --secondary-button-hover: rgba(255, 255, 255, 0.08);
      --secondary-text-colour: rgba(255, 255, 255, 0.7);
      --disabled-text: #a0a0a0;
      --hover-shadow: 0px 1px 1px rgba(255, 255, 255, 0.04);
      --logo-colour: #ffffff;
      --background-colour: #000;
      --secondary-background-colour: #212121;
      --text-colour: #ffffff;
      --loader-colour: #696969;
      --light-border: #595959;
      --border-input: #3a3a3a;
      --third-text-colour: #a6a6a6;

      --input-background-colour: #212121;
      --hover-border-input: white;
      // Footer Style
      --footer-logo-Colour: white;
      --footer-background: #080808;
      --footer-text: #efefef;
      --footer-social: brightness(5) invert(0);
      --card-shadow: rgba(255, 255, 255, 0.04);
      // Home SVGs
      --sceleton-colour: #484848;
    }
  }
`;

export { globalStyles };
