import React from 'react';
import { Container } from 'react-bootstrap';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import './EnrollmentState.css';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { getDb } from '../LoacalStorageMethods/LocalStorageMethods';
import LoadCourses from '../customHooks/LoadCourses';

const EnrollmentState = () => {
    const[courses, setCourses] = LoadCourses();
    const data  = getDb();
    const selectedID = JSON.parse(data);
    const cartCourses = [];
    for(const key in selectedID){
        const matched = courses.find(course => course.id === key)
        cartCourses.push(matched);
    }

    let objectContainer = {};
    let arrayContainer = [];
    cartCourses.forEach(course => {
        // console.log(course);
        objectContainer.name = course?.course_name;
        objectContainer.uv = course?.total_enroll;
        arrayContainer.push(objectContainer);
        objectContainer = {};
    });
    // console.log(cartCourses);
    return (
        <div>
            <Header></Header>
            <div>
                <Container>
                    <div className="enrollmentState d-flex flex-wrap">
                    <ResponsiveContainer>
                    <LineChart width={1300} height={600} data={arrayContainer} margin={{ top: 160, right: 20, bottom: 70, left: 0 }}>
                        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                    </LineChart>
                    </ResponsiveContainer>
                    </div>

                    
                </Container>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default EnrollmentState;