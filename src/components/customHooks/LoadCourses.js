import { useEffect } from "react";
import { useState } from "react"

const LoadCourses = () => {
    const [courses, setCourses] = useState([]);

    useEffect(async () => {
        // const res = await fetch('./courses.json');
        // const data = res.json();
        // setCourses(data);
        // console.log(data);

        fetch('./courses.json')
        .then(res => res.json())
        .then(data => setCourses(data));
    }, []);

    return [courses, setCourses];
}

export default LoadCourses;