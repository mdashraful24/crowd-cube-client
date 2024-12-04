import { useEffect, useState } from "react";

const AllCampaigns = () => {
    const [info, setInfo] = useState([]);

    // Data load
    useEffect(() => {
        fetch("http://localhost:5000/addCampaign")
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
                            <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                                No.
                            </th>
                            <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                                Title
                            </th>
                            <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                                Type
                            </th>
                            <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                                Min Donation
                            </th>
                            <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                                Deadline
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {info?.map((data, index) => (
                            <tr key={data._id} className="hover:bg-gray-50 border-b">
                                <td className="px-6 py-4 text-sm text-gray-700">{index + 1}</td>
                                <td className="px-6 py-4 text-sm text-gray-700">{data.title}</td>
                                <td className="px-6 py-4 text-sm text-gray-700">{data.type}</td>
                                <td className="px-6 py-4 text-sm text-gray-700">${data.minDonation}</td>
                                <td className="px-6 py-4 text-sm text-gray-700">{data.deadline}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllCampaigns;
