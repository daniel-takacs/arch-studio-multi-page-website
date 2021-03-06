import styled from 'styled-components';
import { device } from '../../device';
import { Link as LinkS } from 'react-router-dom';
import * as palette from '../../AfterTextVariables';

export const NavLinks = styled(LinkS) `
    text-decoration: none;
`
export const HeroContainer = styled.div `
    position: relative;
     @media ${device.tablet} {
        margin: 0 auto; 
        max-width: 1110px;
        margin-bottom: 210px;
        padding: 0 97.5px;

        &:after {
            position: absolute;
            content: 'HOME';
            font-size: 1rem;
            color: #C8CCD8;
            text-transform: uppercase;
            letter-spacing: 10px;
            top: 38px;
            left: -5px;
            transform: rotate(90deg);
            
        }
        &:before {
            position: absolute;
            content: '';
            width: 104px;
            height: 1px;
            background-color: #C8CCD8;
            top: -93px;
            left: -5px;
            transform: rotate(90deg)
        }

     
    }
    @media ${device.laptopL} {
        &:after {
            position: absolute;
            content: 'HOME';
            font-size: 1rem;
            color: #C8CCD8;
            text-transform: uppercase;
            letter-spacing: 10px;
            top: 36px;
            left: -120px;
            transform: rotate(90deg);
            
        }
        &:before {
            position: absolute;
            content: '';
            width: ${palette.variables.width};
            height: 1px;
            background-color: #C8CCD8;
            top: -106px;
            left: -122px;
            transform: rotate(90deg)
        }
        padding: 0;
    }
`;
export const HeroBgImg = styled.img `
    width: 100%;
    background-size: cover;
  
    overflow: hidden;
     
    margin: 0 auto;
        &:nth-child(2) {
            display:none;
        }
        &:nth-child(3) {
            display:none;
        }
     @media ${device.mobileM} {
        &:first-child {
            display:none;
    }
        &:nth-child(2) {
                display:block;
        }
        &:nth-child(3) {
            display:none;
        }
        
  }
    @media ${device.tablet} {
        &:first-child {
            display:none;
        }
        &:nth-child(2) {
                display:block;
        }
        &:nth-child(3) {
            display:none;
        }
    }
    @media ${device.laptopL} {
    &:first-child {
        display:none;
    }
    &:nth-child(2) {
            display:none;
    }
    &:nth-child(3) {
        display:block;
    }
    }
`;

export const HeroTextContainer = styled.div `
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
        @media ${device.tablet} {
            width:50%;
           
        }
`;

export const HeroH1 = styled.h1 `
    font-size: 3.3rem;
    letter-spacing: -1.2px;
    font-weight: 700;
    color: #fff;
    font-family: 'Spartan', sans-serif;
        @media ${device.mobileL} {
            font-size: 4.5rem;
    }
        @media ${device.tablet} {
            font-size: 4.8rem;
    }
`;

export const HeroP = styled.p `
    color: #fff;
    line-height: 25px;
    @media ${device.laptopL} {
             width: 80%;
            }

`;
export const HeroButtonWrapper = styled.div `
    display: flex;
    align-items: center;
    padding: 40px 0;
`;

export const ButtonGroupWrapper = styled.div `
    display: none;
    @media ${device.laptopL} {
        position: absolute;
        bottom: 0;
        left: -66px;
        display: flex;
    }
`
export const ButtonGroup = styled.button`
    background-color: #fff;
    color: #7D828F;
    font-weight: 700;
    padding: 25px;
    outline: none;
    border: none;
    display: flex;
    align-items: center;
    cursor: pointer;
    &:hover {
        background-color: #C8CCD8;
    }
`;
export const ButtonGroupActive = styled.button`
    background-color: #1B1D23;
    color: #fff;
    padding: 25px;
    outline: none;
    border: none;
    display: flex;
    align-items: center;
    cursor: pointer;
`;