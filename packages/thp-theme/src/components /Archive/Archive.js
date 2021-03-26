import React from "react";
import { connect, styled } from "frontity";
import ArchiveItem from "./ArchiveItem";
import { MyInput } from "../reusableComponents/inputs";
import { ContainerDiv } from "../reusableComponents/container";
import { getData } from "../Handlers/dataManager";
import { default as searchIcon } from "../constants/searchIcon.svg";
import Category from "./Category";
const Archive = ({ state }) => {
  const data = getData(state);
  const breakpoints = state.theme.breakpoints;
  return (
    <ContainerDiv>
      <InputContainer>
        <img src={searchIcon} />
        <MyInput placeholder="Search" />
      </InputContainer>
      {data.taxonomy && (
        <CategoryText>{state.source[data.taxonomy][data.id].name}</CategoryText>
      )}
      <ArchiveContainer breakpoints={breakpoints}>
        {data.items.map(({ type, id }) => {
          const item = state.source[type][id];
          return <ArchiveItem key={item.id} item={item} />;
        })}
      </ArchiveContainer>
    </ContainerDiv>
  );
};

const CategoryText = styled.p`
  padding: 0em 1em;
`;

const ArchiveContainer = styled.div`
  @media screen and (min-width: ${(props) => props.breakpoints.tablet}) {
    padding: 0em 1em;
    display: grid;

    grid-template-columns: 1fr 1fr;
    grid-column-gap: 2em;
  }
`;

const InputContainer = styled.span`
  padding-top: 5em;
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

export default connect(Archive);
