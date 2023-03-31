import Navbar from "../../components/navbar/Navbar";
import ContactForm from "../../components/contactForm/ContactForm";
import contactForm_seattleBackground from "../../assets/contact_img/contactForm_seattleBackground.jpg";
import React from 'react';
import "./Contact.css";

const Contact = () => {
    return (
        
        <div className="contactContainer">
            <Navbar />
            
            <img 
                className="contactBackground"
                src={contactForm_seattleBackground} 
                alt="Arial View of Seattle, WA" 
            />

            <ContactForm />
        </div>
    )
}

export default Contact;