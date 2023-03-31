import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";
import "./Navbar.css";


const Navbar = () => {

    const { user, dispatch } = useContext(AuthContext);

    const handleLogout = () => {
        dispatch({ type: "LOGOUT" })
    }

    return (
        <div className="navbar">
            <div className="navContainer">
                <a href="/" style={{ textDecoration: "none" }}>
                    <div className="brandLogo">
                        <div className="ChambersChung">C</div>
                        <span id="brandChar">&amp;</span>
                        <div className="ChambersChung">C</div>
                        <span id="brandAuto">Auto</span>
                    </div>
                </a>
                {user ?
                    <> 
                        <div className="userNavContainer">
                            <h1 className="usernameTitle">Hello, {user.username}!</h1>
                            <Link to="/">
                                <button className="navButton" onClick={ handleLogout }>LOGOUT</button>
                            </Link> 
                        </div>
                    </> 
                    : (
                    <>
                        <div className="navItems">
                            <Link to="/register">
                                <button className="navButton">REGISTER</button>
                            </Link>
                            <Link to="/login">
                                <button className="navButton">LOGIN</button>
                            </Link>
                        </div> 
                    </>
                )} 
            </div>
        </div>
    )
}

export default Navbar