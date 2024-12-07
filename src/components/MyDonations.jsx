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
                    setLoading(false);
                } catch (error) {
                    console.error("Error fetching donations:", error);
                    setLoading(false);
                }
            }
        };
        fetchUserDonations();
    }, [user?.email]);

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <span className="loading loading-bars loading-lg"></span>
            </div>
        );
    }

    return (
        <div className="px-4 mt-10 md:mt-14 mb-20 min-h-80">
            <div className="container mx-auto">
                {/* Helmet */}
                <Helmet>
                    <title>My Donations | CrowdCube</title>
                </Helmet>

                <h2 className="text-3xl md:text-4xl text-purple-700 font-bold text-center mb-7 md:mb-10">My Donations</h2>
                {myDonations.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-7">
                        {myDonations.map((donation) => (
                            <DonationCard key={donation._id} donation={donation} />
                        ))}
                    </div>
                ) : (
                    <p className="text-center text-gray-600">You have no donations yet.</p>
                )}
            </div>
        </div>
    );
};

export default MyDonations;
