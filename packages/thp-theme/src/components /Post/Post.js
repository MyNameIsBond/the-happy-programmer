import { connect, styled } from "frontity";
import { getData, dataPost } from "../Handlers/dataManager";
import { ContainerDiv } from "../reusableComponents/container";
import Category from "../Archive/category";
import AuthorLink from "../Archive/authorLink";
import Image from "@frontity/components/image";

const Post = ({ state, libraries }) => {
  const data = getData(state);
  const post = state.source[data.type][data.id];
  const Html2React = libraries.html2react.Component;

  const { content, date, img, title, excerpt, categories, author } = dataPost(
    state,
    post
  );
  return (
    <>
      <Thumbnail>
        <Image loading="lazy" src={img.src} />
      </Thumbnail>
      <ContainerDiv>
        <LandingContainer>
          <CatDateContainer>
            <Category category={categories} />
            <AuthorLink date={date} author={author} />
          </CatDateContainer>
          <CredentialContainer>
            <h1>{title}</h1>
          </CredentialContainer>
          <hr />
        </LandingContainer>
        <PostContainer>
          {/* <Html2React html={content ? content : ""} /> */}
        </PostContainer>
      </ContainerDiv>
    </>
  );
};

export default connect(Post);

const CatDateContainer = styled.div`
  justify-content: space-between;
  align-items: center;
  display: flex;
  padding-top: 1em;
  padding-bottom: 0.5em;
  p {
    margin-block-start: 0em;
  }
`;

const Thumbnail = styled.div`
  max-width: 90em;
  margin-right: auto;
  margin-left: auto;
  img {
    width: 100%;
    height: 30em;
    object-fit: cover;
    border-radius: var(--border-radius);
  }
`;

const LandingContainer = styled.div`
  padding: 2em 1em;
  hr {
    height: 0.04em;
    background-color: var(--secondary-text-colour);
    border: none;
  }
`;
const CredentialContainer = styled.div`
  h1 {
    margin-block-start: 0;
    font-size: 2.5rem;
    font-weight: 400;
  }
  .link-more {
    display: none;
  }
`;

const Code = `
  code {
    font-family: "Roboto", sans-serif;
    padding: 0.3em;
    margin: 0em 0.3em;
    font-weight: 500;
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
    font-weight: 400;
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
