import { styled } from "frontity";
import Link from "@frontity/components/link";

const CategoryContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const TagLink = styled(Link)`
  padding: 0.7em;
  font-size: 12px;
  font-weight: 500;
  line-height: 18px;
  padding: 0 7px;
  margin-right: 1em;
  margin-bottom: 1em;
  margin-left: 0em;
  color: var(--text-colour);
  background: var(--secondary-background-colour);
  border: 1px solid rgba(32, 33, 36, 0.16);
  border-radius: 2em;

  &:hover {
    text-decoration: none;
    background-color: var(--secondary-button-hover);
  }
`;

export { TagLink, CategoryContainer };
