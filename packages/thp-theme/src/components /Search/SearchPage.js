import { connect } from "frontity";
import { getData } from "../Handlers/dataManager";
import Archive from "../Archive/archive";

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
