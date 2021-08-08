import { connect } from "frontity";
import { getData } from "../handlers/data-manager";
import Archive from "../archive/archive-list";

const SearchPage = ({ state }) => {
  const data = getData(state);
  const { searchQuery } = data;
  return (
    <>
      <Archive searchQuery={searchQuery} />
    </>
  );
};

export default connect(SearchPage);
