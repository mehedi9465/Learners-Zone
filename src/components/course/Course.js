import React from 'react';
import './Course.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShareSquare, faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons'; 
import Rating from 'react-rating';
// import Rating from 'react-rating';

const Course = (props) => {
    // Destructuring
    const {id, course_name, institute, department, language, rating, total_enroll, credit, img} = props.course;
   

    // Use Conditional Rendaring

    return (
        <div className='course'>    
            {/* Card Image */}
            <div className="course-img">
                <img src={img} alt="" />
            </div>

            {/* Card Details */}
            <div className="course-des">
                <h3>{course_name}</h3>
                <h5>{institute}</h5>
                <div style={{width: '60%', margin: 'auto',display: 'flex', justifyContent: 'space-around'}}>
                    <p><small>{department}</small></p>
                    <p><small>{language}</small></p>
                </div>

                <div style={{width: '60%', margin: 'auto',display: 'flex', justifyContent: 'space-around'}}>
                    <p style={{margin: "0px "}}><small><u>Credit</u></small></p>
                    <p style={{margin: "0px "}}><small><u>Enrolled</u></small></p>
                </div>

                <div style={{width: '60%', margin: 'auto',display: 'flex', justifyContent: 'space-around'}}>
                    <h4>{credit}</h4>
                    <h4>{total_enroll}</h4>
                </div>

                {/* Rating System */}
                <Rating
                emptySymbol={faStar}
                fullSymbol={faStarHalf}
                initialRating={rating}
                readonly
                />      
                
            </div>
            <button onClick={() => props.SelectProducts(props.course)}><FontAwesomeIcon icon={faShareSquare}/> Enroll</button>
        </div>
           
     
    );
};

export default Course;