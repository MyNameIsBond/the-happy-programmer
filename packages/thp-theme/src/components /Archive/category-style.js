import { styled } from "frontity";
import Link from "@frontity/components/link";

const CategoryContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding-bottom: 0.3em;
`;

const TagLink = styled(Link)`
  font-size: 12px;
  font-weight: var(--font-weight-title);
  line-height: 18px;
  margin-right: 1em;
  margin-bottom: 0.5em;
  margin-left: 0em;
  color: var(--secondary-text-colour);
  background: none;
  text-transform: uppercase;
  border-radius: 2em;
  &:hover {
    color: var(--text-colour);
    text-decoration: none;
  }
`;

export { TagLink, CategoryContainer };
