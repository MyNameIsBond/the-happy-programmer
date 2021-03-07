import { default as swiftUI } from "./swiftuiIcon.svg";
import { default as flutter } from "./flutterIcon.svg";
import { default as reactNative } from "./reactNativeIcon.svg";
import { default as js } from "./JSIcon.svg";
import { default as svgHome } from "./svgHome.svg";
import { default as swiftuiMobile } from "./swiftuiMobile.svg";
import { default as reactNativeMobile } from "./reactNativeMobile.svg";
import { default as flutterMobile } from "./flutterMobile.svg";
import { default as webIcon } from "./webIcon.svg";

const homeConstants = {
  homeSvg: svgHome,
  mainHeader: "SwiftUI and Flutter Blog",
  header: "EVERYTHING ABOUT MOBILE AND WEB",
  subheader: "What you can learn here",
  lessonContainer: [
    [swiftUI, "SwiftUI", "SwiftUI complete posts and tutorials"],
    [flutter, "Flutter", "Learn Flutter for every platform"],
    [reactNative, "React Native", "React Native for heros"],
    [js, "JavaScript", "With React Native we will learn JS too"],
  ],
  coursesContainer: [
    // icon , title , description , link , width of the icon-svg
    [
      swiftuiMobile,
      "SwiftUI Tutorials",
      "SwiftUI is being examined in depth to teach you how you can create stunning designs and teach you how to create professional and clean code. SwiftUI tutorials will cover macOS, iPadOS, watchOS and iOS.",
      "/category/swiftui/",
      "50%",
      false,
    ],
    [
      reactNativeMobile,
      "React Native Tutorials",
      "React has great capabilities is a very known cross-platform framework in JavaScrip. React Native can cover both mobile environments. Hot animation tutorials coming up. Also, clones from big famous Apps made in React Native.",
      "",
      "50%",
      true,
    ],
    [
      flutterMobile,
      "Flutter Tutorials",
      "Flutter is a cross-platform framework, with a single codebase you can create apps for Android, iOS, macOS, Windows, and Web. In Flutter we will cover the whole range Flutter provides and teach you the key components of Flutter and Dart.",
      "",
      "50%",
      true,
    ],
    [
      webIcon,
      "Web Tutorials",
      "On the web, we will cover mostly ReactJS. We will clone websites and teach you how to go from zero to hero, how to understand crucial concepts, and deploy.",
      "",
      "100%",
      true,
    ],
  ],
};

export { homeConstants };
