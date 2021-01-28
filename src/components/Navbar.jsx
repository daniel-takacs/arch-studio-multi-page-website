import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import NavLogo from '../assets/images/logo.svg';


const NavbarContainer = styled.div `
    display: flex;
`;
const NavMenu = styled.ul `
    display: flex;
`;
const NavItems = styled.li `
    list-style: none;
`;
const NavLogoDesktop = styled.img `
    
`


function Navbar() {
    return (
        <NavbarContainer>
            <NavLogoDesktop src={NavLogo}/>
            <NavMenu>
                <NavItems>
                    <Link to="/">Home</Link>
                </NavItems>
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
        </NavbarContainer>
    )
}

export default Navbar
