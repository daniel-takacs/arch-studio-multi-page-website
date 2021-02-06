import styled from 'styled-components';
import { device } from '../../device';


export const AboutContainer = styled.div `
    padding: 0 32px;
    margin-bottom: 50px;
        @media ${device.mobileM} {
            padding: 0 97.5px;
        }
`
export const AboutHeroImgContainer = styled.div `
    position: relative;
    @media ${device.mobileM} {
        margin-bottom: 150px;
        padding: 0 97.5px;
}
   
`
export const AboutHeroImg = styled.img `
    width: 100%;
    
        &:first-child {
            clip-path: polygon(0% 0%, 0% 100%, 0 100%, 0 83%, 86% 83%, 91% 83%, 91% 100%, 0 100%, 100% 100%, 100% 0%);
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
export const AboutIntroContainer = styled.div `
    margin: 100px 0;
        @media ${device.tablet} {
            position: absolute;
            bottom: 190px;
            padding: 100px 50px 300px; 
            margin: 0px 20px -30px;
            background-color: white;
            height: 300px;
    }

`
export const AboutText = styled.div `
    position: relative;
    @media ${device.mobileM} {
        width: 472px;
        padding-top: 70px;
    }
    @media ${device.tablet} {
        &:before {
            content: 'About';
            position: absolute;
            top: -180px;
            right: 0;
            font-size: 8rem;
            color:#EEEFF4;
            font-weight: 700;
        }
        }
`
export const AboutIntroH2 = styled.h2 `
    font-size: 2.5rem;
    margin-bottom: 20px;
    @media ${device.mobileM} {
        font-size: 3rem;
        &:before {
            content: '';
            width: 65px;
            height: 2px;
            background-color: #C8CCD8;
            position: absolute;
            top: -10px;
            left: 0;
        }
    }
`
export const AboutIntroP = styled.p `
    line-height: 1.5rem;
`

export const AboutMainSection = styled.div `
    margin: 100px 0;
`
export const AboutMainText = styled.div `
    margin-top: 200px;
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
    @media ${device.mobileM} {
        flex-direction: row;
        flex-wrap:wrap;
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
        width: 50%;
        }
`
export const AboutLeaderImg = styled.img `
    width: 100%;
    margin-bottom: 25px;
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