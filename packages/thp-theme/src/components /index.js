import { connect, Global, Head } from "frontity";
import { globalStyles } from "./style/global-style";
import Switch from "@frontity/components/switch";
import Title from "./title";
import Archive from "./archive";
import Nav from "./nav";
import About from "./about";
import Post from "./post";
// const About = loadable(() => import("./about"));
// const Error404 = loadable(() => import("./error404"));
// const Home = loadable(() => import("./home"));
import Error404 from "./error404";
import Home from "./home";
import Footer from "./footer";
import SearchPage from "./search/search-page";
import Loading from "./loading";
// const Loading = loadable(() => import("./loading"));
// const Nav = loadable(() => import("./nav"));
// const Footer = loadable(() => import("./footer"));
// const SearchPage = loadable(() => import("./search/search-page"));

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
        <Archive when={data.isCategory || data.isAuthor} />
        <Loading when={data.isFetching} />
        <Post when={data.isPostType && data.isPost} />
        <Error404 when={data.isError} />
        <SearchPage when={data.isSearch} />
        <About when={data.link == "/about/"} />
      </Switch>
      <Footer />
    </>
  );
};

export default connect(Root);
