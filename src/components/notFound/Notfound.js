import React from 'react';
import { Container } from 'react-bootstrap';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import './Notfound.css'

const Notfound = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <div className="notFound d-flex justify-content-center align-items-center">
                    <img src="./404-drib23.gif" alt="" />
                </div>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Notfound;