import { connect, styled } from "frontity";
import Link from "@frontity/components/link";
import Image from "@frontity/components/image";
import breakpoints from "../constants/constants-string";
import Category from "./categories.jsx";
import AuthorLink from "./author-link.jsx";

const ArchiveItem = ({ item, authorAvatar }) => {
  const { img, link, categories, excerpt, date, author, title } = item;

  const categoryRender = () => <Category category={categories} />;

  return (
    <>
      <ArchiveItemContainer>
        <Link link={link}>
          <ImgFuturedMedia>
            <Image srcSet={img.srcSet} src={img.src} alt={img.alt} />
          </ImgFuturedMedia>
        </Link>
        <AvatarInfoContainer>
          <InfoContainer authorAvatar={authorAvatar}>
            {authorAvatar || categoryRender()}
            <Link link={link}>
              <h5>{title}</h5>
            </Link>
            {item.excerpt && (
              <SubText>
                <div dangerouslySetInnerHTML={{ __html: excerpt }} />
              </SubText>
            )}
            {authorAvatar && categoryRender()}
            <AuthorLink date={date} author={author} />
          </InfoContainer>
        </AvatarInfoContainer>
      </ArchiveItemContainer>
    </>
  );
};

export default connect(ArchiveItem);

const ArchiveItemContainer = styled.div`
  background-color: var(--secondary-background-colour);
  display: grid;
  grid-template-rows: min-content;
  border-radius: var(--border-radius);
  box-shadow: none;
  transition: box-shadow, transform 0.16s ease-out;
  will-change: box-shadow, transform;
  transform: scale(1);
  &:hover {
    box-shadow: 2px 3px 20px var(--card-shadow);
    transform: scale(1.007);
  }
`;

const ImgFuturedMedia = styled.div`
  display: none;
  height: 11em;
  width: 100%;
  ${breakpoints.smallMobile} {
    display: block;
  }
  ${breakpoints.mobile} {
    height: 14em;
  }
  ${breakpoints.tablet} {
    height: 15em;
  }
  ${breakpoints.web} {
    height: 12em;
  }
  img {
    height: 100%;
    width: 100%;
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
    object-fit: cover;
    &:hover {
      cursor: pointer;
    }
  }
`;

const AvatarInfoContainer = styled.div`
  margin: 1em 0em;
  padding: 0em 0em;
`;
const AuthorAvatar = styled(Image)`
  display: none;
  padding: 0em 1em;
  ${breakpoints.mobile} {
    border-radius: 50%;
    cursor: pointer;
    display: inline-block;
    padding: 0em 0em;
  }
`;
const InfoContainer = styled.div`
  margin: 0.2em 1em auto 1em;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 0em ${(props) => (props.authorAvatar ? "1em" : "0em")};
  > a {
    color: var(--text-colour);
    font-weight: var(--font-weight-title);
  }

  h5 {
    margin: auto;
    color: var(--text-colour);
    text-overflow: ellipsis;
    word-break: break-word;
    overflow: hidden;
    word-wrap: break-word;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
  }
`;

const SubText = styled.div`
  max-width: 22em;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-word;
  word-wrap: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  p {
    margin-block-end: 1.5em;
    margin-block-start: 0.3em;
    font-weight: var(--font-weight-text);
    overflow: hidden;
    text-overflow: ellipsis;
    color: var(--text-colour);
    word-break: break-word;
    word-wrap: break-word;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  p:nth-of-type(2) {
    display: none;
  }
`;
