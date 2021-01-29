import React from 'react';
import NavLogo from '../assets/images/logo.svg';
import styled from 'styled-components';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

const FooterNavbarContainer = styled.div `
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
`;
const FooterLogoContainer = styled.div `

`;
const FooterLogo = styled.img `

`;

const FooterNavMenu = styled.ul `
    text-align: center;
    `;
const FooterNavItems = styled.li `
    list-style: none;
    `;

const FooterLink = styled.a `
    text-decoration: none;
`

function Footer() {
    return (
        <>
           <FooterNavbarContainer>
               <FooterLogoContainer>
                    <FooterLogo src={NavLogo}/>
               </FooterLogoContainer>
            <FooterNavMenu>
                <FooterNavItems>
                    <FooterLink>
                    <Link to="/">Home</Link>
                    </FooterLink>
                </FooterNavItems>
                <FooterNavItems>
                    <Link to="/Portfolio">Portfolio</Link>
                </FooterNavItems>
                <FooterNavItems>
                    <Link to="/About">About Us</Link>
                </FooterNavItems>
                <FooterNavItems>
                    <Link to="/Contact">Contact</Link>
                </FooterNavItems>
            </FooterNavMenu>
            <Button onClick={() => { alert('clicked') }}>See Our Portfolio</Button>
        </FooterNavbarContainer> 
        </>
    )
}

export default Footer
