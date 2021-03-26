import React from "react";
import { connect, styled } from "frontity";
import { getData } from "../Handlers/dataManager";
import { default as searchIcon } from "../constants/searchIcon.svg";
import { MyInput } from "../reusableComponents/inputs";

export const SearchInput = ({ state }) => {
  const data = getData(state);
  const breakpoints = state.theme.breakpoints;

  return (
    <>
      <InputContainer breakpoints={breakpoints}>
        <img src={searchIcon} />
        <MyInput placeholder="Search" />
      </InputContainer>
      {data.taxonomy && (
        <CategoryText>{state.source[data.taxonomy][data.id].name}</CategoryText>
      )}
    </>
  );
};

const CategoryText = styled.p`
  padding: 0em 1em;
`;

const InputContainer = styled.span`
  @media screen and (min-width: ${(props) => props.breakpoints.tablet}) {
    padding-top: 5em;
  }
  padding-top: 2em;
  display: flex;
  width: 100%;
  img {
    height: 1.8em;
    position: relative;
    left: 1.6em;
    top: 2.65em;
  }
  input {
    flex-grow: 1;
    display: block;
    width: 100%;
    padding: 1em 1em 1em 3.5em;
    margin: 2em 1em 1em -1em;
  }
`;

export default connect(SearchInput);
