import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import styled from 'styled-components';

import { PTab228b, PTabdelsol, PTabedelweiss, PTabeebox, PTabfederal, PTabhypers, PTabnetcry,
         PTabparamour, PTabprototype, PTabseraph, PTabsxiv, PTabtrinity, PMobile228b, PMobiledelsol, 
         PMobileedelweiss, PMobileeebox, PMobilefederal, PMobilehypers, PMobilenetcry,PMobileparamour, 
         PMobileprototype, PMobileseraph, PMobilesxiv, PMobiletrinity,PDesk228b, PDeskdelsol, PDeskedelweiss, 
         PDeskeebox, PDeskfederal, PDeskhypers, PDesknetcry,
         PDeskparamour, PDeskprototype, PDeskseraph, PDesksxiv, PDesktrinity } from '../../assets/images/index';


const PortfolioContainer = styled.div `
 margin: 50px auto;

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
                    <PortfolioImage className="imgfilter" src={PMobileseraph}/>
                    <PortfolioImage className="imgfilter" src={PTabseraph}/>
                    <PortfolioImage className="imgfilter" src={PDeskseraph}/>
                    <PortfolioText>
                    <PortfolioH3>Seraph Station</PortfolioH3>
                    <PortfolioP>September 2019</PortfolioP>
                    </PortfolioText>
                </Portfolio>
                <Portfolio> 
                    <PortfolioImage className="imgfilter"src={PMobileeebox}/>
                    <PortfolioImage className="imgfilter" src={PTabeebox}/>
                    <PortfolioImage className="imgfilter" src={PDeskeebox}/>
                    <PortfolioText>
                    <PortfolioH3>Eebox Building</PortfolioH3>
                    <PortfolioP>August 2017</PortfolioP>
                    </PortfolioText>
                </Portfolio>
                <Portfolio> 
                    <PortfolioImage className="imgfilter"src={PMobilefederal}/>
                    <PortfolioImage className="imgfilter" src={PTabfederal}/>
                    <PortfolioImage className="imgfilter" src={PDeskfederal}/>
                    <PortfolioText>
                    <PortfolioH3>Federal II Tower</PortfolioH3>
                    <PortfolioP>March 2017</PortfolioP>
                    </PortfolioText>
                </Portfolio>
                <Portfolio> 
                    <PortfolioImage className="imgfilter"src={PMobiledelsol}/>
                    <PortfolioImage className="imgfilter" src={PTabdelsol}/>
                    <PortfolioImage className="imgfilter" src={PDeskdelsol}/>
                    <PortfolioText>
                    <PortfolioH3>Project Del Sol</PortfolioH3>
                    <PortfolioP>January 2016</PortfolioP>
                    </PortfolioText>
                </Portfolio>
                <Portfolio> 
                    <PortfolioImage className="imgfilter"src={PMobileprototype}/>
                    <PortfolioImage className="imgfilter" src={PTabprototype}/>
                    <PortfolioImage className="imgfilter" src={PDeskprototype}/>
                    <PortfolioText>
                    <PortfolioH3>Le Prototype</PortfolioH3>
                    <PortfolioP>October 2015</PortfolioP>
                    </PortfolioText>
                </Portfolio>
                <Portfolio> 
                    <PortfolioImage className="imgfilter"src={PMobile228b}/>
                    <PortfolioImage className="imgfilter" src={PTab228b}/>
                    <PortfolioImage className="imgfilter" src={PDesk228b}/>
                    <PortfolioText>
                    <PortfolioH3>228B Tower</PortfolioH3>
                    <PortfolioP>April 2015</PortfolioP>
                    </PortfolioText>
                </Portfolio>
                <Portfolio> 
                    <PortfolioImage className="imgfilter"src={PMobileedelweiss}/>
                    <PortfolioImage className="imgfilter" src={PTabedelweiss}/>
                    <PortfolioImage className="imgfilter" src={PDeskedelweiss}/>
                    <PortfolioText>
                    <PortfolioH3>Grand Edelweiss Hotel</PortfolioH3>
                    <PortfolioP>December 2013</PortfolioP>
                    </PortfolioText>
                </Portfolio>
                <Portfolio> 
                    <PortfolioImage className="imgfilter"src={PMobilenetcry}/>
                    <PortfolioImage className="imgfilter" src={PTabnetcry}/>
                    <PortfolioImage className="imgfilter" src={PDesknetcry}/>
                    <PortfolioText>
                    <PortfolioH3>Netcry Tower</PortfolioH3>
                    <PortfolioP>August 2012</PortfolioP>
                    </PortfolioText>
                </Portfolio> 
                <Portfolio> 
                    <PortfolioImage className="imgfilter"src={PMobilehypers}/>
                    <PortfolioImage className="imgfilter" src={PTabhypers}/>
                    <PortfolioImage className="imgfilter" src={PDeskhypers}/>
                    <PortfolioText>
                    <PortfolioH3>Hypers</PortfolioH3>
                    <PortfolioP>January 2012</PortfolioP>
                    </PortfolioText>
                </Portfolio>
                <Portfolio> 
                    <PortfolioImage className="imgfilter"src={PMobilesxiv}/>
                    <PortfolioImage className="imgfilter" src={PTabsxiv}/>
                    <PortfolioImage className="imgfilter" src={PDesksxiv}/>
                    <PortfolioText>
                    <PortfolioH3>SXIV Tower</PortfolioH3>
                    <PortfolioP>March 2011</PortfolioP>
                    </PortfolioText>
                </Portfolio>
                <Portfolio> 
                    <PortfolioImage className="imgfilter"src={PMobiletrinity}/>
                    <PortfolioImage className="imgfilter" src={PTabtrinity}/>
                    <PortfolioImage className="imgfilter" src={PDesktrinity}/>
                    <PortfolioText>
                    <PortfolioH3>Trinity Bank Tower</PortfolioH3>
                    <PortfolioP>September 2010</PortfolioP>
                    </PortfolioText>
                </Portfolio>
                <Portfolio> 
                    <PortfolioImage className="imgfilter"src={PMobileparamour}/>
                    <PortfolioImage className="imgfilter" src={PTabparamour}/>
                    <PortfolioImage className="imgfilter" src={PDeskparamour}/>
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
