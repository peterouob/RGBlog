import "./sidebar.css"

function SideBar() {
    return (
        <>
            <div className="sidebar">
                <div className="sidebarItem">
                    <span className={'sidebarTitle'}>About Me</span>
                    <img src="../../public/forest.jpeg" alt=""/>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquam ea eaque earum, pariatur rerum temporibus, vel! Ab accusamus autem fuga nesciunt odio?
                    </p>
                </div>
                <div className="sidebarItem">
                    <span className="sidebarTitle">CateGories</span>
                    <ul className={'sidebarList'}>
                        <li className="sidebarListItem">Life</li>
                        <li className="sidebarListItem">Music</li>
                        <li className="sidebarListItem">Style</li>
                        <li className="sidebarListItem">Sport</li>
                        <li className="sidebarListItem">Tech</li>
                        <li className="sidebarListItem">Study</li>
                    </ul>
                </div>
                <div className="sidebarItem">
                    <div className="sidebarTitle">Follow Us</div>
                    <div className="sidebarSocial">
                        <i className="sidebarIcon fa-brands fa-facebook"></i>
                        <i className="sidebarIcon fa-brands fa-instagram"></i>
                        <i className="sidebarIcon fa-brands fa-github"></i>
                    </div>
                </div>
            </div>
        </>
    )
}
export default SideBar