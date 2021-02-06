import styled from 'styled-components';
import { Link as LinkS } from 'react-router-dom';
import { device } from '../device';


export const FooterNavbarContainer = styled.div `
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    background-color: #EEEFF4;
    position: relative;
    @media ${device.tablet} {
        flex-direction:row;
        margin: 0 auto; 
        max-width: 1110px;
        justify-content: space-between;
        
        }
`;
export const FooterLogoContainer = styled.div `
    color: red;
    border: 1px solid #1B1D23;
    padding: 35px 25px;
    position: absolute;
    top: -55px;
    cursor: pointer;
    @media ${device.tablet} {
       position: sticky;
        }
`;
export const FooterLogo = styled.img `
    height: 25px;
    
`;

export const FooterNavMenu = styled.ul `
    text-align: center;
    margin-top: 70px;
    @media ${device.tablet} {
        display: flex;
        flex-direction:row;
        margin-top: 0;
        }
    
    `;
export const FooterNavItems = styled.li `
    list-style: none;
    color: #7D828F;
    padding: 15px 0;
    @media ${device.tablet} {
        padding: 0 15px;
        }
    `;

export const NavLink = styled(LinkS)`
    text-decoration: none;
    color: #7D828F;
    
`
export const FooterLink = styled.li `

`;
export const FooterButtonWrapper = styled.div `
    display: flex;
    align-items: center;
    padding: 40px 0;
`;

export const Button = styled.button`
    background-color: #1B1D23;
    color: #fff;
    padding: 20px;
    outline: none;
    border: none;
    display: flex;
    align-items: center;
    cursor: pointer;
`;

