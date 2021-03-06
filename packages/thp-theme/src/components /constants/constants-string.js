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
    [swiftuiMobile, "SwiftUI Tutorials", "In SwiftUI ", ""], // icon , title , description , link
    [reactNativeMobile, "", "", ""],
    [flutterMobile, "", "", ""],
    [webIcon, "", "", ""],
  ],
};

export { homeConstants };
