import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { toast } from "react-toastify"; // Import react-toastify for toast notifications

const DetailsPage = () => {
    const { id } = useParams(); // Get the id from the URL
    const [campaign, setCampaign] = useState(null);
    const { user } = useContext(AuthContext);
    const [hasDonated, setHasDonated] = useState(false); // State to track donation status

    useEffect(() => {
        // Fetch campaign data based on the id
        fetch(`http://localhost:5000/running/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setCampaign(data);
            })
            .catch((error) => {
                console.error("Error fetching campaign data:", error);
            });
    }, [id]);

    // Check if the user has already donated to this campaign
    useEffect(() => {
        if (user?.email && campaign?._id) {
            fetch(`http://localhost:5000/myDonations?email=${user.email}`)
                .then((res) => res.json())
                .then((data) => {
                    // Check if the campaign ID is in the list of donations
                    const alreadyDonated = data.some((donation) => donation._id === campaign._id);
                    setHasDonated(alreadyDonated);
                })
                .catch((error) => console.error("Error fetching donations:", error));
        }
    }, [user?.email, campaign?._id]);

    const handleDonate = () => {
        if (hasDonated) {
            // Show toast message if the user already donated
            toast.error("You've already donated to this campaign.");
            return;
        }

        const donationData = {
            campaignId: campaign._id, // Use `campaignId` for clarity
            image: campaign.image,
            title: campaign.title,
            type: campaign.type,
            description: campaign.description,
            minDonation: campaign.minDonation,
            deadline: campaign.deadline,
            userEmail: user.email, // Use the current user's email
            userName: user.displayName || "Anonymous", // Use the current user's name or default to "Anonymous"
        };

        fetch("http://localhost:5000/myDonations", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(donationData),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                // After a successful donation, show a success toast
                toast.success("Thank you for your donation!");
                setHasDonated(true); // Mark as donated
            })
            .catch((error) => {
                console.error("Error donating:", error);
            });
    };


    if (!campaign) {
        return <div>Loading...</div>;
    }

    return (
        <section className="px-3 py-10">
            <h2 className="text-center text-4xl mb-10">Details</h2>
            <div className="container lg:max-w-screen-md mx-auto border hover:shadow-xl p-5">
                {/* Campaign Image */}
                <div className="mb-6">
                    <img
                        src={campaign.image}
                        alt={campaign.title}
                        className="w-full lg:h-96 rounded-md"
                    />
                </div>
                {/* Campaign Details */}
                <div>
                    <h2 className="text-3xl font-semibold">{campaign.title}</h2>
                    <p className="text-lg text-gray-600 mt-2">{campaign.description}</p>
                    <div className="mt-4">
                        <p><strong>Type:</strong> {campaign.type}</p>
                        <p><strong>Min Donation:</strong> ${campaign.minDonation}</p>
                        <p><strong>Deadline:</strong> {new Date(campaign.deadline).toLocaleDateString()}</p>
                    </div>
                    <div className="mt-6">
                        <button onClick={handleDonate} className="btn btn-primary w-full rounded-md">
                            Donate Now
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DetailsPage;
