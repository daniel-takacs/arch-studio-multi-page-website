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


const PortfolioContainer = styled.div `
 padding: 0 32px;
 margin: 80px 0 150px;
`
const Portfolio = styled.div `
    position: relative;
`
const PortfolioImage = styled.img `

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
                    <PortfolioText>
                    <PortfolioH3>Seraph Station</PortfolioH3>
                    <PortfolioP>September 2019</PortfolioP>
                    </PortfolioText>
                </Portfolio>
                <Portfolio> 
                    <PortfolioImage className="imgfilter"src={PortfolioImg4}/>
                    <PortfolioText>
                    <PortfolioH3>Eebox Building</PortfolioH3>
                    <PortfolioP>August 2017</PortfolioP>
                    </PortfolioText>
                </Portfolio>
                <Portfolio> 
                    <PortfolioImage className="imgfilter"src={PortfolioImg5}/>
                    <PortfolioText>
                    <PortfolioH3>Federal II Tower</PortfolioH3>
                    <PortfolioP>March 2017</PortfolioP>
                    </PortfolioText>
                </Portfolio>
                <Portfolio> 
                    <PortfolioImage className="imgfilter"src={PortfolioImg2}/>
                    <PortfolioText>
                    <PortfolioH3>Project Del Sol</PortfolioH3>
                    <PortfolioP>January 2016</PortfolioP>
                    </PortfolioText>
                </Portfolio>
                <Portfolio> 
                    <PortfolioImage className="imgfilter"src={PortfolioImg9}/>
                    <PortfolioText>
                    <PortfolioH3>Le Prototype</PortfolioH3>
                    <PortfolioP>October 2015</PortfolioP>
                    </PortfolioText>
                </Portfolio>
                <Portfolio> 
                    <PortfolioImage className="imgfilter"src={PortfolioImg1}/>
                    <PortfolioText>
                    <PortfolioH3>228B Tower</PortfolioH3>
                    <PortfolioP>April 2015</PortfolioP>
                    </PortfolioText>
                </Portfolio>
                <Portfolio> 
                    <PortfolioImage className="imgfilter"src={PortfolioImg3}/>
                    <PortfolioText>
                    <PortfolioH3>Grand Edelweiss Hotel</PortfolioH3>
                    <PortfolioP>December 2013</PortfolioP>
                    </PortfolioText>
                </Portfolio>
                <Portfolio> 
                    <PortfolioImage className="imgfilter"src={PortfolioImg7}/>
                    <PortfolioText>
                    <PortfolioH3>Netcry Tower</PortfolioH3>
                    <PortfolioP>August 2012</PortfolioP>
                    </PortfolioText>
                </Portfolio> 
                <Portfolio> 
                    <PortfolioImage className="imgfilter"src={PortfolioImg6}/>
                    <PortfolioText>
                    <PortfolioH3>Hypers</PortfolioH3>
                    <PortfolioP>January 2012</PortfolioP>
                    </PortfolioText>
                </Portfolio>
                <Portfolio> 
                    <PortfolioImage className="imgfilter"src={PortfolioImg11}/>
                    <PortfolioText>
                    <PortfolioH3>SXIV Tower</PortfolioH3>
                    <PortfolioP>March 2011</PortfolioP>
                    </PortfolioText>
                </Portfolio>
                <Portfolio> 
                    <PortfolioImage className="imgfilter"src={PortfolioImg12}/>
                    <PortfolioText>
                    <PortfolioH3>Trinity Bank Tower</PortfolioH3>
                    <PortfolioP>September 2010</PortfolioP>
                    </PortfolioText>
                </Portfolio>
                <Portfolio> 
                    <PortfolioImage className="imgfilter"src={PortfolioImg8}/>
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
