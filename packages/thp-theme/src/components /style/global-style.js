import { css } from "frontity";

const globalStyles = css`
  @import url("https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;500;600;700&display=swap");
  @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap");

  body {
    font-family: "Roboto Mono", monospace;
    margin: 0;
    margin-right: auto;
    margin-left: auto;
    max-width: 90em;
    background: var(--background-colour);
  }

  nav {
    font-family: "Roboto", sans-serif;
  }

  p {
    color: var(--text-colour);
  }

  h1,
  h2,
  h3,
  h4,
  a {
    color: var(--text-colour);
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }
  :root {
    --background-colour: #f8f8f8;
    --text-colour: #404040;
    --accent-colour: #9a61d7;
    --secondary-colour: #ff6584;
    --hover-nav-colour: #1c1c1c;
    --logo-Colour: black;
    --breakpoint-sm: 576px;
    --breakpoint-md: 768px;
    --breakpoint-lg: 992px;
    --breakpoint-xl: 1200px;
  }

  @media (prefers-color-scheme: dark) {
    :root {
      --logo-Colour: white;
      --background-colour: #242424;
      --text-colour: #f8f8f8;
      --hover-nav-colour: #bcbcbc;
    }
  }
`;

export { globalStyles };
