import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { toast } from "react-toastify";
import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {
    const { createNewUser, setUser, updateUserProfiles, handleGoogleSignIn } = useContext(AuthContext);
    const [error, setError] = useState("");
    const [showPassWord, setShowPassword] = useState(false);
    const navigate = useNavigate();

    // Handle google signIn
    // const handleGoogleSignInClickReg = () => {
    //     handleGoogleSignIn()
    //         .then(result => {
    //             const user = result.user;
    //             setUser(user);
    //             toast.success("Successfully Registered with Google");
    //             navigate("/");
    //         })
    //         .catch(error => {
    //             console.error("Google Sign-In Error:", error);
    //             toast.error(error.message || "Google Sign-In failed.");
    //         });
    // };
    // Handle submit
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = new FormData(e.target);
        const name = form.get("name");
        const email = form.get("email");
        const photo = form.get("photo");
        const password = form.get("password");
        // Conditions
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
                fetch('http://localhost:5000/users', {
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
                toast.success("Successfully Registered");
                navigate("/");
            })
            .catch((error) => {
                setError("Email has already been used.");
            });
    };

    return (
        <div className="flex justify-center items-center my-12 px-5">
            {/* Register form */}
            <div className="card bg-white w-full max-w-md shrink-0 py-8 border">
                <h2 className="text-2xl font-semibold text-center">Register Now!!!</h2>
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
                <p className="text-center text-sm">
                    Already Have An Account? <Link to="/login" className="text-red-500 font-semibold hover:underline">Login</Link>
                </p>
                {/* Google button */}
                {/* <div className="text-center w-10/12 mx-auto mt-5">
                    <button
                        onClick={handleGoogleSignInClickReg}
                        className="btn w-full text-white font-medium bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 focus:outline-none focus:ring-2 focus:ring-red-400 shadow-md transition-all duration-200 border-none"
                    >
                        <FcGoogle />
                        Sign in with Google
                    </button>
                </div> */}
            </div>
        </div>
    );
};

export default Register;










// import { useContext, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { AuthContext } from "../providers/AuthProvider";
// import { FaEye, FaEyeSlash } from "react-icons/fa";
// import { FcGoogle } from "react-icons/fc";
// import { toast } from "react-toastify";

// const Register = () => {

//     const { createUser } = useContext(AuthContext);
//     const [error, setError] = useState("");
//     const [showPassWord, setShowPassword] = useState(false);
//     const navigate = useNavigate();


//     // Handle Register
//     const handleSignUp = e => {
//         e.preventDefault();
//         console.log('form sign up');

//         const form = e.target;
//         const name = form.name.value;
//         const email = form.email.value;
//         const photo = form.photo.value;
//         const password = form.password.value;
//         const users = { name, email, photo, password };
//         console.log(users);

//         // Conditions
//         if (!/[A-Z]/.test(password) || !/[a-z]/.test(password) || password.length < 6) {
//             // setError("Password must contain at least 6 characters, including one uppercase and one lowercase letter.");
//             setError("Password must contain one uppercase letter, and one lowercase letter, and be at least 6 characters long.");
//             return;
//         }
//         try {
//             new URL(photo);
//         } catch {
//             toast.error("Invalid Photo URL. Please provide a valid URL.");
//             return;
//         }
//         setError("");

//         createUser(email, password)
//             .then(result => {
//                 console.log(result.user);
//                 const newUser = { name, email, photo }
//                 // save new user info to the database
//                 fetch('http://localhost:5000/users', {
//                     method: 'POST',
//                     headers: {
//                         'content-type': 'application/json'
//                     },
//                     body: JSON.stringify(newUser)
//                 })
//                     .then(res => res.json())
//                     .then(data => {
//                         // console.log('user created to db', data);
//                         if(data.insertedId){
//                             console.log('User created in db');
//                         }
//                     })

//             })
//             .then(() => {
//                 toast.success("Successfully Registered");
//                 navigate("/");
//             })
//             .catch((error) => {
//                 setError("Email has already been used.");
//             });

//     }

//     return (
//         <div className="card bg-white w-full max-w-md mx-auto shrink-0 py-8 shadow-xl my-10 border">
//             <h2 className="text-2xl font-semibold text-center">Register Now!!!</h2>
//             <form onSubmit={handleSignUp} className="card-body pt-4 pb-3 md:px-11">
//                 <div className="form-control">
//                     <label className="label">
//                         <span className="label-text">Name</span>
//                     </label>
//                     <input
//                         type="text"
//                         name="name"
//                         placeholder="name"
//                         className="input input-bordered w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
//                         required
//                     />
//                 </div>
//                 <div className="form-control">
//                     <label className="label">
//                         <span className="label-text">Email</span>
//                     </label>
//                     <input
//                         type="email"
//                         name="email"
//                         placeholder="email"
//                         className="input input-bordered w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
//                         required
//                     />
//                 </div>
//                 <div className="form-control">
//                     <label className="label">
//                         <span className="label-text">Photo URL</span>
//                     </label>
//                     <input
//                         type="text"
//                         name="photo"
//                         placeholder="photo url"
//                         className="input input-bordered w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
//                         required
//                     />
//                 </div>
//                 <div className="form-control relative">
//                     <label className="label">
//                         <span className="label-text">Password</span>
//                     </label>
//                     <input
//                         type={showPassWord ? 'text' : 'password'}
//                         name="password"
//                         placeholder="password"
//                         className="input input-bordered w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
//                         required
//                     />
//                     <button type="button" onClick={() => setShowPassword(!showPassWord)} className="absolute right-4 top-[52px]">
//                         {showPassWord ? <FaEyeSlash /> : <FaEye />}
//                     </button>
//                     {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
//                 </div>
//                 <div className="form-control mt-6">
//                     <button className="btn text-white font-medium bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-400 shadow-md transition-all duration-200 border-none">
//                         Register
//                     </button>
//                 </div>
//             </form>
//             {/* Option */}
//             <div className="flex justify-center items-center gap-2 my-2">
//                 <hr className="w-1/3 lg:w-[160px] border-t border-gray-400" />
//                 <p className="text-gray-600">or</p>
//                 <hr className="w-1/3 lg:w-[160px] border-t border-gray-400" />
//             </div>
//             <p className="text-center text-sm">
//                 Already Have An Account? <Link to="/login" className="text-red-500 font-semibold hover:underline">Login</Link>
//             </p>
//             {/* Google button */}
//             {/* <div className="text-center w-10/12 mx-auto mt-5">
//                 <button

//                     className="btn w-full text-white font-medium bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 focus:outline-none focus:ring-2 focus:ring-red-400 shadow-md transition-all duration-200 border-none"
//                 >
//                     <FcGoogle />
//                     Sign in with Google
//                 </button>
//             </div> */}
//         </div>
//     );
// };

// export default Register;