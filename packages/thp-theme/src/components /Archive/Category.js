import React from "react";
import { Primary, Secondary } from "../reusableComponents/buttons";
import { connect, styled } from "frontity";
import { CategoryContainer } from "./CategoryStyle";
import Link from "@frontity/components/link";

const Category = ({ category, actions }) => {
  return (
    <CategoryContainer>
      {category.map((item) => (
        <Link link={item.link} key={item.id}>
          <Primary>
            <span>{item.name}</span>
          </Primary>
        </Link>
      ))}
    </CategoryContainer>
  );
};

export default connect(Category);
