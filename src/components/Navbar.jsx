import React from 'react';

import styled from 'styled-components';
import NavLogo from '../assets/images/logo.svg';
import MenuIcon from '@material-ui/icons/Menu';
import { Link as LinkS } from 'react-router-dom';

const NavbarContainer = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 32px;

    @media screen and (min-width: 376px) {
    padding: 50px 0;
    justify-content: start;
}
`;
const NavMenu = styled.ul `
    display: none;
    list-style: none;

    @media screen and (min-width: 376px) {
    display: flex;
    margin-left: 55px;
    
}
    
`;
const NavItems = styled.li `
    padding: 0 10px;
`;
const NavLogoDesktop = styled.img `
    cursor: pointer;
`
const HamburgerIcon = styled.div`
      @media screen and (min-width: 376px) {
    display: none;
}
`
const NavLinks = styled(LinkS) `
    text-decoration: none;
    color: #7D828F;
    font-weight:700;
    @media screen and (min-width: 376px) {
    margin-left:10px;
    cursor: pointer;
}
`

function Navbar() {
    return (
        <NavbarContainer>
            <NavLogoDesktop to="/" src={NavLogo}/>
            <NavMenu>
                <NavItems>
                    <NavLinks to="/Portfolio">Portfolio</NavLinks>
                </NavItems>
                <NavItems>
                    <NavLinks to="/About">About Us</NavLinks>
                </NavItems>
                <NavItems>
                    <NavLinks to="/Contact">Contact</NavLinks>
                </NavItems>
            </NavMenu>
            <HamburgerIcon><MenuIcon style={{ fontSize: 40}} /></HamburgerIcon>
        </NavbarContainer>
    )
}

export default Navbar
