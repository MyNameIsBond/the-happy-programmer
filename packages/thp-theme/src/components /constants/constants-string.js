import WebSvg from "../svg/webSvg.js";
import YoutubeSvg from "../svg/youtubeSvg.js";
import BlogSvg from "../svg/blogSvg.js";
import YoutubeIconSvg from "../svg/youtubeiconSvg.js";
import TwitterSvg from "../svg/twitterSvg.js";
import FacebookSvg from "../svg/facebookSvg.js";
import PatreonSvg from "../svg/patreonSvg.js";
import FlutterSvg from "../svg/flutterSvg.js";
import JavascriptSvg from "../svg/javascriptSvg.js";
import ReactNativeSvg from "../svg/reactNativeSvg.js";
import SwiftuiSvg from "../svg/swiftuiSvg.js";
import HomeSvg from "../svg/homeSvg";

// course SVGs

import FlutterCourse from "../svg/flutter-course";
import WebCourse from "../svg/web-course";
import SwiftUICourse from "../svg/swiftui-course";
import ReactnativeCourse from "../svg/reactnative-course";

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

const homeConstants = {
  userImage:
    "https://thehappyprogrammer.com/wp-content/uploads/2021/03/IMG_0918-2-1.jpg",
  alt: "Tony H profile picture",
  homeSvg: <HomeSvg />,
  mainHeader: "SwiftUI and Flutter Blog",
  header: "EVERYTHING ABOUT MOBILE AND WEB",
  subheader: "What you can learn here",
  lessonContainer: [
    [<SwiftuiSvg />, "SwiftUI", "SwiftUI posts and tutorials"],
    [<FlutterSvg />, "Flutter", "Learn Flutter for every platform"],
    [<ReactNativeSvg />, "React Native", "React Native for heros"],
    [<JavascriptSvg />, "JavaScript", "React Native we will learn JS too"],
  ],
  coursesContainer: [
    // icon , title , description , link , width of the icon-svg, disabled,row-reverse.
    [
      <SwiftUICourse />,
      "SwiftUI Tutorials",
      "SwiftUI is being examined in depth to teach you how you can create stunning designs and teach you how to create professional and clean code. SwiftUI tutorials will cover macOS, iPadOS, watchOS and iOS.",
      "/category/swiftui/",
      false,
      "Learn SwiftUI",
    ],
    [
      <ReactnativeCourse />,
      "React Native Tutorials",
      "React has great capabilities is a very known cross-platform framework in JavaScrip. React Native can cover both mobile environments. Hot animation tutorials coming up. Also, clones from big famous Apps made in React Native.",
      "",
      true,
      "Learn React Native",
    ],
    [
      <FlutterCourse />,
      "Flutter Tutorials",
      "Flutter is a cross-platform framework, with a single codebase you can create apps for Android, iOS, macOS, Windows, and Web. In Flutter we will cover the whole range Flutter provides and teach you the key components of Flutter and Dart.",
      "",
      true,
      "Learn Flutter",
    ],
    [
      <WebCourse />,
      "Web Tutorials",
      "On the web, we will cover mostly ReactJS. We will clone websites and teach you how to go from zero to hero, how to understand crucial concepts, and deploy.",
      "",
      true,
      "Learn Javascript",
    ],
  ],
  AuthorInfo: {
    title: "My Name Is Tony",
    link: "/about",
    description:
      "I have developed numerous of iOS and Android apps. I have participated in many open course projects. An experienced developer in web development, enterprise and mobile development. Enthusiastic about programming and technology.",
    socials: [
      [<PatreonSvg />, "https://www.patreon.com/thehappyprogrammer", "Patreon"],
      [
        <FacebookSvg />,
        "https://www.facebook.com/The-Happy-Programmer-106178104593013",
        "FaceBook",
      ],
      [<TwitterSvg />, "https://twitter.com/happy_prog", "Twitter"],
      [
        <YoutubeIconSvg />,
        "https://www.youtube.com/channel/UC6iG4M34lttUcEFUdSVsGVA",
        "YouTube",
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

const breakpoints = {
  smallMobile: `@media screen and (min-width: 550px)`,
  mobile: `@media screen and (min-width: 768px)`,
  tablet: `@media screen and (min-width: 992px)`,
  web: `@media screen and (min-width: 1200px)`,
  bigWeb: `@media screen and (min-width: 1570px)`,
};
// About Page
const aboutConst = {
  title: "My name is Tony",
  subtitle: "Software Developer",
  text: `I have developed numerous of iOS and Android apps. I have participated in many open sourse 
  projects. An experienced developer in web development, 
  enterprise and mobile development. 
  Enthusiastic about programming and technology`,
  alt: "Tony H profile picture",
  image:
    "https://thehappyprogrammer.com/wp-content/uploads/2021/06/IMG_0487-1-1839829635-1624717729242-1.jpg",
};

const aboutExplain = {
  h2: "What Do I Do",
  explain: [
    [
      "Web & Mobile",
      "Web and mobile are my main strengths as a developer.",
      <WebSvg />,
    ],
    [
      "Courses",
      "I am planning to create in-depth courses on each modern technology I believe is worth learning",
      <BlogSvg />,
    ],
    [
      "YouTube",
      "YouTube will be a big part on The Happy Programmer and I will try to give quality content",
      <YoutubeSvg />,
    ],
  ],
};

export { homeConstants, breakpoints, aboutConst, aboutExplain };
