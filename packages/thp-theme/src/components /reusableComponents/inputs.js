import styled from "@emotion/styled";
import React from "react";

const MyInput = ({ children, placeholder }) => (
  <InputStyle placeholder={placeholder}>{children}</InputStyle>
);

const InputStyle = styled.input`
  width: 40%;
  padding: 1em 1em;
  border-radius: 0.3em;
  margin: 0em 0.5em;
  border-style: none;
  font-size: 1rem;
  box-shadow: var(--hover-shadow);
  color: var(--text-colour);
  &::placeholder {
    color: lightgray;
    opacity: 1;
    font-family: "Roboto", sans-serif;
    font-weight: 300;
  }
`;

export { MyInput };
