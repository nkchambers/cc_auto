import { useState } from "react";
import axios from "axios";
import register2_roadBackground from "../../assets/register_img/register2_roadBackground.jpg";
import { Link } from "react-router-dom";
import "./Register.css";

const Register = () => {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);



    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(false);

        try {
            const res = await axios.post("/auth/register", {
                username,
                email,
                password
            });
            res.data && window.location.replace("/login");
        }
        catch(err) {
            setError(true);
        }
    };




    return (
        <div className="register">
            <img 
                className="registerBackground"
                src={ register2_roadBackground }
                alt="road background"
            />
            <div className="loginLink">
                <Link to="/login">
                    <button className="registerLoginButton">LOGIN</button>
                </Link>
            </div>
            <div className="registerContainer">
                <a href="/" style={{ textDecoration: "none" }}>
                    <div className="ccAutoRTitle">
                        <div className="registerBrandLogo" href="/">
                            <div className="registerChambersChung">C</div>
                            <span id="registerBrandChar">&amp;</span>
                            <div className="registerChambersChung">C</div>
                        </div>
                        <h1>Auto</h1>
                    </div>
                </a>
                <h1 className="registerTitle">Register</h1>
                <form className="registerForm" onSubmit={handleSubmit}>
                    <div className="registerUsername">
                        <label>Username</label>
                        <input 
                            type="text" 
                            className="registerInput" 
                            placeholder="Enter username..."
                            required
                            minLength= { 5 } 
                            maxLength= { 15 } 
                            onChange={ e => setUsername(e.target.value) } />
                    </div>
                    <div className="registerEmail">
                        <label>Email</label>
                        <input 
                            type="email" 
                            className="registerInput" 
                            placeholder="Enter email address..."
                            required
                            onChange={ e => setEmail(e.target.value) } />
                    </div>
                    <div className="registerPassword">
                        <label>Password</label>
                        <input 
                            type="password" 
                            className="registerInput"
                            placeholder="Enter password..." 
                            minLength= { 5 } 
                            maxLength= { 20 } 
                            required
                            onChange={ e => setPassword(e.target.value) }/>
                    </div>
                    
                    <button type="submit" className="registerButton">CREATE ACCOUNT</button>
                    { error && 
                        <span 
                            style = {{ 
                                color: "red", 
                                fontSize: "26px", 
                                fontWeight: "bold", 
                                backgroundColor: "rgb(29, 27, 27)", 
                                opacity: "0.80", 
                                borderRadius: "12px", 
                                padding: "10px",
                                marginTop: "10px"
                            }}
                        >Username and/or Email already in use!
                        </span>
                    }
                </form>
            </div>
        </div>
    )
}

export default Register