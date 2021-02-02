import styled from 'styled-components';

export const AboutContainer = styled.div `
    padding: 0 32px;
    margin-bottom: 50px;
`
export const AboutImgContainer = styled.div `
    position: relative;
   
`
export const AboutImg = styled.img `
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
    @media screen and (min-width: 376px) {
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
    @media screen and (min-width: 769px) {
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
export const AboutIntro = styled.div `
    margin: 100px 0;
        @media screen and (min-width: 376px) {
            position: absolute;
            bottom: 190px;
            padding: 100px 50px 300px; 
            margin: 0px 20px -30px;
            background-color: white;
            height: 300px;
    }

`
export const AboutText = styled.div `
    width: 472px;
    position: relative;
    @media screen and (min-width: 376px) {
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
    @media screen and (min-width: 376px) {
        font-size: 3rem;
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
`
export const AboutMainP = styled.p `

`
export const AboutLeaders = styled.div `

`
export const AboutLeaderH2 = styled.h2 `
    font-size: 2.5rem;
    margin-bottom: 50px;
`
export const AboutLeader = styled.div `

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
    padding-right: 35px;
`