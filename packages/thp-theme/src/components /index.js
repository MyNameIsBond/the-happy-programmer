import { connect, Global, Head, loadable } from "frontity";
import { globalStyles } from "./style/global-style";
import Switch from "@frontity/components/switch";
import Title from "./title";
import Archive from "./archive";
import Nav from "./nav";
import Footer from "./footer";
import Post from "./Post/Post";
const About = loadable(() => import("./about"));
const Loader = loadable(() => import("./Loading"));
const Error404 = loadable(() => import("./Error404"));
const Home = loadable(() => import("./home"));
const Contact = loadable(() => import("./contact"));
const Arch = loadable(() => import("./Archive/archive.js"));
const SearchPage = loadable(() => import("./Search/SearchPage"));

const Root = ({ state }) => {
  const data = state.source.get(state.router.link);

  return (
    <>
      <Title />
      <Head>
        <meta name="description" content={state.frontity.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <html lang="en" />
      </Head>
      <Global styles={globalStyles} />
      <Nav />
      <Switch>
        <Home when={data.isHome} />
        <Archive when={data.isCategory} />
        <Loader when={data.isFetching} />
        <Post when={data.isPostType && data.isPost} />
        <Error404 when={data.isError} />
        <SearchPage when={data.isSearch} />
        <Arch when={data.isAuthor} />
        <Contact when={data.link == "/contact/"} />
        <About when={data.link == "/about/"} />
      </Switch>
      <Footer />
    </>
  );
};

export default connect(Root);
