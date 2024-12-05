import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";
import { FcGoogle } from "react-icons/fc";
import { Helmet } from "react-helmet-async";

const Login = () => {
    const { userLogin, setUser, handleGoogleSignIn } = useContext(AuthContext);
    const [error, setError] = useState({});
    const [showPassWord, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    // Handle signIn
    const handleGoogleSignInClick = () => {
        handleGoogleSignIn()
            .then(result => {
                const user = result.user;
                setUser(user);
                toast.success("Successfully! Login with Google");
                navigate(location?.state ? location.state : "/");
            })
            .catch(error => {
                setError({ ...error, google: error.message });
                toast.error("Google Sign-In Failed. Please try again.");
            });
    }
    // Handle submit
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        userLogin(email, password)
            .then(result => {
                const user = result.user;
                setUser(user);
                toast.success("Login Successfully!");
                navigate(location?.state ? location.state : "/");
            })
            .catch(err => {
                setError({ login: "Please check your email or password." });
                toast.error("Login Failed. Please try again.");
            })
    }

    return (
        <div className='my-16 px-5'>
            {/* Helmet */}
            <Helmet>
                <title>Login Now | CrowdCube</title>
            </Helmet>

            {/* Login form */}
            <div className="flex justify-center items-center">
                <div className="card rounded-xl border w-full max-w-md shrink-0 py-6 p-3 shadow-lg">
                    <h2 className='text-2xl md:text-3xl font-bold text-center'>Login Now</h2>
                    <form onSubmit={handleSubmit} className="card-body pb-2">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                placeholder="email"
                                className="input input-bordered border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required />
                        </div>
                        <div className="form-control relative">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type={showPassWord ? 'text' : 'password'}
                                name="password"
                                placeholder="password"
                                className="input input-bordered border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                            <button type="button" onClick={() => setShowPassword(!showPassWord)}
                                className="absolute right-4 top-[52px]">
                                {
                                    showPassWord ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                                }
                            </button>
                            {
                                error.login && (
                                    <label className="label text-sm text-red-600">
                                        {error.login}
                                    </label>
                                )
                            }
                            <label className="label">
                                <Link
                                    to="/login"
                                    className="label-text-alt text-sm link link-hover text-blue-600"
                                >
                                    Forgot password?
                                </Link>
                            </label>
                        </div>
                        <div className="form-control mt-2">
                            <button className="btn text-white font-medium bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-md transition-all duration-200 border-none">Login</button>
                        </div>
                    </form>
                    {/* Option */}
                    <div className="flex justify-center items-center gap-2 my-2">
                        <hr className="w-1/3 lg:w-[160px] border-t border-gray-400" />
                        <p className="text-gray-600">or</p>
                        <hr className="w-1/3 lg:w-[160px] border-t border-gray-400" />
                    </div>
                    <p className='text-center text-sm'>
                        Don't Have An Account? <Link to='/register' className='text-red-500 font-semibold hover:underline'>Register</Link>
                    </p>
                    <div className="text-center w-10/12 mx-auto mt-5">
                        <button onClick={handleGoogleSignInClick}
                            className="btn w-full text-white font-medium bg-gradient-to-r from-orange-500 to-red-500 hover:from-red-600 hover:to-orange-600 focus:outline-none focus:ring-2 focus:ring-red-400 shadow-md transition-all duration-200 border-none"
                        >
                            Sign in with Google
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
