import React, { useState } from "react";
import '../../../style.scss'
import AcademicList from "../navbarAssets/navbarOneAssets/navbarOneLists/academicsList";
import AdmissionList from "../navbarAssets/navbarOneAssets/navbarOneLists/admissionsList";
import CampusesList from "../navbarAssets/navbarOneAssets/navbarOneLists/campusesList";
import StudentsAffairsList from '../navbarAssets/navbarOneAssets/navbarOneLists/studentsAffairsList'
import ContactUsList from "../navbarAssets/navbarOneAssets/navbarOneLists/contactUsList";
import AboutUsList from "../navbarAssets/navbarOneAssets/navbarOneLists/aboutUsList";
import { useNavigate } from "react-router";

const NavbarOne = ()=>{

const [hovered, setHovered] = useState(null)
const navigate = useNavigate()

function handleMouseEnter (button){
  setHovered(button)
}

function handleMouseLeave(){
  setHovered(null)
}

function handleHome (){
  navigate('*')
}

return (
    <div className="navbarOne-container">
      
      <div className="navbarOne-content">

        <button className="navOne-button1"  onClick={handleHome}> Home </button>
       
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