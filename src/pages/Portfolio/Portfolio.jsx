import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import styled from 'styled-components';


import PortfolioImg1 from '../../assets/images/portfolio/mobile/image-228b.jpg';
import PortfolioImg2 from '../../assets/images/portfolio/mobile/image-del-sol.jpg';
import PortfolioImg3 from '../../assets/images/portfolio/mobile/image-edelweiss.jpg';
import PortfolioImg4 from '../../assets/images/portfolio/mobile/image-eebox.jpg';
import PortfolioImg5 from '../../assets/images/portfolio/mobile/image-federal.jpg';
import PortfolioImg6 from '../../assets/images/portfolio/mobile/image-hypers.jpg';
import PortfolioImg7 from '../../assets/images/portfolio/mobile/image-netcry.jpg';
import PortfolioImg8 from '../../assets/images/portfolio/mobile/image-paramour.jpg';
import PortfolioImg9 from '../../assets/images/portfolio/mobile/image-prototype.jpg';
import PortfolioImg10 from '../../assets/images/portfolio/mobile/image-seraph.jpg';
import PortfolioImg11 from '../../assets/images/portfolio/mobile/image-sxiv.jpg';
import PortfolioImg12 from '../../assets/images/portfolio/mobile/image-trinity.jpg';

import PortfolioTabletImg1 from '../../assets/images/portfolio/tablet/image-228b.jpg';
import PortfolioTabletImg2 from '../../assets/images/portfolio/tablet/image-del-sol.jpg';
import PortfolioTabletImg3 from '../../assets/images/portfolio/tablet/image-edelweiss.jpg';
import PortfolioTabletImg4 from '../../assets/images/portfolio/tablet/image-eebox.jpg';
import PortfolioTabletImg5 from '../../assets/images/portfolio/tablet/image-federal.jpg';
import PortfolioTabletImg6 from '../../assets/images/portfolio/tablet/image-hypers.jpg';
import PortfolioTabletImg7 from '../../assets/images/portfolio/tablet/image-netcry.jpg';
import PortfolioTabletImg8 from '../../assets/images/portfolio/tablet/image-paramour.jpg';
import PortfolioTabletImg9 from '../../assets/images/portfolio/tablet/image-prototype.jpg';
import PortfolioTabletImg10 from '../../assets/images/portfolio/tablet/image-seraph.jpg';
import PortfolioTabletImg11 from '../../assets/images/portfolio/tablet/image-sxiv.jpg';
//import PortfolioTabletImg12 from '../../assets/images/portfolio/tablet/image-trinity.jpg';

const PortfolioContainer = styled.div `
 padding: 0 32px;
 margin: 50px auto;
 @media screen and (min-width: 376px) {
     padding: 0 97.5px;
 }
`
             
const Portfolio = styled.div `
    position: relative;
    margin-bottom: 20px;
`
const PortfolioImage = styled.img `
        width: 100%;
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
const PortfolioText = styled.div `
    position: absolute;
    bottom: 25px;
    left: 20px;
    color: #fff;
`
const PortfolioH3 = styled.h3 `

`
const PortfolioP = styled.p `

