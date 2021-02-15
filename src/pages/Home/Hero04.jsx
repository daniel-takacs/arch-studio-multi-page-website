import React from 'react';
import HeroBgImageDesktop from '../../assets/images/home/desktop/image-hero-trinity.jpg';
import HeroBgImageMobile from '../../assets/images/home/mobile/image-hero-seraph.jpg';
import HeroBgImageTablet from '../../assets/images/home/tablet/image-hero-seraph.jpg';
import '../../index.scss';
import ArrowForwardOutlinedIcon from '@material-ui/icons/ArrowForwardOutlined';
import { HeroContainer, HeroBgImg, HeroTextContainer, HeroH1, HeroP, HeroButtonWrapper, 
        ButtonGroupWrapper, ButtonGroup, ButtonGroupActive, NavLinks } from './HeroElements'
import Main from './Main';
import { Button } from '../../components/Buttons';


function Hero04() {

    return (
        <>
            <HeroContainer>
                <HeroBgImg className="imgfilter" src={HeroBgImageMobile} />
                <HeroBgImg className="imgfilter" src={HeroBgImageTablet} />
                <HeroBgImg className="imgfilter" src={HeroBgImageDesktop} />
                <HeroTextContainer>
                        <HeroH1>Trinity Bank Tower</HeroH1>
                        <HeroP> Trinity Bank challenged us to make a concept for a 84 story building located 
  in the middle of a city with a high earthquake frequency. For this project we 
  used curves to blend design and stability to meet our objectives.
                        </HeroP>
                <HeroButtonWrapper>
                <NavLinks to="/Portfolio"><Button>See Our Portfolio<ArrowForwardOutlinedIcon /></Button></NavLinks>
                </HeroButtonWrapper>
                </HeroTextContainer>
                <ButtonGroupWrapper>
                    <NavLinks  to="/"><ButtonGroup>01</ButtonGroup></NavLinks>
                    <NavLinks to="/Hero02" ><ButtonGroup>02</ButtonGroup></NavLinks>
                    <NavLinks to="/Hero03" ><ButtonGroup>03</ButtonGroup></NavLinks>
                    <NavLinks to="/Hero04" ><ButtonGroupActive>04</ButtonGroupActive></NavLinks>
                </ButtonGroupWrapper>
        </HeroContainer>
        <Main />
        </>
    )
}

export default Hero04
