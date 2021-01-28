import React from 'react';
import SmallTeamMobile from '../../assets/images/home/mobile/image-small-team.jpg';
import DelSolMobile from '../../assets/images/portfolio/mobile/image-del-sol.jpg';
import TowerMobile from '../../assets/images/portfolio/mobile/image-228b.jpg';
import PrototypeMobile from '../../assets/images/portfolio/mobile/image-prototype.jpg';
import NavLogo from '../../assets/images/logo.svg';
import styled from 'styled-components';
import { Button } from '@material-ui/core';

const MainContainer = styled.div `

`;
const HeroH2 = styled.h2 `

`;
const MainP = styled.p `

`;
const MainImgContainer = styled.div `

`;
const MainImg = styled.img `

`;
const MainH2 = styled.h2 `

`;
const MainButton = styled.div `

`;

const FeaturedContainer = styled.div `

`;
const FeaturedH2 = styled.h2 `

`;
const FeaturedImages = styled.div `

`;
const FeaturedImageContainer = styled.div `

`;

const FeaturedImage = styled.img `

`;
const FeaturedTextContainer = styled.div `

`;
const FeaturedH3 = styled.h3 `

`;
const FeaturedButton = styled.div `

`;
function Main() {
    return (
        <>
            <MainContainer>
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

            <MainImgContainer>
                <MainImg  src={SmallTeamMobile}/>
                <MainH2>Small team, big ideas</MainH2>
                <MainButton>
                    <Button>About Us</Button>
                </MainButton>   
            </MainImgContainer>

            <FeaturedContainer>
                <FeaturedH2>Featured</FeaturedH2>
                <FeaturedImages>
                    <FeaturedImageContainer>
                      <FeaturedImage src={DelSolMobile}/>
                      <FeaturedTextContainer>
                        <FeaturedH3>Project De Sol</FeaturedH3>
                        <FeaturedButton>View All Projects</FeaturedButton>    
                      </FeaturedTextContainer>  
                    </FeaturedImageContainer>

                    <FeaturedImageContainer>
                      <FeaturedImage src={TowerMobile}/>
                      <FeaturedTextContainer>
                        <FeaturedH3>228B Tower</FeaturedH3>
                        <FeaturedButton>View All Projects</FeaturedButton>    
                      </FeaturedTextContainer>  
                    </FeaturedImageContainer>

                    <FeaturedImageContainer>
                      <FeaturedImage src={PrototypeMobile}/>
                      <FeaturedTextContainer>
                        <FeaturedH3>Le Prototype</FeaturedH3>
                        <FeaturedButton>View All Projects</FeaturedButton>    
                      </FeaturedTextContainer>  
                    </FeaturedImageContainer>
                    
                </FeaturedImages>
                <Button onClick={() => { alert('clicked') }}>See All</Button>
            </FeaturedContainer>

        </MainContainer>
        </>
    )
}

export default Main
