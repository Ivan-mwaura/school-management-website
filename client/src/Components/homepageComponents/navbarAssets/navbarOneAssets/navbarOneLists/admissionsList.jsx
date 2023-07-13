import React from "react";
import { useNavigate } from "react-router";


const AdmissionList = ()=>{
    const navigate = useNavigate()

    const handleAdmissions= (title)=>{
        if(title === 'admissions'){
            navigate('/admissions')
        }
        else if(title === 'intakes'){
            navigate('/intakes')
        }
        else if(title === 'entries'){
            navigate('/entries')
        }
        else if(title === 'howToApply'){
            navigate('/howToApply')
        }
    }

    return (
        <div className="admissions-list">
            <ul>
                <li onClick={()=>handleAdmissions('admissions')}>admissions</li>
                <li onClick={()=>handleAdmissions('intakes')}>intake Adverts</li>
                <li onClick={()=>handleAdmissions('entries')}>Entry requiremets</li>
                <li onClick={()=>handleAdmissions('howToApply')}>How to apply</li>
                <li>Payment Options</li>
                <li>financial aid</li>
            </ul>
        </div>
    )
}
export default AdmissionList;