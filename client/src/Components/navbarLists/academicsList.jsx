import React from "react";
import {useNavigate } from "react-router-dom";


const AcademicList = ()=>{

    const navigate = useNavigate()

    const handleDepartments = (title) =>{
        if(title === 'departments'){
            navigate('/departments')
   
        }
        else if(title === 'exams'){
            navigate('/exams')
        }
        else if(title === 'teachers'){
            navigate('/teachers')
        }
        else if(title === 'library'){
            navigate('/library')
        }
    }

    return (
        <div className="academic-list">
            <ul>
                <li onClick={()=> handleDepartments('departments')}>Departments</li>
                <li onClick={()=> handleDepartments('exams')}>Exams</li>
                <li onClick={()=> handleDepartments('teachers')}>Teachers</li>
                <li onClick={()=> handleDepartments('library')}>Library</li>
            </ul>
        </div>
    )
}
export default AcademicList;