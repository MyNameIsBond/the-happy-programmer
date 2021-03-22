import React from "react";
import { connect, styled } from "frontity";
import Link from "@frontity/components/link";
import { dataPost } from "../Handlers/dataManager";
import { Category } from "./Category";

const ArchiveItem = ({ item, state }) => {
  const { link, title, img, excerpt, author, date, categories } = dataPost(
    state,
    item
  );
  const dt = new Date(date);

  return (
    <>
      <img width="100%" src={img.src} alt={img.alt} />
      <AvatarInfoContainer>
        <AuthorAvatar src={author.avatar} />
        <InfoContainer>
          <Link link={link}>{title}</Link>
          <SubText dangerouslySetInnerHTML={{ __html: excerpt }} />
        </InfoContainer>
        <Category category={categories} />
        <DateText>{dt.toDateString()}</DateText>
      </AvatarInfoContainer>
    </>
  );
};

const AvatarInfoContainer = styled.div``;
const AuthorAvatar = styled.img`
  height: 4rem;
  width: auto;
  border-radius: 50%;
`;
const InfoContainer = styled.div``;

const DateText = styled.p`
  font-size: 0.9em;
`;

const SubText = styled.p`
  white-space: nowrap;
  a {
    display: none;
  }
`;

export default connect(ArchiveItem);
