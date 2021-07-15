import { useState } from "react";
import { connect, styled } from "frontity";
import { getData, urlToStg } from "../Handlers/dataManager";
import { MyInput } from "../reusableComponents/inputs";
import SearchSvg from "../svg/searchSvg";
import { breakpoints } from "../constants/constants-string";
import { ContainerDiv } from "../reusableComponents/container";

export const SearchInput = ({ state, searchQuery, actions }) => {
  const data = getData(state);
  const { total } = data;

  const breakpoints = state.theme.breakpoints;
  const searchQ = () => {
    const q = searchQuery ? urlToStg(searchQuery) : "";
    return q;
  };
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
      <InfiniteBoarder>
        <ContainerDiv>
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
            <SearchSvg />
            <MyInput
              value={search}
              onChange={(e) => setsearch(e.target.value)}
              placeholder="Search posts..."
            />
          </InputContainer>
        </ContainerDiv>
      </InfiniteBoarder>

      <ContainerDiv>
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
            support me on{" "}
            <a
              rel="noreferrer"
              href="https://www.patreon.com/thehappyprogrammer"
              target="_blank"
            >
              Patreon
            </a>
          </SupportPatreonText>
        </SearchTag>
      </ContainerDiv>
    </>
  );
};

const InfiniteBoarder = styled.div`
  border-bottom: 1px solid var(--light-border);
  padding: 1.5em 0em;
  margin-bottom: 1em;
`;

const SupportPatreonText = styled.p`
  padding: 0em;
  margin: 0em;
  margin-right: auto;
  ${breakpoints.smallMobile} {
    margin: auto;
    margin-right: 0;
  }
`;
const ArchiveTitle = styled.h1`
  padding: 0em 0.3em;
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
  flex-direction: column;
  align-items: flex-start;
  ${breakpoints.smallMobile} {
    flex-direction: row;
    display: flex;
  }
  ${breakpoints.mobile} {
    flex-direction: row;
  }
`;
const InputContainer = styled.form`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  svg {
    height: 1em;
    width: auto;
    position: relative;
    left: 1.8em;
    top: 2.65em;
    stroke: var(--secondary-text-colour);
  }
  input {
    width: auto;
    padding: 0.5em 0.5em 0.5em 2.5em;
    margin: 2em 1em 1em 0em;
  }
`;

export default connect(SearchInput);
