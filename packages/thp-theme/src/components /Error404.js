import { styled } from "frontity";
import { Primary } from "./reusableComponents/buttons";
import Link from "@frontity/components/link";
import { ContainerDiv } from "./reusableComponents/container";
import { breakpoints } from "./constants/constants-string";
export const Error404 = () => {
  return (
    <ContainerDiv>
      <Container404>
        <CredentialsContainer>
          <h1>It looks like you are lost</h1>
          <p>The page you are looking is not available</p>
          <Link link="/">
            <Primary>Go Home</Primary>
          </Link>
        </CredentialsContainer>
        <Text404>404</Text404>
      </Container404>
    </ContainerDiv>
  );
};

const CredentialsContainer = styled.div`
  h1 {
    font-weight: var(--font-weight-text);
  }
  a {
    text-decoration: none;
  }
`;

const Text404 = styled.span`
  font-size: 10em;
  font-weight: var(--font-weight-title);

  color: var(--secondary-colour);
  text-shadow: 0.05em 0.05em var(--accent-colour);
`;

const Container404 = styled.div`
  padding: 10em 2em;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column-reverse;
  justify-content: space-between;
  ${breakpoints.tablet} {
    span {
      font-size: 20rem;
    }
    flex-direction: row;
  }
  ${breakpoints.smallMobile} {
    span {
      font-size: 15rem;
    }
  }

  ${breakpoints.web} {
    span {
      font-size: 20rem;
    }
  }
`;
