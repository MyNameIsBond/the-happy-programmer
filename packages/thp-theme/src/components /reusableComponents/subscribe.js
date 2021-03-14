import React from "react";
import { MyInput } from "./inputs";
import { Primary } from "./buttons";
import { styled, connect } from "frontity";

const SubscribeButton = ({ state }) => {
  const breakpoints = state.theme.breakpoints;
  return (
    <SubscribeContainer breakpoints={breakpoints}>
      <MyInput placeholder={"example@email.com"}></MyInput>
      <Primary>Subscribe</Primary>
    </SubscribeContainer>
  );
};

const SubscribeContainer = styled.div`
  display: block;
  input {
    color: var(--input-text-colour);
    box-shadow: var(--footer-shadow);
    min-width: 200px;
    width: inherit;
    margin-right: 0;
    padding: 1em 1em;
    box-sizing: border-box;
    border-radius: 0.2em 0 0 0.2em;
    color: var(--footer-text);
    @media screen and (min-width: ${(props) => props.breakpoints.tablet}) {
      margin-left: 0;
      text-align: left;
    }
  }

  input::placeholder {
    color: var(--secondary-background-colour);
    opacity: 1; /* Firefox */
    font-weight: 300;
  }

  button {
    margin-left: 0;
    padding: 1.1rem 1rem;
    border-radius: 0 0.2em 0.2em 0;
  }
`;
export default connect(SubscribeButton);
