import { useContext } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../providers/AuthProvider";
import { Helmet } from "react-helmet-async";
import { toast } from "react-toastify";

const UpdateCampaign = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const updateCamp = useLoaderData();
    const { _id, image, title, type, description, minDonation, deadline } = updateCamp;

    const handleUpdateCamp = (e) => {
        e.preventDefault();
        const form = e.target;
        const updatedImage = form.image.value.trim();
        const updatedTitle = form.title.value.trim();
        const updatedType = form.type.value.trim();
        const updatedDescription = form.description.value.trim();
        const updatedMinDonation = form.minDonation.value;
        const updatedDeadline = form.deadline.value.trim();

        const updatedCampaign = {
            image: updatedImage,
            title: updatedTitle,
            type: updatedType,
            description: updatedDescription,
            minDonation: updatedMinDonation,
            deadline: updatedDeadline,
            userEmail: user?.email,
            userName: user?.displayName,
        };

        const isChanged =
            updatedImage !== image ||
            updatedTitle !== title ||
            updatedType !== type ||
            updatedDescription !== description ||
            updatedMinDonation !== String(minDonation) ||
            updatedDeadline !== deadline;

        if (!isChanged) {
            toast.error("No changes detected. Please update the form before submitting.");
            return;
        }
        if (!updatedImage || !updatedTitle || !updatedType || !updatedDescription || !updatedMinDonation || !updatedDeadline) {
            toast.error("All fields are required!");
            return;
        }

        try {
            new URL(updatedImage);
        } catch {
            toast.error("Invalid Image URL!");
            return;
        }

        if (parseFloat(updatedMinDonation) <= 0) {
            toast.error("Minimum donation amount must be greater than 0.");
            return;
        }

        fetch(`https://mw-assignments10-server.vercel.app/addCampaign/${_id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedCampaign),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: "Success!",
                        text: "Campaign updated successfully",
                        icon: "success",
                        confirmButtonText: "OK",
                    }).then(() => {
                        navigate("/myCampaign");
                    });
                } else {
                    toast.error("No changes were made to the campaign.");
                }
            })
            .catch((error) => {
                Swal.fire({
                    title: "Error!",
                    text: "Failed to update the campaign.",
                    icon: "error",
                });
                console.error(error);
            });
    };

    return (
        <div className="px-3 mt-10 md:mt-14 mb-20">
            <div className="max-w-3xl mx-auto p-5 md:p-8 shadow-lg border rounded-xl">
                <Helmet>
                    <title>Update Campaign | CrowdCube</title>
                </Helmet>

                <h2 className="text-3xl md:text-4xl text-purple-700 font-bold text-center mb-7 md:mb-10">
                    Update Campaign
                </h2>
                <form onSubmit={handleUpdateCamp}>
                    {/* Form Fields */}
                    <div className="form-group mb-4">
                        <label className="block mb-2">Image/Thumbnail (URL)</label>
                        <input
                            type="text"
                            name="image"
                            defaultValue={image}
                            className="w-full p-3 border rounded-lg"
                            placeholder="Enter image URL"
                            required
                        />
                    </div>
                    <div className="form-group mb-4">
                        <label className="block mb-2">Campaign Title</label>
                        <input
                            type="text"
                            name="title"
                            defaultValue={title}
                            className="w-full p-3 border rounded-lg"
                            placeholder="Enter campaign title"
                            required
                        />
                    </div>
                    <div className="form-group mb-4">
                        <label className="block mb-2">Campaign Type</label>
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
                    <div className="form-group mb-4">
                        <label className="block mb-2">Description</label>
                        <textarea
                            name="description"
                            defaultValue={description}
                            className="w-full p-3 border rounded-lg"
                            placeholder="Enter campaign description"
                            rows="4"
                            required
                        ></textarea>
                    </div>
                    <div className="form-group mb-4">
                        <label className="block mb-2">Minimum Donation Amount</label>
                        <input
                            type="text"
                            name="minDonation"
                            defaultValue={minDonation}
                            className="w-full p-3 border rounded-lg"
                            placeholder="Enter minimum donation amount"
                            required
                        />
                    </div>
                    <div className="form-group mb-4">
                        <label className="block mb-2">Deadline</label>
                        <input
                            type="date"
                            name="deadline"
                            defaultValue={deadline}
                            className="w-full p-3 border rounded-lg"
                            required
                        />
                    </div>
                    <div className="form-group mb-4">
                        <label className="block mb-2">User Email</label>
                        <input
                            type="email"
                            value={user?.email || ""}
                            readOnly
                            className="w-full p-3 border rounded-lg cursor-not-allowed"
                        />
                    </div>
                    <div className="form-group mb-4">
                        <label className="block mb-2">User Name</label>
                        <input
                            type="text"
                            value={user?.displayName || ""}
                            readOnly
                            className="w-full p-3 border rounded-lg cursor-not-allowed"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-green-500 text-black font-semibold py-3 rounded-lg hover:bg-green-600 transition"
                    >
                        Update Campaign
                    </button>
                </form>
            </div>
        </div>
    );
};

export default UpdateCampaign;
