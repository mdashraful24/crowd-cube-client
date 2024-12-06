import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { Fade } from "react-awesome-reveal";

const SuccessStories = () => {
    return (
        <section className="mt-20 mb-28">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Title effect */}
                <Fade direction="up" triggerOnce>
                    <h2 className="text-3xl md:text-4xl text-purple-700 font-bold text-center mb-10">Why Choose CrowdCube?</h2>
                </Fade>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Typewriter Effect */}
                    <div className="text-center md:text-left p-6 shadow-lg rounded-lg border border-[#5c0c9e]">
                        <Fade direction="left" triggerOnce>
                            <h3 className="text-xl text-red-500 font-semibold mb-4">
                                <Typewriter
                                    words={["Launch Your Vision 🚀", "Back a Dream 🌟", "Unite for a Cause 🤝", "Make an Impact 🌍", "Support a Movement 📣", "Empower Change⚡", "Realize Your Ambitions 🎯", "Shape the Future 🔮", "Achieve Your Goal 🏆", "Bring Ideas to Life💡"]}
                                    loop={5}
                                    cursor
                                    cursorStyle="|"
                                    typeSpeed={100}
                                    deleteSpeed={50}
                                    delaySpeed={1500}
                                />
                            </h3>
                        </Fade>
                        <Fade direction="left" triggerOnce>
                            <p className="text-lg text-justify">
                                CrowdCube enables you to raise funds for your projects by reaching out to a large number of people. It's a great way to turn ideas into reality, gain exposure, and engage your community.
                            </p>
                        </Fade>
                    </div>
                    <div className="text-left p-6 shadow-lg rounded-lg border border-[#5c0c9e]">
                        <Fade direction="right" triggerOnce>
                            <h3 className="text-xl font-semibold mb-4">What Are The Benefits?</h3>
                        </Fade>
                        <Fade direction="right" triggerOnce>
                            <ul className="text-lg list-disc pl-5">
                                <li>Access to a large number of potential backers</li>
                                <li>Opportunity to test the market before launching a product</li>
                                <li>Gain community support and build a loyal customer base</li>
                                <li>Boost visibility for your project and attract media attention</li>
                                <li>Flexible funding options (all or nothing or keep what you raise)</li>
                            </ul>
                        </Fade>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SuccessStories;
