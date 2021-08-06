import { styled, keyframes } from "frontity";
import { breakpoints } from "./constants/constants-string";
import { ContainerDiv } from "./reusable-components/container";
const Loading = () => (
  <ContainerDiv>
    <SpaceDiv>
      <Sceleton boarderRadius="5px" height="3.5em" width="100%" />
    </SpaceDiv>

    <LoadingContainer>
      {[...Array(12)].map((i) => (
        <div>
          <Sceleton boarderRadius="7px" height="20em" width="100%" />
          <SceletonLoaderContainer>
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
export default Loading;

const color = keyframes`
  0% {
    background-color: var(--secondary-background-colour);
  }
  50% {
    background-color: var(--background-colour);
  }
  100 {
    background-color: var(--input-background-colour);
  }
`;

const SpaceDiv = styled.div`
  padding: 9em 0em 0em 0em;
`;

const Sceleton = styled.div`
  border-radius: ${(props) => props.boarderRadius};
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  margin-bottom: ${(props) => props.marginBottom};
  background: var(--secondary-background-colour);
  position: relative;
  overflow: hidden;
  animation-name: ${color};
  animation-duration: 2s;
  animation-iteration-count: infinite;
`;

const LoadingContainer = styled.div`
  padding-top: 10em;
  padding: 5em 0em 0em 0em;
  display: grid;
  grid-template-columns: 1fr;
  grid-column-gap: 1em;
  grid-row-gap: 1em;

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

const TextSceletonContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1em 0em 1em 0em;
`;

const SceletonLoaderContainer = styled.div`
  padding: 1em 0em 2em 0em;
  display: flex;
`;
