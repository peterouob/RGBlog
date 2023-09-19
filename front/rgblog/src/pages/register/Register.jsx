import "./register.css"
import {Link} from "react-router-dom";

function Register(){
    return(
        <>
            <div className="register">
                <span className="registerTitle">Register</span>
                <form action="front/rgblog/src/pages/register/Register.jsx" className="registerForm">
                    <label htmlFor="">Username</label>
                    <input className="registerInput"  type="text" placeholder="Enter your username"/>
                    <label htmlFor="">Email</label>
                    <input className="registerInput"  type="text" placeholder="Enter your email"/>
                    <label htmlFor="">Password</label>
                    <input className="registerInput" type="password" placeholder="Enter your password" />
                    <button className="registerButton">Register</button>
                </form>
                <button className="registerLoginButton">
                    <Link className="link" to="/login">Login</Link>
                </button>
            </div>
        </>
    )
}

export default Register