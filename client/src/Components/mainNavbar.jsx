import React from "react";
import NavbarOne from "./componentsAssets/navbarOne";
import NavbarTwo from "./componentsAssets/navbarTwo";
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