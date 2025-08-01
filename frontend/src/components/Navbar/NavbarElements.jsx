import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
    width: 100%;
    height: 70px;
    background-color: var(--perma-dark-2);
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
`;

export const NavLink = styled(Link)`
    color: var(--perma-light-1);
    display: flex;
    font-family: Squada-one;
    font-size: 35px;
    text-decoration: none;
    //margin-left: 20px;
    cursor: pointer;
    &:hover {
        color: color-mix(in srgb, var(--perma-light-1), var(--perma-light-2));
    }
    &.active {
        color: var(--perma-light-2);
    }
`;

export const NavList = styled.ul`
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
`;

export const NavBuffer = styled.li`
    color: var(--perma-light-1);
    display: flex;
    font-family: Squada-one;
    font-size: 35px;
    margin-right: 10px;
    margin-left: 10px;
`

export const NavMenu = styled.div`
    width: 100%;
    margin-right: 45px;
    display: flex;
    justify-content: right;
    align-items: center;
    @media screen and (max-width: 430px) {
        display: none;
    }
`;