import React from 'react';
import HeroBgImageDesktop from '../../assets/images/home/desktop/image-hero-federal.jpg';
import HeroBgImageMobile from '../../assets/images/home/mobile/image-hero-seraph.jpg';
import HeroBgImageTablet from '../../assets/images/home/tablet/image-hero-seraph.jpg';
import '../../index.scss';
import ArrowForwardOutlinedIcon from '@material-ui/icons/ArrowForwardOutlined';
import { HeroContainer, HeroBgImg, HeroTextContainer, HeroH1, HeroP, HeroButtonWrapper, 
        ButtonGroupWrapper, ButtonGroup, ButtonGroupActive, NavLinks } from './HeroElements'
import Main from './Main';
import { Button } from '../../components/Buttons';

function Hero03() {

    return (
        <>
            <HeroContainer>
                <HeroBgImg className="imgfilter" src={HeroBgImageMobile} />
                <HeroBgImg className="imgfilter" src={HeroBgImageTablet} />
                <HeroBgImg className="imgfilter" src={HeroBgImageDesktop} />
                <HeroTextContainer>
                        <HeroH1>Federal II Tower</HeroH1>
                        <HeroP>A sequel theme project for a tower originally built in the 1800s. We achieved 
  this with a striking look of brutal minimalism with modern touches.
                        </HeroP>
                <HeroButtonWrapper>
                <NavLinks to="/Portfolio"><Button>See Our Portfolio<ArrowForwardOutlinedIcon /></Button></NavLinks>
                </HeroButtonWrapper>
                </HeroTextContainer>
                <ButtonGroupWrapper>
                    <NavLinks  to="/"><ButtonGroup>01</ButtonGroup></NavLinks>
                    <NavLinks to="/Hero02" ><ButtonGroup>02</ButtonGroup></NavLinks>
                    <NavLinks to="/Hero03" ><ButtonGroupActive>03</ButtonGroupActive></NavLinks>
                    <NavLinks to="/Hero04" ><ButtonGroup>04</ButtonGroup></NavLinks>
                </ButtonGroupWrapper>
        </HeroContainer>
        <Main />
        </>
    )
}

export default Hero03
