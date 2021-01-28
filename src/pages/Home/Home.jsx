import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import styled from 'styled-components';
import { Button } from '@material-ui/core';
import Footer from '../../components/Footer';


import HeroBgImageDesktop from '../../assets/images/home/desktop/image-hero-paramour.jpg';
import HeroBgImageMobile from '../../assets/images/home/mobile/image-hero-paramour.jpg';
import SmallTeamMobile from '../../assets/images/home/mobile/image-small-team.jpg';
import DelSolMobile from '../../assets/images/portfolio/mobile/image-del-sol.jpg';
import TowerMobile from '../../assets/images/portfolio/mobile/image-228b.jpg';
import PrototypeMobile from '../../assets/images/portfolio/mobile/image-prototype.jpg';
import NavLogo from '../../assets/images/logo.svg';

const HeroContainer = styled.div `
    
`;
const HeroBgDesktop = styled.img `
    display: none;
`;
const HeroBgMobile = styled.img `

`;
const HeroH1 = styled.h1 `

`;
const HeroP = styled.p `

`;
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


function Home() {
    return (
        <>
        <HeroContainer>
            <HeroBgDesktop src={HeroBgImageDesktop} />
            <HeroBgMobile src={HeroBgImageMobile} />
            <HeroH1>Project Paramour</HeroH1>
            <HeroP>Project made for an art museum near Southwest London. Project Paramour is 
                    a statement of bold, modern architecture.
            </HeroP>
            <Button onClick={() => { alert('clicked') }}>See Our Portfolio</Button>
        </HeroContainer>    
        <MainContainer>
            <HeroH2>Welcome to Arch Studio</HeroH2>
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

       

        <Footer />
            <p>







See Our Portfolio

Seraph Station

The Seraph Station project challenged us to design a unique station that would 
transport people through time. The result is a fresh and futuristic model 
inspired by space stations.

See Our Portfolio

Federal II Tower

A sequel theme project for a tower originally built in the 1800s. We achieved 
this with a striking look of brutal minimalism with modern touches.

See Our Portfolio

Trinity Bank Tower

Trinity Bank challenged us to make a concept for a 84 story building located 
in the middle of a city with a high earthquake frequency. For this project we 
used curves to blend design and stability to meet our objectives.

See Our Portfolio

01
02
03
04

Welcome















See all

1
Project Del Sol
View All Projects

2
228B Tower
View All Projects

3
Le Prototype
View All Projects

Portfolio
About Us
Contact

See Our Portfolio</p>
        </>
    )
}

export default Home
