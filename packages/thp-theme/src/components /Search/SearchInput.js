import React, { useState } from "react";
import { connect, styled } from "frontity";
import { getData, urlToStg } from "../Handlers/dataManager";
import { default as searchIcon } from "../constants/searchIcon.svg";
import { MyInput } from "../reusableComponents/inputs";

export const SearchInput = ({ state, searchQuery, actions }) => {
  const data = getData(state);
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
        <CategoryText>{state.source[data.taxonomy][data.id].name}</CategoryText>
      )}
      {data.isSearch && <CategoryText>{urlToStg(searchQuery)}</CategoryText>}
    </>
  );
};

const CategoryText = styled.p`
  padding: 0em 1em;
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
