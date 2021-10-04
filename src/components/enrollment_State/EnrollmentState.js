import React from 'react';
import { Container } from 'react-bootstrap';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import './EnrollmentState.css';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
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
    const chartData = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400},];
    console.log(cartCourses);
    return (
        <div>
            <Header></Header>
            <div>
                <Container>
                    <div className="enrollmentState d-flex flex-wrap">
                    <LineChart width={600} height={300} data={chartData} margin={{ top: 90, right: 20, bottom: 1, left: 0 }}>
                        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                    </LineChart>

                    <LineChart width={600} height={300} data={chartData} margin={{ top: 90, right: 20, bottom: 1, left: 0 }}>
                        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                    </LineChart>

                    <LineChart width={600} height={300} data={chartData} margin={{ top: 90, right: 20, bottom: 1, left: 0 }}>
                        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                    </LineChart>

                    <LineChart width={600} height={300} data={chartData} margin={{ top: 90, right: 20, bottom: 1, left: 0 }}>
                        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                    </LineChart>
                    </div>

                    
                </Container>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default EnrollmentState;