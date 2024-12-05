import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const DetailsPage = () => {
    const { id } = useParams(); // Get the id from the URL
    const [campaign, setCampaign] = useState(null);

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
                        <button className="btn btn-primary w-full rounded-md">
                            Donate Now
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DetailsPage;
