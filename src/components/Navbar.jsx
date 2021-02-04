import React, { useState } from 'react';
//import MenuIcon from '@material-ui/icons/Menu';
import './Navbar.scss';
import NavLogo from '../assets/images/logo.svg';

import HambIconImg from '../assets/images/icons/icon-hamburger.svg';
import CloseIconImg from '../assets/images/icons/icon-close.svg';


import { NavbarContainer, NavLogoDesktop, NavMenu, NavItems, NavLinks, 
    HamburgerIconWrapper, MenuIcon, CloseIcon } from './NavbarElements';

function Navbar() {
    const [sidebar, setSidebar] = useState(false);

    const clickHandler = () => {
        setSidebar(!sidebar)
    }

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
            <HamburgerIconWrapper className={sidebar ? "hamburger active" : "hamburger"}>
                <MenuIcon onClick={clickHandler} src={HambIconImg}/>
                <CloseIcon src={CloseIconImg}/>
            </HamburgerIconWrapper>
        </NavbarContainer>
    )
}

export default Navbar
