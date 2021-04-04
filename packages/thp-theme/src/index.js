import image from "@frontity/html2react/processors/image";
import iframe from "@frontity/html2react/processors/iframe";
import link from "@frontity/html2react/processors/link";
import Root from "./components ";

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
      processors: [link, iframe, image],
    },
  },
};
