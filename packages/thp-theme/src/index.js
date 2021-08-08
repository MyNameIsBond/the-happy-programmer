import iframe from "@frontity/html2react/processors/iframe";
import link from "@frontity/html2react/processors/link";
import Root from "./components ";
import Image from "@frontity/html2react/processors/image";

export default {
  name: "thp-theme",
  roots: {
    theme: Root,
  },
  state: {
    theme: {
      darkTheme: true,
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
    theme: {
      beforeSSR: async ({ state, actions }) => {
        await actions.source.fetch(state.router.link);
      },
    },
  },
  libraries: {
    html2react: {
      processors: [link, iframe, Image],
    },
  },
};
