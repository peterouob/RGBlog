import "./topbar.css"
import {Link} from "react-router-dom";

function TopBar() {
    const user = true
    return(
        <>
            <div className="top">
                <div className="topLeft">
                    <i className="topIcon fa-brands fa-facebook"></i>
                    <i className="topIcon fa-brands fa-instagram"></i>
                    <i className="topIcon fa-brands fa-github"></i>
                </div>
                <div className="topCenter">
                    <ul className="topList">
                        <li className={'topListItem'}><Link className="link" to="/">Home</Link></li>
                        <li className={'topListItem'}><Link className="link" to="/">About</Link></li>
                        <li className={'topListItem'}><Link className="link" to="/">Contact</Link></li>
                        <li className={'topListItem'}><Link className="link" to="/write">Write</Link></li>
                        <li className={'topListItem'}><Link className="link" to="/">{user && "Logout"  }</Link></li>

                    </ul>
                </div>
                <div className="topRight">
                    {
                        user ? (
                            <img className={'topImg'} src="../../public/forest.jpeg" alt=""/>
                        ):
                            (
                                <ul className="topList">
                                    <li className="topListItem">
                                        <Link className="link" to="/login">Login</Link>
                                    </li>
                                    <li className="topListItem">
                                        <Link className="link" to="/register">Register</Link>
                                    </li>
                                </ul>
                            )
                    }
                    <i className="searchIcon fa-solid fa-magnifying-glass"></i>
                </div>
            </div>
        </>
    )
}

export default TopBar