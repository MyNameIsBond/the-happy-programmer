import React from "react";
import { connect, styled } from "frontity";
import Link from "@frontity/components/link";
import { dataPost } from "../Handlers/dataManager";
import Category from "./Category";

const ArchiveItem = ({ item, state, actions, libraries }) => {
  const { link, title, img, excerpt, author, date, categories } = dataPost(
    state,
    item
  );
  const Html2React = libraries.html2react.Component;
  const dt = new Date(date);
  const breakpoints = state.theme.breakpoints;

  return (
    <div>
      <ImgFuturedMedia
        onClick={(e) => actions.router.set(link)}
        breakpoints={breakpoints}
        src={img.src}
        alt={img.alt}
      />
      <AvatarInfoContainer breakpoints={breakpoints}>
        <AuthorAvatar
          onClick={(e) => actions.router.set(author.link)}
          src={author.avatar}
        />
        <InfoContainer>
          <Link link={link}>{title}</Link>
          {item.excerpt && (
            <SubText>
              <Html2React html={excerpt} />
            </SubText>
          )}
          <Category category={categories} />
          <DateText>{dt.toDateString()}</DateText>
        </InfoContainer>
      </AvatarInfoContainer>
    </div>
  );
};

const ImgFuturedMedia = styled.img`
  width: 100%;
  @media screen and (min-width: ${(props) => props.breakpoints.tablet}) {
    border-radius: var(--border-radius);
  }
  &:hover {
    cursor: pointer;
  }
`;

const AvatarInfoContainer = styled.div`
  margin: 1em;
  padding: 0em 1em;
  display: flex;
  flex-direction: row;
  p {
    margin-block-start: 0.1em;
  }
  @media screen and (min-width: ${(props) => props.breakpoints.tablet}) {
    margin-left: 0em;
    padding-left: 0em;
  }
`;
const AuthorAvatar = styled.img`
  height: 4rem;
  width: auto;
  border-radius: 50%;
  cursor: pointer;
`;
const InfoContainer = styled.div`
  margin-top: 0.5em;
  padding: 0em 1em;
  a {
    color: var(--text-colour);
    font-size: 17px;
    font-weight: 500;
  }
`;

const DateText = styled.p`
  font-size: 0.9em;
  margin: 1em 0em;
  padding: 0 0em;
  color: var(--secondary-text-colour);
  font-weight: 400;
`;

const SubText = styled.div`
  max-width: 350px;

  p {
    margin-block-end: 0.5em;
    font-weight: 400;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: var(--secondary-text-colour);
  }

  p:nth-of-type(2) {
    display: none;
  }
`;

export default connect(ArchiveItem);
