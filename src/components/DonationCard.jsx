const DonationCard = ({ donation }) => {
    const { image, title, type, description, minDonation, deadline, userName, userEmail } = donation;

    return (
        <div className="border rounded-lg shadow-lg p-4 hover:shadow-xl">
            <img src={image} alt={title} className="w-full h-72 rounded-lg mb-4" />
            <h3 className="text-xl md:text-2xl font-semibold mb-2">{title}</h3>
            <p className="mb-2"><strong>Description:</strong> {description}</p>
            <p className="mb-2 capitalize"><strong>Type:</strong> {type}</p>
            <p className="mb-2"><strong>Min Donation:</strong> ${minDonation}</p>
            <p className="mb-2"><strong>Deadline:</strong> {new Date(deadline).toLocaleDateString()}</p>
            <p className="mb-2"><strong>Donor Name:</strong> {userName}</p>
            <p><strong>Donor Mail:</strong> {userEmail}</p>
        </div>
    );
};

export default DonationCard;