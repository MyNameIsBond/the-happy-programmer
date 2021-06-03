import { useState } from "react";
import { connect, styled } from "frontity";
import { getData, urlToStg } from "../Handlers/dataManager";
import Image from "@frontity/components/image";
import { MyInput } from "../reusableComponents/inputs";

export const SearchInput = ({ state, searchQuery, actions }) => {
  const data = getData(state);
  const { total } = data;

  const breakpoints = state.theme.breakpoints;
  const searchQ = () => {
    const q = searchQuery ? urlToStg(searchQuery) : "";
    return q;
  };
  //hook
  const [search, setsearch] = useState(searchQ);

  const searchSubmit = (e) => {
    e.preventDefault();
    if (search.trim().length > 0) {
      const s = search.replaceAll(" ", "+");
      actions.router.set(`/?s=${s.toLowerCase()}`);
      window.scrollTo(0, 0);
    }
  };

  return (
    <>
      {data.taxonomy && (
        <ArchiveTitle breakpoints={breakpoints}>
          {state.source[data.taxonomy][data.id].name}
        </ArchiveTitle>
      )}
      {data.isSearch && (
        <ArchiveTitle breakpoints={breakpoints}>
          {urlToStg(searchQuery)}
        </ArchiveTitle>
      )}
      {data.isAuthor && (
        <ArchiveTitle breakpoints={breakpoints}>Tony</ArchiveTitle>
      )}
      <InputContainer breakpoints={breakpoints} onSubmit={searchSubmit}>
        <Image
          height="29"
          windth="auto"
          src={
            "https://thehappyprogrammer.com/wp-content/uploads/2021/05/searchIcon.svg"
          }
        />
        <MyInput
          value={search}
          onChange={(e) => setsearch(e.target.value)}
          placeholder="Search"
        />
      </InputContainer>
      <SearchTag>
        {data.taxonomy && (
          <>
            <CategoryText>
              {state.source[data.taxonomy][data.id].name}
            </CategoryText>
            <CategoryText>Results: {total}</CategoryText>
          </>
        )}
        {data.isSearch && (
          <>
            <CategoryText>{urlToStg(searchQuery)}</CategoryText>
            <CategoryText>Results: {total}</CategoryText>
          </>
        )}
        {data.isAuthor && (
          <>
            <CategoryText>Author: Tony</CategoryText>
            <CategoryText>Posts: {total}</CategoryText>
          </>
        )}
        <SupportPatreonText>
          support me on <a>Patreon</a>
        </SupportPatreonText>
      </SearchTag>
    </>
  );
};

const SupportPatreonText = styled.p`
  padding: 0em;
  margin: 0em;
  margin-left: auto;
`;
const ArchiveTitle = styled.h1`
  padding: 0em 0.5em;
  margin-bottom: 0em;
  @media screen and (min-width: ${(props) => props.breakpoints.tablet}) {
    padding-top: 1em;
  }
  padding-top: 1em;
`;
const CategoryText = styled.p`
  font-size: 12px;
  font-weight: var(--font-weight-title);
  line-height: 18px;
  padding: 3px 10px;
  margin-right: 1em;
  border-radius: 10em;
  color: var(--text-colour);
  border: 1px solid var(--accent-colour);
`;
const SearchTag = styled.div`
  align-items: center;

  display: flex;
  padding: 0.5em 1em;
`;
const InputContainer = styled.form`
  display: flex;
  width: 100%;
  img {
    position: relative;
    transform: translate(2em, 2.75em);
    filter: grayscale(1);
  }
  input {
    flex-grow: 1;
    display: block;
    width: 100%;
    padding: 1em 1em 1em 3.5em;
    margin: 2em 1em 1em -0.6em;
  }
`;

export default connect(SearchInput);
