import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const RunningCampaigns = () => {
    const [running, setRunning] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://mw-assignments10-server.vercel.app/running")
            .then((res) => res.json())
            .then((data) => {
                setRunning(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching campaigns:", error);
                setLoading(false);
            });
    }, []);

    // Show spinner
    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <span className="loading loading-bars loading-lg"></span>
            </div>
        );
    }

    return (
        <section className="mt-12 mb-16 md:my-16 lg:my-24 px-2 md:px-3">
            <div className="text-center mb-7 md:mb-10">
                <h2 className="text-3xl md:text-4xl text-purple-700 font-bold">Running Campaigns</h2>
            </div>
            <div className="container lg:w-10/12 mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-8">
                {running.slice(0, 6).map((campaign) => {
                    const isActive = new Date(campaign.deadline) >= new Date();
                    return (
                        <div
                            key={campaign._id}
                            className={`card shadow-sm p-4 border rounded-lg transition-transform duration-500 ${isActive ? "hover:-translate-y-2 hover:shadow-xl" : "opacity-70"
                                }`}
                        >
                            <figure className="mb-4">
                                <img
                                    className="w-full h-60 md:h-72 rounded-md"
                                    src={campaign.image}
                                    alt={campaign.title}
                                />
                            </figure>
                            <div className="card-body p-0">
                                <h3 className="text-xl font-bold">{campaign.title}</h3>
                                <p className="">
                                    <strong>Description: </strong>
                                    {campaign.description}
                                </p>
                                <p className="capitalize">
                                    <strong>Campaign Type: </strong>
                                    {campaign.type}
                                </p>
                                <p>
                                    <strong>Deadline: </strong>
                                    {new Date(campaign.deadline).toLocaleDateString()}
                                </p>
                                <p
                                    className={`font-semibold ${isActive ? "text-green-600" : "text-red-600"
                                        }`}
                                >
                                    {isActive ? "Campaign Active" : "Passed Out"}
                                </p>
                                {isActive && (
                                    <div className="mt-4">
                                        <Link to={`campaign/${campaign._id}`}>
                                            <button className="btn text-base text-white font-medium w-full rounded-full bg-purple-900 hover:bg-purple-950 shadow-xl transition-all duration-500"
                                            >
                                                See More
                                            </button>
                                        </Link>
                                    </div>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default RunningCampaigns;
