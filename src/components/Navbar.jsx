import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import NavLogo from '../assets/images/logo.svg';
import MenuIcon from '@material-ui/icons/Menu';

const NavbarContainer = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 32px;

    @media screen and (min-width: 376px) {
    padding: 32px 97.5px;
}
`;
const NavMenu = styled.ul `
    display: none;
    list-style-type: none;

    @media screen and (min-width: 376px) {
    display: flex;
    
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

function Navbar() {
    return (
        <NavbarContainer>
            <NavLogoDesktop src={NavLogo}/>
            <NavMenu>
                <NavItems>
                    <Link to="/Portfolio">Portfolio</Link>
                </NavItems>
                <NavItems>
                    <Link to="/About">About Us</Link>
                </NavItems>
                <NavItems>
                    <Link to="/Contact">Contact</Link>
                </NavItems>
            </NavMenu>
            <HamburgerIcon><MenuIcon style={{ fontSize: 40}} /></HamburgerIcon>
        </NavbarContainer>
    )
}

export default Navbar
