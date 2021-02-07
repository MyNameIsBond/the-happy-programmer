import { css } from "frontity";

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
