import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';


import { PTab228b, PTabdelsol, PTabedelweiss, PTabeebox, PTabfederal, PTabhypers, PTabnetcry,
         PTabparamour, PTabprototype, PTabseraph, PTabsxiv, PTabtrinity, PMobile228b, PMobiledelsol, 
         PMobileedelweiss, PMobileeebox, PMobilefederal, PMobilehypers, PMobilenetcry,PMobileparamour, 
         PMobileprototype, PMobileseraph, PMobilesxiv, PMobiletrinity,PDesk228b, PDeskdelsol, PDeskedelweiss, 
         PDeskeebox, PDeskfederal, PDeskhypers, PDesknetcry,
         PDeskparamour, PDeskprototype, PDeskseraph, PDesksxiv, PDesktrinity } 
         from '../../assets/images/images';

import { PortfolioContainer, Portfolio, PortfolioH3, PortfolioImage, PortfolioText,
        PortfolioP } from './PortfolioElements';
        
function PortfolioPage() {
    return (
        <>
            <PortfolioContainer >
                <Portfolio> 
                    <PortfolioImage  src={PMobileseraph}/>
                    <PortfolioImage  src={PTabseraph}/>
                    <PortfolioImage  src={PDeskseraph}/>
                    <PortfolioText>
                    <PortfolioH3>Seraph Station</PortfolioH3>
                    <PortfolioP>September 2019</PortfolioP>
                    </PortfolioText>
                </Portfolio>
                <Portfolio> 
                    <PortfolioImage src={PMobileeebox}/>
                    <PortfolioImage  src={PTabeebox}/>
                    <PortfolioImage  src={PDeskeebox}/>
                    <PortfolioText>
                    <PortfolioH3>Eebox Building</PortfolioH3>
                    <PortfolioP>August 2017</PortfolioP>
                    </PortfolioText>
                </Portfolio>
                <Portfolio> 
                    <PortfolioImage src={PMobilefederal}/>
                    <PortfolioImage  src={PTabfederal}/>
                    <PortfolioImage  src={PDeskfederal}/>
                    <PortfolioText>
                    <PortfolioH3>Federal II Tower</PortfolioH3>
                    <PortfolioP>March 2017</PortfolioP>
                    </PortfolioText>
                </Portfolio>
                <Portfolio> 
                    <PortfolioImage src={PMobiledelsol}/>
                    <PortfolioImage  src={PTabdelsol}/>
                    <PortfolioImage  src={PDeskdelsol}/>
                    <PortfolioText>
                    <PortfolioH3>Project Del Sol</PortfolioH3>
                    <PortfolioP>January 2016</PortfolioP>
                    </PortfolioText>
                </Portfolio>
                <Portfolio> 
                    <PortfolioImage src={PMobileprototype}/>
                    <PortfolioImage  src={PTabprototype}/>
                    <PortfolioImage  src={PDeskprototype}/>
                    <PortfolioText>
                    <PortfolioH3>Le Prototype</PortfolioH3>
                    <PortfolioP>October 2015</PortfolioP>
                    </PortfolioText>
                </Portfolio>
                <Portfolio> 
                    <PortfolioImage src={PMobile228b}/>
                    <PortfolioImage  src={PTab228b}/>
                    <PortfolioImage  src={PDesk228b}/>
                    <PortfolioText>
                    <PortfolioH3>228B Tower</PortfolioH3>
                    <PortfolioP>April 2015</PortfolioP>
                    </PortfolioText>
                </Portfolio>
                <Portfolio> 
                    <PortfolioImage src={PMobileedelweiss}/>
                    <PortfolioImage  src={PTabedelweiss}/>
                    <PortfolioImage  src={PDeskedelweiss}/>
                    <PortfolioText>
                    <PortfolioH3>Grand Edelweiss Hotel</PortfolioH3>
                    <PortfolioP>December 2013</PortfolioP>
                    </PortfolioText>
                </Portfolio>
                <Portfolio> 
                    <PortfolioImage src={PMobilenetcry}/>
                    <PortfolioImage  src={PTabnetcry}/>
                    <PortfolioImage  src={PDesknetcry}/>
                    <PortfolioText>
                    <PortfolioH3>Netcry Tower</PortfolioH3>
                    <PortfolioP>August 2012</PortfolioP>
                    </PortfolioText>
                </Portfolio> 
                <Portfolio> 
                    <PortfolioImage src={PMobilehypers}/>
                    <PortfolioImage  src={PTabhypers}/>
                    <PortfolioImage  src={PDeskhypers}/>
                    <PortfolioText>
                    <PortfolioH3>Hypers</PortfolioH3>
                    <PortfolioP>January 2012</PortfolioP>
                    </PortfolioText>
                </Portfolio>
                <Portfolio> 
                    <PortfolioImage src={PMobilesxiv}/>
                    <PortfolioImage  src={PTabsxiv}/>
                    <PortfolioImage  src={PDesksxiv}/>
                    <PortfolioText>
                    <PortfolioH3>SXIV Tower</PortfolioH3>
                    <PortfolioP>March 2011</PortfolioP>
                    </PortfolioText>
                </Portfolio>
                <Portfolio> 
                    <PortfolioImage src={PMobiletrinity}/>
                    <PortfolioImage  src={PTabtrinity}/>
                    <PortfolioImage  src={PDesktrinity}/>
                    <PortfolioText>
                    <PortfolioH3>Trinity Bank Tower</PortfolioH3>
                    <PortfolioP>September 2010</PortfolioP>
                    </PortfolioText>
                </Portfolio>
                <Portfolio> 
                    <PortfolioImage src={PMobileparamour}/>
                    <PortfolioImage  src={PTabparamour}/>
                    <PortfolioImage  src={PDeskparamour}/>
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
