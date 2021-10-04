import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiceOne, faHandshake, faUniversalAccess , faFileAlt, faLanguage, faAirFreshener, faHandSpock, faFlushed} from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { Container } from 'react-bootstrap';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import './Services.css'

const Services = () => {
    return (
        <div>
            <Header></Header>
            <div>
                <Container>
                    <div className="services">
                        <div className="row row-cols-3 justify-content-around align-items-center">
                            <div className="d-flex flex-column justify-content-start align-items-center my-5">
                                <FontAwesomeIcon className="text-dark fs-1" icon={faHandshake}></FontAwesomeIcon>
                                <p>Free Course Enrollment</p>
                            </div>

                            <div className="d-flex flex-column justify-content-center align-items-center my-5">
                                <FontAwesomeIcon className="text-dark fs-1" icon={faUniversalAccess}></FontAwesomeIcon>
                                <p>15+ Valuable Courses</p>
                            </div>

                            <div className="d-flex flex-column justify-content-end align-items-center my-5">
                                <FontAwesomeIcon className="text-dark fs-1" icon={faFileAlt}></FontAwesomeIcon>
                                <p>Easy Enrollment</p>
                            </div>

                            <div className="d-flex flex-column justify-content-end align-items-center my-5">
                                <FontAwesomeIcon className="text-dark fs-1" icon={faLanguage}></FontAwesomeIcon>
                                <p>Buffer free pre-recorded class</p>
                            </div>

                            <div className="d-flex flex-column justify-content-center align-items-center my-5">
                                <FontAwesomeIcon className="text-dark fs-1" icon={faAirFreshener}></FontAwesomeIcon>
                                <p>Easy Website Access</p>
                            </div>

                            <div className="d-flex flex-column justify-content-start align-items-center my-5">
                                <FontAwesomeIcon className="text-dark fs-1" icon={faHandSpock}></FontAwesomeIcon>
                                <p>Collaboration with well-known institues</p>
                            </div>

                            <div className="d-flex flex-column justify-content-start align-items-center my-5">
                                <FontAwesomeIcon className="text-dark fs-1" icon={faFlushed}></FontAwesomeIcon>
                                <p>Verified Trainer</p>
                            </div>

                            <div className="d-flex flex-column justify-content-center align-items-center my-5">
                                <FontAwesomeIcon className="text-dark fs-1" icon={faDiceOne}></FontAwesomeIcon>
                                <p>Stable Server</p>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Services;