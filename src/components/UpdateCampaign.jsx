import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../providers/AuthProvider";

const UpdateCampaign = () => {
    const { user } = useContext(AuthContext);

    const updateCamp = useLoaderData();
    const { _id, image, title, type, description, minDonation, deadline } = updateCamp;

    const handleUpdateCamp = (e) => {
        e.preventDefault();

        const form = e.target;
        const image = form.image.value.trim();
        const title = form.title.value.trim();
        const type = form.type.value.trim();
        const description = form.description.value.trim();
        const minDonation = form.minDonation.value;
        const deadline = form.deadline.value.trim();

        // Collect campaign data
        const updatedCampaign = {
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
        fetch(`http://localhost:5000/addCampaign/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedCampaign)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'success!',
                        text: 'Campaign updated successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })

        // Reset form
        // form.reset();
    };

    return (
        <div className="max-w-3xl mx-auto p-8 shadow-lg rounded-lg my-10">
            <h2 className="text-2xl font-bold text-center mb-6">Update Campaign: {title}</h2>
            <form onSubmit={handleUpdateCamp}>
                {/* Image/Thumbnail */}
                <div className="form-group mb-4">
                    <label className="block text-gray-700 mb-2">Image/Thumbnail (URL)</label>
                    <input
                        type="text"
                        name="image"
                        defaultValue={image}
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
                        defaultValue={title}
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
                        defaultValue={type}
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
                        defaultValue={description}
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
                        defaultValue={minDonation}
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
                        defaultValue={deadline}
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
                        className="w-full p-3 border rounded-lg cursor-not-allowed"
                    />
                </div>

                {/* User Name */}
                <div className="form-group mb-6">
                    <label className="block text-gray-700 mb-2">User Name</label>
                    <input
                        type="text"
                        value={user?.displayName || ""}
                        readOnly
                        className="w-full p-3 border rounded-lg cursor-not-allowed"
                    />
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition"
                >
                    Update Campaign
                </button>
            </form>
        </div>
    );
};

export default UpdateCampaign;
