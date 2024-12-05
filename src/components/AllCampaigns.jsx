import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllCampaigns = () => {
    const [info, setInfo] = useState([]);

    // Data load
    useEffect(() => {
        fetch("http://localhost:5000/campaigns/sortedByDonation")
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setInfo(data);
            });
    }, []);

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 my-10">
            <h2 className="text-2xl font-bold text-center mb-6">All Campaigns: </h2>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                    <thead className="bg-gray-100 border-b">
                        <tr>
                            <th className="px-6 py-3 text-sm font-medium text-gray-500 uppercase tracking-wider">
                                No.
                            </th>
                            <th className="px-6 py-3 text-sm font-medium text-gray-500 uppercase tracking-wider">
                                Title
                            </th>
                            <th className="px-6 py-3 text-sm font-medium text-gray-500 uppercase tracking-wider">
                                Type
                            </th>
                            <th className="px-6 py-3 text-sm font-medium text-gray-500 uppercase tracking-wider">
                                Min Donation
                            </th>
                            <th className="px-6 py-3 text-sm font-medium text-gray-500 uppercase tracking-wider">
                                Deadline
                            </th>
                            <th className="px-6 py-3 text-sm font-medium text-gray-500 uppercase tracking-wider">
                                User Mail
                            </th>
                            <th className="px-6 py-3 text-sm font-medium text-gray-500 uppercase tracking-wider">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {info?.map((data, index) => (
                            <tr key={data._id} className="hover:bg-gray-50 border-b">
                                <td className="px-6 py-4 text-center text-sm text-gray-700">{index + 1}</td>
                                <td className="px-6 py-4 text-center text-sm text-gray-700">{data.title}</td>
                                <td className="px-6 py-4 text-center text-sm text-gray-700">{data.type}</td>
                                <td className="px-6 py-4 text-center text-sm text-gray-700">${data.minDonation}</td>
                                <td className="px-6 py-4 text-center text-sm text-gray-700">{data.deadline}</td>
                                <td className="px-6 py-4 text-center text-sm text-gray-700">{data.userEmail}</td>
                                <div className="text-center">
                                    <Link to={`/campaign/${data._id}`}>
                                        <td className="lg:px-6 py-4 text-sm text-gray-700">
                                            <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 hover:scale-105 transition-all duration-300">
                                                See More
                                            </button>
                                        </td>
                                    </Link>
                                </div>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllCampaigns;
