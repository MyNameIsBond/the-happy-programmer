import React from "react";
import { connect, styled, keyframes } from "frontity";
const Loading = () => {
  return (
    <LoadingContainer>
      <LoadingSceleton />;
    </LoadingContainer>
  );
};

const load = keyframes`
from {
  left: -150px;
}
to   {
  left: 100%;
}
`;

export default connect(Loading);

const LoadingContainer = styled.div`
  padding: 0em 1em;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 2em;
`;

const LoadingSceleton = styled.div`
  border-radius: 4px;
  height: 200px;
  width: 200px;
  background: var(--text-colour);
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
      #bfbfbf 50%,
      transparent 100%
    );
    animation: ${load} 1s cubic-bezier(0.4, 0, 0.2, 1) infinite;
  }
`;
