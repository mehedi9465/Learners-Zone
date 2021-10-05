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
                    <div className="services my-5 py-5">
                        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 justify-content-center align-items-center">
                            <div className="d-flex flex-column justify-content-start align-items-center my-5 pt-4">
                                <img src="https://cdn-icons-png.flaticon.com/64/3199/3199301.png" alt="" />
                                <h6 className="mt-3">Free Course Enrollment</h6>
                            </div>

                            <div className="d-flex flex-column justify-content-center align-items-center my-5 pt-4">
                                <img src="https://cdn-icons-png.flaticon.com/64/4552/4552813.png" alt="" />
                                <h6 className="mt-3">15+ Valuable Courses</h6>
                            </div>

                            <div className="d-flex flex-column justify-content-end align-items-center my-5 pt-4">
                                <img src="https://cdn-icons-png.flaticon.com/64/4784/4784463.png" alt="" />
                                <h6 className="mt-3">Easy Enrollment</h6>
                            </div>

                            <div className="d-flex flex-column justify-content-end align-items-center my-5 pt-4">
                                <img src="https://cdn-icons-png.flaticon.com/64/2009/2009830.png" alt="" />
                                <h6 className="mt-3">Buffer free pre-recorded <br /> class</h6>
                            </div>

                            <div className="d-flex flex-column justify-content-center align-items-center my-5 pt-4">
                                <img src="https://cdn-icons-png.flaticon.com/64/3170/3170748.png" alt="" />
                                <h6 className="mt-3">Easy Website Access</h6>
                            </div>

                            <div className="d-flex flex-column justify-content-start align-items-center my-5 pt-4">
                                <img src="https://cdn-icons-png.flaticon.com/64/1534/1534938.png" alt="" />
                                <h6 className="mt-3">Collaboration with well-<br />known institues</h6>
                            </div>

                            <div className="d-flex flex-column justify-content-start align-items-center my-5 pt-4">
                                <img src="https://cdn-icons-png.flaticon.com/64/1828/1828652.png" alt="" />
                                <h6 className="mt-3">Verified Trainer</h6>
                            </div>

                            <div className="d-flex flex-column justify-content-center align-items-center my-5 pt-4">
                                <img src="https://cdn-icons-png.flaticon.com/64/3617/3617061.png" alt="" />
                                <h6 className="mt-3">Stable Server</h6>
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