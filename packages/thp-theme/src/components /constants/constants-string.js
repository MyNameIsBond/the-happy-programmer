const lessonIcons = {
  flutter:
    "https://thehappyprogrammer.com/wp-content/uploads/2021/05/Icon-simple-flutter.svg",
  swiftUI:
    "https://thehappyprogrammer.com/wp-content/uploads/2021/05/Icon-simple-swift.svg",
  js: "https://thehappyprogrammer.com/wp-content/uploads/2021/05/Icon-ionic-logo-javascript.svg",
  reactNative:
    "https://thehappyprogrammer.com/wp-content/uploads/2021/05/Icon-awesome-react.svg",
};

const socialIcons = {
  patreonIcon:
    "https://thehappyprogrammer.com/wp-content/uploads/2021/05/Icon-simple-patreon.svg",
  faceBookIcon:
    "https://thehappyprogrammer.com/wp-content/uploads/2021/05/Icon-zocial-facebook.svg",
  twitterIcon:
    "https://thehappyprogrammer.com/wp-content/uploads/2021/05/Icon-ionic-logo-twitter.svg",
  youtubeIcon:
    "https://thehappyprogrammer.com/wp-content/uploads/2021/05/Icon-simple-youtube.svg",
};

export const homeConstants = {
  userImage:
    "https://thehappyprogrammer.com/wp-content/uploads/2021/03/IMG_0918-2-1.jpg",
  homeSvg:
    "https://thehappyprogrammer.com/wp-content/uploads/2021/05/Group-76.svg",
  mainHeader: "SwiftUI and Flutter Blog",
  header: "EVERYTHING ABOUT MOBILE AND WEB",
  subheader: "What you can learn here",
  lessonContainer: [
    [lessonIcons.swiftUI, "SwiftUI", "SwiftUI posts and tutorials"],
    [lessonIcons.flutter, "Flutter", "Learn Flutter for every platform"],
    [lessonIcons.reactNative, "React Native", "React Native for heros"],
    [lessonIcons.js, "JavaScript", "React Native we will learn JS too"],
  ],
  coursesContainer: [
    // icon , title , description , link , width of the icon-svg, disabled,row-reverse.
    [
      "https://thehappyprogrammer.com/wp-content/uploads/2021/05/Group-27.svg",
      "SwiftUI Tutorials",
      "SwiftUI is being examined in depth to teach you how you can create stunning designs and teach you how to create professional and clean code. SwiftUI tutorials will cover macOS, iPadOS, watchOS and iOS.",
      "/category/swiftui/",
      "400",
      false,
      "row",
    ],
    [
      "https://thehappyprogrammer.com/wp-content/uploads/2021/05/svgReactNative.svg",
      "React Native Tutorials",
      "React has great capabilities is a very known cross-platform framework in JavaScrip. React Native can cover both mobile environments. Hot animation tutorials coming up. Also, clones from big famous Apps made in React Native.",
      "",
      "40%",
      true,
      "row-reverse",
    ],
    [
      "https://thehappyprogrammer.com/wp-content/uploads/2021/05/svgFlutterMobile.svg",
      "Flutter Tutorials",
      "Flutter is a cross-platform framework, with a single codebase you can create apps for Android, iOS, macOS, Windows, and Web. In Flutter we will cover the whole range Flutter provides and teach you the key components of Flutter and Dart.",
      "",
      "40%",
      true,
      "row",
    ],
    [
      "https://thehappyprogrammer.com/wp-content/uploads/2021/05/svgWeb.svg",
      "Web Tutorials",
      "On the web, we will cover mostly ReactJS. We will clone websites and teach you how to go from zero to hero, how to understand crucial concepts, and deploy.",
      "",
      "100%",
      true,
      "row-reverse",
    ],
  ],
  AuthorInfo: {
    title: "My Name Is Tony",
    link: "/about",
    description:
      "I have developed numerous of iOS and Android apps. I have participated in many open course projects. An experienced developer in web development, enterprise and mobile development. Enthusiastic about programming and technology.",
    socials: [
      [
        socialIcons.patreonIcon,
        "https://www.patreon.com/thehappyprogrammer",
        "Become A Patreon",
        "#eb5354",
      ],
      [
        socialIcons.faceBookIcon,
        "https://www.facebook.com/The-Happy-Programmer-106178104593013",
        "FaceBook",
        "#499BF0",
      ],
      [
        socialIcons.twitterIcon,
        "https://twitter.com/happy_prog",
        "Twitter",
        "#4EA0EB",
      ],
      [
        socialIcons.youtubeIcon,
        "https://www.youtube.com/channel/UC6iG4M34lttUcEFUdSVsGVA",
        "YouTube",
        "#EA3323",
      ],
    ],
  },
  footer: {
    contact: "Contact us",
    country: "Coventry, UK",
    email: "info@thehappyprogrammer.com",
    subscribe:
      "Enter your email address to subscribe for free to this blog and receive notifications",
  },
};

const about = {
  title: "",
  subTitle: "",
  subText: "",
  image: "",
  whatIdo: {},
};
// export const smallMobile =
// export const mobile =
// export const tablet =
// export const web =
// export const bigWeb =

export const breakpoints = {
  smallMobile: `@media screen and (min-width: 550px)`,
  mobile: `@media screen and (min-width: 768px)`,
  tablet: `@media screen and (min-width: 992px)`,
  web: `@media screen and (min-width: 1200px)`,
  bigWeb: `@media screen and (min-width: 1570px)`,
};
