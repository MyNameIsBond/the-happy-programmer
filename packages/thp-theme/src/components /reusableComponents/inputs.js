import styled from "@emotion/styled";
import React from "react";

const MyInput = ({ placeholder, ...props }) => (
  <InputStyle {...props} placeholder={placeholder} />
);

const InputStyle = styled.input`
  color: var(--input-text-colour);
  width: 40%;
  padding: 1em 1em;
  background: var(--input-background-colour);
  border-radius: var(--border-radius);
  margin: 0em 0.5em;
  border: solid 1px #2f2f2f;
  font-size: 1rem;
  &::placeholder {
    color: #989898;
    opacity: 1;
    font-family: "Roboto", sans-serif;
    font-weight: 300;
  }
`;

export { MyInput };
