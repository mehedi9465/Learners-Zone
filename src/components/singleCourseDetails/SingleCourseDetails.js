import React, { useContext, useEffect, useState } from 'react';
import { Button, Container, Image, Row } from 'react-bootstrap';
import { SingleCourseDetails_Context } from '../courseCart/CourseCart';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import './SingleCourseDetails.css';
import { getDb, upDateDb } from '../LoacalStorageMethods/LocalStorageMethods';
// import { GetCartedFullDetails } from '../customHooks/GetCartedFullDetails';

const SingleCourseDetails = () => {
    const [CartedCourses, setCartedCourses] = useState([]);
    let data = useContext(SingleCourseDetails_Context);
    // const [cartedDetails, setCartedDetails] = GetCartedFullDetails();
    // console.log(cartedDetails);
    
    useEffect(() => {
        setCartedCourses(data);
    }, [data])

    const removeCourse = id => {
        const restCourses = CartedCourses.filter(course => course.id !== id)
        console.log(restCourses);
        setCartedCourses(restCourses)
        updateLoaclStorage(id);
    }

    const updateLoaclStorage = id => {
        const data = getDb();
        const allID  = JSON.parse(data);
        const restID = {};
        for(const csID in allID){
            if(csID === id){
                continue;
            }
            else{
                restID[csID] = 1;
            }
        }
        console.log(restID);
        upDateDb(restID);
    }

    return (
        <div>
        <Header></Header>
            <Container className="my-5 py-5">
                <Row>
                {
                    <div className="contents">
                        <h3 className="text-center mt-5">Enrolled Courses</h3>
                        {
                            
                            CartedCourses.map(course => <div>
                                
                                <div className='SingleCartItem w-750 mx-auto px-5 py-4 shadow-sm d-flex justify-content-lg-start my-4 '>
                                <div><Image src={course?.img} alt="" width="150" fluid/></div>
                                <div className="text-start ms-5">
                                    <h4>{course?.course_name}</h4>
                                    <h5>{course?.institute}</h5>
                                    <p>{course?.department}</p>
                                    <small>{course?.language}</small>
                                </div>
                                <div className="d-flex justify-content-center align-items-center ms-auto course-pointer"><Button variant="white" onClick={()=> removeCourse(course?.id)}><img src="https://cdn-icons-png.flaticon.com/32/1214/1214926.png" alt="" /></Button></div>
                                </div>
                            </div>)
                        }
                            </div>
                }
                    
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default SingleCourseDetails;