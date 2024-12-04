import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";

const MyDonations = () => {
    const { user } = useContext(AuthContext);
    const [donations, setDonations] = useState([]);

    useEffect(() => {
        // Fetch only the current user's donations
        fetch(`http://localhost:5000/donations?email=${user?.email}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setDonations(data);
            })
            .catch((err) => console.error(err));
    }, [user?.email]);

    return (
        <div className="container mx-auto my-8 px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-8">My Donations</h2>
            {donations.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {donations.map((donation) => (
                        <div
                            key={donation._id}
                            className="bg-white shadow-lg rounded-lg p-4 border"
                        >
                            <img
                                src={donation.image}
                                alt={donation.title}
                                className="h-48 w-full object-cover rounded-lg mb-4"
                            />
                            <h3 className="text-xl font-semibold mb-2">
                                {donation.title}
                            </h3>
                            <p className="text-gray-700 mb-4">
                                {donation.description?.slice(0, 100)}...
                            </p>
                            <p className="text-gray-800 font-medium">
                                Min Donation: ${donation.minDonation}
                            </p>
                            <p className="text-gray-500">Deadline: {donation.deadline}</p>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-center text-gray-500">No donations found.</p>
            )}
        </div>
    );
};

export default MyDonations;
