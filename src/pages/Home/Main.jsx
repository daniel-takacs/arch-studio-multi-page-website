import React from 'react';
import '../../index.scss';
import ArrowForwardOutlinedIcon from '@material-ui/icons/ArrowForwardOutlined';
import { NavLinks } from './HeroElements';

import { MainContainer, WelcomeTextContent, SmallTeamH2, MainP, SmallTeamContainer, 
        SmallTeamImg, SmallTeamText, MainButtonWrapper, FeaturedContainer,
        FeaturedImageContainer, FeaturedImages, FeaturedImage, FeaturedTextContainer,
        FeaturedH3, FeaturedBottomButtonWrapper, FeaturedButton, FeaturedButtonTop,
      FeaturedH2, FeaturedTop, FeaturedBottomButton, WelcomeImgContainer, WelcomeTextContentWrapper, WelcomeMainImg, WelcomeH2 } from './MainElements';

import { SmallTeamMobile, SmallTeamTablet, SmallTeamDesktop, DelSolMobile, TowerMobile, 
  PrototypeMobile, DelSolTablet, PrototypeTablet,TowerTablet, DelSolDesktop, PrototypeDesktop
  ,TowerDesktop , WelcomeImage} 
  from '../../assets/images/images';
  import { Button } from '../../components/Buttons';


function Main() {
    return (
        <>
            <MainContainer>
              <WelcomeTextContentWrapper>
                <WelcomeTextContent>
                  <WelcomeH2>Welcome to Arch Studio</WelcomeH2>
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
            <SmallTeamContainer>
                <SmallTeamImg className="imgfilter" src={SmallTeamMobile}/>
                <SmallTeamImg className="imgfilter" src={SmallTeamTablet}/>
                <SmallTeamImg className="imgfilter" src={SmallTeamDesktop}/>
                <SmallTeamText>
                  <SmallTeamH2>Small team, big ideas</SmallTeamH2>
                  <MainButtonWrapper>
                  <NavLinks to="/About"><Button>About Us<ArrowForwardOutlinedIcon /></Button></NavLinks>
                  </MainButtonWrapper>  
                </SmallTeamText> 
            </SmallTeamContainer>

            <FeaturedContainer>
                <FeaturedTop>
                  <FeaturedH2>Featured</FeaturedH2>
                  <FeaturedButtonTop onClick={() => { alert('clicked') }}>See All<ArrowForwardOutlinedIcon /></FeaturedButtonTop>
                </FeaturedTop>
                
                <FeaturedImages>
                    <FeaturedImageContainer>
                      <FeaturedImage src={DelSolMobile}/>
                      <FeaturedImage src={DelSolTablet}/>
                      <FeaturedImage src={DelSolDesktop}/>
                      <FeaturedTextContainer>
                        <FeaturedH3>Project De Sol</FeaturedH3>
                        <FeaturedButton>View All Projects</FeaturedButton>    
                      </FeaturedTextContainer>  
                    </FeaturedImageContainer>

                    <FeaturedImageContainer>
                      <FeaturedImage src={TowerMobile}/>
                      <FeaturedImage src={TowerTablet}/>
                      <FeaturedImage src={TowerDesktop}/>
                      <FeaturedTextContainer>
                        <FeaturedH3>228B Tower</FeaturedH3>
                        <FeaturedButton>View All Projects</FeaturedButton>    
                      </FeaturedTextContainer>  
                    </FeaturedImageContainer>

                    <FeaturedImageContainer>
                      <FeaturedImage src={PrototypeMobile}/>
                      <FeaturedImage src={PrototypeTablet}/>
                      <FeaturedImage src={PrototypeDesktop}/>
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
