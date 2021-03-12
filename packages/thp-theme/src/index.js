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
        bigWeb: "1550px",
      },
    },
  },
  actions: {
    theme: {},
  },
  libraries: {},
};
