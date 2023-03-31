import { useContext, useRef } from "react";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";
import login_roadBackground from "../../assets/login_img/login_roadBackground.jpg";
import { useNavigate, Link } from "react-router-dom";
import "./Login.css";

const Login = () => {



    const usernameRef = useRef();
    const passwordRef = useRef();

    const { isFetching, dispatch, error } = useContext(AuthContext);
    const navigate = useNavigate();



    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch({ type: "LOGIN_START" });
        try {
            const res = await axios.post("/auth/login", { 
                username: usernameRef.current.value, 
                password: passwordRef.current.value,
            })
            dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
            navigate("/");
        }
        catch(err) {
            dispatch({ type: "LOGIN_FAILURE" });
        }
    };

    //console.log(user);


    return (
        <div className="login">
            <img 
                className="loginBackground"
                src={ login_roadBackground }
                alt="road background"
            />
            <div className="registerLink">
                <Link to="/register">
                    <button className="loginRegisterButton">Create Account</button>
                </Link>
            </div>
            <div className="loginContainer">
                <a href="/" style={{ textDecoration: "none" }}>
                    <div className="ccAutoLTitle">
                        <div className="loginBrandLogo" href="/">
                            <div className="loginChambersChung">C</div>
                            <span id="loginBrandChar">&amp;</span>
                            <div className="loginChambersChung">C</div>
                        </div>
                        <h1>Auto</h1>
                    </div>
                </a>
                <form className="loginForm" onSubmit={ handleSubmit }>
                    <div className="loginUsername">
                        <label>Username</label>
                        <input 
                            type="text" 
                            placeholder="username" 
                            required
                            className="loginInput"
                            ref={ usernameRef }
                        />
                    </div>
                    <div className="loginPassword">
                        <label>Password</label>
                        <input 
                            type="password" 
                            placeholder="password" 
                            required
                            className="loginInput"
                            ref={ passwordRef } 
                        />
                    </div>
                    <button className="loginButton" type="submit" disabled={ isFetching }>LOGIN</button>

                
                    { error && 
                        <span 
                            style = {{ 
                                color: "red", 
                                fontSize: "26px", 
                                fontWeight: "bold", 
                                backgroundColor: "rgb(29, 27, 27)", 
                                opacity: "0.80", 
                                borderRadius: "12px", 
                                padding: "15px",
                                marginTop: "10px"
                            }}
                        >Invalid username and/or password!
                        </span>
                    }
                </form>
            </div>
        </div>
    )
}

export default Login