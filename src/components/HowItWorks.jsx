import peer from '../../src/assets/peer.jpeg'
import equity from '../../src/assets/equity.jpg'
import reward from '../../src/assets/reward.jpg'

const HowItWorks = () => {
    return (
        <section className="px-3">
            <div className="container mx-auto py-8 md:px-8 px-4 border border-[#5c0c9e] rounded-xl">
                <h2 className="text-3xl md:text-4xl text-[#5c0c9e] font-bold text-center mb-8">How CrowdCube Works??</h2>
                <div className="text-lg mb-6 text-justify space-y-3">
                    <p>
                        <span className="text-[#5c0c9e] text-xl font-bold">CrowdCube</span> platforms are online platforms that facilitate interactions between fundraisers and the crowd, allowing individuals and organizations to raise money for various causes or projects. Through these platforms, supporters can make financial contributions, helping fundraisers reach their goals.
                    </p>
                    <p>
                        Typically, crowdfunding platforms charge a fee when a fundraising campaign successfully reaches its target. In exchange, these platforms offer a secure, user-friendly service to ensure the process is smooth for both fundraisers and backers.
                    </p>
                    <p>
                        Many platforms adopt an all-or-nothing funding model. Under this system, if the fundraiser reaches its target, they receive the pledged funds. However, if the goal is not met, all backers get their money refunded, ensuring no financial risk for supporters.
                    </p>
                </div>
                <h3 className="text-2xl font-semibold text-center mb-6">
                    Types of Crowdfunding
                </h3>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="relative">
                        <img
                            src={peer}
                            alt="Impact"
                            className="w-full  rounded-xl"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center text-center px-4 rounded-xl">
                            <div>
                                <h3 className="text-2xl font-semibold mb-2 text-white">
                                    Peer-to-Peer Crowdfunding
                                </h3>
                                <p className='text-white'>
                                    In this model, individuals lend money to fundraisers or small businesses with the expectation of being repaid with interest.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        <img
                            src={equity}
                            alt="Impact"
                            className="w-full rounded-xl"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center text-center px-4 rounded-xl">
                            <div>
                                <h3 className="text-2xl font-semibold mb-2 text-white">
                                    Equity Crowdfunding
                                </h3>
                                <p className='text-white'>
                                    Here, investors contribute funds in exchange for equity (shares) in the company or project, enabling them to share in the business's growth and potential profits.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        <img
                            src={reward}
                            alt="Impact"
                            className="w-full md:h-96 lg:h-40 rounded-xl"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center text-center px-4 rounded-xl">
                            <div>
                                <h3 className="text-2xl font-semibold mb-2 text-white">
                                    Rewards Crowdfunding
                                </h3>
                                <p className='text-gray-200'>
                                    Backers contribute to a campaign in exchange for rewards or products, often before the actual product is made, which helps the fundraiser gauge interest and secure necessary funding.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;

