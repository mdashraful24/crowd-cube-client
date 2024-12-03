import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../components/Home";
import ErrorPage from "../components/ErrorPage";
import AllCampaigns from "../components/AllCampaigns";
import AddNewCampaign from "../components/AddNewCampaign";
import MyCampaigns from "../components/MyCampaigns";
import MyDonations from "../components/MyDonations";
import Login from "../pages/Login";
import Register from "../pages/Register";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "campaigns",
                element: <AllCampaigns></AllCampaigns>,
            },
            {
                path: "add-campaign",
                element: <AddNewCampaign></AddNewCampaign>
            },
            {
                path: "my-campaigns",
                element: <MyCampaigns></MyCampaigns>
            },
            {
                path: "my-donations",
                element: <MyDonations></MyDonations>
            },
            {
                path: "login",
                element: <Login></Login>
            },
            {
                path: "register",
                element: <Register></Register>
            }
        ],
    },
    {
        path: "*",
        element: <ErrorPage></ErrorPage>,
    },
]);

export default router;