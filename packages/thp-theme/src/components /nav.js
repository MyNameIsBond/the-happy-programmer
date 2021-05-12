import { connect, styled } from "frontity";
import Link from "@frontity/components/link";
import Logo from "./constants/logo";
import { ContainerDiv } from "./reusableComponents/container";
const Nav = ({ state, actions }) => {
  return (
    <>
      <ContainerDiv>
        <NavContainer>
          <LogoContainer
            onClick={(e) => {
              actions.router.set("/");
            }}
          >
            <Link link={"/"}>
              <Logo />
            </Link>
          </LogoContainer>
          <MenuStyle>
            {state.theme.menu.map(([name, link]) => {
              const isCurrentPage = state.router.link === link;
              return (
                <Link
                  key={name}
                  link={link}
                  aria-current={isCurrentPage ? "page" : undefined}
                >
                  {name}
                </Link>
              );
            })}
          </MenuStyle>
        </NavContainer>
      </ContainerDiv>
    </>
  );
};

export default connect(Nav);

const MenuStyle = styled.div`
  @media screen and (max-width: 450px) {
    padding: 1em 0em;
    margin: 0.5em 0em;
    background-color: var(--secondary-background-colour);
    width: 100%;
  }

  a {
    letter-spacing: 0.00938em;
    color: var(--text-colour);
    margin: 0em 1.5em;
    font-size: 14px;
    font-weight: 500;
    position: relative;
    transition: 0.3s;
  }
  a:hover {
    text-decoration: none;
    color: var(--hover-nav-colour);
    transition: 0.3s;
  }

  a[aria-current="page"]:after {
    content: "";
    display: inline-block;
    position: absolute;
    border-radius: 100px;
    height: 3px;
    bottom: -6px;
    margin: 0 auto;
    left: 0;
    width: 60%;
    background: var(--accent-colour);
    -o-transition: 0.3s;
    -ms-transition: 0.3s;
    -moz-transition: 0.3s;
    -webkit-transition: 0.3s;
    transition: 0.3s;
  }
`;

const NavContainer = styled.nav`
  @media screen and (max-width: 450px) {
    background: var(--secondary-background-colour);
  }
  padding: 2em 0em 1em 1em;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 450px) {
    display: flex;
    flex-direction: column;
    padding: 1em 0em;
  }
`;

const LogoContainer = styled.css`
  fill: var(--logo-Colour);
  circle:nth-of-type(2) {
    stroke: var(--logo-Colour);
  }

  svg:hover {
    fill: var(--accent-colour);
    text-decoration: none !important;
    font-family: SF Pro Text;
    cursor: pointer;
  }
`;
