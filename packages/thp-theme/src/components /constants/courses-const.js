import FlutterCourse from "../svg/flutter-course";
import WebCourse from "../svg/web-course";
import SwiftUICourse from "../svg/swiftui-course";
import ReactnativeCourse from "../svg/reactnative-course";

const courses = [
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
];

export default courses;
