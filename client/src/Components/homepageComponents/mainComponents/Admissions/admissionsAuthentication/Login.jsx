import React, { useContext, useState } from "react";
import axios from "axios";
import {  Link, useNavigate} from "react-router-dom";
import { AppContext } from "../../../../../context/queryContext";

const Login = () => {

    const {setRegister} = useContext(AppContext)
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        email:" ",
        password:" "
    })

    const handleChange = (e)=>{
        e.preventDefault();

        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleLogin = () => {
        
        const token = localStorage.getItem("token")

        console.log(localStorage.getItem("token"))

        if(token){
            navigate("/admissionsForm")
        }
    }
   
    const handleSubmit = async (e)=>{
        e.preventDefault();
        
        try {
            
             await axios.post("http://localhost:5000/api/v1/login", formData)
             
             .then((response)=>{

                const {token}= response.data

                localStorage.setItem("token", token)

                handleLogin()
                
             })
            
        } catch (error) {
            console.log(error)
        }
    }
   
    const handleRegister = (register)=>{
        setRegister(register)
    }

   

    return(

        <div className="login">

            <div className="login-container">
                <h1>Login</h1>

                <form className="login-form" onSubmit={handleSubmit}>
                
                <label >Email Address &nbsp;&nbsp;
                    <input type="email" 
                        placeholder="username" 
                        required={true}
                        name="email"
                        value={formData.email}
                        onChange={handleChange}

                        />
                </label>
                      
                <label> Password &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <input type="password"
                         placeholder="password" 
                         required={true}
                         name="password"
                         value={formData.password}
                         onChange={handleChange}
                         />
                        
                </label>

                    <button type="submit" >Login</button>

                    <label>
                        <input type="checkbox"  className="remember-me"/> Remember me
                    </label>

                   <p>don`t have an account ? <Link onClick={()=> handleRegister('register')}>register</Link></p>
                </form>
            </div>
           
        </div>
    )
}
export default Login;