import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const AllCampaigns = () => {
    const [info, setInfo] = useState([]);
    const [loading, setLoading] = useState(true);
    const [sortAmounts, setSortAmounts] = useState("asc");

    const sortDonationAmounts = (order = "asc") => {
        setLoading(true);
        fetch("http://localhost:5000/campaigns/sortedByDonation")
            .then((res) => res.json())
            .then((data) => {
                const sortedData = [...data].sort((a, b) =>
                    order === "asc"
                        ? parseFloat(a.minDonation) - parseFloat(b.minDonation)
                        : parseFloat(b.minDonation) - parseFloat(a.minDonation)
                );
                setInfo(sortedData);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching campaigns:", error);
                setLoading(false);
            });
    };
    useEffect(() => {
        sortDonationAmounts();
    }, []);

    const sortBtnToggle = () => {
        const newOrder = sortAmounts === "asc" ? "desc" : "asc";
        setSortAmounts(newOrder);
        sortDonationAmounts(newOrder);
    };

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
                <title>All Campaign | CrowdCube</title>
            </Helmet>

            <h2 className="text-3xl md:text-4xl text-purple-700 font-bold text-center mb-10">All Campaigns</h2>
            {/* Sort Button */}
            <div className="flex justify-center mb-8">
                <button
                    onClick={sortBtnToggle}
                    className="px-6 py-2 bg-purple-900 text-white rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-300 transition-all duration-300"
                >
                    Sort Donation Amount: {sortAmounts === "asc" ? "Ascending" : "Descending"}
                </button>
            </div>
            {/* Campaigns Table */}
            <div className="overflow-x-auto">
                <table className="min-w-full border border-gray-400 rounded-lg">
                    <thead className="border-b border-gray-400">
                        <tr className="uppercase tracking-wider">
                            <th className="px-6 py-3">No.</th>
                            <th className="px-6 py-3">Title</th>
                            <th className="px-6 py-3">Type</th>
                            <th className="px-6 py-3">Min Donation</th>
                            <th className="px-6 py-3">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {info?.map((data, index) => (
                            <tr
                                key={data._id}
                                className="hover:bg-stone-100 hover:text-slate-900 border-b border-gray-400"
                            >
                                <td className="px-6 py-4 text-center">{index + 1}</td>
                                <td className="px-6 py-4 text-center">{data.title}</td>
                                <td className="px-6 py-4 text-center capitalize">{data.type}</td>
                                <td className="px-6 py-4 text-center">${data.minDonation}</td>
                                <td>
                                    <div className="text-center">
                                        <Link to={`/campaign/${data._id}`}>
                                            <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 hover:scale-105 transition-all duration-300">
                                                See More
                                            </button>
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
