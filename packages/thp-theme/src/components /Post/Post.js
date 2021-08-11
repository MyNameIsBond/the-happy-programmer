import { connect, styled } from "frontity";
import { getData, dataPost } from "../handlers/data-manager";
import ContainerDiv from "../reusable-components/container";
import Category from "../archive/categories";
import AuthorLink from "../archive/author-link";
import ArrowSvg from "../svg/arrow-svg";
import Link from "@frontity/components/link";

const Post = ({ state, libraries }) => {
  const data = getData(state);
  const post = state.source[data.type][data.id];
  const Html2React = libraries.html2react.Component;

  const { content, date, img, title, excerpt, categories, author } = dataPost(
    state,
    post
  );
  return (
    <InfiniteBorder>
      <ContainerDiv>
        <PostHeaderContainer>
          <BackArrow>
            <ArrowSvg />
            <Link link={"/category/swiftui"}>Back to posts</Link>
          </BackArrow>
          <h1>{title}</h1>
          <div>
            <AuthorLink date={date} author={author} />
            <Category category={categories} />
          </div>
        </PostHeaderContainer>
        <Html2React html={post.content.rendered} />
      </ContainerDiv>
    </InfiniteBorder>
  );
};

export default connect(Post);

// ------------------------------------------

const InfiniteBorder = styled.div`
  border-bottom: 1px solid var(--light-border);
`;

const BackArrow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: auto;
  a {
    margin-block-start: auto;
    margin-block-end: auto;
    padding: 0em 0.8em;
    color: var(--secondary-text-colour);
  }
  a:hover {
    text-decoration: none;
    color: var(--text-colour);
  }
  svg {
    height: 0.9em;
    width: auto;
    fill: var(--secondary-text-colour);
  }
`;
const PostHeaderContainer = styled.div`
  padding: 1em 1em 1em 1em;
  h1 {
    padding-top: 0.7em;
    padding-bottom: 0.1em;
    margin-left: 0em;
  }
`;

const Code = `
  code {
    font-family: "Roboto", sans-serif;
    padding: 0.3em;
    margin: 0em 0.3em;
    font-weight: var(--font-weight-title);

    font-size: 1.1rem;
    color: var(--accent-colour);
  }
`;

const PostContainer = styled.div`
  max-width: 20em;
  .wp-block-image {
  }
  * {
    max-width: 100%;
  }

  .wp-block-image {
    text-align: center;
  }

  img {
    border-radius: var(--border-radius);
    height: auto;
    text-align: center;
  }

  margin-right: auto;
  margin-left: auto;
  max-width: 48rem;
  padding: 0em 1em;
  ul {
    color: var(--text-colour);
    ${Code}
  }
  p {
    font-weight: var(--font-weight-text);
    ${Code}
  }
  figure {
    text-align: center;
    width: 100% !important;
    margin-left: auto;
    margin-right: auto;
  }

  figcaption {
    padding: 0.5em 0em;
    text-align: center;
    color: var(--secondary-text-colour);
    font-weight: 300;
    font-size: 0.8rem;
  }
`;
