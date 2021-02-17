import styled from 'styled-components';
import { Link as LinkS } from 'react-router-dom';
import { device } from '../device';

export const NavbarContainer = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 32px;
    position: relative;
        @media ${device.tablet} {
            margin: 0 auto; 
            max-width: 1110px;
            padding: 50px 97.5px;
            justify-content: start;

        
    
            }
        @media ${device.laptopL} {
            
        padding: 56px 0;
    }
`;
export const NavMenu = styled.ul `
    list-style: none;
        @media ${device.tablet} {
            display: flex;
            margin-left: 55px;
        }
    
`;
export const NavItems = styled.li `
    
`;
export const NavLogoDesktop = styled.img `
    cursor: pointer;
`
export const HamburgerIconWrapper = styled.div`
      @media ${device.tablet} {
        display: none;
        }
`
export const NavLinks = styled(LinkS) `
    text-decoration: none;
    color: #7D828F;
    font-weight:700;
    font-size: 0.84rem;
    &:hover {
        color: black;
    
    }
        @media ${device.mobileM} {
            margin-left:10px;
            cursor: pointer;
        @media ${device.laptopL} {
            font-size: 1rem;
        }
}
`
export const MenuIcon = styled.img `
  
`
export const CloseIcon = styled.img `
  
`