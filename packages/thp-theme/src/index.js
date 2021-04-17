import image from "@frontity/html2react/processors/image";
import iframe from "@frontity/html2react/processors/iframe";
import link from "@frontity/html2react/processors/link";
import script from "@frontity/html2react/processors/script";
import Root from "./components ";
import codeHighlighter from "./Processor/Highlight";
export default {
  name: "thp-theme",
  roots: {
    theme: Root,
  },
  state: {
    theme: {
      autoPrefetch: "hover",
      breakpoints: {
        smallMobile: "550px",
        mobile: "768px",
        tablet: "992px",
        web: "1200px",
        bigWeb: "1570px",
      },
    },
  },
  actions: {
    theme: {},
  },
  libraries: {
    html2react: {
      processors: [link, iframe, image, script, codeHighlighter],
    },
  },
};
