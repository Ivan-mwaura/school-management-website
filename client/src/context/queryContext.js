import React, { createContext, useState } from 'react'
import AllPages from '../Pages/allPages';

export const AppContext = createContext(null)

const QueryContext = ()=>{
    const[selectedCampus, setSelectedCampus] = useState("lanet")
    const[register, setRegister] = useState('login')
    const[showAdmissionsForm, setShowAdmissionsForm] = useState('showForm')

    return(
        <AppContext.Provider
        value={
            {
                selectedCampus, setSelectedCampus,
                register, setRegister,
                showAdmissionsForm, setShowAdmissionsForm,

            }
        }
        >
            
            <AllPages/>

        </AppContext.Provider>
    )
}
export default QueryContext;