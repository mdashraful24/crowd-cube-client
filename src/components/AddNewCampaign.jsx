import React, { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { toast } from "react-toastify";
import Swal from 'sweetalert2'
import { Helmet } from "react-helmet-async";

const AddNewCampaign = () => {
    const { user } = useContext(AuthContext);

    const handleSubmit = (e) => {
        e.preventDefault();

        const form = e.target;
        const image = form.image.value;
        const title = form.title.value;
        const type = form.type.value;
        const description = form.description.value;
        const minDonation = parseFloat(form.minDonation.value);
        const deadline = form.deadline.value;

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

        if (!image || !title || !type || !description || !minDonation || !deadline) {
            toast.error("All fields are required!");
            return;
        }

        if (isNaN(minDonation) || minDonation <= 0) {
            toast.error("Minimum donation amount must be greater than 0.");
            return;
        }

        try {
            new URL(image);
        } catch {
            toast.error("Invalid Image URL!");
            return;
        }

        fetch("https://mw-assignments10-server.vercel.app/addCampaign", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newCampaign),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.insertedId) {
                    Swal.fire({
                        title: "Success!",
                        text: "Campaign added successfully",
                        icon: "success",
                        confirmButtonText: "Cool",
                    });
                }
            });

        form.reset();
    };


    return (
        <div className="px-3 mt-10 md:mt-14 mb-20">
            <div className="max-w-3xl mx-auto p-5 md:p-8 shadow-lg rounded-lg border">
                {/* Helmet */}
                <Helmet>
                    <title>Add New Campaign | CrowdCube</title>
                </Helmet>

                <h2 className="text-3xl md:text-4xl text-purple-700 font-bold text-center mb-6 md:mb-10">Add New Campaign</h2>
                <form onSubmit={handleSubmit}>
                    {/* Image/Thumbnail */}
                    <div className="form-group mb-4">
                        <label className="block mb-2">Image/Thumbnail (URL)</label>
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
                        <label className="block mb-2">Campaign Title</label>
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
                        <label className="block mb-2">Campaign Type</label>
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
                        <label className="block mb-2">Description</label>
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
                        <label className="block mb-2">Minimum Donation Amount</label>
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
                        <label className="block mb-2">Deadline</label>
                        <input
                            type="date"
                            name="deadline"
                            className="w-full p-3 border rounded-lg"
                            required
                        />
                    </div>
                    {/* User Email */}
                    <div className="form-group mb-4">
                        <label className="block mb-2">User Email</label>
                        <input
                            type="email"
                            value={user?.email || ""}
                            readOnly
                            className="w-full p-3 border rounded-lg cursor-not-allowed"
                        />
                    </div>
                    {/* User Name */}
                    <div className="form-group mb-6">
                        <label className="block mb-2">User Name</label>
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
                        className="btn w-full bg-green-600 text-base text-white py-3 rounded-lg hover:bg-green-700 transition-all duration-500"
                    >
                        Add
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddNewCampaign;
