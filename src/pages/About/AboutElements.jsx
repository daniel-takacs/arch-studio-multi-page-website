import styled from 'styled-components';
import { device } from '../../device';


export const AboutContainer = styled.div `
    margin-bottom: 50px;
        @media ${device.tablet} {
            padding: 0 97.5px;
            margin: 0 auto; 
            max-width: 1110px;
        }
        @media ${device.laptopL} {
        padding: 0;
    }
`
export const AboutHeroImgContainer = styled.div `
    position: relative;
`


export const AboutHeroImg = styled.img `
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
            max-width: 100%;
        }
    }
`
export const AboutMainContainer = styled.div `
    padding: 0 32px;
        @media ${device.laptopL} {
            padding:0;
        }
`

export const AboutIntroContainer = styled.div `
    margin: 100px 0;
        @media ${device.tablet} {
            position: absolute;
            width: 70%;
            bottom: 0;
            right: 0;
            padding: 100px 50px 160px;
            margin: 0px 20px -30px;
            background-color: white;
            
    }
        @media ${device.laptopL} {
            position: absolute;
            width: 40%;
            bottom: 60px;
            right: 250px;
            padding: 200px 150px 30px;
            margin: 0px 20px -30px;
            background-color: white;
           
        }
`
export const AboutText = styled.div `
    @media ${device.mobileM} {
        padding-top: 70px;
    }
   
`
export const AboutIntroH2 = styled.h2 `
    font-size: 2.5rem;
    margin-bottom: 20px;
    @media ${device.mobileM} {
        font-size: 3rem;
        
    }
   

    @media ${device.tablet} {
        position: relative;
        /*&:before {
            content: '';
            width: 65px;
            height: 2px;
            background-color: #C8CCD8;
            position: absolute;
            top: -10px;
            left: 0;
        }*/
        &:before {
            content: 'About';
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
            content: 'About';
            position: absolute;
            top: -350px;
            left: -175px;
            font-size: 11rem;
            color:#EEEFF4;
            font-weight: 700;
        }
        }
    
`
export const AboutIntroP = styled.p `
    line-height: 1.5rem;
    @media ${device.laptopL} {
        width:140%;
    }
`

export const AboutMainSection = styled.div `
    margin: 200px 0;
        @media ${device.laptopL} {
            display: flex;
            justify-content: space-between;
        }
`
export const AboutMainImgContainer = styled.div `
    display:none;
        @media ${device.laptopL} {
            display:block;
        }
`
export const AboutMainImg = styled.img `

`
export const AboutMainText = styled.div `
    margin-top: 200px;
    @media ${device.laptopL} {
            width: 40%;
        }
`
export const AboutMainH2 = styled.h2 `
    font-size: 2.5rem;
    margin-bottom: 20px;
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
        margin-bottom: 40px;
        }
`
export const AboutMainP = styled.p `
        margin-bottom: 20px;
`
export const AboutLeaders = styled.div `
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 100px;
        @media ${device.tablet} {
            
        
        }
        @media ${device.laptopL} {
            justify-content: flex-end;
        }
`
export const AboutLeaderH2 = styled.h2 `
    font-size: 2.5rem;
    margin-bottom: 50px;
    @media ${device.mobileM} {
        font-size: 3rem;
        margin-bottom: 40px;
        }
`
export const AboutLeader = styled.div `
    margin-bottom: 30px;
    @media ${device.mobileM} {
        padding: 15px;
     
        }
        @media ${device.tablet} {
         
        
        }
`
export const AboutLeaderImg = styled.img `
    max-width: 100%;
    margin-bottom: 25px;
    @media ${device.laptopL} {
        
    }
`
export const AboutLeaderH4 = styled.h4 `
    font-size: 1.2rem;
    margin: 10px 0;
` 
export const AboutLeaderP = styled.p `
    margin-bottom: 10px;
`
export const AboutSocial = styled.div `
   
`
export const AboutSocialIcon = styled.img `
    padding-right: 25px;
    height: 32px;
`