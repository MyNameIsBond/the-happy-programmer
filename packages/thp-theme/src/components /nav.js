import { connect, styled } from "frontity";
import Link from "@frontity/components/link";
import ContainerDiv from "./reusable-components/container";
import Logo from "./constants/logo";

const Nav = ({ state }) => {
  return (
    <>
      <BottomBorder>
        <ContainerDiv>
          <NavContainer>
            <LogoContainer>
              <LogoLink link={"/"}>
                <Logo />
              </LogoLink>
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
      </BottomBorder>
    </>
  );
};

export default connect(Nav);

const BottomBorder = styled.div`
  height: auto;
  border-bottom: 1px solid var(--light-border);
`;

const LogoLink = styled(Link)`
  &:hover {
    text-decoration: none;
  }

  path {
    fill: var(--text-colour);
  }
  text {
    fill: var(--background-colour);
  }
  &:hover {
    text {
      transition: all 0.4s ease;

      display: block;
      fill: var(--text-colour);
    }
  }
`;

const MenuStyle = styled.div`
  @media screen and (max-width: 550px) {
    padding: 1em 0em;
    margin: 0.5em 0em;
    width: auto;
  }

  a {
    letter-spacing: 0.00938em;
    color: var(--secondary-text-colour);
    margin: 0em 1.5em;
    font-size: 14px;
    font-weight: var(--font-weight-title);
    position: relative;
    transition: 0.3s;
  }
  a:hover {
    text-decoration: none;
    color: var(--text-colour);
    transition: 0.3s;
  }
  a[aria-current="page"] {
    color: var(--text-colour);
  }
`;

const NavContainer = styled.nav`
  padding: 0.6em 0em 0.6em 1em;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 550px) {
    display: flex;
    flex-direction: column;
    padding: 1em 0em;
  }
`;

const LogoContainer = styled.div`
  svg {
    height: 2em;
    width: auto;
  }
  text {
    font-family: var(--font-titles);
    fill: var(--logo-colour);
  }
  circle:nth-of-type(2) {
    stroke: var(--logo-colour);
  }
  svg:hover {
    cursor: pointer;
  }
`;
