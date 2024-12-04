import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import HowItWorks from "./HowItWorks";
import RunningCampaigns from "./RunningCampaigns";
import SuccessStories from "./SuccessStories";

const Home = () => {

    const runningCampaigns = useLoaderData();

    return (
        <div>
            {/* Banner */}
            <Banner></Banner>

            {/* Running Campaign */}
            <h2 className="text-center">Running Campaign: {runningCampaigns.length}</h2>
            <div className="container mx-auto grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-5">
                {
                    runningCampaigns.map(runningCampaign => <RunningCampaigns
                        key={runningCampaign._id}
                        runningCampaign={runningCampaign}
                    ></RunningCampaigns>)
                }
            </div>

            {/* HowItWork */}
            <HowItWorks></HowItWorks>

            {/* Stories */}
            <SuccessStories></SuccessStories>
        </div>
    );
};

export default Home;