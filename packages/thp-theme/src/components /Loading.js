import React from "react";
import { connect, styled, keyframes } from "frontity";
import { ContainerDiv } from "./reusableComponents/container";
const Loading = ({ state }) => {
  const breakpoints = state.theme.breakpoints;

  return (
    <ContainerDiv>
      <SpaceDiv />
      <Sceleton boarderRadius="5px" height="4em" width="100%" />

      <LoadingContainer breakpoints={breakpoints}>
        {[...Array(8)].map((i) => (
          <div>
            <Sceleton boarderRadius="7px" height="25em" width="100%" />
            <SceletonLoaderContainer>
              <Sceleton boarderRadius="100%" height="4em" width="4em" />
              <TextSceletonContainer>
                <Sceleton
                  marginBottom="1em"
                  boarderRadius="2px"
                  height="1em"
                  width="300px"
                />
                <Sceleton boarderRadius="2px" height=".5em" width="250px" />
              </TextSceletonContainer>
            </SceletonLoaderContainer>
          </div>
        ))}
      </LoadingContainer>
    </ContainerDiv>
  );
};
export default connect(Loading);

const load = keyframes`
from {
  left: -150px;
}
to   {
  left: 100%;
}
`;

const SpaceDiv = styled.div`
  padding: 4em;
`;

const Sceleton = styled.div`
  border-radius: ${(props) => props.boarderRadius};
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  margin-bottom: ${(props) => props.marginBottom};
  background: var(--secondary-text-colour);
  position: relative;
  overflow: hidden;
  &::before {
    content: "";
    display: block;
    position: absolute;
    left: -150px;
    top: 0;
    height: 100%;
    width: 150px;
    background: linear-gradient(
      to right,
      transparent 0%,
      #e3e3e3 50%,
      transparent 100%
    );
    animation: ${load} 1s cubic-bezier(0.4, 0, 0.2, 1) infinite;
  }
`;

const LoadingContainer = styled.div`
  padding-top: 10em;
  padding: 5em 0em 0em 0em;
  display: grid;
  grid-template-columns: 1fr;
  grid-column-gap: 2em;
  grid-row-gap: 2em;

  @media screen and (min-width: ${(props) => props.breakpoints.tablet}) {
    grid-template-columns: 1fr 1fr;
  }
`;

const TextSceletonContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1em;
`;

const SceletonLoaderContainer = styled.div`
  padding-top: 1em;
  padding-left: 0.5em;
  display: flex;
`;
