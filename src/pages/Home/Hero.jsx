import React from 'react';
import HeroBgImageDesktop from '../../assets/images/home/desktop/image-hero-paramour.jpg';
import HeroBgImageMobile from '../../assets/images/home/mobile/image-hero-paramour.jpg';
import HeroBgImageTablet from '../../assets/images/home/tablet/image-hero-paramour.jpg';
//import { Button } from '@material-ui/core';
import '../../index.scss';
import ArrowForwardOutlinedIcon from '@material-ui/icons/ArrowForwardOutlined';

import { HeroContainer, HeroBgImg, HeroTextContainer, HeroH1, HeroP, HeroButtonWrapper, Button, 
        ButtonGroupWrapper, ButtonGroup, ButtonGroupActive, NavLinks } from './HeroElements'


function Hero() {

    return (
        <>
            <HeroContainer>
                <HeroBgImg className="imgfilter" src={HeroBgImageMobile} />
                <HeroBgImg className="imgfilter" src={HeroBgImageTablet} />
                <HeroBgImg className="imgfilter" src={HeroBgImageDesktop} />
                <HeroTextContainer>
                        <HeroH1>Project Paramour</HeroH1>
                        <HeroP>Project made for an art museum near Southwest London. Project Paramour is 
                                a statement of bold, modern architecture.
                        </HeroP>
                <HeroButtonWrapper>
                <Button onClick={() => { alert('clicked') }}>See Our Portfolio<ArrowForwardOutlinedIcon /></Button>
                </HeroButtonWrapper>
                </HeroTextContainer>
                <ButtonGroupWrapper>
                    <NavLinks to="/"><ButtonGroupActive>01</ButtonGroupActive></NavLinks>
                    <NavLinks to="/Hero02" ><ButtonGroup>02</ButtonGroup></NavLinks>
                    <NavLinks to="/Hero03" ><ButtonGroup>03</ButtonGroup></NavLinks>
                    <NavLinks to="/Hero04" ><ButtonGroup>04</ButtonGroup></NavLinks>
                </ButtonGroupWrapper>
        </HeroContainer>
        </>
    )
}

export default Hero
