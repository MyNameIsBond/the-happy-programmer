import styled from "@emotion/styled";
import React from "react";

const MyInput = ({ children, placeholder }) => (
  <InputStyle placeholder={placeholder}>{children}</InputStyle>
);

const InputStyle = styled.input`
  color: var(--input-text-colour);
  width: 40%;
  padding: 1em 1em;
  border-radius: 0.3em;
  margin: 0em 0.5em;
  border-style: none;
  font-size: 1rem;
  box-shadow: var(--hover-shadow);
  &::placeholder {
    color: #989898;
    opacity: 1;
    font-family: "Roboto", sans-serif;
    font-weight: 300;
  }
`;

export { MyInput };
