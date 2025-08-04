import {Nav, NavBuffer, NavLink, NavList, NavMenu} from "./NavbarElements";

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavMenu>
                    <NavList>
                        <li>
                        <NavLink to="/">HOME</NavLink>
                        </li>
                        <NavBuffer>|</NavBuffer>
                        <li>
                        <NavLink to="/portfolio">PORTFOLIO</NavLink>
                        </li>
                        <NavBuffer>|</NavBuffer>
                        <li>
                        <NavLink to="/contact">CONTACT</NavLink>
                        </li>
                    </NavList>
                </NavMenu>
            </Nav>
        </>
    )
}

export default Navbar;

/*
import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  width: 100%;
  height: 60px;
  background-color: #333;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
`;

const NavContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`;

const NavLogo = styled.a`
  color: white;
  text-decoration: none;
  font-size: 1.5rem;
`;

const NavMenu = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const NavItem = styled.li`
  margin-left: 20px;
`;

const NavLink = styled.a`
  color: white;
  text-decoration: none;
  padding: 8px 16px;

  &:hover {
    background-color: #555;
    border-radius: 4px;
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <NavContainer>
        <NavLogo href="/">Logo</NavLogo>
        <NavMenu>
          <NavItem><NavLink href="/">Home</NavLink></NavItem>
          <NavItem><NavLink href="/portfolio">PORTFOLIO</NavLink></NavItem>
          <NavItem><NavLink href="/contact">Contact</NavLink></NavItem>
        </NavMenu>
      </NavContainer>
    </Nav>
  );
};

export default Navbar;*/
