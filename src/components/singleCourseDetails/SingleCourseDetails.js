import React, { useContext } from 'react';
import { Container, Row } from 'react-bootstrap';
import { SingleCourseDetails_Context } from '../courseCart/CourseCart';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import './SingleCourseDetails.css';

const SingleCourseDetails = () => {
    const CartedCourses = useContext(SingleCourseDetails_Context);

    return (
        <div>
        <Header></Header>
            <Container>
                <Row>
                {
                    CartedCourses.length ? <div>
                        <h3 className="text-start mt-5">Enrolled Courses</h3>
                        {
                            
                            CartedCourses.map(course => <div>
                                
                                <div className='SingleCartItem w-750 mx-auto px-5 py-4 shadow-sm d-flex justify-content-lg-start my-4 '>
                                <div><img src={course?.img} alt="" width="150"/></div>
                                <div className="text-start ms-5">
                                    <h4>{course?.course_name}</h4>
                                    <h5>{course?.institute}</h5>
                                    <p>{course?.department}</p>
                                    <small>{course?.language}</small>
                                </div>
                                </div>
                            </div>)
                        }
                            </div>
                    :
                    <div>
                        <h3>Something Went Wrong</h3>
                    </div>
                }
                    
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default SingleCourseDetails;