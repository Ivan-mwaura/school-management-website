import React, { useContext } from 'react'
import GeneralNavbar from '../../../../componentsAssets/generalNavbar'
//import Authentication from './admissionsAuthentication/authentication'
import { AppContext } from '../../../../../../context/queryContext'
import Login from '../../admissionsAuthentication/Login'
import Register from '../../admissionsAuthentication/register'
//import AdmissionsForm from './admissionsForm'

const AdmissionPortal = () => {

    const {register} = useContext(AppContext)
   // const{showAdmissionsForm} = useContext(AppContext)

     return(

    //showAdmissionsForm  === 'showForm' ? <AdmissionsForm/> : 

        <div className='admissions-portal-container'>
           <GeneralNavbar/>
            
           <h1> Welcome to the Admission Portal</h1>

           <p><b>Please Go through the Admission Requirements before making the application</b></p>

           <div className='requirements-section'>
            
                <button className='r1'>Admission Requirements</button>
                <button className='r2'>Application Requirements</button> 
                                  
           </div>

           <div className='download-requirements'>
                    <button className='d1'>Download Admission Requirements</button>
                    <button className='d2'>Download Application Requirements</button>
            </div>

            <div>
                {register === 'login' ? <Login/>:  <Register/> }
            </div>
        </div>
        
     )
}
export default AdmissionPortal