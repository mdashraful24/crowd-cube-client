const SuccessStories = () => {
    const categories = [
        {
            name: "Medical Expenses",
            description: "Support individuals in need of urgent medical care.",
            icon: "🩺",
        },
        {
            name: "Creative Ideas",
            description: "Back creative projects like films, apps, and more.",
            icon: "🎨",
        },
        {
            name: "Startups",
            description: "Help innovative startups bring new products to life.",
            icon: "🚀",
        },
    ];

    return (
        <section className="py-12 bg-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center mb-8">Explore Categories</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {categories.map((category, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg text-center"
                        >
                            <div className="text-5xl mb-4">{category.icon}</div>
                            <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
                            <p className="text-gray-600">{category.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SuccessStories;
