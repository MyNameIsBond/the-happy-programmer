import { Primary, LinkButton } from "../reusableComponents/buttons";
import { connect, styled } from "frontity";
import { CategoryContainer } from "./categoryStyle";
import Link from "@frontity/components/link";
import { getData } from "../Handlers/dataManager";
import { homeConstants } from "../constants/constants-string";

const Category = ({ category, state }) => {
  const { socials } = homeConstants.AuthorInfo;
  const data = getData(state);
  const { isPostType, isPost } = data;
  return (
    <CategoryContainer>
      {category.map((item) => (
        <LinkButton link={item.link} key={item.id}>
          <span>{item.name}</span>
        </LinkButton>
      ))}
      {isPostType &&
        socials.map(([icon, link, desc, color]) => (
          <Patreonbutton key={link} color={color}>
            <LinkButton link={link}>
              <PatreonImg loading="lazy" src={icon} />
              <span>{desc}</span>
            </LinkButton>
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
  button {
    box-shadow: none;
    text-transform: capitalize;
    display: flex;
    flex-direction: row;
    align-items: center;
    background: ${(props) => props.color};
    color: white;
    border-color: ${(props) => props.color};
  }
  button:hover {
    border-color: ${(props) => props.color};
    background: ${(props) => props.color};
  }
`;
