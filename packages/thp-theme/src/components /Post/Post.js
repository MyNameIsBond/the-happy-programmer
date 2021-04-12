import { connect, styled } from "frontity";
import React from "react";
import { getData, dataPost } from "../Handlers/dataManager";
import { ContainerDiv } from "../reusableComponents/container";
const Post = ({ state, libraries }) => {
  const data = getData(state);
  const post = state.source[data.type][data.id];
  const Html2React = libraries.html2react.Component;
  const { content } = dataPost(state, post);
  return (
    <ContainerDiv>
      <PostContainer>
        <Html2React html={content} />
      </PostContainer>
    </ContainerDiv>
  );
};

const PostContainer = styled.div`
  margin-right: auto;
  margin-left: auto;
  max-width: 50em;
  padding: 0em 1em;
  p {
    font-weight: 400;
  }
  figure {
    margin-left: auto;
    margin-right: auto;
  }

  figcaption {
    padding: 0.5em 0em;
    text-align: center;
    color: var(secondary-text-colour);
    font-weight: 300;
    font-size: 0.8rem;
  }
  pre {
    display: none;
  }
`;

export default connect(Post);