`

function PortfolioPage() {
    return (
        <>
            <PortfolioContainer >
                <Portfolio> 
                    <PortfolioImage className="imgfilter" src={PortfolioImg10}/>
                    <PortfolioImage className="imgfilter" src={PortfolioTabletImg10}/>
                    <PortfolioImage className="imgfilter" src={PortfolioImg10}/>
                    <PortfolioText>
                    <PortfolioH3>Seraph Station</PortfolioH3>
                    <PortfolioP>September 2019</PortfolioP>
                    </PortfolioText>
                </Portfolio>
                <Portfolio> 
                    <PortfolioImage className="imgfilter"src={PortfolioImg4}/>
                    <PortfolioImage className="imgfilter" src={PortfolioTabletImg4}/>
                    <PortfolioImage className="imgfilter" src={PortfolioImg10}/>
                    <PortfolioText>
                    <PortfolioH3>Eebox Building</PortfolioH3>
                    <PortfolioP>August 2017</PortfolioP>
                    </PortfolioText>
                </Portfolio>
                <Portfolio> 
                    <PortfolioImage className="imgfilter"src={PortfolioImg5}/>
                    <PortfolioImage className="imgfilter" src={PortfolioTabletImg5}/>
                    <PortfolioImage className="imgfilter" src={PortfolioImg10}/>
                    <PortfolioText>
                    <PortfolioH3>Federal II Tower</PortfolioH3>
                    <PortfolioP>March 2017</PortfolioP>
                    </PortfolioText>
                </Portfolio>
                <Portfolio> 
                    <PortfolioImage className="imgfilter"src={PortfolioImg2}/>
                    <PortfolioImage className="imgfilter" src={PortfolioTabletImg2}/>
                    <PortfolioImage className="imgfilter" src={PortfolioImg10}/>
                    <PortfolioText>
                    <PortfolioH3>Project Del Sol</PortfolioH3>
                    <PortfolioP>January 2016</PortfolioP>
                    </PortfolioText>
                </Portfolio>
                <Portfolio> 
                    <PortfolioImage className="imgfilter"src={PortfolioImg9}/>
                    <PortfolioImage className="imgfilter" src={PortfolioTabletImg9}/>
                    <PortfolioImage className="imgfilter" src={PortfolioImg10}/>
                    <PortfolioText>
                    <PortfolioH3>Le Prototype</PortfolioH3>
                    <PortfolioP>October 2015</PortfolioP>
                    </PortfolioText>
                </Portfolio>
                <Portfolio> 
                    <PortfolioImage className="imgfilter"src={PortfolioImg1}/>
                    <PortfolioImage className="imgfilter" src={PortfolioTabletImg1}/>
                    <PortfolioImage className="imgfilter" src={PortfolioImg10}/>
                    <PortfolioText>
                    <PortfolioH3>228B Tower</PortfolioH3>
                    <PortfolioP>April 2015</PortfolioP>
                    </PortfolioText>
                </Portfolio>
                <Portfolio> 
                    <PortfolioImage className="imgfilter"src={PortfolioImg3}/>
                    <PortfolioImage className="imgfilter" src={PortfolioTabletImg3}/>
                    <PortfolioImage className="imgfilter" src={PortfolioImg10}/>
                    <PortfolioText>
                    <PortfolioH3>Grand Edelweiss Hotel</PortfolioH3>
                    <PortfolioP>December 2013</PortfolioP>
                    </PortfolioText>
                </Portfolio>
                <Portfolio> 
                    <PortfolioImage className="imgfilter"src={PortfolioImg7}/>
                    <PortfolioImage className="imgfilter" src={PortfolioTabletImg6}/>
                    <PortfolioImage className="imgfilter" src={PortfolioImg10}/>
                    <PortfolioText>
                    <PortfolioH3>Netcry Tower</PortfolioH3>
                    <PortfolioP>August 2012</PortfolioP>
                    </PortfolioText>
                </Portfolio> 
                <Portfolio> 
                    <PortfolioImage className="imgfilter"src={PortfolioImg6}/>
                    <PortfolioImage className="imgfilter" src={PortfolioTabletImg7}/>
                    <PortfolioImage className="imgfilter" src={PortfolioImg10}/>
                    <PortfolioText>
                    <PortfolioH3>Hypers</PortfolioH3>
                    <PortfolioP>January 2012</PortfolioP>
                    </PortfolioText>
                </Portfolio>
                <Portfolio> 
                    <PortfolioImage className="imgfilter"src={PortfolioImg11}/>
                    <PortfolioImage className="imgfilter" src={PortfolioTabletImg8}/>
                    <PortfolioImage className="imgfilter" src={PortfolioImg10}/>
                    <PortfolioText>
                    <PortfolioH3>SXIV Tower</PortfolioH3>
                    <PortfolioP>March 2011</PortfolioP>
                    </PortfolioText>
                </Portfolio>
                <Portfolio> 
                    <PortfolioImage className="imgfilter"src={PortfolioImg12}/>
                    <PortfolioImage className="imgfilter" src={PortfolioTabletImg11}/>
                    <PortfolioImage className="imgfilter" src={PortfolioImg10}/>
                    <PortfolioText>
                    <PortfolioH3>Trinity Bank Tower</PortfolioH3>
                    <PortfolioP>September 2010</PortfolioP>
                    </PortfolioText>
                </Portfolio>
                <Portfolio> 
                    <PortfolioImage className="imgfilter"src={PortfolioImg8}/>
                    <PortfolioImage className="imgfilter" src={PortfolioTabletImg10}/>
                    <PortfolioImage className="imgfilter" src={PortfolioImg10}/>
                    <PortfolioText>
                    <PortfolioH3>Project Paramour</PortfolioH3>
                    <PortfolioP>February 2008</PortfolioP>
                    </PortfolioText>
                </Portfolio>
                
            </PortfolioContainer>
        </>
    )
}

export default PortfolioPage
