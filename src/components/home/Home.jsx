import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './Home.css'

const  Home = () => {
    const tStarts = useLoaderData()
    console.log(tStarts)
    return (
        <div className="container">
            
        </div>
    );
};

export default Home;