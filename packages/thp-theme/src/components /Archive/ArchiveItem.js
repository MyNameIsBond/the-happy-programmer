import React from "react";
import { connect, styled } from "frontity";
import Link from "@frontity/components/link";
import { dataPost } from "../Handlers/dataManager";

const ArchiveItem = ({ item, state }) => {
  const { link, title, img, excerpt, author, date } = dataPost(state, item);
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
        <Datee>{dt.toDateString()}</Datee>
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

const Datee = styled.p`
  font-size: 0.9em;
`;

const SubText = styled.p`
  white-space: nowrap;
  a {
    display: none;
  }
`;

export default connect(ArchiveItem);
