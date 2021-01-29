import React from 'react';
import SmallTeamMobile from '../../assets/images/home/mobile/image-small-team.jpg';
import DelSolMobile from '../../assets/images/portfolio/mobile/image-del-sol.jpg';
import TowerMobile from '../../assets/images/portfolio/mobile/image-228b.jpg';
import PrototypeMobile from '../../assets/images/portfolio/mobile/image-prototype.jpg';
import NavLogo from '../../assets/images/logo.svg';
import styled from 'styled-components';
import { Button } from '@material-ui/core';
import '../../index.scss';
import ArrowForwardOutlinedIcon from '@material-ui/icons/ArrowForwardOutlined';

const MainContainer = styled.div `
  padding: 0 32px;
  margin-bottom: 180px;
`;
const WelcomeTextContent = styled.div `
  
  margin: 72px 0;
`;
const MainH2 = styled.h2 `

`;
const MainP = styled.p `
  padding-top: 29px;
`;
const MainImgContainer = styled.div `
  display: none;
`;
const MainImg = styled.img `
  
`;
const MainButton = styled.div `

`;

const FeaturedContainer = styled.div `
  margin: 100px 0;
`;
const FeaturedH2 = styled.h2 `
  margin: 40px 0;
  font-size: 2rem;
`;
const FeaturedImages = styled.div `
`;
const FeaturedImageContainer = styled.div `
  position: relative;
`;

const FeaturedImage = styled.img `

`;
const FeaturedTextContainer = styled.div `
  position: absolute;
  bottom: 25px;
  left: 20px;
  color: #fff;
`;
const FeaturedH3 = styled.h3 `

`;
const FeaturedButton = styled.div `
  margin-top: 10px;
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
                <MainImg src={SmallTeamMobile}/>
                <MainH2>Small team, big ideas</MainH2>
                <MainButton>
                    <Button>About Us</Button>
                </MainButton>   
            </MainImgContainer>

            <FeaturedContainer>
                <FeaturedH2>Featured</FeaturedH2>
                <FeaturedImages>
                    <FeaturedImageContainer>
                      <FeaturedImage className="imgfilter" src={DelSolMobile}/>
                      <FeaturedTextContainer>
                        <FeaturedH3>Project De Sol</FeaturedH3>
                        <FeaturedButton>View All Projects</FeaturedButton>    
                      </FeaturedTextContainer>  
                    </FeaturedImageContainer>

                    <FeaturedImageContainer>
                      <FeaturedImage className="imgfilter" src={TowerMobile}/>
                      <FeaturedTextContainer>
                        <FeaturedH3>228B Tower</FeaturedH3>
                        <FeaturedButton>View All Projects</FeaturedButton>    
                      </FeaturedTextContainer>  
                    </FeaturedImageContainer>

                    <FeaturedImageContainer>
                      <FeaturedImage className="imgfilter" src={PrototypeMobile}/>
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
