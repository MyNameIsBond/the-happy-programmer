import { styled } from "frontity";
import Link from "@frontity/components/link";
const Primary = ({ children, ...props }) => (
  <PrimaryButton {...props}>{children}</PrimaryButton>
);
const Secondary = ({ children, disabled, ...props }) => (
  <SecondaryButton {...props} disabled={disabled}>
    {children}
  </SecondaryButton>
);

const LinkButton = ({ children, ...props }) => (
  <SecondaryButtonLink {...props}>{children}</SecondaryButtonLink>
);

const DecorationLink = ({ children, ...props }) => (
  <DecLink {...props}>
    {children}
    <svg viewBox="0 0 13.503 23.619">
      <path
        d="M15.321,18l8.937-8.93a1.688,1.688,0,0,0-2.391-2.384L11.742,16.8a1.685,1.685,0,0,0-.049,2.327L21.86,29.32a1.688,1.688,0,0,0,2.391-2.384Z"
        transform="translate(24.754 29.813) rotate(180)"
      />
    </svg>
  </DecLink>
);

const DecLink = styled(Link)`
  svg {
    padding-top: 0em;
    height: 0.7em;
    width: 0.7em;
    fill: var(--secondary-colour);
    padding-left: 0.4em;
  }
`;

const SecondaryButtonLink = styled(Link)`
  box-sizing: border-box;
  padding: 10px 20px;
  border-radius: var(--border-radius);
  text-transform: uppercase;
  font-size: 0.875rem;
  font-weight: var(--font-weight-title);
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
  padding: 0.9rem;
  white-space: normal;
  display: inline;
  border-radius: var(--border-radius);
  text-transform: uppercase;
  font-size: 0.875rem;
  font-weight: var(--font-weight-title);

  background: var(--accent-colour);
  color: var(--background-colour);
  -webkit-transition-duration: 0.2s;
  transition-duration: 0.2s;
  border: 1px solid transparent;

  &:hover {
    cursor: pointer;
    border: 1px solid var(--accent-colour);
    color: var(--text-colour);
    background-color: var(--background-colour);
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
  font-weight: var(--font-weight-title);
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
    box-shadow: none;
    color: var(--disabled-text);
  }
  &:focus {
    outline: none;
  }
`;

export { Primary, Secondary, LinkButton, DecorationLink };
