import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import HowItWorks from "./HowItWorks";
import RunningCampaigns from "./RunningCampaigns";
import SuccessStories from "./SuccessStories";

const Home = () => {

    return (
        <div>
            {/* Helmet */}
            <Helmet>
                <title>Home | CrowdCube</title>
            </Helmet>

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
