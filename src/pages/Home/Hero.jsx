import React from 'react';
import HeroBgImageDesktop from '../../assets/images/home/desktop/image-hero-paramour.jpg';
import HeroBgImageMobile from '../../assets/images/home/mobile/image-hero-paramour.jpg';
import styled from 'styled-components';
//import { Button } from '@material-ui/core';
import '../../index.scss';
import ArrowForwardOutlinedIcon from '@material-ui/icons/ArrowForwardOutlined';

const HeroContainer = styled.div `
    
`;
const HeroBgDesktop = styled.img `
    display: none;
@media screen and (min-width: 768px) {
    display: block;
}
`;

const HeroBgMobile = styled.img `
    height: 560px;
    background-size: cover;
    position: relative;
    overflow: hidden;
    
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
                <HeroBgDesktop src={HeroBgImageDesktop} />
                <HeroBgMobile className="imgfilter" src={HeroBgImageMobile} />
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
