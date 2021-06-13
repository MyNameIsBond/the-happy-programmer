import { connect, styled } from "frontity";
import { ContainerDiv } from "../reusableComponents/container";
import { getData } from "../Handlers/dataManager";
import SearchInput from "../Search/SearchInput";
import ArchiveItem from "./archiveItem";
import { breakpoints } from "../constants/constants-string";
const Archive = connect(({ state, searchQuery }) => {
  const data = getData(state);
  return (
    <ContainerDiv>
      <SearchInput searchQuery={searchQuery} />
      <ArchiveContainer>
        {data.items.map(({ type, id }) => {
          const item = state.source[type][id];
          return <ArchiveItem key={item.id} item={item} />;
        })}
      </ArchiveContainer>
    </ContainerDiv>
  );
});

export default Archive;

const ArchiveContainer = styled.div`
  ${breakpoints.tablet} {
    padding: 0em 1em;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 2em;
  }
`;
