import styled from 'styled-components';


export const MainContainer = styled.div `

  padding: 0 32px;
  margin-bottom: 180px;
  @media screen and (min-width: 376px) {
    padding: 0 97.5px;
}

`;
export const WelcomeTextContent = styled.div `
  
  margin: 72px 0;
`;
export const MainH2 = styled.h2 `
  font-size: 3.2rem;
`;
export const MainP = styled.p `
  padding-top: 29px;
`;
export const MainImgContainer = styled.div `
  display: none;
  @media screen and (min-width: 376px) {
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
`;

export const FeaturedContainer = styled.div `
  margin: 100px 0;
`;
export const FeaturedH2 = styled.h2 `
  margin: 40px 0;
  font-size: 2rem;
  @media screen and (min-width: 376px) {
    font-size: 3.2rem;
  }
`;
export const FeaturedImages = styled.div `
`;
export const FeaturedImageContainer = styled.div `
  position: relative;
`;

export const FeaturedImage = styled.img `
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
export const FeaturedTextContainer = styled.div `
  position: absolute;
  bottom: 25px;
  left: 20px;
  color: #fff;
`;
export const FeaturedTop = styled.div `
  display: none;
 @media screen and (min-width: 376px) {
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