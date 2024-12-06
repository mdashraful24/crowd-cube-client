import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const AllCampaigns = () => {
    const [info, setInfo] = useState([]);
    const [loading, setLoading] = useState(true);

    // Data load
    useEffect(() => {
        fetch("http://localhost:5000/campaigns/sortedByDonation")
            .then((res) => res.json())
            .then((data) => {
                setInfo(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching campaigns:", error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <span className="loading loading-bars loading-lg"></span>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-14 mb-20">
            {/* Helmet */}
            <Helmet>
                <title>All Campaigns | CrowdCube</title>
            </Helmet>

            <h2 className="text-3xl md:text-4xl text-[#5c0c9e] font-bold text-center mb-10">All Campaigns</h2>
            <div className="overflow-x-auto">
                <table className="min-w-full border border-gray-400 rounded-lg">
                    <thead className="border-b border-gray-400">
                        <tr className="uppercase tracking-wider">
                            <th className="px-6 py-3">
                                No.
                            </th>
                            <th className="px-6 py-3">
                                Title
                            </th>
                            <th className="px-6 py-3">
                                Type
                            </th>
                            <th className="px-6 py-3">
                                Min Donation
                            </th>
                            <th className="px-6 py-3">
                                Deadline
                            </th>
                            {/* <th className="px-6 py-3">
                                User Mail
                            </th> */}
                            <th className="px-6 py-3">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {info?.map((data, index) => (
                            <tr key={data._id} className="hover:bg-stone-100 hover:text-slate-900 border-b border-gray-400">
                                <td className="px-6 py-4 text-center">{index + 1}</td>
                                <td className="px-6 py-4 text-center">{data.title}</td>
                                <td className="px-6 py-4 text-center">{data.type}</td>
                                <td className="px-6 py-4 text-center">${data.minDonation}</td>
                                <td className="px-6 py-4 text-center">{data.deadline}</td>
                                {/* <td className="px-6 py-4 text-center">{data.userEmail}</td> */}
                                <td>
                                    <div className="text-center">
                                        <Link to={`/campaign/${data._id}`}>
                                            <td className="lg:px-6 py-4">
                                                <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 hover:scale-105 transition-all duration-300">
                                                    See More
                                                </button>
                                            </td>
                                        </Link>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllCampaigns;
