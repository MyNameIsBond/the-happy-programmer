import { styled } from "frontity";

export const MyInput = ({ placeholder, ...props }) => (
  <InputStyle {...props} placeholder={placeholder} />
);

const InputStyle = styled.input`
  color: var(--input-text-colour);
  width: 40%;
  padding: 0.9em 1em;
  background: var(--background-colour);
  border-radius: var(--border-radius);
  margin: 0em 0.5em;
  border: solid 1px var(--light-border);
  font-size: 1rem;
  color: var(--text-colour);
  transition: all 0.2s ease;
  &::placeholder {
    color: var(--third-text-colour);
    opacity: 1;
    font-weight: var(--font-weight-text);
  }
  &:hover {
    border: solid 1px var(--hover-border-input);
  }

  &:focus {
    outline: none;
    border: solid 1px var(--secondary-text-colour);
  }
`;
