import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async";

const DetailsPage = () => {
    const { id } = useParams();
    const [campaign, setCampaign] = useState(null);
    const { user } = useContext(AuthContext);
    const [hasDonated, setHasDonated] = useState(false);
    const [loading, setLoading] = useState(true);
    const [isDeadlinePassed, setIsDeadlinePassed] = useState(false);

    useEffect(() => {
        fetch(`https://mw-assignments10-server.vercel.app/running/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setCampaign(data);
                setLoading(false);

                const deadlineDate = new Date(data.deadline);
                const currentDate = new Date();
                setIsDeadlinePassed(currentDate > deadlineDate);
            })
            .catch((error) => {
                console.error("Error fetching campaign data:", error);
                setLoading(false);
            });
    }, [id]);

    useEffect(() => {
        if (user?.email && campaign?._id) {
            fetch(`https://mw-assignments10-server.vercel.app/myDonations?email=${user.email}`)
                .then((res) => res.json())
                .then((data) => {
                    const alreadyDonated = data.some((donation) => donation.campaignId === campaign._id);
                    setHasDonated(alreadyDonated);
                })
                .catch((error) => console.error("Error fetching donations:", error));
        }
    }, [user?.email, campaign?._id]);

    const handleDonate = () => {
        if (hasDonated) {
            toast.error("You've already donated to this campaign.");
            return;
        }
        if (isDeadlinePassed) {
            toast.error("Sorry, the donation deadline has passed for this campaign.");
            return;
        }

        const donationData = {
            campaignId: campaign._id,
            image: campaign.image,
            title: campaign.title,
            type: campaign.type,
            description: campaign.description,
            minDonation: campaign.minDonation,
            deadline: campaign.deadline,
            userEmail: user.email,
            userName: user.displayName || "Anonymous",
        };

        fetch("https://mw-assignments10-server.vercel.app/myDonations", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(donationData),
        })
            .then((res) => res.json())
            .then((data) => {
                toast.success("Thank you for your donation!");
                setHasDonated(true);
            })
            .catch((error) => {
                console.error("Error donating:", error);
            });
    };

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <span className="loading loading-bars loading-lg"></span>
            </div>
        );
    }

    if (!campaign) {
        return <div>Campaign not found.</div>;
    }

    return (
        <section className="px-3 mt-10 md:mt-14 mb-20">
            {/* Helmet */}
            <Helmet>
                <title>Details | CrowdCube</title>
            </Helmet>

            <h2 className="text-center text-3xl md:text-4xl text-[#5c0c9e] font-bold mb-8">Campaign Details</h2>
            <div className="container lg:max-w-screen-md mx-auto border rounded-xl hover:shadow-xl p-5">
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
                    <h2 className="text-2xl md:text-3xl font-semibold">{campaign.title}</h2>
                    <p className="text-lg mt-2"><strong>Description:</strong> {campaign.description}</p>
                    <div className="mt-2">
                        <p><strong>Type:</strong> {campaign.type}</p>
                        <p><strong>Min Donation:</strong> ${campaign.minDonation}</p>
                        <p><strong>Deadline:</strong> {new Date(campaign.deadline).toLocaleDateString()}</p>
                    </div>
                    <div className="mt-6">
                        <button
                            onClick={handleDonate}
                            className="btn text-white font-medium bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-md transition-all duration-200 w-full rounded-md"
                        >
                            Donate Now
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DetailsPage;
