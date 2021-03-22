import React from "react";
import { connect, styled } from "frontity";
import ArchiveItem from "./ArchiveItem";
import { MyInput } from "../reusableComponents/inputs";
import { ContainerDiv } from "../reusableComponents/container";
const Archive = ({ state }) => {
  const data = state.source.get(state.router.link);
  const breakpoints = state.theme.breakpoints;
  return (
    <ContainerDiv>
      <InputContainer>
        <MyInput />
      </InputContainer>
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
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;

const InputContainer = styled.div`
  input {
    width: 100%;
    margin-left: 0;
    margin-right: 0;
  }
`;

export default connect(Archive);
