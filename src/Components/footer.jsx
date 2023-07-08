import React from "react";
import '../style.scss'
import { Facebook, Instagram, Twitter } from "react-bootstrap-icons";

const Footer =()=>{
    return(
        <div className="footer">
            <div className="quick-access">
                <div>
                    <h1>Contact Us</h1>
                    <p>Anestar Boys Lanet</p>
                    <p>Nakuru</p>
                    <p>P.O.BOX.____Nakuru Kenya</p>
                    <p>Email Us</p>
                    <p>Enquiries</p>
                    <p>Admissions</p>
                </div>
                <div>
                    <h1>Quick Links</h1>
                    <p>Admissions</p>
                    <p>E-learning portal</p>
                    <p>Students Application Portal</p>
                    <p>staff/studentsPortal</p>
                    <p>Download Tenders</p>
                </div>
                <div>
                    <h1>Youtube</h1>
                </div>
                <div>
                    <h1>Google Map</h1>
                </div>
            </div>

            <div className="disclaimer">
                <p>Disclaimer:The presentation of the information in this website in no way represents the expression of a political opinion whatsoever on the part of KMTC
                    <br/>. Region, county and community names are used solely for ease of reference and do not indicate a political or territorial preference.</p>
            </div>

            <div>
                <div className="handles">
                    <div className="copyright">
                        <p>© 2023 Anestar group of schools . All rights reserved</p>
                    </div>
                    <div className="social-media-handles">
                        <p><Facebook/> facebook</p>
                        <p><Twitter/> Twitter</p>
                       <p><Instagram/> Instagram</p>                     
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer;