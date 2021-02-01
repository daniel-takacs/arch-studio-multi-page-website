import React from 'react';
import NavLogo from '../assets/images/logo.svg';
import styled from 'styled-components';
//import { Button } from '@material-ui/core';
import { Link as LinkS } from 'react-router-dom';
import ArrowForwardOutlinedIcon from '@material-ui/icons/ArrowForwardOutlined';


const FooterNavbarContainer = styled.div `
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    background-color: #EEEFF4;
    position: relative;
`;
const FooterLogoContainer = styled.div `
    color: red;
    border: 1px solid #1B1D23;
    padding: 35px 25px;
    position: absolute;
    top: -55px;
    cursor: pointer;
`;
const FooterLogo = styled.img `
    height: 25px;
`;

const FooterNavMenu = styled.ul `
    text-align: center;
    margin-top: 70px;
    `;
const FooterNavItems = styled.li `
    list-style: none;
    color: #7D828F;
    padding: 15px 0;
    `;

const NavLink = styled(LinkS)`
    text-decoration: none;
    color: #7D828F;
    
`
const FooterLink = styled.li `

`;
const FooterButtonWrapper = styled.div `
    display: flex;
    align-items: center;
    padding: 40px 0;
`;

const Button = styled.button`
    background-color: #1B1D23;
    color: #fff;
    padding: 20px;
    outline: none;
    border: none;
    display: flex;
    align-items: center;
    cursor: pointer;
`;

function Footer() {
    return (
        <>
           <FooterNavbarContainer>
               <FooterLogoContainer>
                   <FooterLogo to='/' src={NavLogo}/>
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
