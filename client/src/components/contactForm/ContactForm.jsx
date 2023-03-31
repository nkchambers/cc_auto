import React, { useRef } from "react";
import emailjs from '@emailjs/browser';
import "./ContactForm.css";



const ContactForm = () => {

    /* ------------------------- SEND EMAIL FUNCTIONS ----------------------------*/
    
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                process.env.REACT_APP_EMAILJS_SERVICE_ID,
                process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
                form.current,
                process.env.REACT_APP_EMAILJS_USER_ID
            )
            .then(
                (result) => {
                console.log(result.text);
                alert("Message sent successfully! Please allow 3-5 days for a response.");
                e.target.reset();
            }, 
            (error) => {
                console.log(error.text);
                alert("Oh Snap! Something went wrong. Please try again.");
            }
        );
    };


    return (

        /*------------------------------- CONTACT FORM -----------------------------*/
        <div className="formContainer">

                <h3 className="contactTitle">Contact Us</h3>

                <form ref={form} onSubmit={sendEmail}>
                    <div className="formLeft">
                        <div className="fName">
                            <label className="formLabels">First Name</label>
                            <input
                                type="text"
                                name="firstName"
                                required
                                style={{ backgroundColor: "black", color: "white", fontSize: "18px" }}
                            />
                        </div>
                        <div className="lName">
                            <label className="formLabels">Last Name</label>
                            <input
                                type="text"
                                name="lastName"
                                required
                                style={{ backgroundColor: "black", color: "white", fontSize: "18px" }}
                            />
                        </div>
                        <div className="emailAdd">
                            <label className="formLabels">Email</label>
                            <input
                                type="email"
                                name="email"
                                required
                                style={{ backgroundColor: "black", color: "white", fontSize: "18px" }}
                            />
                        </div>
                        <div className="subjectLine">
                            <label className="formLabels">Subject</label>
                            <input
                                type="text"
                                name="subject"
                                required
                                style={{ backgroundColor: "black", color: "white", fontSize: "18px" }}
                            />
                        </div>
                    </div>
                    <div className="formRight">
                        <div className="messageArea">
                            <label className="formLabels">Message</label>
                            <textarea
                                name="message"
                                required
                                style={{ backgroundColor: "black", color: "white", fontSize: "18px" }}
                            />
                        </div>
                        <div className="sendButton">
                            <input
                                type="submit"
                                value="Send"
                            />
                        </div>
                    </div>
                </form>

            </div>
    )
}

export default ContactForm;