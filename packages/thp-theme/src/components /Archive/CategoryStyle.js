import { styled } from "frontity";
import Link from "@frontity/components/link";

const CategoryContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const TagLink = styled(Link)`
  font-size: 12px;
  font-weight: 500;
  line-height: 18px;
  padding: 0 7px;
  margin-right: 1em;
  margin-bottom: 1em;
  margin-left: 0em;
  color: var(--secondary-text-colour);
  background: none;
  border: 1px solid var(--category-border);
  border-radius: 2em;

  &:hover {
    text-decoration: none;
    background-color: var(--secondary-button-hover);
  }
`;

export { TagLink, CategoryContainer };
