import React from "react";
import { MyInput } from "./inputs";
import { Primary } from "./buttons";
import { styled } from "frontity";

const SubscribeButton = ({ children }) => (
  <SubscribeContainer>
    <MyInput placeholder={"email.example.com"}></MyInput>
    <Primary>Subscribe</Primary>
  </SubscribeContainer>
);

const SubscribeContainer = styled.div`
  input {
    margin-right: 0;
    padding: 1em 1em;
    box-sizing: border-box;
    border-radius: 0.2em 0 0 0.2em;
  }
  button {
    margin-left: 0;
    padding: 1.1rem 1rem;
    border-radius: 0 0.2em 0.2em 0;
  }
`;

export { SubscribeButton };
