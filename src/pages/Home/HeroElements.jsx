import styled from 'styled-components';
import { device } from '../../device';


export const HeroContainer = styled.div `
    position: relative;
     @media ${device.tablet} {
        margin: 0 auto; 
        max-width: 1110px;
        margin-bottom: 150px;
        //padding: 0 97.5px;
        &:after {
            position: absolute;
            content: 'Home';
            font-size: 1rem;
            color: #C8CCD8;
            text-transform: uppercase;
            letter-spacing: 10px;
            top: 40px;
            left: -25px;
            transform: rotate(90deg);
            
        }
        &:before {
            position: absolute;
            content: '';
            width: 104px;
            height: 1px;
            background-color: #C8CCD8;
            top: -98px;
            left: -25px;
            transform: rotate(90deg)
        }
    }
    @media ${device.tablet} {
        padding: 0 97.5px;

    }
`;
export const HeroBgImg = styled.img `
    width: 100%;
    background-size: cover;
  
    overflow: hidden;
        @media ${device.mobileM} {
        display: none;
    }
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
            padding-right: 100px;
        }
`;

export const HeroH1 = styled.h1 `
    font-size: 3.3rem;
    letter-spacing: -1.2px;
    font-weight: 700;
    color: #fff;
    font-family: 'Spartan', sans-serif;
`;

export const HeroP = styled.p `
    color: #fff;
    line-height: 25px;
    
`;
export const HeroButtonWrapper = styled.div `
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
export const ButtonGroupWrapper = styled.div `
    display: none;

    @media ${device.tablet} {
        position: absolute;
        bottom: 0;
        left: 53px;
        display: flex;
    }
`
export const ButtonGroup = styled.button`
    background-color: #fff;
    color: #7D828F;
    padding: 20px;
    outline: none;
    border: none;
    display: flex;
    align-items: center;
    cursor: pointer;
`;
export const ButtonGroupActive = styled.button`
    background-color: #1B1D23;
    color: #fff;
    padding: 20px;
    outline: none;
    border: none;
    display: flex;
    align-items: center;
    cursor: pointer;
`;