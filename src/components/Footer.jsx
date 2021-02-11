import React from 'react';
import NavLogo from '../assets/images/footer-logo.svg';
import ArrowForwardOutlinedIcon from '@material-ui/icons/ArrowForwardOutlined';
import {FooterNavbarContainer, FooterLogoContainer, FooterLogo, 
        FooterNavMenu, FooterNavItems, NavLinks, FooterButtonWrapper, 
        Button} from './FooterElements'

function Footer() {
    return (
        <>
           <FooterNavbarContainer>
               <FooterLogoContainer className="footerlogo-container">
                   <NavLinks to='/'><FooterLogo className="footerlogo" src={NavLogo}/></NavLinks>
               </FooterLogoContainer>
            <FooterNavMenu>
                <FooterNavItems>
                    <NavLinks to="/Portfolio">Portfolio</NavLinks>
                </FooterNavItems>
                <FooterNavItems>
                    <NavLinks to="/About">About Us</NavLinks>
                </FooterNavItems>
                <FooterNavItems>
                    <NavLinks to="/Contact">Contact</NavLinks>
                </FooterNavItems>
            </FooterNavMenu>
            <FooterButtonWrapper>
                <NavLinks to="/Portfolio"><Button>See Our Portfolio<ArrowForwardOutlinedIcon /></Button></NavLinks>
            </FooterButtonWrapper>
        </FooterNavbarContainer> 
        </>
    )
}

export default Footer
