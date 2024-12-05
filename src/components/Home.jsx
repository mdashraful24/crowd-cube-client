import Banner from "./Banner";
import HowItWorks from "./HowItWorks";
import RunningCampaigns from "./RunningCampaigns";
import SuccessStories from "./SuccessStories";

const Home = () => {

    return (
        <div>
            {/* Banner */}
            <Banner></Banner>

            {/* Running Campaign */}
            <RunningCampaigns></RunningCampaigns>

            {/* HowItWork */}
            <HowItWorks></HowItWorks>

            {/* Stories */}
            <SuccessStories></SuccessStories>
        </div>
    );
};

export default Home;




// import { useState, useEffect } from "react";
// import { useLoaderData } from "react-router-dom";
// import Banner from "./Banner";
// import HowItWorks from "./HowItWorks";
// import RunningCampaigns from "./RunningCampaigns";
// import SuccessStories from "./SuccessStories";

// const Home = () => {
//     const runningCampaigns = useLoaderData();
//     const [isDarkMode, setIsDarkMode] = useState(false);

//     // Check localStorage for theme preference
//     useEffect(() => {
//         const savedTheme = localStorage.getItem("theme");
//         if (savedTheme) {
//             setIsDarkMode(savedTheme === "dark");
//         }
//     }, []);

//     // Toggle theme and save it to localStorage
//     const toggleTheme = () => {
//         setIsDarkMode((prev) => !prev);
//     };

//     useEffect(() => {
//         // Apply theme to the body element
//         if (isDarkMode) {
//             document.body.classList.add("dark");
//             localStorage.setItem("theme", "dark");
//         } else {
//             document.body.classList.remove("dark");
//             localStorage.setItem("theme", "light");
//         }
//     }, [isDarkMode]);

//     return (
//         <div className={`${isDarkMode ? "bg-gray-900 text-white" : "bg-white text-black"} transition-all`}>
//             {/* Theme Toggle Button */}
//             <button
//                 onClick={toggleTheme}
//                 className="absolute top-4 right-4 p-2 rounded-md bg-gray-200 dark:bg-gray-700 text-black dark:text-white"
//             >
//                 {isDarkMode ? "Light Mode" : "Dark Mode"}
//             </button>

//             {/* Banner */}
//             <Banner />

//             {/* Running Campaign */}
//             <RunningCampaigns />

//             {/* HowItWorks */}
//             <HowItWorks />

//             {/* Stories */}
//             <SuccessStories />
//         </div>
//     );
// };

// export default Home;
