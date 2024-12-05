import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyCampaigns = () => {
    const [myCampaigns, setMyCampaigns] = useState([]);
    const [loading, setLoading] = useState(true); // State to track loading

    // Data load
    useEffect(() => {
        fetch("http://localhost:5000/addCampaign")
            .then((res) => res.json())
            .then((data) => {
                setMyCampaigns(data);
                setLoading(false); // Set loading to false after data is fetched
            })
            .catch((error) => {
                console.error("Error fetching campaigns:", error);
                setLoading(false); // Stop loading even if there's an error
            });
    }, []);

    const handleDelete = (_id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/addCampaign/${_id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your campaign has been deleted.",
                                icon: "success"
                            });
                            const remaining = myCampaigns.filter(myCam => myCam._id !== _id);
                            setMyCampaigns(remaining);
                        }
                    });
            }
        });
    }

    if (loading) {
        // Show a spinner when data is loading
        return (
            <div className="flex justify-center items-center min-h-screen">
                <span className="loading loading-bars loading-lg"></span>
            </div>
        );
    }

    return (
        <div className="container mx-auto my-8 px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-center mb-6">My Campaigns</h2>
            <div className="overflow-x-auto">
                <table className="min-w-full table-auto border bg-white shadow-lg">
                    <thead>
                        <tr className="border-b">
                            <th className="p-4 text-center">No.</th>
                            <th className="p-4 text-center">Campaign Title</th>
                            <th className="p-4 text-center">Campaign Type</th>
                            <th className="p-4 text-center">Min Donation</th>
                            <th className="p-4 text-center">Deadline</th>
                            <th className="p-4 text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {myCampaigns?.map((myCampaign, index) => (
                            <tr key={myCampaign._id} className="border-b hover:bg-gray-100">
                                <td className="px-6 py-4 text-sm text-gray-700 text-center">{index + 1}</td>
                                <td className="p-4 text-center">{myCampaign.title}</td>
                                <td className="p-4 text-center">{myCampaign.type}</td>
                                <td className="p-4 text-center">${myCampaign.minDonation}</td>
                                <td className="p-4 text-center">{myCampaign.deadline}</td>
                                <td className="p-4 lg:pr-0 text-center">
                                    <div className="flex flex-row justify-center items-center gap-3">
                                        <Link to={`/updateCampaign/${myCampaign._id}`}>
                                            <button
                                                className="px-3 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 hover:scale-105 transition-all duration-300"
                                            >
                                                Update
                                            </button>
                                        </Link>
                                        <button
                                            className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-blue-300 hover:scale-105 transition-all duration-300"
                                            onClick={() => handleDelete(myCampaign._id)}
                                        >
                                            Delete
                                        </button>
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

export default MyCampaigns;















// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import Swal from "sweetalert2";

// const MyCampaigns = () => {
//     const [myCampaigns, setMyCampaigns] = useState([]);

//     // Data load
//     useEffect(() => {
//         fetch("http://localhost:5000/addCampaign")
//             .then((res) => res.json())
//             .then((data) => {
//                 // console.log(data);
//                 setMyCampaigns(data);
//             })
//     }, []);

//     const handleDelete = (_id) => {
//         // console.log(_id);
//         Swal.fire({
//             title: "Are you sure?",
//             text: "You won't be able to revert this!",
//             icon: "warning",
//             showCancelButton: true,
//             confirmButtonColor: "#3085d6",
//             cancelButtonColor: "#d33",
//             confirmButtonText: "Yes, delete it!"
//         }).then((result) => {
//             if (result.isConfirmed) {
//                 fetch(`http://localhost:5000/addCampaign/${_id}`, {
//                     method: "DELETE"
//                 })
//                 .then(res => res.json())
//                 .then(data => {
//                     // console.log(data);
//                     if(data.deletedCount > 0){
//                         Swal.fire({
//                             title: "Deleted!",
//                             text: "Your Champaign has been deleted.",
//                             icon: "success"
//                         });
//                         const remaining = myCampaigns.filter(myCam => myCam._id !== _id);
//                         setMyCampaigns(remaining);
//                     }
//                 })

//             }
//         });
//     }

//     return (
//         <div className="container mx-auto my-8 px-4 sm:px-6 lg:px-8">
//             <h2 className="text-2xl font-bold text-center mb-6">My Campaigns</h2>
//             <div className="overflow-x-auto">
//                 <table className="min-w-full table-auto border bg-white shadow-lg">
//                     <thead>
//                         <tr className="border-b">
//                             <th className="p-4 text-center">No.</th>
//                             <th className="p-4 text-center">Campaign Title</th>
//                             <th className="p-4 text-center">Campaign Type</th>
//                             <th className="p-4 text-center">Min Donation</th>
//                             <th className="p-4 text-center">Deadline</th>
//                             <th className="p-4 text-center">Actions</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {myCampaigns?.map((myCampaign, index) => (
//                             <tr key={myCampaign._id} className="border-b hover:bg-gray-100">
//                                 <td className="px-6 py-4 text-sm text-gray-700 text-center">{index + 1}</td>
//                                 <td className="p-4 text-center">{myCampaign.title}</td>
//                                 <td className="p-4 text-center">{myCampaign.type}</td>
//                                 <td className="p-4 text-center">${myCampaign.minDonation}</td>
//                                 <td className="p-4 text-center">{myCampaign.deadline}</td>
//                                 <td className="p-4 lg:pr-0 text-center">
//                                     <div className="flex flex-row justify-center items-center gap-3">
//                                         <Link to={`/updateCampaign/${myCampaign._id}`}>
//                                             <button
//                                                 className="px-3 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 hover:scale-105 transition-all duration-300"
//                                             >
//                                                 Update
//                                             </button>
//                                         </Link>
//                                         <button
//                                             className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-blue-300 hover:scale-105 transition-all duration-300"
//                                             onClick={() => handleDelete(myCampaign._id)}
//                                         >
//                                             Delete
//                                         </button>
//                                     </div>
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     );
// };

// export default MyCampaigns;
