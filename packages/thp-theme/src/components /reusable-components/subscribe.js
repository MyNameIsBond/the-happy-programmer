import { MyInput } from "./inputs";
import { Primary } from "./buttons";
import { styled } from "frontity";
import breakpoints from "../constants/constants-string";

const SubscribeButton = () => (
  <SubscribeContainer>
    <MyInput placeholder={"example@email.com"}></MyInput>
    <Primary>Subscribe</Primary>
  </SubscribeContainer>
);

export { SubscribeButton };

const SubscribeContainer = styled.div`
  display: block;
  input {
    min-width: 200px;
    width: inherit;
    margin-right: 0;
    box-sizing: border-box;
    border-radius: var(--border-radius) 0 0 var(--border-radius);
    border-style: none;
    ${breakpoints.tablet} {
      margin-left: 0;
      text-align: left;
    }
  }

  button {
    margin-left: 0;
    padding: 1.05rem 1rem;
    border-radius: 0 0.2em 0.2em 0;
  }
`;
