import { connect, styled } from "frontity";
import { CategoryContainer, TagLink } from "./category-style";
import { getData } from "../handlers/data-manager";
import { homeConstants } from "../constants/constants-string";

const Category = connect(({ category, state }) => {
  const { socials } = homeConstants.AuthorInfo;
  const data = getData(state);
  const { isPostType, isPost } = data;
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
});

export default Category;

const Patreonbutton = styled.div`
  a {
    box-shadow: none;
    text-transform: capitalize;
    display: flex;
    flex-direction: row;
    align-items: center;
    background: ${(props) => props.color};
    color: white;
    border-color: ${(props) => props.color};
  }
  a:hover {
    border-color: ${(props) => props.color};
    background: ${(props) => props.color};
  }
`;
