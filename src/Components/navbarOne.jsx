import React, { useState } from "react";
import '../style.scss'
import AcademicList from "./lists/academicsList";
import AdmissionList from "./lists/admissionsList";
import CampusesList from "./lists/campusesList";
import StudentsAffairsList from './lists/studentsAffairsList'
import ContactUsList from "./lists/contactUsList";
import AboutUsList from "./lists/aboutUsList";

const NavbarOne = ()=>{

const [hovered, setHovered] = useState(null)

function handleMouseEnter (button){
  setHovered(button)
}
function handleMouseLeave(){
  setHovered(null)
}

return (
    <div className="navbarOne-container">
      
      <div className="navbarOne-content">

        <button className="navOne-button1" > Home </button>
       
        <div className="academics" onMouseEnter={()=> handleMouseEnter('academics')} onMouseLeave={handleMouseLeave}>

            <button className="navOne-button2"  > Academics </button>

            <div >
              {hovered === 'academics' ? <AcademicList/>: ''}
            </div>           
        </div>

        <div className="admissions" onMouseEnter={()=> handleMouseEnter('admissions')} onMouseLeave={handleMouseLeave}>

            <button className="navOne-button3" > Admissions </button>

            <div >
              {hovered === 'admissions' ? <AdmissionList/> : ''}
            </div>           
        </div>
  
        <div className="campuses" onMouseEnter={()=> handleMouseEnter('campuses')} onMouseLeave={handleMouseLeave}>

        <button className="navOne-button4"> Campuses </button>

            <div >
              {hovered === 'campuses' ? <CampusesList/>: ''}
            </div>           
        </div>

        <div className="students-affairs" onMouseEnter={()=> handleMouseEnter('studentsAffairs')} onMouseLeave={handleMouseLeave}>

          <button className="navOne-button5"> Student`s Affairs </button>

            <div >
              {hovered === 'studentsAffairs' ? <StudentsAffairsList/>: ''}
            </div>           
        </div>
              
        <button className="navOne-button6"> Intake Adverts </button>

        <div className="contact-us" onMouseEnter={()=> handleMouseEnter('contactUs')} onMouseLeave={handleMouseLeave}>

          <button className="navOne-button7"> Contact us </button>

            <div >
              {hovered === 'contactUs' ? <ContactUsList/>: ''}
            </div>           
        </div>
        
        <div className="about-us" onMouseEnter={()=> handleMouseEnter('aboutUs')} onMouseLeave={handleMouseLeave}>

          <button className="navOne-button8"> About us </button> 

            <div >
              {hovered === 'aboutUs' ? <AboutUsList/>: ''}
            </div>           
        </div>

        
             
      </div> 

      
   
    </div>
)
}
export default NavbarOne;