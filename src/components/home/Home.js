import React from 'react';
import { Button, Carousel } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import './Home.css';

const Home = () => {
    return (
        <div className="home">
            <Header></Header>
            <div className='HomeBodyContent'>
            <Carousel>
            <Carousel.Item interval={6000}>
                    <img 
                    className="d-block Slider-Image"
                    src="https://freevector-images.s3.amazonaws.com/uploads/vector/preview/40490/vecteezy_background-white_fj1220.jpg"
                    />
                    <Carousel.Caption className="caption">
                    <h3 className="text-dark">Are You Ready To TakoOff</h3>
                    <Button>Get Started</Button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={6000}>
                    <img
                    className="d-block Slider-Image"
                    src="https://freevector-images.s3.amazonaws.com/uploads/vector/preview/31131/scraped-metal-texture-vector.jpg"
                    />
                    <Carousel.Caption className="caption">
                    <h3>Develop Your Skills</h3>
                    <Button>Get Started</Button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={6000}>
                    <img
                    className="d-block Slider-Image"
                    src="https://img.freepik.com/free-photo/old-black-background-grunge-texture-blackboard-chalkboard-concrete_1258-52289.jpg?size=338&ext=jpg"
                    alt="Third slide"
                    />
                    <Carousel.Caption className="caption">
                    <h3>Works as a Professional</h3>
                    <Button>Get Started</Button>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;