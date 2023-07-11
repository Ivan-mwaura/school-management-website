import React, { createContext, useState } from 'react'
import HomePage from '../Pages/homepage';

export const AppContext = createContext(null)

const QueryContext = ()=>{
    const[selectedCampus, setSelectedCampus] = useState("lanet")

    return(
        <AppContext.Provider
        value={
            {
                selectedCampus, setSelectedCampus
            }
        }
        >
            <HomePage/>
        </AppContext.Provider>
    )
}
export default QueryContext;