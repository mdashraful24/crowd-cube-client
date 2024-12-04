import React, { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { toast } from "react-toastify";
import Swal from 'sweetalert2'
// import { useLoaderData } from "react-router-dom";

const AddNewCampaign = () => {
    const { user } = useContext(AuthContext); // Assuming `user` contains logged-in user's details
    // const loadedUsers = useLoaderData();
    // const [users, setUsers] = useState(loadedUsers);

    const handleSubmit = (e) => {
        e.preventDefault();

        const form = e.target;
        const image = form.image.value.trim();
        const title = form.title.value.trim();
        const type = form.type.value.trim();
        const description = form.description.value.trim();
        const minDonation = form.minDonation.value.trim();
        const deadline = form.deadline.value.trim();

        // Collect campaign data
        const newCampaign = {
            image,
            title,
            type,
            description,
            minDonation,
            deadline,
            userEmail: user?.email,
            userName: user?.displayName,
        };

        // console.log("Campaign Data:", newCampaign);
        // toast.success("Campaign added successfully!");

        // Validate inputs
        if (!image || !title || !type || !description || !minDonation || !deadline) {
            toast.error("All fields are required!");
            return;
        }

        try {
            new URL(image); // Validate image URL
        } catch {
            toast.error("Invalid Image URL!");
            return;
        }

        if (parseFloat(minDonation) <= 0) {
            toast.error("Minimum donation amount must be greater than 0.");
            return;
        }

        // send data to the server
        fetch('http://localhost:5000/addCampaign', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCampaign)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'success!',
                        text: 'Campaign added successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })

        // Reset form
        form.reset();
    };

    return (
        <div className="max-w-3xl mx-auto p-8 shadow-lg rounded-lg bg-white my-10">
            <h2 className="text-2xl font-bold text-center mb-6">Add New Campaign</h2>
            <form onSubmit={handleSubmit}>
                {/* Image/Thumbnail */}
                <div className="form-group mb-4">
                    <label className="block text-gray-700 mb-2">Image/Thumbnail (URL)</label>
                    <input
                        type="text"
                        name="image"
                        className="w-full p-3 border rounded-lg"
                        placeholder="Enter image URL"
                        required
                    />
                </div>

                {/* Campaign Title */}
                <div className="form-group mb-4">
                    <label className="block text-gray-700 mb-2">Campaign Title</label>
                    <input
                        type="text"
                        name="title"
                        className="w-full p-3 border rounded-lg"
                        placeholder="Enter campaign title"
                        required
                    />
                </div>

                {/* Campaign Type */}
                <div className="form-group mb-4">
                    <label className="block text-gray-700 mb-2">Campaign Type</label>
                    <select
                        name="type"
                        className="w-full p-3 border rounded-lg"
                        defaultValue=""
                        required
                    >
                        <option value="" disabled>
                            Select a type
                        </option>
                        <option value="personal issue">Personal Issue</option>
                        <option value="startup">Startup</option>
                        <option value="business">Business</option>
                        <option value="creative ideas">Creative Ideas</option>
                    </select>
                </div>

                {/* Description */}
                <div className="form-group mb-4">
                    <label className="block text-gray-700 mb-2">Description</label>
                    <textarea
                        name="description"
                        className="w-full p-3 border rounded-lg"
                        placeholder="Enter campaign description"
                        rows="4"
                        required
                    ></textarea>
                </div>

                {/* Minimum Donation */}
                <div className="form-group mb-4">
                    <label className="block text-gray-700 mb-2">Minimum Donation Amount</label>
                    <input
                        type="number"
                        name="minDonation"
                        className="w-full p-3 border rounded-lg"
                        placeholder="Enter minimum donation amount"
                        required
                    />
                </div>

                {/* Deadline */}
                <div className="form-group mb-4">
                    <label className="block text-gray-700 mb-2">Deadline</label>
                    <input
                        type="date"
                        name="deadline"
                        className="w-full p-3 border rounded-lg"
                        required
                    />
                </div>

                {/* User Email */}
                <div className="form-group mb-4">
                    <label className="block text-gray-700 mb-2">User Email</label>
                    <input
                        type="email"
                        value={user?.email || ""}
                        readOnly
                        className="w-full p-3 border rounded-lg bg-gray-100 cursor-not-allowed"
                    />
                </div>

                {/* User Name */}
                <div className="form-group mb-6">
                    <label className="block text-gray-700 mb-2">User Name</label>
                    <input
                        type="text"
                        value={user?.displayName || ""}
                        readOnly
                        className="w-full p-3 border rounded-lg bg-gray-100 cursor-not-allowed"
                    />
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition"
                >
                    Add Campaign
                </button>
            </form>
        </div>
    );
};

export default AddNewCampaign;












// import React, { useContext, useState } from "react";
// import { AuthContext } from "../providers/AuthProvider";
// import { toast } from "react-toastify";

// const AddNewCampaign = () => {
//     const { user } = useContext(AuthContext); // Assuming `user` contains logged-in user's details
//     const [formData, setFormData] = useState({
//         image: "",
//         title: "",
//         type: "", // Default to the first option
//         // type: "personal issue", // Default to the first option
//         description: "",
//         minDonation: "",
//         deadline: "",
//     });

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData((prev) => ({
//             ...prev,
//             [name]: value,
//         }));
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();

//         // Validation
//         const { image, title, type, description, minDonation, deadline } = formData;
//         if (!image || !title || !type || !description || !minDonation || !deadline) {
//             toast.error("All fields are required!");
//             return;
//         }

//         try {
//             new URL(image); // Validate image URL
//         } catch {
//             toast.error("Invalid Image URL");
//             return;
//         }

//         if (parseFloat(minDonation) <= 0) {
//             toast.error("Minimum donation amount must be greater than 0.");
//             return;
//         }

//         // Simulate campaign submission
//         const newCampaign = {
//             ...formData,
//             userEmail: user?.email,
//             userName: user?.displayName,
//         };

//         console.log("New Campaign Data:", newCampaign);
//         toast.success("Campaign added successfully!");

//         // Reset form
//         setFormData({
//             image: "",
//             title: "",
//             type: "",
//             // type: "personal issue",
//             description: "",
//             minDonation: "",
//             deadline: "",
//         });
//     };

//     return (
//         <div className="max-w-3xl mx-auto p-8 shadow-lg rounded-lg bg-white my-10">
//             <h2 className="text-2xl font-bold text-center mb-6">Add New Campaign</h2>
//             <form onSubmit={handleSubmit}>
//                 {/* Image URL */}
//                 <div className="form-group mb-4">
//                     <label className="block text-gray-700 mb-2">Image/Thumbnail (URL)</label>
//                     <input
//                         type="text"
//                         name="image"
//                         value={formData.image}
//                         onChange={handleChange}
//                         className="w-full p-3 border rounded-lg"
//                         placeholder="Enter image URL"
//                         required
//                     />
//                 </div>

//                 {/* Campaign Title */}
//                 <div className="form-group mb-4">
//                     <label className="block text-gray-700 mb-2">Campaign Title</label>
//                     <input
//                         type="text"
//                         name="title"
//                         value={formData.title}
//                         onChange={handleChange}
//                         className="w-full p-3 border rounded-lg"
//                         placeholder="Enter campaign title"
//                         required
//                     />
//                 </div>

//                 {/* Campaign Type */}
//                 <div className="form-group mb-4">
//                     <label className="block text-gray-700 mb-2">Campaign Type</label>
//                     <select
//                         name="type"
//                         value={formData.type}
//                         onChange={handleChange}
//                         className="w-full p-3 border rounded-lg"
//                         required
//                     >
//                         <option value="" disabled>
//                             Select a type
//                         </option>
//                         <option value="personal issue">Personal Issue</option>
//                         <option value="startup">Startup</option>
//                         <option value="business">Business</option>
//                         <option value="creative ideas">Creative Ideas</option>
//                     </select>
//                 </div>

//                 {/* Description */}
//                 <div className="form-group mb-4">
//                     <label className="block text-gray-700 mb-2">Description</label>
//                     <textarea
//                         name="description"
//                         value={formData.description}
//                         onChange={handleChange}
//                         className="w-full p-3 border rounded-lg"
//                         placeholder="Enter campaign description"
//                         rows="4"
//                         required
//                     ></textarea>
//                 </div>

//                 {/* Minimum Donation */}
//                 <div className="form-group mb-4">
//                     <label className="block text-gray-700 mb-2">Minimum Donation Amount</label>
//                     <input
//                         type="number"
//                         name="minDonation"
//                         value={formData.minDonation}
//                         onChange={handleChange}
//                         className="w-full p-3 border rounded-lg"
//                         placeholder="Enter minimum donation amount"
//                         required
//                     />
//                 </div>

//                 {/* Deadline */}
//                 <div className="form-group mb-4">
//                     <label className="block text-gray-700 mb-2">Deadline</label>
//                     <input
//                         type="date"
//                         name="deadline"
//                         value={formData.deadline}
//                         onChange={handleChange}
//                         className="w-full p-3 border rounded-lg"
//                         required
//                     />
//                 </div>

//                 {/* User Email */}
//                 <div className="form-group mb-4">
//                     <label className="block text-gray-700 mb-2">User Email</label>
//                     <input
//                         type="email"
//                         value={user?.email || ""}
//                         readOnly
//                         className="w-full p-3 border rounded-lg bg-gray-100 cursor-not-allowed"
//                     />
//                 </div>

//                 {/* User Name */}
//                 <div className="form-group mb-6">
//                     <label className="block text-gray-700 mb-2">User Name</label>
//                     <input
//                         type="text"
//                         value={user?.displayName || ""}
//                         readOnly
//                         className="w-full p-3 border rounded-lg bg-gray-100 cursor-not-allowed"
//                     />
//                 </div>

//                 {/* Submit Button */}
//                 <button
//                     type="submit"
//                     className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition"
//                 >
//                     Add Campaign
//                 </button>
//             </form>
//         </div>
//     );
// };

// export default AddNewCampaign;
