import styled from 'styled-components';
import { device } from '../../device';


export const ContactContainer = styled.div `
    margin-bottom: 50px;
    position: relative;
        @media ${device.tablet} {
            margin: 0 auto; 
            max-width: 1110px;
            padding: 0 97.5px;

            &:after {
            position: absolute;
            content: 'CONTACT';
            font-size: 1rem;
            color: #C8CCD8;
            text-transform: uppercase;
            letter-spacing: 10px;
            top: 64px;
            left: -34px;
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
        padding: 0;
        &:after {
            position: absolute;
            content: 'CONTACT';
            font-size: 1rem;
            color: #C8CCD8;
            text-transform: uppercase;
            letter-spacing: 10px;
            top: 70px;
            left: -153px;
            transform: rotate(90deg);
            
        }
        &:before {
            position: absolute;
            content: '';
            width: 104px;
            height: 1px;
            background-color: #C8CCD8;
            top: -106px;
            left: -122px;
            transform: rotate(90deg)
        }

    }
`
export const ContactHeroImgContainer = styled.div `
    position: relative;
    @media ${device.laptopL} {
        width: 100%;
    }
`
export const ContactHeroImg = styled.img `    
        &:first-child {
            clip-path: polygon(0% 0%, 0% 100%, 0 100%, 0 83%, 86% 83%, 91% 83%, 91% 100%, 0 100%, 100% 100%, 100% 0%);
            width: 100%;
        }
        &:nth-child(2) {
            display: none;
        }
        &:nth-child(3) {
            display: none;
        }
    @media ${device.mobileM} {
        &:first-child {
            display:none;
        }
        &:nth-child(2) {
            display: block;
            width: 100%;
        }
        &:nth-child(3) {
            display: none;
        }
    }
    @media ${device.tablet} {
        &:first-child {
        display:none;
        }
        &:nth-child(2) {
            display: none;
        }
        &:nth-child(3) {
            display: block;
            
        }
    }
`

export const ContactHeroContainer = styled.div `
    @media ${device.tablet} {
        display: flex;
    }
`
export const ContactText = styled.div `
    padding: 0 32px;
    margin-top: 50px;
   @media ${device.mobileM} {
    }
    @media ${device.tablet} {
        margin-left: -570px;
        padding: 150px 120px 0 50px;
        align-self: flex-end;
        background-color: #fff;
        z-index: 100;
    }
    @media ${device.laptopL} {
        margin-left: -150px;
        padding: 250px 100px 0 150px;
        
        align-self: flex-end;
        background-color: #fff;
        z-index: 10;
        
    }
  
`

export const ContactIntroH2 = styled.h2`
    font-size: 2.5rem;
    margin-bottom: 35px;
    @media ${device.mobileM} {
        font-size: 3rem;
    }
    @media ${device.tablet} {
        position: relative;
        &:after {
            content: '';
            width: 65px;
            height: 2px;
            background-color: #C8CCD8;
            position: absolute;
            top: -70px;
            left: 0;
        }
        &:before {
            content: 'Contact';
            position: absolute;
            top: -250px;
            left: 0;
            font-size: 8rem;
            color:#EEEFF4;
            font-weight: 700;
        }
        
        }
        @media ${device.laptopL} {
            position: relative;
            &:before {
            content: 'Contact';
            position: absolute;
            top: -350px;
            left: -325px;
            font-size: 11rem;
            color:#EEEFF4;
            font-weight: 700;
            }
        }

    
`
export const ContactIntroP = styled.p `
      line-height: 1.5rem;
    @media ${device.laptopL} {
        width:100%;
    }
`
export const ContactMainContainer = styled.div `
    padding: 0 32px;
     @media ${device.laptopL} {
         padding:0;
     }
`


export const ContactDetailsContainer = styled.div `
    margin: 200px 0;
        @media ${device.laptopL} {
            display: flex;
            justify-content: space-around;
        }
`
export const ContactDetailsContent = styled.div `

`
export const ContactDetails = styled.div `
    line-height: 2rem;
        @media ${device.tablet} {
            display: flex;
            flex-direction: column;
            margin: 0 10px;
        }
        
`
export const DetailsH2 = styled.h2 `
 font-size: 2.5rem;
 margin-bottom: 40px;
 position: relative;
    &:before {
            content: '';
            width: 65px;
            height: 2px;
            background-color: #C8CCD8;
            position: absolute;
            top: -80px;
            left: 0;
        }
 
    @media ${device.mobileM} {
        font-size: 3rem;
        }
    @media ${device.laptopL} {
        width: 30%;
    }
`
export const DetailsH4  = styled.h4 `

`
export const DetailsP = styled.p `
 @media ${device.mobileM} {
        margin-bottom: 20px;
        }
`
export const DetailsButton = styled.div `
    display: flex;
    align-items: center;
    
    @media ${device.laptopL} {
            align-self: flex-start;
            justify-content:center;
        }
    
    
`
export const Button = styled.button `
    background-color: transparent;
    padding: 20px 0 20px;
    outline: none;
    border: none;
    display: flex;
    align-items: center;
    cursor: pointer;
    font-weight: 700;
    position: relative;
    &:after {
        content: '';
        position: absolute;
        bottom: 20px;
        left: 0;
        width: 0;
        height: 1px;
        background-color: black;
        opacity: 0.6;
        transition: width 0.3s ease 0s, opacity 0.3s ease 0s
    }
    &:hover:after {
        color: black;
        width: 80%;
        opacity: 0.9
    }
`
export const ContactMapImg = styled.img `
    max-width: 100%;
        &:first-child {
            width: 100%;
        }
        &:nth-child(2) {
            display: none;
        }
        &:nth-child(3) {
            display: none;
        }
    @media ${device.mobileM} {
        &:first-child {
            display:none;
        }
        &:nth-child(2) {
            display: block;
            width: 100%;
        }
        &:nth-child(3) {
            display: none;
        }
    }
    @media ${device.tablet} {
        &:first-child {
        display:none;
        }
        &:nth-child(2) {
            display: none;
        }
        &:nth-child(3) {
            display: block;
            max-width: 100%;
        }
    }
`
export const ContactFormContainer = styled.div `
    margin: 100px 0;
        @media ${device.laptopL} {
            display:flex;
            justify-content: space-between;
        }
` 
export const ContactFormH2 = styled.h2 `
     font-size: 2.5rem;
    margin-bottom: 40px;
 @media ${device.laptopL} {
            width: 20%;

        }
 
    @media ${device.mobileM} {
        font-size: 3rem;
        }
`
export const ContactFormWrapper = styled.div `
    margin-bottom: 100px;
`