import React from "react";
import { Primary, Secondary } from "../reusableComponents/buttons";
import { connect, styled } from "frontity";
import { CategoryContainer } from "./CategoryStyle";

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

export default connect(Category);
