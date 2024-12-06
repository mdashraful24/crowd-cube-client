import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import DonationCard from "./DonationCard";
import { Helmet } from "react-helmet-async";

// Component to display individual donation card
// const DonationCard = ({ donation }) => {
//     const {
//         _id,
//         image,
//         title,
//         type,
//         description,
//         minDonation,
//         deadline,
//         userName,
//     } = donation;

//     return (
//         <div
//             key={_id}
//             className="border rounded-lg shadow-lg p-4 hover:shadow-xl"
//         >
//             {/* Donation Image */}
//             <img
//                 src={image}
//                 alt={title}
//                 className="w-full h-48 object-cover rounded-t-lg mb-4"
//             />
//             {/* Donation Details */}
//             <h3 className="text-xl font-semibold mb-2">{title}</h3>
//             <p className="text-sm text-gray-600 mb-2">
//                 <strong>Type:</strong> {type}
//             </p>
//             <p className="text-sm text-gray-600 mb-2">
//                 <strong>Description:</strong> {description}
//             </p>
//             <p className="text-sm text-gray-600 mb-2">
//                 <strong>Min Donation:</strong> ${minDonation}
//             </p>
//             <p className="text-sm text-gray-600 mb-2">
//                 <strong>Deadline:</strong>{" "}
//                 {new Date(deadline).toLocaleDateString()}
//             </p>
//             <p className="text-sm text-gray-600">
//                 <strong>Donor Name:</strong> {userName}
//             </p>
//         </div>
//     );
// };

// Main component
// const MyDonations = () => {
//     const { user } = useContext(AuthContext);
//     const [myDonations, setMyDonations] = useState([]);

//     useEffect(() => {
//         const fetchUserDonations = async () => {
//             if (user?.email) {
//                 try {
//                     const response = await fetch(
//                         `http://localhost:5000/myDonations`
//                     );
//                     const data = await response.json();
//                     const userDonations = data.filter(
//                         (donation) => donation.userEmail === user.email
//                     );
//                     setMyDonations(userDonations);
//                 } catch (error) {
//                     console.error("Error fetching donations:", error);
//                 }
//             }
//         };

//         fetchUserDonations();
//     }, [user?.email]);

//     return (
//         <div className="container mx-auto px-4 py-8">
//             <h2 className="text-3xl font-bold text-center mb-8">
//                 My Donations
//             </h2>
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//                 {myDonations.length > 0 ? (
//                     myDonations.map((donation) => (
//                         <DonationCard key={donation._id} donation={donation} />
//                     ))
//                 ) : (
//                     <p className="text-center text-gray-600">
//                         You have no donations yet.
//                     </p>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default MyDonations;



const MyDonations = () => {
    const { user } = useContext(AuthContext);
    const [myDonations, setMyDonations] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUserDonations = async () => {
            if (user?.email) {
                try {
                    const response = await fetch(`http://localhost:5000/myDonations`);
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

            <h2 className="text-3xl md:text-4xl text-[#5c0c9e] font-bold text-center mb-12">My Donations</h2>
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
