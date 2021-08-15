import { connect } from "frontity";
import { CategoryContainer, TagLink } from "./category-style.jsx";
import { getData } from "../handlers/data-manager";
import socials from "../constants/socials";

const Category = ({ category, state }) => {
  const data = getData(state);
  const { isPostType } = data;
  return (
    <CategoryContainer>
      {isPostType ||
        category.map((item) => (
          <TagLink link={item.link} key={item.id} rel="noreferrer">
            <span>{item.name}</span>
          </TagLink>
        ))}
      {isPostType &&
        socials.map(([icon, link, desc, color]) => (
          <TagLink link={link} target="_blank">
            <span>{desc}</span>
          </TagLink>
        ))}
    </CategoryContainer>
  );
};

export default connect(Category);
