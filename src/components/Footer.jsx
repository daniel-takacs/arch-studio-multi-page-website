import React from 'react';
import NavLogo from '../assets/images/footer-logo.svg';
import ArrowForwardOutlinedIcon from '@material-ui/icons/ArrowForwardOutlined';
import {FooterNavbarContainer, FooterLogoContainer, FooterLogo, 
        FooterNavMenu, FooterNavItems, NavLink, FooterButtonWrapper, 
        Button} from './FooterElements'

function Footer() {
    return (
        <>
           <FooterNavbarContainer>
               <FooterLogoContainer className="footerlogo-container">
                   <FooterLogo className="footerlogo" to='/' src={NavLogo}/>
               </FooterLogoContainer>
            <FooterNavMenu>
                <FooterNavItems>
                    <NavLink to="/Portfolio">Portfolio</NavLink>
                </FooterNavItems>
                <FooterNavItems>
                    <NavLink to="/About">About Us</NavLink>
                </FooterNavItems>
                <FooterNavItems>
                    <NavLink to="/Contact">Contact</NavLink>
                </FooterNavItems>
            </FooterNavMenu>
            <FooterButtonWrapper><Button onClick={() => { alert('clicked') }}>See Our Portfolio<ArrowForwardOutlinedIcon /></Button></FooterButtonWrapper>
        </FooterNavbarContainer> 
        </>
    )
}

export default Footer
