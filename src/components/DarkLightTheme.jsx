import { useState, useEffect } from "react";
import { IoMoonSharp } from "react-icons/io5";
import { MdWbSunny } from "react-icons/md";

const DarkLightTheme = () => {
    const [isDarkTheme, setIsDarkTheme] = useState(false);

    useEffect(() => {
        const selectedByTheme = localStorage.getItem("selectedTheme");
        if (selectedByTheme === "dark") {
            document.body.setAttribute("data-theme", "dark");
            setIsDarkTheme(true);
        } else {
            document.body.setAttribute("data-theme", "light");
            setIsDarkTheme(false);
        }
    }, []);

    const toggleTheThemes = () => {
        if (isDarkTheme) {
            // Light mode
            document.body.setAttribute("data-theme", "light");
            localStorage.setItem("selectedTheme", "light");
            setIsDarkTheme(false);
        } else {
            // Dark mode
            document.body.setAttribute("data-theme", "dark");
            localStorage.setItem("selectedTheme", "dark");
            setIsDarkTheme(true);
        }
    };

    return (
        <div className="dark_mode">
            <button onClick={toggleTheThemes} className="mt-1.5">
                {isDarkTheme ? <MdWbSunny className="text-yellow-500 w-6 h-6 lg:w-8 lg:h-8 hover:bg-gray-50 p-1 rounded-full" /> : <IoMoonSharp className="w-6 h-6 lg:w-8 lg:h-8 hover:bg-gray-200 p-1 rounded-full"/>}
            </button>
        </div>
    );
};

export default DarkLightTheme;
