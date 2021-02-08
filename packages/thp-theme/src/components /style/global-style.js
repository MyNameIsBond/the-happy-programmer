import { css } from "frontity";

const globalStyles = css`
  @import url("https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;500;700&display=swap");
  @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");
  html {
    font-family: "Roboto Mono", monospace;
  }
  body {
    margin-right: auto;
    margin-left: auto;
    max-width: 90em;
    padding-right: 10px;
    padding-left: 10px;
    background: var(--background-colour);
  }
  nav {
    font-family: "Roboto", sans-serif;
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
      --breakpoint-sm: 576px;
      --breakpoint-md: 768px;
      --breakpoint-lg: 992px;
      --breakpoint-xl: 1200px;
    }
  }

  @media (prefers-color-scheme: dark) {
    :root {
      --background-colour: #242424;
      --text-colour: #f8f8f8;
    }
  }
`;

export { globalStyles };
