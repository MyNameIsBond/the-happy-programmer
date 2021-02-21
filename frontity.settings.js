const settings = {
  name: "the-happy-programmer",
  state: {
    frontity: {
      url: "https://test.frontity.org",
      title: "The Happy Programmer",
      description: "Mobile and web free courses",
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
