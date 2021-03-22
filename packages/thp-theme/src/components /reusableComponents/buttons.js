import React from "react";
import { styled } from "frontity";

const Primary = ({ children, ...props }) => (
  <PrimaryButton>{children}</PrimaryButton>
);
const Secondary = ({ children, disabled }) => (
  <SecondaryButton disabled={disabled}>{children}</SecondaryButton>
);

const PrimaryButton = styled.button`
  white-space: normal;
  display: inline;
  box-sizing: border-box;
  padding: 10px 20px;
  border-radius: 0.2em;
  text-transform: uppercase;
  font-size: 0.875rem;
  font-weight: 500;
  background: var(--accent-colour);
  color: white;
  border-style: none;
  margin-left: 0.3em;
  -webkit-transition-duration: 0.4s;
  transition-duration: 0.4s;
  &:hover {
    cursor: pointer;
    box-shadow: var(--hover-shadow);
  }
`;

const SecondaryButton = styled.button`
  box-sizing: border-box;
  padding: 10px 20px;
  border-radius: 0.2em;
  text-transform: uppercase;
  font-size: 0.875rem;
  font-weight: 500;
  border: 1px solid var(--text-colour);
  background: none;
  text-transform: uppercase;
  color: var(--text-colour);
  transition-duration: 0.4s;
  -webkit-transition-duration: 0.4s;

  &:hover {
    cursor: pointer;
    box-shadow: var(--hover-shadow);
  }
  &:disabled {
    cursor: default;
    border: 1px solid var(--disabled-components);
    box-shadow: none;
    color: var(--disabled-text);
  }
`;

export { Primary, Secondary };
