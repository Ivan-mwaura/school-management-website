import React from "react";
import { useNavigate } from "react-router";

const ContactUsList = ()=>{
    const navigate = useNavigate();

    const handleContact = (contact)=>{
        if(contact === 'faqs'){
            navigate('/faqs');
        }
        else if(contact === 'contacts'){
            navigate('/contacts');
        }
        else if(contact === 'socialMedia'){
            navigate('/socialMedia');
        }
        else if(contact === 'locations'){
            navigate('/locations');
        }
    }

    return (
        <div className="contact-us-list">
            <ul>
                <li onClick={()=> handleContact('faqs')}>FAQS</li>
                <li onClick={()=> handleContact('contacts')}>Anestar schools contacts</li>
                <li onClick={()=> handleContact('socialMedia')}>Social media handles</li>
                <li onClick={()=> handleContact('locations')}>location and maps</li>         
            </ul>
        </div>
    )
}
export default ContactUsList;