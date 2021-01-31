import React from 'react';
import HeroBgImageDesktop from '../../assets/images/home/desktop/image-hero-paramour.jpg';
import HeroBgImageMobile from '../../assets/images/home/mobile/image-hero-paramour.jpg';
import HeroBgImageTablet from '../../assets/images/home/tablet/image-hero-paramour.jpg';
import styled from 'styled-components';
//import { Button } from '@material-ui/core';
import '../../index.scss';
import ArrowForwardOutlinedIcon from '@material-ui/icons/ArrowForwardOutlined';

const HeroContainer = styled.div `
     @media screen and (min-width: 376px) {
        margin-bottom: 150px;
}
`;
const HeroBgMobile = styled.img `
    height: 560px;
    background-size: cover;
    position: relative;
    overflow: hidden;
    @media screen and (min-width: 376px) {
    display: none;
}
`;

const HeroBgTablet = styled.img `
    display: none;
    @media screen and (min-width: 376px) {
    display: block;
    margin: 0 auto;
}
@media screen and (min-width: 769px) {
    display: none;
}

`
const HeroBgDesktop = styled.img `
    display: none;
@media screen and (min-width: 769px) {
    display: block;
    margin: 0 auto;
}
`;

const HeroH1 = styled.h1 `
    font-size: 3.3rem;
    letter-spacing: -1.2px;
    font-weight: 700;
    color: #fff;
    font-family: 'Spartan', sans-serif;
`;
const HeroP = styled.p `
    color: #fff;
    line-height: 25px;
    
    
`;
const HeroTextContainer = styled.div `
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    
`;
const HeroButtonWrapper = styled.div `
    display: flex;
    align-items: center;
    padding: 40px 0;
`;
const Button = styled.button`
    background-color: #1B1D23;
    color: #fff;
    padding: 20px;
    outline: none;
    border: none;
    display: flex;
    align-items: center;
   
`;

function Hero() {
    return (
        <>
            <HeroContainer>
                <HeroBgDesktop className="imgfilter" src={HeroBgImageDesktop} />
                <HeroBgMobile className="imgfilter" src={HeroBgImageMobile} />
                <HeroBgTablet className="imgfilter" src={HeroBgImageTablet} />
                <HeroTextContainer>
                        <HeroH1>Project Paramour</HeroH1>
                        <HeroP>Project made for an art museum near Southwest London. Project Paramour is 
                                a statement of bold, modern architecture.
                        </HeroP>
                <HeroButtonWrapper>
                <Button onClick={() => { alert('clicked') }}>See Our Portfolio<ArrowForwardOutlinedIcon /></Button>
                </HeroButtonWrapper>
                </HeroTextContainer>
        </HeroContainer>
        </>
    )
}

export default Hero
