import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import DonationCard from "./DonationCard";
import { Helmet } from "react-helmet-async";

const MyDonations = () => {
    const { user } = useContext(AuthContext);
    const [myDonations, setMyDonations] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUserDonations = async () => {
            if (user?.email) {
                try {
                    const response = await fetch(`https://mw-assignments10-server.vercel.app/myDonations`);
                    const data = await response.json();
                    const userDonations = data.filter((donation) => donation.userEmail === user.email);
                    setMyDonations(userDonations);
                } catch (error) {
                    console.error("Error fetching donations:", error);
                } finally {
                    setLoading(false);
                }
            }
        };
        fetchUserDonations();
    }, [user?.email]);

    return (
        <div className="container mx-auto px-4 mt-14 mb-20">
            {/* Helmet */}
            <Helmet>
                <title>My Donations | CrowdCube</title>
            </Helmet>

            <h2 className="text-3xl md:text-4xl text-purple-700 font-bold text-center mb-12">My Donations</h2>
            {loading ? (
                <div className="flex justify-center items-center min-h-screen">
                    <span className="loading loading-bars loading-lg"></span>
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 lg:gap-10">
                    {myDonations.length > 0 ? (
                        myDonations.map((donation) => (
                            <DonationCard key={donation._id} donation={donation} />
                        ))
                    ) : (
                        <p className="text-center text-gray-600">You have no donations yet.</p>
                    )}
                </div>
            )}
        </div>
    );
};

export default MyDonations;
