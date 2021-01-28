import React from 'react';
import HeroBgImageDesktop from '../../assets/images/home/desktop/image-hero-paramour.jpg';
import HeroBgImageMobile from '../../assets/images/home/mobile/image-hero-paramour.jpg';
import styled from 'styled-components';
import { Button } from '@material-ui/core';
import '../../index.scss';

const HeroContainer = styled.div `
    
`;
const HeroBgDesktop = styled.img `
    display: none;
`;
const HeroBgMobile = styled.img `
    height: 560px;
    width: 100%;
    
    background-size: cover;
    position: relative;
    overflow: hidden;
    
`;
const HeroH1 = styled.h1 `
    font-size: 4rem;
    letter-spacing: -1.2px;
    font-family: 'Spartan', sans-serif;
    color: #fff;
`;
const HeroP = styled.p `
    color: #fff;
    line-height: 25px;
    font-family: 'Spartan', sans-serif;
`;
const HeroTextContainer = styled.div `
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    
`

function Hero() {
    return (
        <>
            <HeroContainer>
            <HeroBgDesktop src={HeroBgImageDesktop} />
            <HeroBgMobile className="img" src={HeroBgImageMobile} />
            <HeroTextContainer>
            <HeroH1>Project Paramour</HeroH1>
            <HeroP>Project made for an art museum near Southwest London. Project Paramour is 
                    a statement of bold, modern architecture.
            </HeroP>
            <Button onClick={() => { alert('clicked') }}>See Our Portfolio</Button>
            </HeroTextContainer>
        </HeroContainer>
        </>
    )
}

export default Hero
