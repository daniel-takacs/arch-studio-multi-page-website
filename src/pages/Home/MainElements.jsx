import styled from 'styled-components';
import { device } from '../../device';


export const MainContainer = styled.div `
    padding: 0 32px;
    margin-bottom: 180px;
      @media ${device.tablet} {
        margin: 0 auto; 
        max-width: 1110px;
        padding: 0 97.5px;
    }

`;
export const WelcomeTextContentWrapper = styled.div `
   
    @media ${device.tablet} {
        display: flex;
        margin-bottom: 150px;
    }
`
export const WelcomeTextContent = styled.div `
  
  margin: 72px 0;
`;
export const WelcomeImgContainer = styled.div `
    display: none;
        @media ${device.tablet} {
            display: block;
    }
`
export const WelcomeMainImg = styled.img `

`
export const WelcomeH2 = styled.h2 `
  font-size: 3.2rem;
  position: relative;
    @media ${device.tablet} {
    &:before {
      content: 'Welcome';
      color: #EEEFF4;
      font-size: 8rem;
      position: absolute;
      top: -150px;
      left: 60px;
      z-index: 10;
    }
    }
`;
export const MainH2 = styled.h2 `
   font-size: 3.2rem;
`
export const MainP = styled.p `
  padding-top: 29px;
`;
export const MainImgContainer = styled.div `
  display: none;
  @media ${device.mobileM} {
    display: block;
    position: relative;  
}
`;
export const MainImg = styled.img `
  width: 100%;
  margin: 0 auto;
        &:nth-child(2) {
            display:none;
        }
        &:nth-child(3) {
            display:none;
        }
     @media ${device.mobileM} {
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
    @media ${device.tablet} {
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
  
export const SmallTeamText = styled.div `
  color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-80%, -50%);
`
export const MainButtonWrapper = styled.div`

`
export const MainButton = styled.div `
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
    @media ${device.mobileM} {
      width: 40%;
    }
`;

export const FeaturedContainer = styled.div `
  margin: 100px 0;
`;
export const FeaturedH2 = styled.h2 `
  margin: 40px 0;
  font-size: 2rem;
  @media ${device.mobileM} {
    font-size: 3.2rem;
  }
`;
export const FeaturedImages = styled.div `
 @media ${device.tablet} {
      display:flex;
    }
`;
export const FeaturedImageContainer = styled.div `
  position: relative;
  @media ${device.tablet} {
        &:after {
            position: absolute;
            font-size: 10rem;
            font-weight: 700;
            top:10px;
            right: 0;
            content: '1';
            color: rgba(255,255,255,0.2);
        }
        &:nth-child(2) {
               padding: 0 10px;
        }
       
    }

`;

export const FeaturedImage = styled.img `
    width: 100%;
    &:nth-child(2) {
            display:none;
        }
        &:nth-child(3) {
            display:none;
        }
     @media ${device.mobileM} {
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
    @media ${device.tablet} {
        
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
export const FeaturedTextContainer = styled.div `
  position: absolute;
  bottom: 25px;
  left: 20px;
  color: #fff;
`;
export const FeaturedTop = styled.div `
  display: none;
 @media ${device.mobileM} {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 50px;
  margin-bottom: 50px;
  }
  
`
export const FeaturedButtonTop = styled.div`
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
export const FeaturedH3 = styled.h3 `

`;
export const FeaturedButton = styled.div `
  margin-top: 10px;
  cursor: pointer;
`;

export const FeaturedBottomButtonWrapper = styled.div `
    @media ${device.tablet} {
        display: none;
    }
`;
export const FeaturedBottomButton = styled.button`
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