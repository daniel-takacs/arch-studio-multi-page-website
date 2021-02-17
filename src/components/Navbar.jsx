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
            <NavLinks to="/"><NavLogoDesktop  src={NavLogo}/></NavLinks>
            <NavMenu className={sidebar ? "nav-menu active" : "nav-menu"}>
                <NavItems className={sidebar ? "nav-items active" : "nav-items"}>
                    <NavLinks className="nav-links"  to="/Portfolio" >Portfolio</NavLinks>
                </NavItems>
                <NavItems className={sidebar ? "nav-items active" : "nav-items"}>
                    <NavLinks className="nav-links" to="/About" >About Us</NavLinks>
                </NavItems>
                <NavItems className={sidebar ? "nav-items active" : "nav-items"}>
                    <NavLinks className="nav-links" to="/Contact" >Contact</NavLinks>
                </NavItems>
            </NavMenu>
            <HamburgerIconWrapper className={sidebar ? "hamburger active" : "hamburger"}>
                <MenuIcon className="hamburger-icon"onClick={clickHandler} src={HambIconImg}/>
                <CloseIcon className="close-icon" onClick={clickHandler} src={CloseIconImg}/>
            </HamburgerIconWrapper>
        </NavbarContainer>
    )
}

export default Navbar
