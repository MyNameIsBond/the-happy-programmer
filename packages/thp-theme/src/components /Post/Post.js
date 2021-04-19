import { connect, styled } from "frontity";
import React from "react";
import { getData, dataPost } from "../Handlers/dataManager";
import { ContainerDiv } from "../reusableComponents/container";
const Post = ({ state, libraries }) => {
  const data = getData(state);
  const post = state.source[data.type][data.id];
  const Html2React = libraries.html2react.Component;
  const { content, date, img, title, excerpt, categories } = dataPost(
    state,
    post
  );
  return (
    <>
      <LandingContainer>
        <TitleContainer></TitleContainer>
        <CredentialContainer></CredentialContainer>
      </LandingContainer>
      <ContainerDiv>
        <PostContainer>
          <Html2React html={content} />
        </PostContainer>
      </ContainerDiv>
    </>
  );
};

const LandingContainer = styled.div``;
const CredentialContainer = styled.div``;
const TitleContainer = styled.div``;

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
  max-width: 50em;
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
