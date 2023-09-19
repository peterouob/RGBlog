import TopBar from "./components/topbar/TopBar.jsx";
import Home from "./pages/home/Home.jsx";
import Single from "./pages/single/Single.jsx";
import Write from "./pages/write/Write.jsx";
import Settings from "./pages/settings/Settings.jsx";
import Login from "./pages/login/Login.jsx";
import Register from "./pages/register/Register.jsx";
import {
    Routes,
    Route,
} from "react-router-dom";

function App(){
    const user = true
    return (
        <>
            <TopBar />
            <Routes>
                <Route exact path="/" element={<Home/>} />
                <Route path="/register" element={user ? <Home /> : <Register />} />
                <Route path="/login" element={user ? <Home /> : <Login />} />
                <Route path="/write" element={user ? <Write/> : <Login />} />
                <Route path="/settings" element={user ? <Settings /> : <Login />} />
                <Route path="/post/:postId" element={<Single />} />
            </Routes>
        </>
    )
}

export default App