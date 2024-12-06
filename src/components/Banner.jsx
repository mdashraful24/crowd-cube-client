import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import image1 from "../../src/assets/crowdfunding.jpg";
import image2 from "../../src/assets/support.jpg";
import image3 from "../../src/assets/impact.jpg";

const Banner = () => {
    return (
        <div className="container mx-auto mt-16 px-5">
            <Carousel
                infiniteLoop
                useKeyboardArrows
                autoPlay
                showThumbs={false}
                showStatus={false}
                showIndicators={true}
                dynamicHeight={false}
                swipeable
                emulateTouch
                interval={3000}
                transitionTime={500}
                stopOnHover
                renderArrowPrev={(clickHandler) => (
                    <button
                        className="absolute top-1/2 left-5 transform -translate-y-1/2 bg-black text-white p-3 rounded-full shadow-lg z-10"
                        onClick={clickHandler}
                    >
                        &lt;
                    </button>
                )}
                renderArrowNext={(clickHandler) => (
                    <button
                        className="absolute top-1/2 right-5 transform -translate-y-1/2 bg-black text-white p-3 rounded-full shadow-lg z-10"
                        onClick={clickHandler}
                    >
                        &gt;
                    </button>
                )}
            >
                {/* Slide 1 */}
                <div className="relative">
                    <img
                        src={image1}
                        alt="Crowdfunding"
                        className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[650px] rounded-xl"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-center px-4 rounded-xl">
                        <div>
                            <h2 className="text-2xl sm:text-4xl font-bold text-white mb-4">
                                Empower Ideas, Transform Lives
                            </h2>
                            <p className="text-white text-sm sm:text-lg">
                                Start your crowdfunding journey to bring innovative projects to life and create meaningful impact.
                            </p>
                        </div>
                    </div>
                </div>
                {/* Slide 2 */}
                <div className="relative">
                    <img
                        src={image2}
                        alt="Community"
                        className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[650px] rounded-xl"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-center px-4 rounded-xl">
                        <div>
                            <h2 className="text-2xl sm:text-4xl font-bold text-white mb-4">
                                Join a Supportive Community
                            </h2>
                            <p className="text-white text-sm sm:text-lg">
                                Connect with like-minded individuals and back initiatives that align with your values.
                            </p>
                        </div>
                    </div>
                </div>
                {/* Slide 3 */}
                <div className="relative">
                    <img
                        src={image3}
                        alt="Impact"
                        className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[650px] rounded-xl"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-center px-4 rounded-xl">
                        <div>
                            <h2 className="text-2xl sm:text-4xl font-bold text-white mb-4">
                                Make a Lasting Impact
                            </h2>
                            <p className="text-white text-sm sm:text-lg">
                                Every contribution helps dreams take flight be a part of something extraordinary.
                            </p>
                        </div>
                    </div>
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;
