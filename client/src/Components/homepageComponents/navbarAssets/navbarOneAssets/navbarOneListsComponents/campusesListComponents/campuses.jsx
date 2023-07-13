import React, { useContext} from "react";
import campuses from "./campusesData";
import { AppContext } from "../../../../../../context/queryContext";


const Campuses = ()=>{

    const {selectedCampus} =useContext(AppContext)

    const displayCampus = campuses.find((campus) => campus.index === selectedCampus)


    return(
        <div className="campuses-general">
            <div className="campuses-display">
                <div className="left">
                    <h1>{displayCampus.name}</h1>
                    <p>{displayCampus.aboutTheSchool}</p>

                    <p className="location">location : {displayCampus.location}</p>
                   
                </div>

                <img src={displayCampus.schoolImg} alt="" />
            </div>
            

        </div>
    )
}
export default Campuses;