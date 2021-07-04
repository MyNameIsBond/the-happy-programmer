import { styled } from "frontity";
import Link from "@frontity/components/link";

const CategoryContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding-bottom: 0.5em;
`;

const TagLink = styled(Link)`
  font-size: 12px;
  font-weight: var(--font-weight-title);
  line-height: 18px;
  /* padding: 0 7px; */
  margin-right: 1em;
  margin-bottom: 0.5em;
  margin-left: 0em;
  color: var(--secondary-text-colour);
  background: none;
  text-transform: uppercase;
  /* border: 1px solid var(--category-border); */
  border-radius: 2em;
  /* &:hover {
    text-decoration: none;
    background-color: var(--secondary-button-hover);
  } */
  &:hover {
    color: var(--text-colour);
    text-decoration: none;
  }
`;

export { TagLink, CategoryContainer };
