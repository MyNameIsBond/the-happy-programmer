import { connect, Global, Head } from "frontity";
import { globalStyles } from "./style/global-style";
import Switch from "@frontity/components/switch";
import Title from "./title";
import Archive from "./archive";
import Nav from "./nav";
import Footer from "./footer";
import Post from "./Post/Post";
import About from "./about";
import Loader from "./Loading";
import Error404 from "./Error404";
import Home from "./home";
import Contact from "./contact";
import Arch from "./Archive/archive.js";
import SearchPage from "./Search/SearchPage";
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
