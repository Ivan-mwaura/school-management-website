import React from "react";
import { useNavigate } from "react-router-dom";

const AboutUsList = ()=>{

    const navigate = useNavigate();

    const handleAbout = (about)=>{
 
        if(about === 'aboutUs'){
            navigate('/aboutUs');
        }else if(about === 'whyChoose'){
            navigate('/whyChoose');
        }else if(about === 'directorsMessage'){
            navigate('/directorsMessage');
        }else if(about === 'organization'){
            navigate('/organization');
        }
    }
    return (
        <div className="about-us-list">
            <ul>
                <li onClick={()=> handleAbout('aboutUs')}>About Anestar schools</li>
                <li onClick={()=> handleAbout('whyChoose')}>Why choose Anestar ?</li>
                <li onClick={()=> handleAbout('directorsMessage')}>Directors Message</li>
                <li onClick={()=> handleAbout('organization')}>Organization & management</li>
                <li onClick={()=> handleAbout('partnerships')}>Partnerships and collaborations</li>         
            </ul>
        </div>
    )
}
export default AboutUsList;