import React from 'react';
import NavLogo from '../assets/images/logo.svg';
import styled from 'styled-components';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

const FooterNavbarContainer = styled.div `

`;
const FooterLogo = styled.img `

`;

const FooterNavMenu = styled.ul `
    display: flex;
`;
const FooterNavItems = styled.li `
    list-style: none;
`;

function Footer() {
    return (
        <>
           <FooterNavbarContainer>
            <FooterLogo src={NavLogo}/>
            <FooterNavMenu>
                <FooterNavItems>
                    <Link to="/">Home</Link>
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
