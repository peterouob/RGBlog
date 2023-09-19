import "./login.css"
import {Link} from "react-router-dom";

function Login(){
    return(
        <>
            <div className="login">
                <span className="loginTitle">Login</span>
                <form action="front/rgblog/src/pages/login/Login.jsx" className="loginForm">
                    <label htmlFor="">Email</label>
                    <input className="loginInput"  type="text" placeholder="Enter your email"/>
                    <label htmlFor="">Password</label>
                    <input className="loginInput" type="password" placeholder="Enter your password" />
                    <button className="loginButton">Login</button>
                </form>
                <button className="loginRegisterButton">
                    <Link className="link" to="/register">Register</Link>
                </button>
            </div>
        </>
    )
}

export default Login