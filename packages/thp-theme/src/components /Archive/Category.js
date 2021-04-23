import React from "react";
import { Primary } from "../reusableComponents/buttons";
import { connect, styled } from "frontity";
import { CategoryContainer } from "./CategoryStyle";
import Link from "@frontity/components/link";
import { getData } from "../Handlers/dataManager";
import { default as patreonIcon } from "../constants/patreonIcon.svg";
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
      {isPostType && (
        <Patreonbutton>
          <Link link="https://www.patreon.com/thehappyprogrammer">
            <Primary>
              <PatreonImg src={patreonIcon} />
              <span>Become a Patreon</span>
            </Primary>
          </Link>
        </Patreonbutton>
      )}
    </CategoryContainer>
  );
};

export default connect(Category);

const PatreonImg = styled.img`
  height: 0.9em;
  width: auto;
  filter: brightness(0) invert(1);
  padding-right: 0.3em;
`;

const Patreonbutton = styled.div`
  button {
    text-transform: capitalize;
    display: flex;
    flex-direction: row;
    align-items: center;
    background: #eb5354;
    color: white;
    border-color: #eb5354;
  }
  button:hover {
    border-color: #eb5354;
    background: #eb5354;
  }
`;
