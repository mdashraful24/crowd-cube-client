import Banner from "./Banner";
import HowItWorks from "./HowItWorks";
import SuccessStories from "./SuccessStories";

const Home = () => {
    return (
        <div>
            {/* Banner */}
            <Banner></Banner>

            {/* HowItWork */}
            <HowItWorks></HowItWorks>

            {/* Stories */}
            <SuccessStories></SuccessStories>
        </div>
    );
};

export default Home;