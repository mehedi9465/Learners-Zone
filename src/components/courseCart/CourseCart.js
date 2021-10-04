import React, { createContext } from 'react';
import LoadCourses from '../customHooks/LoadCourses';
import { getDb } from '../LoacalStorageMethods/LocalStorageMethods';
import SingleCourseDetails from '../singleCourseDetails/SingleCourseDetails';


export const SingleCourseDetails_Context = createContext();

const CourseCart = () => {
    const [courses, setCourses] = LoadCourses()
    const data  = getDb();
    const selectedID = JSON.parse(data);
    const cartCourses = []
    for(const key in selectedID){
        const matched = courses.find(course => course.id === key)
        cartCourses.push(matched);
    }
    console.log(courses);
    console.log(cartCourses);
    return (
        <SingleCourseDetails_Context.Provider value={cartCourses}>
            <div>
                <SingleCourseDetails></SingleCourseDetails>
            </div>
        </SingleCourseDetails_Context.Provider>
        
    );
};

export default CourseCart;