import { Link } from "react-router-dom";

const RunningCampaigns = ({ runningCampaign }) => {

    const { _id, image, title, type, description, deadline } = runningCampaign;

    return (
        <div class="bg-white shadow-lg rounded-lg overflow-hidden border">
            <img
                src={image}
                alt={image}
                class="w-full h-80"
            />
            <div class="p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
                <p className="text-gray-600 text-sm mb-4">
                    {description}
                </p>
                <div className="flex items-center justify-between text-gray-700 text-sm mb-4">
                    <p><span className="font-semibold">Type:</span> {type}</p>
                    {/* <p><span className="font-semibold">Min:</span> $100</p> */}
                </div>
                <div className="flex items-center justify-between text-gray-700 text-sm mb-4">
                    <p><span className="font-semibold">Deadline:</span> {deadline}</p>
                    {/* <p><span className="font-semibold">Donors:</span> 25</p> */}
                </div>
                <Link to={`/campaign/${_id}`}>
                    <button
                        className="w-full bg-green-500 text-white text-center py-2 rounded-md hover:bg-green-600 transition"
                    >
                        See More
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default RunningCampaigns;



// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';

// const RunningCampaigns = () => {
//     const [campaigns, setCampaigns] = useState([]);

//     useEffect(() => {
//         const fetchCampaigns = async () => {
//             try {
//                 const response = await fetch('http://localhost:5000/addCampaign'); // Replace with your API endpoint
//                 const data = await response.json();
//                 setCampaigns(data);
//             } catch (error) {
//                 console.error('Error fetching campaigns:', error);
//             }
//         };

//         fetchCampaigns();
//     }, []);

//     return (
//         <div className="container mx-auto my-8">
//             <h2 className="text-2xl font-bold text-center mb-6">Running Campaigns: {campaigns.length}</h2>
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//                 {campaigns.map((campaign) => (
//                     <div key={campaign._id} className="shadow-lg rounded-lg p-4 bg-white">
//                         <img src={campaign.image} alt={campaign.title} className="rounded-lg mb-4" />
//                         <h3 className="text-lg font-bold mb-2">{campaign.title}</h3>
//                         <p className="text-gray-600 mb-4">{campaign.description.slice(0, 100)}...</p>
//                         <p className="text-sm text-gray-500">Deadline: {new Date(campaign.deadline).toLocaleDateString()}</p>
//                         <Link
//                             to={`/campaign/${campaign._id}`}
//                             className="inline-block mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
//                         >
//                             See More
//                         </Link>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default RunningCampaigns;
