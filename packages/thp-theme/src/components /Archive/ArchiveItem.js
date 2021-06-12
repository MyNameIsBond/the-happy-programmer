import { connect, styled } from "frontity";
import Link from "@frontity/components/link";
import Image from "@frontity/components/image";
import { dataPost } from "../Handlers/dataManager";
import Category from "./category";
import AuthorLink from "./authorLink";

export default connect(({ item, state, libraries }) => {
  const { link, title, img, excerpt, author, date, categories } = dataPost(
    state,
    item
  );
  const { authorAvatar } = state.theme;
  const Html2React = libraries.html2react.Component;
  const breakpoints = state.theme.breakpoints;

  return (
    <div>
      <Link link={link}>
        <ImgFuturedMedia breakpoints={breakpoints}>
          <Image
            width="auto"
            height="304"
            srcSet={img.srcSet}
            src={img.src}
            alt={img.alt}
          />
        </ImgFuturedMedia>
      </Link>
      <AvatarInfoContainer breakpoints={breakpoints}>
        {authorAvatar && (
          <Atag link={author.link}>
            <AuthorAvatar
              height="50"
              width="auto"
              breakpoints={breakpoints}
              src={author.avatar}
            />
          </Atag>
        )}

        <InfoContainer authorAvatar={authorAvatar}>
          {authorAvatar || <Category category={categories} />}
          <Link link={link}>{title}</Link>
          {item.excerpt && (
            <SubText breakpoints={breakpoints}>
              <Html2React html={excerpt} />
            </SubText>
          )}
          {authorAvatar && <Category category={categories} />}
          <AuthorLink date={date} author={author} />
        </InfoContainer>
      </AvatarInfoContainer>
    </div>
  );
});

const Atag = styled(Link)`
  display: contents;
`;

const ImgFuturedMedia = styled.div`
  img {
    object-fit: cover;
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
const AuthorAvatar = styled(Image)`
  display: none;
  padding: 0em 1em;
  @media screen and (min-width: ${(props) => props.breakpoints.mobile}) {
    border-radius: 50%;
    cursor: pointer;
    display: inline-block;
    padding: 0em 0em;
  }
`;
const InfoContainer = styled.div`
  margin-top: 0.2em;
  padding: 0em ${(props) => (props.authorAvatar ? "1em" : "0em")};
  > a {
    margin-block-start: 1em;
    color: var(--text-colour);
    font-size: 17px;
    font-weight: var(--font-weight-title);
  }
`;

const SubText = styled.div`
  width: 22em;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-word;
  word-wrap: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  p {
    margin-block-end: 1em;
    margin-block-start: 1em;
    font-weight: var(--font-weight-text);
    overflow: hidden;
    text-overflow: ellipsis;
    color: var(--text-colour);
    word-break: break-word;
    word-wrap: break-word;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }

  p:nth-of-type(2) {
    display: none;
  }
`;
