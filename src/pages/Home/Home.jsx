import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import styled from 'styled-components';

import Footer from '../../components/Footer';
import Hero from './Hero';
import Hero02 from './Hero02';
import Main from './Main';

function Home() {
    return (
        <>
            <Hero />
            <Main />
        </>
    )
}

export default Home
