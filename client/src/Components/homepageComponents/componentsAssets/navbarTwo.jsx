import React from "react";
import '../../../style.scss'
import { useNavigate } from "react-router";

const NavbarTwo = ()=>{
  const navigate = useNavigate()

const handleNavbar = (button)=>{
  if(button === 'admissions'){

    navigate('/admissionsPortal')
  }
}

return (
    <div className="navbarTwo-container">
      <div className="navbarTwo-content">
        <button className="navTwo-buttons"> Staff & students portal </button>
        <button className="navTwo-buttons"> Alumnis </button>
        <button className="navTwo-buttons"> KCSE perfomance </button>
        <button className="navTwo-buttons"> FAQS </button>
        <button className="navTwo-buttons" onClick={()=> handleNavbar('admissions')}> admissions Portal </button>
        <button className="navTwo-buttons"> Fees & Financial Aid </button>
        <button className="navTwo-buttons"> Partnerships</button>
        <button className="navTwo-buttons"> E-learning </button>      
      </div> 
    </div>
)
}
export default NavbarTwo;