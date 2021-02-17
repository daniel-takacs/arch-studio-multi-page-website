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
    @media ${device.laptopL} {
        padding: 0;
    }

`;
export const WelcomeTextContentWrapper = styled.div `
   
    @media ${device.tablet} {
        display: flex;
        margin-bottom: 150px;
        justify-content: flex-end;
    }
`
export const WelcomeTextContent = styled.div `
    margin: 72px 0;
      @media ${device.laptopL} {
        width: 40%;
        padding: 10px 10px 0 25px
    }
    
`;
export const WelcomeImgContainer = styled.div `
    display: none;
        @media ${device.laptopL} {
            display: block;
            
    }
`
export const WelcomeMainImg = styled.img `

`
export const WelcomeH2 = styled.h2 `
  font-size: 3rem;
  position: relative;
  @media ${device.tablet} {
    &:before {
      content: 'Welcome';
      color: #EEEFF4;
      font-size: 8.4rem;
      position: absolute;
      top: -200px;
      left: -34px;
      z-index: 10;
    }
  }
    @media ${device.laptopL} {
    &:before {
      content: 'Welcome';
      color: #EEEFF4;
      font-size: 12.4rem;
      position: absolute;
      top: -200px;
      left: -364px;
      z-index: 10;
      }
    }
`;

export const MainP = styled.p `
  padding-top: 29px;
`;


export const SmallTeamContainer = styled.div `
  display: none;
    @media ${device.tablet} {
      position: relative;  
      display: block;
    }
`;
export const SmallTeamImg = styled.img `
  width: 100%;
  margin: 0 auto;
   
    @media ${device.tablet} {
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
    @media ${device.laptopL} {
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
  width: 60%;
  top: 50%;
  left: 60%;
  transform: translate(-80%, -50%);
    
`
export const SmallTeamH2 = styled.h2 `
   font-size: 3rem;
   margin-bottom: 15px;
    @media ${device.laptopL} {
        font-size: 4.2rem;
    }
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
    &:hover {
        background-color: #60636D;
    }
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
      justify-content: space-between;
    }
`;
export const FeaturedImageContainer = styled.div `
  position: relative;
  margin-bottom: 15px;
  cursor: pointer;
  @media ${device.tablet} {
        &:nth-child(1) {
        &:after {
            position: absolute;
            font-size: 10rem;
            font-weight: 700;
            top:10px;
            right: 0;
            content: '1';
            color: rgba(255,255,255,0.2);
        }
        }

        &:nth-child(2) {
               padding: 0 10px;
               &:after {
            position: absolute;
            font-size: 10rem;
            font-weight: 700;
            top:10px;
            right: 10px;
            content: '2';
            color: rgba(255,255,255,0.2);
        }
        }
        &:nth-child(3) {
               padding: 0 10px;
               &:after {
            position: absolute;
            font-size: 10rem;
            font-weight: 700;
            top:10px;
            right: 10px;
            content: '3';
            color: rgba(255,255,255,0.2);
        }
       
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
    display: none;
      @media ${device.tablet} {
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
        &:hover {
        background-color: #60636D;
    }
  }
    
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
    &:hover {
        background-color: #60636D;
    }
`;