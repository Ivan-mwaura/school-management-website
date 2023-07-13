import React, { useContext } from "react";
import { AppContext } from "../../../../context/queryContext";
import { useNavigate } from "react-router";

const CampusesList = ()=>{
    const { setSelectedCampus} = useContext(AppContext)
    const navigate= useNavigate()

    const handleCampus = (title)=> {
        setSelectedCampus(title)
        navigate('/campuses')
    }

    return (
        <div className="campuses-list">
            <ul>
                <li onClick={()=> handleCampus('lanet')}>Anestar Boys Lanet</li>
                <li onClick={()=> handleCampus('victoryBoys')}>Anestar victory Boys</li>
                <li onClick={()=> handleCampus('victoryGirls')}>anestar Victory Girls</li>
                <li onClick={()=> handleCampus('bahatiBoys')}>Anestar Bahati Boys</li>
                <li onClick={()=> handleCampus('precious')}>Anestar Precious Girls</li>
                <li onClick={()=> handleCampus('bahatiGirls')}>Anestar Bahati Girls</li>
                <li onClick={()=> handleCampus('prestidge')}>Anestar prestidge Academy</li>
                <li onClick={()=> handleCampus('premier')}>Anestar Premier Academy</li>         
            </ul>
        </div>
    )
}
export default CampusesList;