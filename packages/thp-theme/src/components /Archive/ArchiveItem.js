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
  const breakpoints = state.theme.breakpoints;

  return (
    <div>
      <img width="100%" src={img.src} alt={img.alt} />
      <AvatarInfoContainer breakpoints={breakpoints}>
        <AuthorAvatar src={author.avatar} />
        <InfoContainer>
          <Link link={link}>{title}</Link>
          <SubText dangerouslySetInnerHTML={{ __html: excerpt }} />
          <Category category={categories} />
          <DateText>{dt.toDateString()}</DateText>
        </InfoContainer>
      </AvatarInfoContainer>
    </div>
  );
};

const AvatarInfoContainer = styled.div`
  margin: 1em;
  padding: 0em 1em;
  display: flex;
  flex-direction: row;
  p {
    margin-block-start: 0em;
  }
`;
const AuthorAvatar = styled.img`
  height: 4rem;
  width: auto;
  border-radius: 50%;
`;
const InfoContainer = styled.div`
  margin-top: 0.5em;
  padding: 0em 1em;
  a {
    color: var(--text-colour);
    font-weight: 500;
  }
`;

const DateText = styled.p`
  font-size: 0.9em;
  margin: 1em 0em;
  padding: 1em 0em;
`;

const SubText = styled.p`
  max-width: 350px;
  p {
    overflow: hidden;
    text-overflow: normal;
    white-space: nowrap;
  }
  a {
    display: none;
  }
`;

export default connect(ArchiveItem);
