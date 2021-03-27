import { connect, styled } from "frontity";
import React from "react";
import { getData, dataPost } from "../Handlers/dataManager";
import { ContainerDiv } from "../reusableComponents/container";
const Post = ({ state, libraries }) => {
  const data = getData(state);
  const post = state.source[data.type][data.id];
  const Html2React = libraries.html2react.Component;
  const { content } = dataPost(state, post);
  console.log("content", content);
  return (
    <ContainerDiv>
      <Html2React html={content} />
    </ContainerDiv>
  );
};

export default connect(Post);
