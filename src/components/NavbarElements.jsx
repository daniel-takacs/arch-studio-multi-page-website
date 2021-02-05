import styled from 'styled-components';
import { Link as LinkS } from 'react-router-dom';


export const NavbarContainer = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 32px;
        @media screen and (min-width: 376px) {
        padding: 50px 97.5px;
        justify-content: start;
}
`;
export const NavMenu = styled.ul `
    list-style: none;
        @media screen and (min-width: 376px) {
        display: flex;
        margin-left: 55px;
}
    
`;
export const NavItems = styled.li `
    padding: 0 10px;
`;
export const NavLogoDesktop = styled.img `
    cursor: pointer;
`
export const HamburgerIconWrapper = styled.div`
      @media screen and (min-width: 376px) {
    display: none;
}
`
export const NavLinks = styled(LinkS) `
    text-decoration: none;
    color: #7D828F;
    font-weight:700;
    @media screen and (min-width: 376px) {
    margin-left:10px;
    cursor: pointer;
}
`
export const MenuIcon = styled.img `
  
`
export const CloseIcon = styled.img `
  
`