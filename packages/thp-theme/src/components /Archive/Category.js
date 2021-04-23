import React from "react";
import { Primary } from "../reusableComponents/buttons";
import { connect } from "frontity";
import { CategoryContainer } from "./CategoryStyle";
import Link from "@frontity/components/link";
import { getData } from "../Handlers/dataManager";

const Category = ({ category, state }) => {
  const data = getData(state);
  const { isPostType, isPost } = data;
  console.log("isPostType", isPostType, isPost);
  return (
    <CategoryContainer>
      {category.map((item) => (
        <Link link={item.link} key={item.id}>
          <Primary>
            <span>{item.name}</span>
          </Primary>
        </Link>
      ))}
      {(isPost && isPostType) ?? (
        <Primary>
          <span>be a Patreon</span>
        </Primary>
      )}
    </CategoryContainer>
  );
};

export default connect(Category);
