import React from "react";
import { connect, styled } from "frontity";
import ArchiveItem from "./ArchiveItem";
import { MyInput } from "../reusableComponents/inputs";
import { ContainerDiv } from "../reusableComponents/container";
import { getData } from "../Handlers/dataManager";
const Archive = ({ state }) => {
  const data = getData(state);
  const breakpoints = state.theme.breakpoints;
  return (
    <ContainerDiv>
      <InputContainer>
        <MyInput />
      </InputContainer>
      {data.taxonomy && <p>{state.source[data.taxonomy][data.id].name}</p>}
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

const InputContainer = styled.span`
  width: 100%;

  background-color: yellow;
  display: block;
  input {
    display: block;
    width: 100%;
    padding: 1em;
    margin: 0em 0em;
  }
`;

export default connect(Archive);
