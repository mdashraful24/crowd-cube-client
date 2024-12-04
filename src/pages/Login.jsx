import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
    const { signInUser, setUser, handleGoogleSignIn } = useContext(AuthContext);
    const [showPassWord, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();


    const handleSignIn = e => {
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const users = { email, password };
        console.log(users);
        signInUser(email, password)
            .then(result => {
                console.log(result.user)
            })
            .catch(error => {
                console.log('ERROR', error)
            })
    }


    // Handle Google Sign In
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


    return (
        <div className="flex justify-center items-center my-16">
            <div className="card bg-white rounded-xl border w-full max-w-md shrink-0 py-6 p-3 shadow-xl">
                <h2 className='text-2xl font-semibold text-center'>Login Now</h2>
                <form onSubmit={handleSignIn} className="card-body pb-2">
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
                            // type={showPassWord ? 'text' : 'password'}
                            name="password"
                            placeholder="password"
                            className="input input-bordered border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
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
                    <button
                        onClick={handleGoogleSignInClick}
                        className="btn w-full text-white font-medium bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 focus:outline-none focus:ring-2 focus:ring-red-400 shadow-md transition-all duration-200 border-none"
                    >
                        <FcGoogle />
                        Sign in with Google
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;