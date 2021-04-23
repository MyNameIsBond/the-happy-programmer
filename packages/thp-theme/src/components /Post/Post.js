import { connect, styled } from "frontity";
import React from "react";
import { getData, dataPost } from "../Handlers/dataManager";
import { ContainerDiv } from "../reusableComponents/container";
import Category from "../Archive/Category";
const Post = ({ state, libraries }) => {
  const data = getData(state);
  const post = state.source[data.type][data.id];
  const Html2React = libraries.html2react.Component;
  const { content, date, img, title, excerpt, categories } = dataPost(
    state,
    post
  );

  console.log(img);
  return (
    <>
      <ContainerDiv>
        <LandingContainer>
          <Thumbnail src={img.src} />
          <CatDateContainer>
            <Category category={categories} />
          </CatDateContainer>
          <CredentialContainer>
            <h1>{title}</h1>
            <Html2React html={excerpt} />
          </CredentialContainer>
        </LandingContainer>
        <PostContainer>
          <Html2React html={content} />
        </PostContainer>
      </ContainerDiv>
    </>
  );
};

const CatDateContainer = styled.div`
  padding-top: 1.5em;
  padding-bottom: 0.5em;
`;

const Thumbnail = styled.img`
  width: 100%;
  border-radius: var(--border-radius);
`;

const LandingContainer = styled.div`
  padding: 2em 1em;
`;
const CredentialContainer = styled.div`
  h1 {
    margin-block-start: 0;
    font-size: 2.5rem;
    font-weight: 400;
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
  * {
    max-width: 100%;
  }

  img {
    border-radius: var(--border-radius);
  }

  margin-right: auto;
  margin-left: auto;
  max-width: 65em;
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

export default connect(Post);
