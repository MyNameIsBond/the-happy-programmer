import { loadable } from "frontity";
const WebSvg = loadable(() => import("../svg/web-svg.js"));
// import WebSvg from "../svg/web-svg.js";
const YoutubeSvg = loadable(() => import("../svg/youtube-svg.js"));
const BlogSvg = loadable(() => import("../svg/blog-svg.js"));
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

export default aboutExplain;