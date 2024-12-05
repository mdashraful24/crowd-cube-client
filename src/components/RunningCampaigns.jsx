import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const RunningCampaigns = () => {
    const [running, setRunning] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/running")
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setRunning(data);
            });
    }, []);

    return (
        <section className="py-8">
            <div className="text-center mb-6">
                <h2 className="text-3xl font-bold">Running Campaigns</h2>
            </div>
            <div className="container lg:w-6/12 mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {running.slice(0, 6).map((campaign) => (
                    <div key={campaign._id} className="card bg-base-100 shadow-md p-4 rounded-md">
                        {/* Placeholder Image */}
                        <figure className="mb-4">
                            {/* <div className="bg-gray-300 h-32 w-full rounded-md"></div> */}
                            <img className="w-full rounded-md" src={campaign.image} alt="" />
                        </figure>
                        {/* Card Body */}
                        <div className="card-body p-0">
                            <h3 className="text-xl font-semibold">{campaign.title}</h3>
                            <p className="text-gray-600 flex-1">{campaign.description}</p>
                            <p><strong>Min Donation:</strong> ${campaign.minDonation}</p>
                            <p><strong>Deadline:</strong> {new Date(campaign.deadline).toLocaleDateString()}</p>
                            <div className="mt-4">
                                <Link to={`campaign/${campaign._id}`}>
                                    <button className="btn btn-outline btn-primary w-full rounded-full">
                                        View Details
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default RunningCampaigns;


{/* <div key={campaign._id} className="container w-10/12 mx-auto bg-base-100 shadow-md p-4 rounded-md">
    <img
        src={campaign.image || "https://via.placeholder.com/300"}
        alt={campaign.title}
        className="rounded-t-lg w-full h-48 object-cover"
    />
    <div className="p-4 flex-1 flex flex-col">
        <h3 className="text-xl font-semibold">{campaign.title}</h3>
        <p className="text-gray-600 flex-1">{campaign.description}</p>
        <div className="text-gray-800 mt-2">
            <p><strong>Min Donation:</strong> ${campaign.minDonation}</p>
            <p><strong>Deadline:</strong> {new Date(campaign.deadline).toLocaleDateString()}</p>
        </div>
        <div className="mt-4 text-center">
            <button className="px-4 py-2 bg-blue-500 text-white rounded-md">
                View Details
            </button>
        </div>
    </div>
</div> */}