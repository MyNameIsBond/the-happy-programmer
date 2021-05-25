import { styled } from "frontity";
import Link from "@frontity/components/link";
const Primary = ({ children, ...props }) => (
  <PrimaryButton {...props}>{children}</PrimaryButton>
);
const Secondary = ({ children, disabled, ...props }) => (
  <SecondaryButton disabled={disabled}>{children}</SecondaryButton>
);

const LinkButton = ({ children, ...props }) => (
  <SecondaryButtonLink {...props}>{children}</SecondaryButtonLink>
);
const SecondaryButtonLink = styled(Link)`
  box-sizing: border-box;
  padding: 10px 20px;
  border-radius: var(--border-radius);
  text-transform: uppercase;
  font-size: 0.875rem;
  font-weight: 500;
  border: none;
  background: none;
  text-transform: uppercase;
  color: var(--text-colour);
  transition-duration: 0.4s;
  -webkit-transition-duration: 0.4s;
  &:hover {
    text-decoration: none;
    cursor: pointer;
    background: var(--secondary-button-hover);
  }
`;
const PrimaryButton = styled.button`
  white-space: normal;
  display: inline;
  box-sizing: border-box;
  padding: 10px 20px;
  border-radius: var(--border-radius);
  text-transform: uppercase;
  font-size: 0.875rem;
  font-weight: 500;
  background: var(--accent-colour);
  color: white;
  border-style: none;
  margin-left: 0.3em;
  -webkit-transition-duration: 0.4s;
  transition-duration: 0.4s;
  box-shadow: var(--button-shadow);
  &:hover {
    cursor: pointer;
    box-shadow: var(--hover-shadow);
    background: rgba(130, 65, 199, 0.8);
  }
  &:focus {
    outline: none;
    border-color: var(--secondary-colour);
  }
`;

const SecondaryButton = styled.button`
  box-sizing: border-box;
  padding: 10px 20px;
  border-radius: var(--border-radius);
  text-transform: uppercase;
  font-size: 0.875rem;
  font-weight: 500;
  border: none;
  background: none;
  text-transform: uppercase;
  color: var(--text-colour);
  transition-duration: 0.4s;
  -webkit-transition-duration: 0.4s;

  &:hover {
    cursor: pointer;
    background: var(--secondary-button-hover);
  }
  &:disabled {
    cursor: default;
    border: 1px solid var(--disabled-components);
    box-shadow: none;
    color: var(--disabled-text);
  }
  &:focus {
    outline: none;
  }
`;

export { Primary, Secondary, LinkButton };
