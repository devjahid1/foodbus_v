import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = () => {
    return (
        <div className="w-full max-w-screen-[1440px] mx-auto">
            {/* <Navbar/> */}
            {/* <Nav/> */}

            <div>
                <Outlet/>
            </div>
            <Footer/>
            
        </div>
    );
};

export default MainLayout;