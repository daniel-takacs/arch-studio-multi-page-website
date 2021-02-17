import styled from 'styled-components';
import { device } from '../../device';

export const PortfolioContainer = styled.div `
    padding: 0 32px;
    margin: 50px auto 100px;
    position: relative;
        @media ${device.tablet} {
            padding: 0 97.5px;
            display: grid;
            grid-template-columns: auto auto auto;
            flex-direction: column;
            margin: 0 auto; 
            justify-content:center;
            max-width: 1110px;

                &:after {
                    position: absolute;
                    content: 'PORTFOLIO';
                    font-size: 1rem;
                    color: #C8CCD8;
                    text-transform: uppercase;
                    letter-spacing: 10px;
                    top: 86px;
                    left: -51px;
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
            max-width: 1110px;
            padding: 0;
            margin-bottom: 100px;

                &:after {
                    position: absolute;
                    content: 'PORTFOLIO';
                    font-size: 1rem;
                    color: #C8CCD8;
                    text-transform: uppercase;
                    letter-spacing: 10px;
                    top: 86px;
                    left: -172px;
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
           
export const Portfolio = styled.div `
    position: relative;
    margin-bottom: 20px;
    cursor: pointer;
   
`
export const PortfolioImage = styled.img `
        max-width: 100%;
        &:hover {
        opacity: 0.5;
    }
        
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
           
            padding: 0 10px 0 10px;
            
        }
    }
`;
export const PortfolioText = styled.div `
    position: absolute;
    bottom: 25px;
    left: 20px;
    color: #fff;
`
export const PortfolioH3 = styled.h3 `

`
export const PortfolioP = styled.p `

`