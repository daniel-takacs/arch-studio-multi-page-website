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

`
const Portfolio = styled.div `

`
const PortfolioImage = styled.img `

`
const PortfolioH3 = styled.h3 `

`
const PortfolioP = styled.p `

`

function PortfolioPage() {
    return (
        <>
            <PortfolioContainer>
                <Portfolio> 
                    <PortfolioImage src={PortfolioImg1}/>
                    <PortfolioH3></PortfolioH3>
                    <PortfolioP></PortfolioP>
                </Portfolio>
                <Portfolio> 
                    <PortfolioImage src={PortfolioImg2}/>
                    <PortfolioH3></PortfolioH3>
                    <PortfolioP></PortfolioP>
                </Portfolio>
                <Portfolio> 
                    <PortfolioImage src={PortfolioImg3}/>
                    <PortfolioH3></PortfolioH3>
                    <PortfolioP></PortfolioP>
                </Portfolio>
                <Portfolio> 
                    <PortfolioImage src={PortfolioImg4}/>
                    <PortfolioH3></PortfolioH3>
                    <PortfolioP></PortfolioP>
                </Portfolio>
                <Portfolio> 
                    <PortfolioImage src={PortfolioImg5}/>
                    <PortfolioH3></PortfolioH3>
                    <PortfolioP></PortfolioP>
                </Portfolio>
                <Portfolio> 
                    <PortfolioImage src={PortfolioImg6}/>
                    <PortfolioH3></PortfolioH3>
                    <PortfolioP></PortfolioP>
                </Portfolio>
                <Portfolio> 
                    <PortfolioImage src={PortfolioImg7}/>
                    <PortfolioH3></PortfolioH3>
                    <PortfolioP></PortfolioP>
                </Portfolio>
                <Portfolio> 
                    <PortfolioImage src={PortfolioImg8}/>
                    <PortfolioH3></PortfolioH3>
                    <PortfolioP></PortfolioP>
                </Portfolio> 
                <Portfolio> 
                    <PortfolioImage src={PortfolioImg9}/>
                    <PortfolioH3></PortfolioH3>
                    <PortfolioP></PortfolioP>
                </Portfolio>
                <Portfolio> 
                    <PortfolioImage src={PortfolioImg10}/>
                    <PortfolioH3></PortfolioH3>
                    <PortfolioP></PortfolioP>
                </Portfolio>
                <Portfolio> 
                    <PortfolioImage src={PortfolioImg11}/>
                    <PortfolioH3></PortfolioH3>
                    <PortfolioP></PortfolioP>
                </Portfolio>
                <Portfolio> 
                    <PortfolioImage src={PortfolioImg12}/>
                    <PortfolioH3></PortfolioH3>
                    <PortfolioP></PortfolioP>
                </Portfolio>
                
            </PortfolioContainer>
            <p>
            Portfolio

Portfolio
About Us
Contact

Seraph Station
September 2019

Eebox Building
August 2017

Federal II Tower
March 2017

Project Del Sol
January 2016

Le Prototype
October 2015

228B Tower
April 2015

Grand Edelweiss Hotel
December 2013

Netcry Tower
August 2012

Hypers
January 2012

SXIV Tower
March 2011

Trinity Bank Tower
September 2010

Project Paramour
February 2008

Portfolio
About Us
Contact

See Our Portfolio
            </p>
        </>
    )
}

export default PortfolioPage
