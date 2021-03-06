import React from 'react';
import AboutIntroImg from '../../assets/images/about/mobile/image-hero.jpg';
import AboutTabIntroImg from '../../assets/images/about/tablet/image-hero.jpg';
import AboutDeskIntroImg from '../../assets/images/about/desktop/image-hero.jpg';
import { AboutContainer, AboutHeroContainer, AboutMainContainer, AboutHeroImgContainer, AboutHeroImg, AboutText, AboutIntroH2,
        AboutIntroP, AboutMainSection, AboutMainText, AboutMainImgContainer, AboutMainImg, AboutMainP, AboutMainH2,
        AboutLeadersContainer, AboutLeaderH2, AboutLeader, AboutLeaders, AboutLeaderH2Box, AboutLeaderImgBox, AboutLeaderImg, 
        AboutLeaderH4, AboutLeaderP,AboutSocial, AboutSocialIcon  } from './AboutElements';
import AboutJake from '../../assets/images/about/desktop/avatar-jake.jpg';
import AboutThompson from '../../assets/images/about/desktop/avatar-thompson.jpg';
import AboutJackson from '../../assets/images/about/desktop/avatar-jackson.jpg';
import AboutMaria from '../../assets/images/about/desktop/avatar-maria.jpg';
import IconLinkedin from '../../assets/images/icons/icon-linkedin.svg';
import IconTwitter from '../../assets/images/icons/icon-twitter.svg';
import OurHerImg from '../../assets/images/about/desktop/image-heritage.jpg'


function About() {
    return (
        <div>
            <AboutContainer>
                <AboutHeroContainer>
                    <AboutHeroImgContainer> 
                        <AboutHeroImg className="imgfilter" src={AboutIntroImg}/>
                        <AboutHeroImg className="imgfilter" src={AboutTabIntroImg}/>
                        <AboutHeroImg className="imgfilter" src={AboutDeskIntroImg}/>
                    </AboutHeroImgContainer>
                    <AboutText>
                        <AboutIntroH2>
                            Your team of professionals
                        </AboutIntroH2>
                        <AboutIntroP>  Our small team of world-class professionals will work with you every step of the way. 
                        Strong relationships are at the core of everything we do. This extends to the 
                        relationship our projects have with their surroundings.
                        </AboutIntroP>
                    </AboutText>
                </AboutHeroContainer>
            <AboutMainContainer>    
               
                <AboutMainSection>
                    <AboutMainText>
                        <AboutMainH2>Our Heritage</AboutMainH2>
                        <AboutMainP>Founded in 2007, we started as a trio of architects. Our complimentary skills and 
                        relentless attention to detail turned Arch into one of the most sought after boutique 
                        firms in the country.
                        </AboutMainP>
                        <AboutMainP>
                        Speciliazing in Urban Design allowed us to focus on creating exceptional structures that 
                        live in harmony with their surroundings. We consider every detail from every surrounding 
                        element to inform our designs.  
                        </AboutMainP> 
                        <AboutMainP>
                        Our small team of world-class professionals provides input on every project.
                        </AboutMainP>   
                    </AboutMainText>  
                        <AboutMainImgContainer>
                            <AboutMainImg src={OurHerImg} />
                        </AboutMainImgContainer>  
                </AboutMainSection>   
                <AboutLeadersContainer>
                    <AboutLeaderH2Box>
                    <AboutLeaderH2>The Leaders</AboutLeaderH2>
                    </AboutLeaderH2Box>
                    <AboutLeaders>
                    <AboutLeader>
                        <AboutLeaderImgBox>
                            <AboutLeaderImg src={AboutJake} />
                        </AboutLeaderImgBox>
                        <AboutLeaderH4>Jake Richards</AboutLeaderH4>
                        <AboutLeaderP>Chief Architect</AboutLeaderP>
                        <AboutSocial>
                            <AboutSocialIcon src={IconLinkedin} />
                            <AboutSocialIcon src={IconTwitter} />
                        </AboutSocial>
                    </AboutLeader>
                    <AboutLeader>
                        <AboutLeaderImgBox>
                            <AboutLeaderImg src={AboutThompson} />
                        </AboutLeaderImgBox>
                        <AboutLeaderH4>Thompson Smith</AboutLeaderH4>
                        <AboutLeaderP>Head of Finance</AboutLeaderP>
                        <AboutSocial>
                            <AboutSocialIcon src={IconLinkedin} />
                            <AboutSocialIcon src={IconTwitter} />
                        </AboutSocial>
                    </AboutLeader>
                    <AboutLeader>
                        <AboutLeaderImgBox>
                            <AboutLeaderImg src={AboutJackson} />
                        </AboutLeaderImgBox>
                        <AboutLeaderH4>Jackson Rourke</AboutLeaderH4>
                        <AboutLeaderP>Lead Designer</AboutLeaderP>
                        <AboutSocial>
                            <AboutSocialIcon src={IconLinkedin} />
                            <AboutSocialIcon src={IconTwitter} />
                        </AboutSocial>
                    </AboutLeader>
                    <AboutLeader>
                        <AboutLeaderImgBox>
                            <AboutLeaderImg src={AboutMaria} />
                        </AboutLeaderImgBox>
                        <AboutLeaderH4>Maria Simpson</AboutLeaderH4>
                        <AboutLeaderP>Senior Architect</AboutLeaderP>
                        <AboutSocial>
                            <AboutSocialIcon src={IconLinkedin} />
                            <AboutSocialIcon src={IconTwitter} />
                        </AboutSocial>
                    </AboutLeader>
                    </AboutLeaders>
                </AboutLeadersContainer>
                </AboutMainContainer>
            </AboutContainer> 
        </div>
    )
}

export default About
