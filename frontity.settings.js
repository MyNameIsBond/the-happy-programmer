const settings = {
  name: "the-happy-programmer",
  state: {
    frontity: {
      url: "https://thehappyprogrammer.com/",
      title: "The Happy Programmer",
      description: "Mobile and web free courses",
    },
    theme: {
      menu: [
        ["Home", "/"],
        ["SwiftUI", "/category/swiftui/"],
      ],
    },
  },
  packages: [
    {
      name: "thp-theme",
    },
    {
      name: "@frontity/wp-source",
      state: {
        source: {
          url: "https://thehappyprogrammer.com",
        },
      },
    },
    "@frontity/tiny-router",
    "@frontity/html2react",
    "@frontity/head-tags",
    "@frontity/yoast",
  ],
};

export default settings;
