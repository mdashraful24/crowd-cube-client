import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Helmet } from "react-helmet-async";

const Register = () => {
    const { createNewUser, setUser, updateUserProfiles } = useContext(AuthContext);
    const [error, setError] = useState("");
    const [showPassWord, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = new FormData(e.target);
        const name = form.get("name");
        const email = form.get("email");
        const photo = form.get("photo");
        const password = form.get("password");
        
        if (!/[A-Z]/.test(password) || !/[a-z]/.test(password) || password.length < 6) {
            setError("Password must contain at least 6 characters, including one uppercase and one lowercase letter.");
            return;
        }
        try {
            new URL(photo);
        } catch {
            toast.error("Invalid Photo URL. Please provide a valid URL.");
            return;
        }
        setError("");
        createNewUser(email, password)
            .then(result => {

                const newUser = { name, email, photo }
                // save new user info to the database
                fetch('https://mw-assignments10-server.vercel.app/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(newUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        // console.log('user created to db', data);
                        // if(data.insertedId){
                        // console.log('User created in db');
                        // }
                    })


                const user = result.user;
                setUser(user);
                return updateUserProfiles({
                    displayName: name,
                    photoURL: photo
                });
            })
            .then(() => {
                toast.success("Registered successfully.");
                navigate("/");
            })
            .catch((error) => {
                setError("Email has already been used.");
            });
    };

    return (
        <div className="flex justify-center items-center my-16 px-5">
            {/* Helmet */}
            <Helmet>
                <title>Register Now | CrowdCube</title>
            </Helmet>

            <div className="card w-full max-w-md shrink-0 py-8 border rounded-xl shadow-lg">
                <h2 className="text-2xl md:text-3xl font-bold text-center">Register Now</h2>
                {/* Register form */}
                <form onSubmit={handleSubmit} className="card-body pb-3 md:px-11">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input
                            type="text"
                            name="name"
                            placeholder="name"
                            className="input input-bordered w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                            required
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            type="email"
                            name="email"
                            placeholder="email"
                            className="input input-bordered w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                            required
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input
                            type="text"
                            name="photo"
                            placeholder="photo url"
                            className="input input-bordered w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                            required
                        />
                    </div>
                    <div className="form-control relative">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input
                            type={showPassWord ? 'text' : 'password'}
                            name="password"
                            placeholder="password"
                            className="input input-bordered w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                            required
                        />
                        <button type="button" onClick={() => setShowPassword(!showPassWord)} className="absolute right-4 top-[52px]">
                            {showPassWord ? <FaEyeSlash /> : <FaEye />}
                        </button>
                        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn text-white font-medium bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-400 shadow-md transition-all duration-200 border-none">
                            Register
                        </button>
                    </div>
                </form>
                <p className="text-center text-sm mt-2">
                    Already Have An Account? <Link to="/login" className="text-red-500 font-semibold hover:underline">Login</Link>
                </p>
            </div>
        </div>
    );
};

export default Register;
