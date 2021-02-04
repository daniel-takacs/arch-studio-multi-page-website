import styled from 'styled-components';

export const ContactContainer = styled.div `
    padding: 0 32px;
    margin-bottom: 50px;
        @media screen and (min-width: 376px) {
            padding: 0 97.5px;
        }
`
export const ContactHeroImgContainer = styled.div `
  position: relative;
    @media screen and (min-width: 376px) {
        margin-bottom: 150px;
        padding: 0 97.5px;
}
   
`
export const ContactHeroImg = styled.img `
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
export const ContactIntroContainer = styled.div `
margin: 100px 0;
    @media screen and (min-width: 730px) {
        position: absolute;
        bottom: 190px;
        padding: 100px 50px 300px; 
        margin: 0px 20px -30px;
        background-color: white;
        height: 300px;
}
`
export const ContactText = styled.div `
    @media screen and (min-width: 376px) {
        padding-top: 70px;
    }
    position: relative;
    @media screen and (min-width: 730px) {
        &:before {
            content: 'Contact';
            position: absolute;
            top: -180px;
            right: 20px;
            font-size: 8rem;
            color:#EEEFF4;
            font-weight: 700;
        }
     
        }
`
export const ContactH2 = styled.h2`
font-size: 2.5rem;
    margin-bottom: 20px;
    @media screen and (min-width: 376px) {
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
export const ContactP = styled.p `
    line-height: 1.5rem;
`
export const ContactDetailsContainer = styled.div `
    margin-bottom: 40px;
`
export const ContactDetails = styled.div `
    line-height: 2rem;
`
export const DetailsH2 = styled.h2 `
 font-size: 2.5rem;
 margin-bottom: 40px;
    @media screen and (min-width: 376px) {
        font-size: 3rem;
        }
`
export const DetailsH5  = styled.h5 `

`
export const DetailsP = styled.p `
 @media screen and (min-width: 376px) {
        margin-bottom: 20px;
        }
`
export const DetailsButton = styled.button `

`
export const ContactMapContainer = styled.div `

`
export const ContactMapImg = styled.img `
    max-width: 100%;
    @media screen and (min-width: 376px) {
        
        }
`
export const ContactFormContainer = styled.div `

` 
export const ContactFormH2 = styled.h2 `

`