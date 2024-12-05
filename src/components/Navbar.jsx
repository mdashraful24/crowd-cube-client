import { useContext, useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { toast } from "react-toastify";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const navigate = useNavigate();
    // console.log(import.meta.env.VITE_a)

    // Reset dropdownOpen when user changes
    useEffect(() => {
        setDropdownOpen(false); // Close dropdown on user change
    }, [user]);

    // Sign out
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
            <li><NavLink to="/campaigns">All Campaigns</NavLink></li>
            <li><NavLink to="/addCampaign">Add New Campaign</NavLink></li>
            <li><NavLink to="/myCampaign">My Campaigns</NavLink></li>
            <li><NavLink to="/myDonations">My Donations</NavLink></li>
        </>
    );

    return (
        <div className="p-2 md:py-3 bg-gray-300">
            <div className="container mx-auto">
                <div className="navbar">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
                                className="text-2xl text-[#591a6a] font-bold"
                            >
                                CrowdCube
                            </button>
                        </div>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
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
                                    className="rounded-full w-12 h-12 object-cover cursor-pointer border p-1 bg-white"
                                    src={user?.photoURL}
                                    alt="User profile"
                                />
                                {dropdownOpen && (
                                    <div className="absolute right-0 mt-2 w-36 shadow-lg z-10 bg-white rounded-lg border">
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
                                <Link to="/login" className="btn btn-primary mr-2">Login</Link>
                                <Link to="/register" className="btn btn-secondary">Register</Link>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
