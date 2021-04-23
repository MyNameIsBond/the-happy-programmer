import { default as swiftUI } from "./swiftuiIcon.svg";
import { default as flutter } from "./flutterIcon.svg";
import { default as reactNative } from "./reactNativeIcon.svg";
import { default as js } from "./JSIcon.svg";
import { default as svgHome } from "./svgHome.svg";
import { default as swiftuiMobile } from "./swiftuiMobile.svg";
import { default as reactNativeMobile } from "./reactNativeMobile.svg";
import { default as flutterMobile } from "./flutterMobile.svg";
import { default as webIcon } from "./webIcon.svg";
import { default as patreonIcon } from "./patreonIcon.svg";
import { default as facebookIcon } from "./facebookIcon.svg";
import { default as youtubeIcon } from "./youtubeIcon.svg";
import { default as twitterIcon } from "./twitterIcon.svg";

const homeConstants = {
  userImage:
    "https://thehappyprogrammer.com/wp-content/uploads/2021/03/IMG_0918-2-1.jpg",
  homeSvg: svgHome,
  mainHeader: "SwiftUI and Flutter Blog",
  header: "EVERYTHING ABOUT MOBILE AND WEB",
  subheader: "What you can learn here",
  lessonContainer: [
    [swiftUI, "SwiftUI", "SwiftUI posts and tutorials"],
    [flutter, "Flutter", "Learn Flutter for every platform"],
    [reactNative, "React Native", "React Native for heros"],
    [js, "JavaScript", "React Native we will learn JS too"],
  ],
  coursesContainer: [
    // icon , title , description , link , width of the icon-svg, disabled,row-reverse.
    [
      swiftuiMobile,
      "SwiftUI Tutorials",
      "SwiftUI is being examined in depth to teach you how you can create stunning designs and teach you how to create professional and clean code. SwiftUI tutorials will cover macOS, iPadOS, watchOS and iOS.",
      "/category/swiftui/",
      "40%",
      false,
      "row",
    ],
    [
      reactNativeMobile,
      "React Native Tutorials",
      "React has great capabilities is a very known cross-platform framework in JavaScrip. React Native can cover both mobile environments. Hot animation tutorials coming up. Also, clones from big famous Apps made in React Native.",
      "",
      "40%",
      true,
      "row-reverse",
    ],
    [
      flutterMobile,
      "Flutter Tutorials",
      "Flutter is a cross-platform framework, with a single codebase you can create apps for Android, iOS, macOS, Windows, and Web. In Flutter we will cover the whole range Flutter provides and teach you the key components of Flutter and Dart.",
      "",
      "40%",
      true,
      "row",
    ],
    [
      webIcon,
      "Web Tutorials",
      "On the web, we will cover mostly ReactJS. We will clone websites and teach you how to go from zero to hero, how to understand crucial concepts, and deploy.",
      "",
      "90%",
      true,
      "row-reverse",
    ],
  ],
  AuthorInfo: {
    title: "My Name Is Tony",
    description:
      "I have developed numerous of iOS and Android apps. I have participated in many open course projects. An experienced developer in web development, enterprise and mobile development. Enthusiastic about programming and technology.",
    socials: [
      [patreonIcon, "https://www.patreon.com/thehappyprogrammer"],
      [
        facebookIcon,
        "https://www.facebook.com/The-Happy-Programmer-106178104593013",
      ],
      [twitterIcon, "https://twitter.com/happy_prog"],
      [youtubeIcon, "https://www.youtube.com/channel/UC6iG4M34lttUcEFUdSVsGVA"],
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

export { homeConstants };
