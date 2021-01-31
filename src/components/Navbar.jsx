import React from 'react';

import styled from 'styled-components';
import NavLogo from '../assets/images/logo.svg';
import MenuIcon from '@material-ui/icons/Menu';
import { Link as LinkS } from 'react-scroll';

const NavbarContainer = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 32px;

    @media screen and (min-width: 376px) {
    padding: 50px 97.5px;
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
    
`
const HamburgerIcon = styled.div`
      @media screen and (min-width: 376px) {
    display: none;
}
`
const NavLinkTop = styled(LinkS) `
    text-decoration: none;
    color: #7D828F;
    font-weight:700;
    @media screen and (min-width: 376px) {
    margin-left:10px;
    
}
`

function Navbar() {
    return (
        <NavbarContainer>
            <NavLogoDesktop src={NavLogo}/>
            <NavMenu>
                <NavItems>
                    <NavLinkTop to="/Portfolio">Portfolio</NavLinkTop>
                </NavItems>
                <NavItems>
                    <NavLinkTop to="/About">About Us</NavLinkTop>
                </NavItems>
                <NavItems>
                    <NavLinkTop to="/Contact">Contact</NavLinkTop>
                </NavItems>
            </NavMenu>
            <HamburgerIcon><MenuIcon style={{ fontSize: 40}} /></HamburgerIcon>
        </NavbarContainer>
    )
}

export default Navbar
