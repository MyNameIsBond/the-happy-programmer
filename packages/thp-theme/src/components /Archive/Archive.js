import { connect, styled } from "frontity";
import { Fragment } from "react";
import ContainerDiv from "../reusable-components/container";
import { getData } from "../handlers/data-manager";
import SearchInput from "../search/search-input";
import ArchiveItem from "./archive-item";
import breakpoints from "../constants/constants-string";

const Archive = ({ state, searchQuery }) => {
  const data = getData(state);
  return (
    <>
      <SearchInput searchQuery={searchQuery} />
      <ContainerDiv>
        <ArchiveContainer>
          {data.items.map(({ type, id }) => {
            const item = state.source[type][id];
            return (
              <Fragment key={item.id}>
                <ArchiveItem item={item} />
              </Fragment>
            );
          })}
        </ArchiveContainer>
      </ContainerDiv>
    </>
  );
};

export default connect(Archive);

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
