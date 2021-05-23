import { connect, styled } from "frontity";
import { ContainerDiv } from "../reusableComponents/container";
import { getData } from "../Handlers/dataManager";
import SearchInput from "../Search/SearchInput";
import ArchiveItem from "./archiveItem";
const Archive = ({ state, searchQuery }) => {
  const data = getData(state);
  console.log("DATA:", state.source[data.taxonomy][data.id].name);
  const breakpoints = state.theme.breakpoints;
  return (
    <ContainerDiv>
      <SearchInput searchQuery={searchQuery} />
      <ArchiveContainer breakpoints={breakpoints}>
        {data.items.map(({ type, id }) => {
          const item = state.source[type][id];
          return <ArchiveItem key={item.id} item={item} />;
        })}
      </ArchiveContainer>
    </ContainerDiv>
  );
};

const ArchiveContainer = styled.div`
  @media screen and (min-width: ${(props) => props.breakpoints.tablet}) {
    padding: 0em 1em;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 2em;
  }
`;

export default connect(Archive);
