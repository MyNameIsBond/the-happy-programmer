import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  coldarkCold,
  coldarkDark,
} from "react-syntax-highlighter/dist/esm/styles/prism";
import { connect, styled } from "frontity";
import usePrefersColorScheme from "./usePrefersColorScheme";

const Text = styled.div`
  border-radius: 7px;
  code {
    font-family: "Roboto", sans-serif !important;
    letter-spacing: 0.01538em;
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

export default connect(codeHighlighter);
