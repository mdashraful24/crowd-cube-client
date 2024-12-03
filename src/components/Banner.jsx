import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import image1 from '../../src/assets/crowdcube-team.png'

const Banner = () => {
    return (
        <div className="container mx-auto mt-16 px-5">
            <Carousel
                infiniteLoop
                useKeyboardArrows
                // autoPlay
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
                <div>
                    <img
                        src={image1}
                        alt="Banner 1"
                        className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] rounded-lg"
                    />
                </div>
                <div>
                    <img
                        src="{image2}"
                        alt="Banner 2"
                        className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] rounded-lg"
                    />
                </div>
                <div>
                    <img
                        src="{image3}"
                        alt="Banner 3"
                        className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] rounded-lg"
                    />
                </div>
                <div>
                    <img
                        src="{image4}"
                        alt="Banner 3"
                        className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] rounded-lg"
                    />
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;