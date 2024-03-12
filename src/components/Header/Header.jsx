import styled from "styled-components";
import ControlPanel from "./ControlPanel";
import { Link } from "react-router-dom";

const HeaderArea = styled.header`
  width: 98%;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-content: space-between;
  padding: 0 1%;
  gap: 2rem;
  z-index: 2;
`;

const Logo = styled.p`
  font-size: 3rem;
  color: red;
  font-weight: bold;
  margin: 0;
`;

const Nav = styled.nav`
  display: flex;
  width: 80%;
  gap: 1rem;
`;

const NavItem = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 1.2rem;

  &:hover {
    color: red;
  }
`;

export default function Header() {
  return (
    <HeaderArea>
      <Logo>WitFlix</Logo>
      <Nav>
        <NavItem to="/">Home</NavItem>
        <NavItem to="/">Movies</NavItem>
        <NavItem to="/">TV Shows</NavItem>
        <NavItem to="/">News & Popular</NavItem>
        <NavItem to="/">My List</NavItem>
        <NavItem to="/">Browse by Languages</NavItem>
      </Nav>
      <ControlPanel />
    </HeaderArea>
  );
}
