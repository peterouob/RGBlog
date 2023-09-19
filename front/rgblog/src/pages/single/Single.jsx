import "./single.css"
import SideBar from "../../components/sideBar/SideBar.jsx";
import SinglePost from "../../components/singlePost/SinglePost.jsx";

function Single(){
    return(
        <>
        {/*    post*/}
            <div className="single">
                <SinglePost />
                <SideBar />
            </div>
        </>
    )
}

export default Single