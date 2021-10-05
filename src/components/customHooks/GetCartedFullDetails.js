import { useEffect, useState } from "react";
import { getDb } from "../LoacalStorageMethods/LocalStorageMethods";
import LoadCourses from "./LoadCourses";

const CartedCoursesDetails = () => {

    const [courses, setCourses] = LoadCourses();
    const [cartedDetails, setCartedDetails] = useState([]);

    useEffect(() => {
        const allMatched = [];
        const data =  getDb();
        const allID = JSON.parse(data);
        for(const id in allID){
            const matched = courses.find(course => course.id === id);
            allMatched.push(matched);
        }
        setCartedDetails(allMatched);
    },[]);

    return [cartedDetails, setCartedDetails];
}

export default CartedCoursesDetails;