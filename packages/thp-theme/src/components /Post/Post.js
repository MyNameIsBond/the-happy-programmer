import { connect, styled } from "frontity";
import React from "react";
import { getData } from "../Handlers/dataManager";

const Post = ({ state, libraries }) => {
  const data = getData(state);
  const { content } = data;
  const Html2React = libraries.html2react.Component;

  return <Html2React html={content} />;
};

export default connect(Post);
