const DonationCard = ({ donation }) => {
    const { image, title, type, description, minDonation, deadline, userName } = donation;

    return (
        <div className="border rounded-lg shadow-lg p-4 hover:shadow-xl">
            <img src={image} alt={title} className="w-full h-48 object-cover rounded-t-lg mb-4" />
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-sm text-gray-600 mb-2"><strong>Type:</strong> {type}</p>
            <p className="text-sm text-gray-600 mb-2"><strong>Description:</strong> {description}</p>
            <p className="text-sm text-gray-600 mb-2"><strong>Min Donation:</strong> ${minDonation}</p>
            <p className="text-sm text-gray-600 mb-2"><strong>Deadline:</strong> {new Date(deadline).toLocaleDateString()}</p>
            <p className="text-sm text-gray-600"><strong>Donor Name:</strong> {userName}</p>
        </div>
    );
};

export default DonationCard;