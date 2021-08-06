import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  coldarkCold,
  coldarkDark,
} from "react-syntax-highlighter/dist/esm/styles/prism";
import { styled } from "frontity";
import usePrefersColorScheme from "./use-prefers-color-scheme";

const Text = styled.div`
  pre {
    border-radius: var(--border-radius);
  }
`;

const Code = (props) => {
  const preferredColorSchema = usePrefersColorScheme();
  const d = preferredColorSchema === "dark";
  return (
    <Text>
      <SyntaxHighlighter language="swift" style={d ? coldarkDark : coldarkCold}>
        {props.children.props.children}
      </SyntaxHighlighter>
    </Text>
  );
};

const codeHighlighter = {
  name: "Code",
  test: ({ node }) => node.component === "pre",
  processor: ({ node }) => {
    node.component = Code;
    return node;
  },
};

export default codeHighlighter;
