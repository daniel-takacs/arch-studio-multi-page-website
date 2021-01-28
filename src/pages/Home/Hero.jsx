import React from 'react';
import HeroBgImageDesktop from '../../assets/images/home/desktop/image-hero-paramour.jpg';
import HeroBgImageMobile from '../../assets/images/home/mobile/image-hero-paramour.jpg';
import styled from 'styled-components';
import { Button } from '@material-ui/core';

const HeroContainer = styled.div `
    
`;
const HeroBgDesktop = styled.img `
    display: none;
`;
const HeroBgMobile = styled.img `

`;
const HeroH1 = styled.h1 `

`;
const HeroP = styled.p `

`;

function Hero() {
    return (
        <>
            <HeroContainer>
            <HeroBgDesktop src={HeroBgImageDesktop} />
            <HeroBgMobile src={HeroBgImageMobile} />
            <HeroH1>Project Paramour</HeroH1>
            <HeroP>Project made for an art museum near Southwest London. Project Paramour is 
                    a statement of bold, modern architecture.
            </HeroP>
            <Button onClick={() => { alert('clicked') }}>See Our Portfolio</Button>
        </HeroContainer>
        </>
    )
}

export default Hero
