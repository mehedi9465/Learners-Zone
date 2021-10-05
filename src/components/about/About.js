import React from 'react';
import { Container, Image } from 'react-bootstrap';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import './About.css'

const About = () => {
    return (
        <div>
            <Header></Header>
            <div className='about'>
                <Container>
                <div className="aboutContent d-flex flex-column justify-content-center align-items-center">
                    <Image src="https://cdn-icons-png.flaticon.com/512/1014/1014641.png" alt="" width="100" fluid/>
                    <p className="w-75 mt-4 display-6 fs-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium repellat harum, eum facilis incidunt, corporis sapiente nisi blanditiis quibusdam, vel dolor explicabo molestiae voluptatem officia culpa molestias excepturi dicta error Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod reprehenderit, eligendi, esse ad temporibus vitae quasi odio illum aliquid, dolorum id quas autem enim sit quam cumque. Unde, alias odio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde illo fugit officiis delectus at cumque veritatis voluptates quo ea mollitia labore, sequi, perferendis doloremque facere, voluptas necessitatibus quidem libero laboriosam.</p>
                </div>
                </Container>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default About;