import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import styled from 'styled-components';

import Footer from '../../components/Footer';
import Hero from './Hero';
import Main from './Main';


const Text = styled.p `
    display: none;
`

function Home() {
    return (
        <>
            <Hero />
            <Main />
            <Text>

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

See Our Portfolio</Text>
        </>
    )
}

export default Home
