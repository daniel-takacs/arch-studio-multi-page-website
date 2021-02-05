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
        padding: 0 97.5px;
        position: relative;
        &:after {
            position: absolute;
            content: 'Home';
            font-size: 1rem;
            color: #C8CCD8;
            text-transform: uppercase;
            letter-spacing: 10px;
            top: 48px;
            left: -25px;
            -webkit-transform: rotate(90deg);
            -ms-transform: rotate(90deg);
            transform: rotate(90deg);
        }
        &:before {
            position: absolute;
            content: '';
            width: 104px;
            height: 1px;
            background-color: #C8CCD8;
            top: -115px;
            left: -25px;
            -webkit-transform: rotate(90deg);
            -ms-transform: rotate(90deg);
            transform: rotate(90deg)
        }
}
`;
const HeroBgImg = styled.img `
    width: 100%;
    background-size: cover;
  
    overflow: hidden;
        @media screen and (min-width: 376px) {
        display: none;
    }
  margin: 0 auto;
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

const HeroTextContainer = styled.div `
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    @media screen and (min-width: 769px) {
        width:50%;
        padding-right: 100px;
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
    cursor: pointer;
`;

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
        </HeroContainer>
        </>
    )
}

export default Hero
