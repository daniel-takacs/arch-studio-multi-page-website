import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div>
            <h1>Home</h1>
            <Link to='/About'>Link to about page</Link>
        </div>
    )
}

export default Home
