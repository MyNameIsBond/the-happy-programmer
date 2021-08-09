// import FlutterSvg from "../svg/flutter-svg.js";
// import JavascriptSvg from "../svg/javascript-svg.js";
// import ReactNativeSvg from "../svg/react-native-svg.js";
// import SwiftuiSvg from "../svg/swiftui-svg.js";
import { loadable } from "frontity";
const FlutterSvg = loadable(() => import("../svg/flutter-svg.js"));
const JavascriptSvg = loadable(() => import("../svg/javascript-svg.js"));
const ReactNativeSvg = loadable(() => import("../svg/react-native-svg.js"));
const SwiftuiSvg = loadable(() => import("../svg/swiftui-svg.js"));

const lesson = [
  [<SwiftuiSvg />, "SwiftUI", "SwiftUI posts and tutorials"],
  [<FlutterSvg />, "Flutter", "Learn Flutter for every platform"],
  [<ReactNativeSvg />, "React Native", "React Native for heros"],
  [<JavascriptSvg />, "JavaScript", "React Native we will learn JS too"],
];

export default lesson;
