import React from "react";
import NavbarOne from "./navbarOne";
import NavbarTwo from "./navbarTwo";
import logo from '../Images/logo-3.png'

const MainNavbar = ()=>{
    return(
        <div className="main-navbar">

                <img src={logo} alt="" className="logo"/>
            
            <div>
                <NavbarTwo/>
                <NavbarOne/>              
            </div>
           
        </div>
    )
}
export default MainNavbar;