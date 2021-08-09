import Loading from "../loading";
import { loadable } from "frontity";
export default loadable(() => import("./archive-list"), {
  fallback: <Loading />,
});
