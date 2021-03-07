import React from "react";
import { connect, styled, css } from "frontity";

const Primary = ({ children }) => <PrimaryButton>{children}</PrimaryButton>;
const Secondary = ({ children, disabled }) => (
  <SecondaryButton disabled={disabled}>{children}</SecondaryButton>
);

const PrimaryButton = styled.button`
  min-width: 64px;
  box-sizing: border-box;
  padding: 10px 20px;
  border-radius: 0.2em;
  text-transform: uppercase;
  font-size: 0.875rem;
  font-weight: 500;
  background: var(--accent-colour);
  color: #f8f8f8;
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
  min-width: 64px;
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
  -webkit-transition-duration: 0.4s;
  transition-duration: 0.4s;

  &:hover {
    cursor: pointer;
    box-shadow: var(--hover-shadow);
  }
  button:disabled,
  button[disabled] {
    border: 1px solid #999999;
    background-color: #cccccc;
    color: #666666;
  }
  button:hover:disabled,
  button:hover:[disabled] {
    cursor: grab;
  }
`;

export { Primary, Secondary };
