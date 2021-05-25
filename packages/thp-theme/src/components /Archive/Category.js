import { connect, styled } from "frontity";
import { CategoryContainer, TagLink } from "./categoryStyle";
import { getData } from "../Handlers/dataManager";
import { homeConstants } from "../constants/constants-string";

const Category = ({ category, state }) => {
  const { socials } = homeConstants.AuthorInfo;
  const data = getData(state);
  const { isPostType, isPost } = data;
  return (
    <CategoryContainer>
      {category.map((item) => (
        <TagLink link={item.link} key={item.id}>
          <span>{item.name}</span>
        </TagLink>
      ))}
      {isPostType &&
        socials.map(([icon, link, desc, color]) => (
          <Patreonbutton key={link} color={color}>
            <TagLink link={link}>
              <PatreonImg loading="lazy" src={icon} />
              <span>{desc}</span>
            </TagLink>
          </Patreonbutton>
        ))}
    </CategoryContainer>
  );
};

export default connect(Category);

const PatreonImg = styled.img`
  height: 1em;
  width: auto;
  filter: brightness(0) invert(1);
  padding-right: 0.3em;
`;

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
