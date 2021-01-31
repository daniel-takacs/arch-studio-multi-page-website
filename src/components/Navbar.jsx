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
`;
const NavMenu = styled.ul `
    display: ;
    list-style-type: none;
    
`;
const NavItems = styled.li `

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
            <MenuIcon style={{ fontSize: 40}} />
        </NavbarContainer>
    )
}

export default Navbar
