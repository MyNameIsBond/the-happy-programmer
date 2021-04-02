import React, { useState } from "react";
import { connect, styled } from "frontity";
import { getData, urlToStg } from "../Handlers/dataManager";
import { default as searchIcon } from "../constants/searchIcon.svg";
import { MyInput } from "../reusableComponents/inputs";
import { Primary } from "../reusableComponents/buttons";
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
      <InputContainer breakpoints={breakpoints} onSubmit={searchSubmit}>
        <img src={searchIcon} />
        <MyInput
          value={search}
          onChange={(e) => setsearch(e.target.value)}
          placeholder="Search"
        />
      </InputContainer>
      {data.taxonomy && (
        <SearchTag>
          <CategoryText>
            {state.source[data.taxonomy][data.id].name}
          </CategoryText>
        </SearchTag>
      )}
      {data.isSearch && (
        <SearchTag>
          <CategoryText>{urlToStg(searchQuery)}</CategoryText>
          <CategoryText>Results: {total}</CategoryText>
        </SearchTag>
      )}
    </>
  );
};

const CategoryText = styled.p`
  font-size: 12px;
  font-weight: 500;
  line-height: 18px;
  padding: 0 7px;
  border: 1px solid green;
  margin-right: 1em;
  text-transform: uppercase;
  border-radius: 10em;
  color: var(--text-colour);
  background: var(--accent-colour);
  border: 1px solid var(--accent-colour);
`;
const SearchTag = styled.div`
  display: flex;
  padding: 0.5em 1em;
`;
const InputContainer = styled.form`
  @media screen and (min-width: ${(props) => props.breakpoints.tablet}) {
    padding-top: 5em;
  }
  padding-top: 2em;
  display: flex;
  width: 100%;
  img {
    height: 1.8em;
    position: relative;
    left: 2em;
    top: 2.65em;
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
