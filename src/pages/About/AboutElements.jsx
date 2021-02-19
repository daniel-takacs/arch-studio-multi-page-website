import styled from 'styled-components';
import { device } from '../../device';

export const AboutContainer = styled.div `
    position: relative;
    margin-bottom: 50px;
        @media ${device.tablet} {
            padding: 0 97.5px;
            margin: 0 auto; 
            max-width: 1110px;

            &:after {
                position: absolute;
                content: 'ABOUT US';
                font-size: 1rem;
                color: #C8CCD8;
                text-transform: uppercase;
                letter-spacing: 10px;
                top: 74px;
                left: -40px;
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
                content: 'ABOUT US';
                font-size: 1rem;
                color: #C8CCD8;
                text-transform: uppercase;
                letter-spacing: 10px;
                top: 76px;
                left: -160px;
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
export const AboutHeroImgContainer = styled.div `
    position: relative;
        @media ${device.laptopL} {
            width: 100%;
        }
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
        }
    }
`
export const AboutHeroContainer = styled.div `
    @media ${device.tablet} {
        display: flex;
    }
`
export const AboutText = styled.div `
    padding: 0 32px;
    margin-top: 50px;
        @media ${device.mobileM} {

        }
        @media ${device.tablet} {
            margin-left: -570px;
            padding: 150px 180px 0 50px;
            align-self: flex-end;
            background-color: #fff;
            z-index: 100;
        }
        @media ${device.laptop} {
            width: 100%;
            margin-left: -150px;
            padding: 250px 100px 0 150px;
            align-self: flex-end;
            background-color: #fff;
            z-index: 100;
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
                content: 'About';
                position: absolute;
                top: -225px;
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
            margin-top: 50px;
            width:125%;
        }
`
export const AboutMainContainer = styled.div `
    padding: 0 32px;
        @media ${device.laptopL} {
            padding:0;
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
export const AboutLeadersContainer = styled.div `
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    margin-bottom: 100px;
        @media ${device.tablet} {
            flex-wrap: nowrap;
            
        }
        @media ${device.laptopL} {
            flex-direction: row;
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
export const AboutLeaderImgBox = styled.div `
   
`
export const AboutLeaderImg = styled.img `
    margin-bottom: 25px;
    opacity: 1;
    display: block;
    height: auto;
    transition: .5s ease;
    backface-visibility: hidden;
    width: 311px;
        @media ${device.tablet} {
            width: 240px;
        }
        @media ${device.laptop} {
            width: 280px; 
        }

        @media ${device.laptopL} {
            width: 100%;
        }        
`

export const AboutSocial = styled.div `
     @media ${device.laptopL} {
        transition: .5s ease;
        opacity: 0;
        position: absolute;
        top: 38%;
        left: 55%;
        transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
        text-align: center;
   }
`
export const AboutLeaderH2Box = styled.div `

`
export const AboutLeader = styled.div `
    margin-bottom: 30px;
        @media ${device.mobileM} {
            padding: 0 10px 0 0;
        }
        @media ${device.tablet} {
            
        }
        @media ${device.laptopL} {
            
        position: relative;
            &:hover {
                ${AboutLeaderImg} { 
                opacity: 0.3;
                }
                ${AboutSocial} {
                opacity:1;
                }
            }
        }
`
export const AboutLeaders = styled.div`

    @media ${device.tablet} {
        display: flex;
        flex-wrap: wrap;
        
    }
    @media ${device.laptopL} {
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-end;
    }
`

export const AboutLeaderH4 = styled.h4 `
    font-size: 1.2rem;
    margin: 10px 0;
` 
export const AboutLeaderP = styled.p `
    margin-bottom: 10px;
`

export const AboutSocialIcon = styled.img `
    padding-right: 25px;
    height: 32px;
    
    
 
`