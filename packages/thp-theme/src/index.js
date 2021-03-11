import Root from "./components ";

export default {
  name: "thp-theme",
  roots: {
    theme: Root,
  },
  state: {
    theme: {
      breakpoints: {
        smallMobile: "550px",
        mobile: "768px",
        tablet: "992px",
        web: "1200px",
      },
    },
  },
  actions: {
    theme: {},
  },
  libraries: {},
};
