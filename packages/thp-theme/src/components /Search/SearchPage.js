import React from "react";
import { connect, styled } from "frontity";
import SearchInput from "./SearchInput";
import { getData } from "../Handlers/dataManager";
import Archive from "../Archive/Archive";

const SearchPage = ({ state }) => {
  const data = getData(state);
  const { total, searchQuery } = data;
  return (
    <>
      <Archive searchQuery={searchQuery} />
    </>
  );
};

export default connect(SearchPage);
