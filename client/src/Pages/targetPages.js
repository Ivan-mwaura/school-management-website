import React from "react";
import { Outlet, Route, Routes } from "react-router";
import HomePage from "./homepage";
import AdmissionPortal from "../Components/homepageComponents/mainComponents/Admissions/admissionsPage/admissionsComponents/admissionPortal";
import AdmissionsForm from "../Components/homepageComponents/mainComponents/Admissions/admissionsPage/admissionsComponents/admissionsForm";

const TargetPages = ()=>{
    return(
        <div>
            
            <Routes>
                <Route path="*"  index element={<HomePage/>}/>
                <Route path="/admissionsPortal" element={<AdmissionPortal />}/>
                <Route path="/admissionsForm"  element={<AdmissionsForm/>}/>
            </Routes>
            <Outlet/>
        </div>
    )
}
 export default TargetPages;