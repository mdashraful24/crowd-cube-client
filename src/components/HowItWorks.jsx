import React from "react";

const HowItWorks = () => {
    const steps = [
        {
            icon: "🎯",
            title: "Start a Campaign",
            description: "Create a compelling campaign with your funding goal and share your story.",
        },
        {
            icon: "🤝",
            title: "Share with Community",
            description: "Promote your campaign to reach potential backers who share your vision.",
        },
        {
            icon: "🎉",
            title: "Reach Your Goal",
            description: "Receive the funds to make your dream a reality and keep backers updated.",
        },
    ];

    return (
        <section className="bg-gray-100 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center mb-8">How It Works</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {steps.map((step, index) => (
                        <div key={index} className="text-center bg-white p-6 shadow-lg rounded-lg">
                            <div className="text-blue-500 text-6xl mb-4">{step.icon}</div>
                            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                            <p className="text-gray-600">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
