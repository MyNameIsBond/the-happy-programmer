import React from "react";
import { connect, styled } from "frontity";
import { Primary } from "./reusableComponents/buttons";
import { ContainerDiv } from "./reusableComponents/container";
const Error404 = ({ state }) => {
  const breakpoints = state.theme.breakpoints;
  return (
    <ContainerDiv>
      <Container404 breakpoints={breakpoints}>
        <CredentialsContainer>
          <h1>It looks like you are lost</h1>
          <p>The page you are looking is not available</p>
          <Primary>Go Home</Primary>
        </CredentialsContainer>
        <Text404>404</Text404>
      </Container404>
    </ContainerDiv>
  );
};
export default connect(Error404);

const CredentialsContainer = styled.div`
  h1 {
    font-weight: 300;
  }
`;

const Text404 = styled.p`
  font-size: 20rem;
  font-weight: 500;
  color: var(--secondary-colour);
`;

const Container404 = styled.div`
  padding: 0 2em;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column-reverse;
  justify-content: space-between;
  @media screen and (min-width: ${(props) => props.breakpoints.tablet}) {
    flex-direction: row;
  }
`;
