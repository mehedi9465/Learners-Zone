import React from 'react';
import { Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import './Home.css'

const Home = () => {
    return (
        <div className="home">
            <Header></Header>
            <div className='HomeBodyContent'>
                <h1>Are You Ready To Take-off</h1>
                <div>
                        <NavLink to='/courses'>
                            <Button>Get Started</Button>
                        </NavLink>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;