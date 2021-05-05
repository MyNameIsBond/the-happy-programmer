const settings = {
  name: "the-happy-programmer",
  state: {
    frontity: {
      url: "https://thehappyprogrammer.com",
      title: "The Happy Programmer",
      description: "Mobile and web free courses",
    },
    theme: {
      menu: [
        ["Home", "/"],
        ["SwiftUI", "/category/swiftui/"],
        ["Contact", "/contact/"],
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
    {
      name: "@frontity/tiny-router",
      state: {
        router: {
          autoFetch: true,
        },
      },
    },
    "frontity-contact-form-7",
    "@frontity/html2react",
    "@frontity/head-tags",
    "@frontity/yoast",
  ],
};

export default settings;
