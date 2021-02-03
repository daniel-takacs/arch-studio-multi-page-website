import styled from 'styled-components';

export const PortfolioContainer = styled.div `
    margin: 50px auto;
        @media screen and (min-width: 376px) {
            padding: 0 97.5px;
        }
`
             
export const Portfolio = styled.div `
    position: relative;
    margin-bottom: 20px;
`
export const PortfolioImage = styled.img `
        width: 100%;
        &:nth-child(2) {
            display:none;
        }
        &:nth-child(3) {
            display:none;
        }
     @media screen and (min-width: 376px) {
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
    @media screen and (min-width: 769px) {
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