import styled from 'styled-components';
import { device } from '../../device';

export const PortfolioContainer = styled.div `
    padding: 0 32px;
    margin: 50px auto 100px;
    position: relative;
        @media ${device.tablet} {
            padding: 0;
            display: flex;
            flex-wrap: wrap;
            margin: 0 auto; 
            max-width: 800px;
            justify-content:center;
            }
            @media ${device.laptopL} {
            max-width: 1110px;
            padding: 0;
            margin-bottom: 100px;
        }

`
             
export const Portfolio = styled.div `
    position: relative;
    margin-bottom: 20px;
    cursor: pointer;
   
`
export const PortfolioImage = styled.img `
        width: 100%;
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