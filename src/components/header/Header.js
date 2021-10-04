import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBitbucket } from '@fortawesome/free-brands-svg-icons';
import React from 'react';
import { Badge, Button, Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css';
import { getDb } from '../LoacalStorageMethods/LocalStorageMethods';

const Header = () => {
    const data  = getDb();
    const selectedID = JSON.parse(data);
    const selectedCourses = []
    for (const key in selectedID) {
        selectedCourses.push(key);
    }
    return (
        <div>
            <Navbar bg="primary" variant="dark" className=''>
            <Container>
                <Navbar.Brand href="#home"><img src="./online-lesson.png"></img> <span>Learners Zone</span></Navbar.Brand>
                <Nav className="ms-auto">
                <Nav.Link active><NavLink activeClassName="active" exact className="navigationButton" to="/">Home</NavLink></Nav.Link>
                <Nav.Link ><NavLink activeClassName="active" className="navigationButton" to="/courses">Courses</NavLink></Nav.Link>
                <Nav.Link ><NavLink activeClassName="active" className="navigationButton" to="/enrollmentState">Enrollment State</NavLink></Nav.Link>
                <Nav.Link ><NavLink activeClassName="active" className="navigationButton" to="/services">Services</NavLink></Nav.Link>
                <Nav.Link ><NavLink activeClassName="active" className="navigationButton" to="/about">About</NavLink></Nav.Link>
                {
                selectedCourses ? <Nav.Link ><NavLink activeClassName="active" className="navigationButton" to="/courseCart"><FontAwesomeIcon icon={faBitbucket}></FontAwesomeIcon><Badge>{selectedCourses.length}</Badge></NavLink></Nav.Link>
                :
                <Nav.Link ><NavLink activeClassName="active" className="navigationButton" to="/courseCart"><FontAwesomeIcon icon={faBitbucket}></FontAwesomeIcon><Badge>0</Badge></NavLink></Nav.Link>
                }
                </Nav>
            </Container>
            </Navbar>
        </div>
    );
};

export default Header;