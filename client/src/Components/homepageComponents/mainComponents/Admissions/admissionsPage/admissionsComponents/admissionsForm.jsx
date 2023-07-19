import React, {  useState } from 'react'
import { toast } from 'react-toastify';
//import axios from 'axios'


const AdmissionsForm = () => {

    const [studentType, setStudentType] = useState('new-student')

    const [formData, setFormData] = useState({
    StudentFirstName:"",
    StudentSecondName:"",
    StudentLastName:"",
    StudentAge:"",
    ParentFirstName:"",
    ParentSecondName:"",
    ParentLastName:"",
    ParentEmail:"",
    ParentPhoneNumber:"",
    EnrollmentType:"new-student",
    //new students
    KcpeMarks:"",
    KcpeCertificate:null,
    LeavingCertificate:null ,
   //for transfer students 
    TransferKcpeMarks:"",
    TransferKcpeCertificate:null,
    TransferLetter:null,
    TransferTranscript:null,
    })

    const handleStudentType = (e) => {
       e.preventDefault();

       setStudentType(e.target.value)
       setFormData({
        ...formData,
        [e.target.name]: e.target.value
       })
     
    }

    const handleChange = (e) => {
        e.preventDefault();
        
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

const handleFileChange = (e) => {
    e.preventDefault();
    const { name, files } = e.target;
    const file = files[0];
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: file ,
    }));
  };
  
      
console.log(formData)
      

const handleSubmit = async (e) => {

        e.preventDefault();
        
        const newformData = new FormData();

        // Append each field from the form data object to the FormData object
        Object.entries(formData).forEach(([key, value]) => {
          newformData.append(key, value);
        });
        
        try{

            console.log(formData)

            fetch('http://localhost:5000/api/v1/admissionsForm', {
                method: 'POST',
                body: newformData,

            })
            /*await axios.post('http://localhost:5000/api/v1/admissionsForm', formData, {
                headers: {
                  'Content-Type': 'multipart/form-data', // Set the correct Content-Type header
                },
              });*/
          
              toast.success('Form submitted successfully');   
           
            
        }catch(err){
            console.log(err)
        }
        
        
    }
  

    return (
         
    <div className='admissions-form'>

      <div className='admissions-form-container'>

    <form className='form-content' onSubmit={handleSubmit} >
        
            
         <h1 className='form-heading'>Admissions Form</h1>

       <div className='names'>

          <div className='students'>

            <h1>Students information</h1>

            <label> First Name &nbsp;&nbsp;&nbsp;&nbsp;
                <input type='text'
                    placeholder='First Name'
                    name='StudentFirstName'
                    required={true}
                    value={formData.StudentFirstName}
                    onChange={handleChange}
                />
            </label>
            
            <label> Second Name
                 <input type='text'
                    placeholder='Second Name'
                    name='StudentSecondName'
                    required={true} 
                    value={formData.StudentSecondName}
                    onChange={handleChange}       
            />
            </label>

            <label> Last Name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                 <input type='text'
                    placeholder='last Name'
                    name='StudentLastName'
                    required={true} 
                    value={formData.StudentLastName}
                    onChange={handleChange}       
            />
            </label>
            <label> Age&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                 <input type='text'
                    placeholder='age'
                    name='StudentAge'
                    required={true} 
                    value={formData.StudentAge}
                    onChange={handleChange}       
            />
            </label>
        </div>

        <div className='parents'>

            <h1> Parent / Guardians information</h1>

            <label> First Name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                 <input type='text'
                    placeholder='firstName'
                    name='ParentFirstName'
                    required={true}  
                    value={formData.ParentFirstName} 
                    onChange={handleChange}    
            />
            </label>

            <label> Second Name
                 <input type='text'
                    placeholder='second Name'
                    name='ParentSecondName'
                    required={true}  
                    value={formData.ParentSecondName}
                    onChange={handleChange}     
            />
            </label>

            <label>Last Name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                 <input type='text'
                    placeholder='Last Name'
                    name='ParentLastName'
                    required={true}  
                    value={formData.ParentLastName}
                    onChange={handleChange}     
            />
            </label>

            <label> Phone Number
                 <input type='text'
                    placeholder='phone no'
                    name='ParentPhoneNumber'
                    required={true} 
                    value={formData.ParentPhoneNumber}
                    onChange={handleChange}       
                />
            </label>
            <label> Email Adress &nbsp;&nbsp;
                 <input type='text'
                    placeholder='email'
                    name='ParentEmail'
                    required={true}  
                    value={formData.ParentEmail}  
                    onChange={handleChange}    
                />
            </label>
        </div>
        
       </div>   

       <div className='academics-section'>
            <h1 className='academics-heading'>Academics field</h1>

            <p>In the following section make sure you upload the correct documents . Once uploaded the process is irreversible</p>

            <label>Choose type of enrollment &nbsp;&nbsp;
                <select onChange={handleStudentType}>
                    <option value='new-student' >New Form 1 Enrollment</option>
                    <option value='transfer-student' >Transfer Student</option>
                </select>
            </label>

          <div className='student-type-section'>

          {studentType === 'new-student' ?   <div className='new-student'>
           <label> KCSE Grade
                    <input 
                        type='text'
                        name='KcpeMarks'
                        onChange={handleChange}
                        required={true}
                        value={formData.KcpeMarks}
                    />
                </label>
                <label> K.C.P.E certificate
                    <input 
                        type='file'
                        name='KcpeCertificate'
                        onChange={handleFileChange}
                        required={true}
                        
                    />
                </label>

                <label>leaving certificate
                    <input 
                        type='file'
                        name='LeavingCertificate'
                        onChange={handleFileChange}
                        required={true}
                        
                    />
                </label>
            </div> : null}

            { studentType === 'transfer-student' ? 
            <div className='transfer-student'>

<label>
  K.C.P.E certificate
  <input
    type="file"
    name="TransferKcpeCertificate"
    onChange={handleFileChange}
    required={true}
  />
</label>

<label>
  Transfer letter
  <input
    type="file"
    name="TransferLetter"
    onChange={handleFileChange}
    required={true}
  />
</label>

<label>
  Transcript
  <input
    type="file"
    name="TransferTranscript"
    onChange={handleFileChange}
    required={true}
  />
</label>
            </div>    : null}

            </div>

            <div className='submit-button'>
                <button type='submit'>Submit</button>
            </div>
            
        
       </div>  
        
       </form >
        </div>
    </div> 
    )
}
export default AdmissionsForm;