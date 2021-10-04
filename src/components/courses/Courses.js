import React from 'react';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import LoadCourses from '../customHooks/LoadCourses';
import Course from '../course/Course';
import './Courses.css'
import { Col, Container, Row } from 'react-bootstrap';
import { useState } from 'react';
import { createContext } from 'react';
import { addToDB } from '../LoacalStorageMethods/LocalStorageMethods';

export const EnrolledContext = createContext();

const Courses = () => {
    const [courses, setCourses] = LoadCourses();
    const [selected, setSelected] = useState([]);

    const SelectProducts = (course) => {
        const exist = selected.find(cs => cs.id === course.id)
        if(!exist){
            const newCourse = [...selected, course]
            setSelected(newCourse);
            addToDB(course.id);
        }
        
    }

    // console.log(selected);

    return ( 
        <EnrolledContext.Provider value={selected}>
            <div>
                <Header></Header>
                    <Container>
                        <Row>
                        <div className='courses'>
                            {
                                courses.map(course => <Course course={course} SelectProducts={SelectProducts} key={course.id}></Course>)
                            }
                        </div>
                        </Row>
                    </Container>
                <Footer></Footer>
            </div>
        </EnrolledContext.Provider>
    );
};

export default Courses;