import { connect, styled } from "frontity";
import Link from "@frontity/components/link";
import Image from "@frontity/components/image";
import { dataPost } from "../Handlers/dataManager";
import Category from "./category";
import AuthorLink from "./authorLink";

const ArchiveItem = ({ item, state, libraries }) => {
  const { link, title, img, excerpt, author, date, categories } = dataPost(
    state,
    item
  );
  const Html2React = libraries.html2react.Component;
  const breakpoints = state.theme.breakpoints;

  return (
    <div>
      <Link link={link}>
        <ImgFuturedMedia breakpoints={breakpoints}>
          <Image loading="lazy" src={img.src} alt={img.alt} />
        </ImgFuturedMedia>
      </Link>
      <AvatarInfoContainer breakpoints={breakpoints}>
        <Link link={author.link}>
          <AuthorAvatar
            loading="lazy"
            breakpoints={breakpoints}
            src={author.avatar}
          />
        </Link>
        <InfoContainer>
          <Link link={link}>{title}</Link>
          {item.excerpt && (
            <SubText breakpoints={breakpoints}>
              <Html2React html={excerpt} />
            </SubText>
          )}
          <Category category={categories} />
          <AuthorLink date={date} author={author} />
        </InfoContainer>
      </AvatarInfoContainer>
    </div>
  );
};

const ImgFuturedMedia = styled.div`
  img {
    width: 100%;
    @media screen and (min-width: ${(props) => props.breakpoints.tablet}) {
      border-radius: var(--border-radius);
    }
    &:hover {
      cursor: pointer;
    }
  }
`;

const AvatarInfoContainer = styled.div`
  margin: 1em 0em;
  padding: 0em 0em;
  display: flex;
  flex-direction: row;
  p {
    margin-block-start: 0.1em;
  }
  @media screen and (min-width: ${(props) => props.breakpoints.smallMobile}) {
    padding: 0em 0.5em;
  }

  @media screen and (min-width: ${(props) => props.breakpoints.mobile}) {
    padding: 0.5em 0.5em;
  }

  @media screen and (min-width: ${(props) => props.breakpoints.tablet}) {
    margin: 0.5em 0em;
    padding: 0.5em 0.1em;
  }
`;
const AuthorAvatar = styled.img`
  display: none;
  padding: 0em 1em;
  @media screen and (min-width: ${(props) => props.breakpoints.mobile}) {
    height: 4rem;
    width: auto;
    border-radius: 50%;
    cursor: pointer;
    display: inline-block;
    padding: 0em 0em;
  }
`;
const InfoContainer = styled.div`
  margin-top: 0.5em;
  padding: 0em 1em;
  > a {
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
  width: 22em;
  word-break: break-word;
  word-wrap: break-word;
  hyphens: auto;
  p {
    margin-block-end: 0.5em;
    font-weight: 400;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: var(--secondary-text-colour);
    word-break: break-word;
    word-wrap: break-word;
  }

  p:nth-of-type(2) {
    display: none;
  }
`;

export default connect(ArchiveItem);
