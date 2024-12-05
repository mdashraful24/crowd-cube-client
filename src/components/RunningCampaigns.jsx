// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

// const RunningCampaigns = () => {
//     const [running, setRunning] = useState([]);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         fetch("http://localhost:5000/running")
//             .then((res) => res.json())
//             .then((data) => {
//                 setRunning(data);
//                 setLoading(false);
//             })
//             .catch((error) => {
//                 console.error("Error fetching campaigns:", error);
//                 setLoading(false);
//             });
//     }, []);

//     // Show a spinner when data is loading
//     if (loading) {
//         return (
//             <div className="flex justify-center items-center min-h-screen">
//                 <span className="loading loading-bars loading-lg"></span>
//             </div>
//         );
//     }

//     return (
//         <section className="py-8">
//             <div className="text-center mb-6">
//                 <h2 className="text-3xl font-bold">Running Campaigns</h2>
//             </div>
//             <div className="container lg:w-10/12 mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-5">
//                 {running.slice(0, 6).map((campaign) => (
//                     <div key={campaign._id} className="card bg-base-100 shadow-md p-4 rounded-md transition-transform duration-500 hover:-translate-y-2 hover:shadow-2xl">
//                         <figure className="mb-4">
//                             <img className="w-full rounded-md" src={campaign.image} alt={campaign.title} />
//                         </figure>
//                         <div className="card-body p-0">
//                             <h3 className="text-xl font-semibold">{campaign.title}</h3>
//                             <p className="text-gray-600 flex-1">{campaign.description}</p>
//                             <p><strong>Min Donation:</strong> ${campaign.minDonation}</p>
//                             <p><strong>Deadline:</strong> {new Date(campaign.deadline).toLocaleDateString()}</p>
//                             <div className="mt-4">
//                                 <Link to={`campaign/${campaign._id}`}>
//                                     <button className="btn btn-outline btn-primary w-full rounded-full">
//                                         View Details
//                                     </button>
//                                 </Link>
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </section>
//     );
// };

// export default RunningCampaigns;




import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const RunningCampaigns = () => {
    const [running, setRunning] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("http://localhost:5000/running")
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

    // Show a spinner when data is loading
    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <span className="loading loading-bars loading-lg"></span>
            </div>
        );
    }

    return (
        <section className="py-8">
            <div className="text-center mb-6">
                <h2 className="text-3xl font-bold">Running Campaigns</h2>
            </div>
            <div className="container lg:w-10/12 mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {running.slice(0, 6).map((campaign) => {
                    const isActive = new Date(campaign.deadline) >= new Date(); // Check if deadline is in the future
                    return (
                        <div
                            key={campaign._id}
                            className={`card bg-base-100 shadow-md p-4 rounded-md transition-transform duration-500 ${isActive ? "hover:-translate-y-2 hover:shadow-2xl" : "opacity-70"
                                }`}
                        >
                            <figure className="mb-4">
                                <img
                                    className="w-full h-72 rounded-md"
                                    src={campaign.image}
                                    alt={campaign.title}
                                />
                            </figure>
                            <div className="card-body p-0">
                                <h3 className="text-xl font-semibold">{campaign.title}</h3>
                                <p className="text-gray-600 flex-1">{campaign.description}</p>
                                <p className="text-gray-600 flex-1">{campaign.type}</p>
                                <p>
                                    <strong>Deadline:</strong>{" "}
                                    {new Date(campaign.deadline).toLocaleDateString()}
                                </p>
                                {/* Show status based on deadline */}
                                <p
                                    className={`font-semibold ${isActive ? "text-green-600" : "text-red-600"
                                        }`}
                                >
                                    <span className="text-black">Status: </span>
                                    {isActive ? "Active" : "Passed Out"}
                                </p>
                                {isActive && (
                                    <div className="mt-4 flex justify-end">
                                        <Link to={`campaign/${campaign._id}`}>
                                            <button className="text-white text-lg px-5 py-2 rounded-full bg-gradient-to-r from-[#9538E2] to-[#5c0c9e] shadow-xl transition-all duration-300 hover:bg-gradient-to-r hover:from-red-600 hover:to-[#5c0c9e]">
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
