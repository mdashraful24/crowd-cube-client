import { useContext, useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { toast } from "react-toastify";
import DarkLightTheme from "./DarkLightTheme";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        setDropdownOpen(false);
    }, [user]);

    const handleSignOut = () => {
        logOut()
            .then(() => {
                toast.success("User signed out successfully");
                navigate("/");
            })
            .catch((error) => {
                toast.error(error.message);
            });
    };

    const links = (
        <>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/campaigns">All Campaign</NavLink></li>
            <li><NavLink to="/addCampaign">Add New Campaign</NavLink></li>
            <li><NavLink to="/myCampaign">My Campaign</NavLink></li>
            <li><NavLink to="/myDonations">My Donations</NavLink></li>
        </>
    );

    return (
        <div className="shadow-md">
            <div className="container mx-auto">
                <div className="navbar">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost pl-0 lg:hidden">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h8m-8 6h16" />
                                </svg>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                {links}
                            </ul>
                        </div>
                        <div className="flex items-center">
                            <button
                                href="/"
                                className="text-2xl md:text-4xl font-extrabold bg-gradient-to-r from-[#843c94] via-[#5e1e70] to-[#f97316] text-transparent bg-clip-text tracking-wide italic"
                            >
                                CrowdCube
                            </button>
                        </div>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 text-base">
                            {links}
                        </ul>
                    </div>
                    <div className="navbar-end">
                        {user ? (
                            <div
                                className="relative dropdown-container"
                                onMouseEnter={() => setDropdownOpen(true)}
                                onMouseLeave={() => setDropdownOpen(false)}
                            >
                                <img
                                    className="rounded-full w-12 h-12 object-cover cursor-pointer hover:bg-gray-300 p-1"
                                    src={user?.photoURL}
                                    alt="User profile"
                                />
                                {dropdownOpen && (
                                    <div className="absolute -right-6 mt-2 w-36 shadow-lg z-10 bg-white rounded-lg border">
                                        <div className="py-2 px-3 text-center">
                                            <p className="font-semibold text-sm text-gray-800">
                                                {user?.displayName || "User"}
                                            </p>
                                        </div>
                                        <button
                                            className="block w-full py-2 rounded-b-lg bg-red-600 text-white font-medium hover:bg-red-700"
                                            onClick={handleSignOut}
                                        >
                                            Log out
                                        </button>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <>
                                    <Link to="/login" className="bg-primary text-xs md:text-base text-white font-medium px-3 md:px-4 py-2 rounded-lg mr-2 md:mr-3 transition-transform duration-500 ease-in-out hover:scale-110">Login</Link>
                                    <Link to="/register" className="bg-success text-xs md:text-base text-black font-medium px-2 md:px-4 py-2 rounded-lg transition-transform duration-500 ease-in-out hover:scale-110">Register</Link>
                            </>
                        )}
                        <div className="pl-2 md:pl-3">
                            <DarkLightTheme></DarkLightTheme>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
