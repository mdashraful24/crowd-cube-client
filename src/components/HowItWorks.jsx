// import React from "react";

// const HowItWorks = () => {
//     const steps = [
//         {
//             icon: "🎯",
//             title: "Start a Campaign",
//             description: "Create a compelling campaign with your funding goal and share your story.",
//         },
//         {
//             icon: "🤝",
//             title: "Share with Community",
//             description: "Promote your campaign to reach potential backers who share your vision.",
//         },
//         {
//             icon: "🎉",
//             title: "Reach Your Goal",
//             description: "Receive the funds to make your dream a reality and keep backers updated.",
//         },
//     ];

//     return (
//         <section className="py-12">
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                 <h2 className="text-3xl font-bold text-center mb-8">How It Works</h2>
//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//                     {steps.map((step, index) => (
//                         <div key={index} className="text-center p-6 shadow-lg rounded-lg">
//                             <div className="text-blue-500 text-6xl mb-4">{step.icon}</div>
//                             <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
//                             <p className="text-gray-600">{step.description}</p>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default HowItWorks;




const HowItWorks = () => {
    return (
        <section className="py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center mb-8">How Crowdfunding Works</h2>
                <div className="text-lg text-gray-700 mb-6">
                    <p>
                        **Crowdfunding platforms** are online platforms that facilitate interactions between fundraisers and the crowd, allowing individuals and organizations to raise money for various causes or projects. Through these platforms, supporters can make financial contributions, helping fundraisers reach their goals.
                    </p>
                    <p>
                        Typically, **crowdfunding platforms** charge a fee when a fundraising campaign successfully reaches its target. In exchange, these platforms offer a secure, user-friendly service to ensure the process is smooth for both fundraisers and backers.
                    </p>
                    <p>
                        Many platforms adopt an **all-or-nothing** funding model. Under this system, if the fundraiser reaches its target, they receive the pledged funds. However, if the goal is not met, all backers get their money refunded, ensuring no financial risk for supporters.
                    </p>
                </div>
                <h3 className="text-2xl font-semibold text-center mb-6">
                    Types of Crowdfunding
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="text-center p-6 shadow-lg rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:animate-jump border">
                        <h4 className="text-xl font-semibold mb-2">Peer-to-Peer Crowdfunding</h4>
                        <p className="text-gray-600">
                            In this model, individuals lend money to fundraisers or small businesses with the expectation of being repaid with interest.
                        </p>
                    </div>
                    <div className="text-center p-6 shadow-lg rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:animate-jump border">
                        <h4 className="text-xl font-semibold mb-2">Equity Crowdfunding</h4>
                        <p className="text-gray-600">
                            Here, investors contribute funds in exchange for equity (shares) in the company or project, enabling them to share in the business's growth and potential profits.
                        </p>
                    </div>
                    <div className="text-center p-6 shadow-lg rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:animate-jump border">
                        <h4 className="text-xl font-semibold mb-2">Rewards Crowdfunding</h4>
                        <p className="text-gray-600">
                            Backers contribute to a campaign in exchange for rewards or products, often before the actual product is made, which helps the fundraiser gauge interest and secure necessary funding.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;

