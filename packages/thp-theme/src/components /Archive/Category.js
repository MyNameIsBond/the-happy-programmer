import React from "react";
import Link from "@frontity/components/link";
import { Primary, Secondary } from "../reusableComponents/buttons";
import styled from "@emotion/styled";

const Category = ({ category }) => {
  return (
    <CategoryContainer>
      {category.map((item) => (
        <Secondary key={item.id}>
          <Link link={item.link}>{item.name}</Link>
        </Secondary>
      ))}
    </CategoryContainer>
  );
};

const CategoryContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  button {
    margin-right: 1em;
    margin-bottom: 1em;
  }

  button:hover {
    background: var(--accent-colour);
    color: white;
    border-color: var(--accent-colour);
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export { Category };
