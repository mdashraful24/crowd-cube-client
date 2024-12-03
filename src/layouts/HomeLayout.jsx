import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const HomeLayout = () => {
    return (
        <div>
            {/* Navbar */}
            <Navbar></Navbar>

            {/* Main */}
            <Outlet></Outlet>

            {/* Footer */}
            <Footer></Footer>
        </div>
    );
};

export default HomeLayout;