import React from "react";
import { connect, styled } from "frontity";
import Link from "@frontity/components/link";
import { dataPost } from "../Handlers/dataManager";

const ArchiveItem = ({ item, state }) => {
  const { link, title, img, excerpt } = dataPost(state, item);

  return (
    <>
      <img width="100%" src={img.src} alt={img.alt} />
      <Link link={link}>{title}</Link>
      <SubText dangerouslySetInnerHTML={{ __html: excerpt }} />
    </>
  );
};

const SubText = styled.p`
  white-space: nowrap;
  a {
    display: none;
  }
`;

export default connect(ArchiveItem);
