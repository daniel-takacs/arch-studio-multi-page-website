import React from 'react';
import SmallTeamMobile from '../../assets/images/home/tablet/image-small-team.jpg';
import DelSolMobile from '../../assets/images/portfolio/mobile/image-del-sol.jpg';
import TowerMobile from '../../assets/images/portfolio/mobile/image-228b.jpg';
import PrototypeMobile from '../../assets/images/portfolio/mobile/image-prototype.jpg';
import DelSolTablet from '../../assets/images/portfolio/tablet/image-del-sol.jpg';
import PrototypeTablet from '../../assets/images/portfolio/tablet/image-prototype.jpg';
import TowerTablet from '../../assets/images/portfolio/tablet/image-228b.jpg';

import NavLogo from '../../assets/images/logo.svg';
import styled from 'styled-components';
import { Button } from '@material-ui/core';
import '../../index.scss';
import ArrowForwardOutlinedIcon from '@material-ui/icons/ArrowForwardOutlined';

const MainContainer = styled.div `

  padding: 0 32px;
  margin-bottom: 180px;
  @media screen and (min-width: 376px) {
    padding: 0 97.5px;
}
`;
const WelcomeTextContent = styled.div `
  
  margin: 72px 0;
`;
const MainH2 = styled.h2 `
  font-size: 3.2rem;
`;
const MainP = styled.p `
  padding-top: 29px;
`;
const MainImgContainer = styled.div `
  display: none;
  @media screen and (min-width: 376px) {
    display: block;
    position: relative;  
}
`;
const MainImg = styled.img `
  width: 100%;
  margin: 0 auto;
  
`;
const SmallTeamText = styled.div `
  color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-80%, -50%);
`
const MainButtonWrapper = styled.div`

`
const MainButton = styled.div `
  background-color: #1B1D23;
    color: #fff;
    padding: 20px;
    outline: none;
    border: none;
    display: flex;
    align-items: center;
    width: 100%;
    display:flex;
    justify-content:center;
    cursor: pointer;
`;

const FeaturedContainer = styled.div `
  margin: 100px 0;
`;
const FeaturedH2 = styled.h2 `
  margin: 40px 0;
  font-size: 2rem;
  @media screen and (min-width: 376px) {
    font-size: 3.2rem;
  }
`;
const FeaturedImages = styled.div `
`;
const FeaturedImageContainer = styled.div `
  position: relative;
`;

const FeaturedImage = styled.img `
    width: 100%;
    &:second-child {
      display:none;
    }
   @media screen and (min-width: 376px) {
    &:first-child {
    display:none;
  }
  }
`;
const FeaturedTextContainer = styled.div `
  position: absolute;
  bottom: 25px;
  left: 20px;
  color: #fff;
`;
const FeaturedTop = styled.div `
  display: none;
 @media screen and (min-width: 376px) {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 50px;
  margin-bottom: 50px;
  }
  
`
const FeaturedButtonTop = styled.div`
    background-color: #1B1D23;
    color: #fff;
    padding: 20px;
    outline: none;
    border: none;
    display: flex;
    align-items: center;
    width: 30%;
    display:flex;
    justify-content:center;
    cursor: pointer;
`
const FeaturedH3 = styled.h3 `

`;
const FeaturedButton = styled.div `
  margin-top: 10px;
  cursor: pointer;
`;

const FeaturedBottomButtonWrapper = styled.div `
    
`;
const FeaturedBottomButton = styled.button`
    background-color: #1B1D23;
    color: #fff;
    padding: 20px;
    outline: none;
    border: none;
    display: flex;
    align-items: center;
    width: 100%;
    display:flex;
    justify-content:center;
    cursor: pointer;
`;
function Main() {
    return (
        <>
            <MainContainer>
              <WelcomeTextContent>
                <MainH2>Welcome to Arch Studio</MainH2>
                <MainP>We have a unique network and skillset to help bring your projects to life. Our 
                    small team of highly skilled individuals combined with our large network put us 
                    in a strong position to deliver exceptional results.
                </MainP>
                <MainP>
                    Over the past 10 years, we have worked on all kinds of projects. From stations 
                    to high-rise buildings, we create spaces that inspire and delight.
                </MainP>
                <MainP>
                     We work closely with our clients so that we understand the intricacies of each 
                    project. This allows us to work in harmony the surrounding area to create truly 
                    stunning projects that will stand the test of time.
                </MainP>
              </WelcomeTextContent>
            <MainImgContainer>
                <MainImg className="imgfilter" src={SmallTeamMobile}/>
                <SmallTeamText>
                  <MainH2>Small team, big ideas</MainH2>
                  <MainButtonWrapper>
                      <MainButton onClick={() => { alert('clicked') }}>About Us<ArrowForwardOutlinedIcon /></MainButton>
                  </MainButtonWrapper>  
                </SmallTeamText> 
            </MainImgContainer>

            <FeaturedContainer>
                <FeaturedTop>
                  <FeaturedH2>Featured</FeaturedH2>
                  <FeaturedButtonTop onClick={() => { alert('clicked') }}>See All<ArrowForwardOutlinedIcon /></FeaturedButtonTop>
                </FeaturedTop>
                
                <FeaturedImages>
                    <FeaturedImageContainer>
                      <FeaturedImage className="imgfilter" src={DelSolMobile}/>
                      <FeaturedImage className="imgfilter" src={DelSolTablet}/>
                      <FeaturedTextContainer>
                        <FeaturedH3>Project De Sol</FeaturedH3>
                        <FeaturedButton>View All Projects</FeaturedButton>    
                      </FeaturedTextContainer>  
                    </FeaturedImageContainer>

                    <FeaturedImageContainer>
                      <FeaturedImage className="imgfilter" src={TowerMobile}/>
                      <FeaturedImage className="imgfilter" src={TowerTablet}/>
                      <FeaturedTextContainer>
                        <FeaturedH3>228B Tower</FeaturedH3>
                        <FeaturedButton>View All Projects</FeaturedButton>    
                      </FeaturedTextContainer>  
                    </FeaturedImageContainer>

                    <FeaturedImageContainer>
                      <FeaturedImage className="imgfilter" src={PrototypeMobile}/>
                      <FeaturedImage className="imgfilter" src={PrototypeTablet}/>
                      <FeaturedTextContainer>
                        <FeaturedH3>Le Prototype</FeaturedH3>
                        <FeaturedButton>View All Projects</FeaturedButton>    
                      </FeaturedTextContainer>  
                    </FeaturedImageContainer>
                    
                </FeaturedImages>
                <FeaturedBottomButtonWrapper>
                <FeaturedBottomButton onClick={() => { alert('clicked') }}>See All<ArrowForwardOutlinedIcon /></FeaturedBottomButton>
                </FeaturedBottomButtonWrapper>
            </FeaturedContainer>

        </MainContainer>
        </>
    )
}

export default Main
