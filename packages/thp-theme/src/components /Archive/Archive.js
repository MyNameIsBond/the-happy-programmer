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
  display: grid;
  margin-bottom: 1em;
  grid-template-columns: 1fr;
  padding: 0em 1em;
  grid-gap: 1em;

  ${breakpoints.smallMobile} {
    grid-template-columns: 1fr 1fr;
  }
  ${breakpoints.mobile} {
    grid-template-columns: 1fr 1fr;
  }
  ${breakpoints.tablet} {
    grid-template-columns: 1fr 1fr 1fr;
  }
  ${breakpoints.web} {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;
