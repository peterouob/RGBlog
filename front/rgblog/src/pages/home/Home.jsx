import "./home.css"
import Header from "../../components/header/Header.jsx";
import Posts from "../../components/posts/Posts.jsx";
import SideBar from "../../components/sideBar/SideBar.jsx";

function Home(){
    return(
        <>
            <Header />
            <div className="home">
                <Posts />
                <SideBar />
            </div>
        </>
    )
}

export default Home