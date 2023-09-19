import "./settings.css"
import SideBar from "../../components/sideBar/SideBar.jsx";

function Settings(){
    return(
        <>
            <div className="settings">
                <div className="settingsWrapper">
                    <div className="settingsTitle">
                        <span className="settingsUpdateTitle">Update Your Account</span>
                        <span className="settingsDeleteTitle">Delete Your Account</span>
                    </div>
                    <form action="front/rgblog/src/pages/settings/Settings.jsx" className="settingsForm">
                        <label htmlFor="">Profile Picture</label>
                        <div className="settingsPP">
                            <img src="../../public/1000_F_523577586_59mu5UOSSdvuppXGA8d3K2sH4AZeaLmT.jpg" alt=""/>
                            <label htmlFor="fileInput">
                                <i className="settingsPPIcon fa-solid fa-user"></i>
                            </label>
                            <input type="file" id="fileInput" style={{display:"none"}}/>
                        </div>
                        <label htmlFor="">Username</label>
                        <input type="text" placeholder={'Peter'}/>
                        <label htmlFor="">Email</label>
                        <input type="email" placeholder={'Peter@gmail.com'}/>
                        <label htmlFor="">Password</label>
                        <input type="password"/>
                        <button className="settingsSubmit">Update</button>
                    </form>
                </div>
                <SideBar />
            </div>
        </>
    )
}

export default Settings