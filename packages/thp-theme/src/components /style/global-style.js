import { css } from "frontity";

const globalStyles = css`
  @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap");

  html {
    font-family: "Roboto", sans-serif;
  }
  body {
    font-family: "Roboto", sans-serif;
    margin: 0;
    margin-right: auto;
    margin-left: auto;
    max-width: 90em;
    background: var(--background-colour);
    overflow-x: hidden;
  }

  nav {
    font-family: "Roboto", sans-serif;
  }

  p {
    color: var(--text-colour);
    font-size: 1rem;
    letter-spacing: 0.00938em;
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
    --background-colour: #f8f8f8;
    --text-colour: #535353;
    --accent-colour: #9a61d7;
    --secondary-colour: #ff6584;
    --secondary-background-colour: #f2f2f2;
    --hover-nav-colour: #1c1c1c;
    --hover-shadow: 0px 1px 1px lightgray;
    --logo-Colour: black;
    --breakpoint-sm: 576px;
    --breakpoint-md: 768px;
    --breakpoint-lg: 992px;
    --breakpoint-xl: 1200px;
  }

  @media (prefers-color-scheme: dark) {
    :root {
      --hover-shadow: 0px 1px 1px black;
      --logo-Colour: white;
      --background-colour: #242424;
      --text-colour: #f8f8f8;
      --hover-nav-colour: #bcbcbc;
      --secondary-background-colour: #333333;
    }
  }
`;

const homeLearnEveything = {};

export { globalStyles };
