import React from 'react';
import HeroBgImageDesktop from '../../assets/images/home/desktop/image-hero-seraph.jpg';
import HeroBgImageMobile from '../../assets/images/home/mobile/image-hero-seraph.jpg';
import HeroBgImageTablet from '../../assets/images/home/tablet/image-hero-seraph.jpg';
//import { Button } from '@material-ui/core';
import '../../index.scss';
import ArrowForwardOutlinedIcon from '@material-ui/icons/ArrowForwardOutlined';

import { HeroContainer, HeroBgImg, HeroTextContainer, HeroH1, HeroP, HeroButtonWrapper, Button, 
        ButtonGroupWrapper, ButtonGroup, ButtonGroupActive, NavLinks } from './HeroElements'

import Main from './Main';


function Hero02() {

    return (
        <>
            <HeroContainer>
                <HeroBgImg className="imgfilter" src={HeroBgImageMobile} />
                <HeroBgImg className="imgfilter" src={HeroBgImageTablet} />
                <HeroBgImg className="imgfilter" src={HeroBgImageDesktop} />
                <HeroTextContainer>
                        <HeroH1>Seraph Station</HeroH1>
                        <HeroP>The Seraph Station project challenged us to design a unique station that would 
  transport people through time. The result is a fresh and futuristic model 
  inspired by space stations.
                        </HeroP>
                <HeroButtonWrapper>
                <NavLinks to="/Portfolio"><Button>See Our Portfolio<ArrowForwardOutlinedIcon /></Button></NavLinks>
                </HeroButtonWrapper>
                </HeroTextContainer>
                <ButtonGroupWrapper>
                    <NavLinks  to="/"><ButtonGroup>01</ButtonGroup></NavLinks>
                    <NavLinks to="/Hero02" ><ButtonGroupActive>02</ButtonGroupActive></NavLinks>
                    <NavLinks to="/Hero03" ><ButtonGroup>03</ButtonGroup></NavLinks>
                    <NavLinks to="/Hero04" ><ButtonGroup>04</ButtonGroup></NavLinks>
                </ButtonGroupWrapper>
        </HeroContainer>
        <Main />
        </>
    )
}

export default Hero02
