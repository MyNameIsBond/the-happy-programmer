import { styled } from "frontity";

const MyInput = ({ placeholder, ...props }) => (
  <InputStyle {...props} placeholder={placeholder} />
);

const InputStyle = styled.input`
  color: var(--input-text-colour);
  width: 40%;
  padding: 0.9em 1em;
  background: var(--input-background-colour);
  border-radius: var(--border-radius);
  margin: 0em 0.5em;
  border: solid 1px var(--border-input);
  font-size: 1rem;
  color: var(--text-colour);
  &::placeholder {
    color: #989898;
    opacity: 1;
    font-family: "Roboto", sans-serif;
    font-weight: 300;
  }
  &:focus {
    outline: none;
    border-color: var(--secondary-colour);
    box-shadow: 0 0 0 0.2rem rgba(255, 101, 132, 0.25);
  }
`;

export { MyInput };
