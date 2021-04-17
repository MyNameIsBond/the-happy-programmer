import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";

const Code = (props) => {
  console.log("props", props.children.props.children);

  return null;
};

const codeHighlighter = {
  name: "Code",
  test: ({ node }) => node.component === "pre",
  processor: ({ node }) => {
    const cl = node.children[0].props.className;
    const content = node.children[0].children[0].content;
    node.component = Code;
    return node;
  },
};

export default codeHighlighter;
