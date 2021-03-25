import React from "react";
import { Primary, Secondary } from "../reusableComponents/buttons";
import { connect, styled } from "frontity";

const Category = ({ category, actions }) => {
  return (
    <CategoryContainer>
      {category.map((item) => (
        <Primary onClick={(e) => actions.router.set(item.link)} key={item.id}>
          <span>{item.name}</span>
        </Primary>
      ))}
    </CategoryContainer>
  );
};

const CategoryContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  button {
    padding: 0.7em;
    font-size: 12px;
    font-weight: 500;
    line-height: 18px;
    padding: 0 7px;
    margin-right: 1em;
    margin-bottom: 1em;
    margin-left: 0em;
    color: var(--secondary-text-colour);
    background: var(--secondary-background-colour);
    border: 1px solid var(--secondary-text-colour);
    border-radius: 2em;
  }

  button:hover {
    color: white;
    background-color: var(--accent-colour);
    border-color: var(--accent-colour);
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export default connect(Category);
