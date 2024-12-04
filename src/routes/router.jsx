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
import DetailsPage from "../pages/DetailsPage";
import UpdateCampaign from "../components/UpdateCampaign";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/addCampaign')
            },
            {
                path: "campaigns",
                element: <AllCampaigns></AllCampaigns>,
            },
            {
                path: "addCampaign",
                element: <AddNewCampaign></AddNewCampaign>,
                loader: () => fetch('http://localhost:5000/users')
            },
            {
                path: "myCampaign",
                element: <MyCampaigns></MyCampaigns>
            },
            {
                path: "myDonations",
                element: <MyDonations></MyDonations>
            },
            {
                path: "login",
                element: <Login></Login>
            },
            {
                path: "register",
                element: <Register></Register>
            },
            // {
            //     path: "/campaign/:id",
            //     element: <DetailsPage></DetailsPage>
            // },
            {
                path: "updateCampaign/:id",
                element: <UpdateCampaign></UpdateCampaign>,
                loader: ({ params }) => fetch(`http://localhost:5000/addCampaign/${params.id}`)
            }
        ],
    },
    {
        path: "*",
        element: <ErrorPage></ErrorPage>,
    },
]);

export default router;