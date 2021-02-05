import React from 'react';

import NavLogo from '../../assets/images/logo.svg';
import { Button } from '@material-ui/core';
import '../../index.scss';
import ArrowForwardOutlinedIcon from '@material-ui/icons/ArrowForwardOutlined';

import { MainContainer, WelcomeTextContent, MainH2, MainP, MainImgContainer, 
        MainImg, SmallTeamText, MainButtonWrapper, MainButton, FeaturedContainer,
        FeaturedImageContainer, FeaturedImages, FeaturedImage, FeaturedTextContainer,
        FeaturedH3, FeaturedBottomButtonWrapper, FeaturedButton, FeaturedButtonTop,
      FeaturedH2, FeaturedTop, FeaturedBottomButton, WelcomeImgContainer, WelcomeTextContentWrapper, WelcomeMainImg } from './MainElements';

import { SmallTeamMobile, SmallTeamTablet, SmallTeamDesktop, DelSolMobile, TowerMobile, 
  PrototypeMobile, DelSolTablet, PrototypeTablet,TowerTablet, DelSolDesktop, PrototypeDesktop
  ,TowerDesktop , WelcomeImage} 
  from '../../assets/images/images';


function Main() {
    return (
        <>
            <MainContainer>
              <WelcomeTextContentWrapper>
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
                <WelcomeImgContainer>
                  <WelcomeMainImg className="imgfilter" src={WelcomeImage}/>
                </WelcomeImgContainer>
              </WelcomeTextContentWrapper>
            <MainImgContainer>
                <MainImg className="imgfilter" src={SmallTeamMobile}/>
                <MainImg className="imgfilter" src={SmallTeamTablet}/>
                <MainImg className="imgfilter" src={SmallTeamDesktop}/>
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
                      <FeaturedImage className="imgfilter no-filter" src={DelSolDesktop}/>
                      <FeaturedTextContainer>
                        <FeaturedH3>Project De Sol</FeaturedH3>
                        <FeaturedButton>View All Projects</FeaturedButton>    
                      </FeaturedTextContainer>  
                    </FeaturedImageContainer>

                    <FeaturedImageContainer>
                      <FeaturedImage className="imgfilter" src={TowerMobile}/>
                      <FeaturedImage className="imgfilter" src={TowerTablet}/>
                      <FeaturedImage className="imgfilter no-filter" src={TowerDesktop}/>
                      <FeaturedTextContainer>
                        <FeaturedH3>228B Tower</FeaturedH3>
                        <FeaturedButton>View All Projects</FeaturedButton>    
                      </FeaturedTextContainer>  
                    </FeaturedImageContainer>

                    <FeaturedImageContainer>
                      <FeaturedImage className="imgfilter" src={PrototypeMobile}/>
                      <FeaturedImage className="imgfilter" src={PrototypeTablet}/>
                      <FeaturedImage className="imgfilter" src={PrototypeDesktop}/>
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
