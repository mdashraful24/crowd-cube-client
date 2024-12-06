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
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "campaigns",
                element: <AllCampaigns></AllCampaigns>
            },
            {
                path: "addCampaign",
                element: <PrivateRoute>
                    <AddNewCampaign></AddNewCampaign>
                </PrivateRoute>,
                loader: () => fetch('https://mw-assignments10-server.vercel.app/users')
            },
            {
                path: "myCampaign",
                element: <PrivateRoute>
                    <MyCampaigns></MyCampaigns>
                </PrivateRoute>
            },
            {
                path: "myDonations",
                element: <PrivateRoute>
                    <MyDonations></MyDonations>
                </PrivateRoute>
            },
            {
                path: "login",
                element: <Login></Login>
            },
            {
                path: "register",
                element: <Register></Register>
            },
            {
                path: "campaign/:id",
                element: <PrivateRoute>
                    <DetailsPage></DetailsPage>
                </PrivateRoute>,
                loader: ({ params }) => fetch(`https://mw-assignments10-server.vercel.app/running/${params.id}`)
            },
            {
                path: "updateCampaign/:id",
                element: <PrivateRoute>
                    <UpdateCampaign></UpdateCampaign>
                </PrivateRoute>,
                loader: ({ params }) => fetch(`https://mw-assignments10-server.vercel.app/addCampaign/${params.id}`)
            }
        ],
    },
    {
        path: "*",
        element: <ErrorPage></ErrorPage>,
    },
]);

export default router;