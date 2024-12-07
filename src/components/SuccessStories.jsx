import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { Fade } from "react-awesome-reveal";

const SuccessStories = () => {
    return (
        <section className="mt-14 md:mt-20 mb-20 md:mb-28">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <Fade direction="up" triggerOnce>
                    <h2 className="text-3xl md:text-4xl text-purple-700 font-bold text-center mb-10">Why Choose CrowdCube?</h2>
                </Fade>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="text-center md:text-left p-6 shadow-lg rounded-lg border border-[#5c0c9e]">
                        <Fade direction="left" triggerOnce>
                            <h3 className="text-xl text-red-500 font-semibold mb-4">
                                <Typewriter
                                    words={["Launch Your Vision 🚀", "Back a Dream 🌟", "Unite for a Cause 🤝", "Make an Impact 🌍", "Support a Movement 📣", "Empower Change⚡", "Realize Your Ambitions 🎯", "Shape the Future 🔮", "Achieve Your Goal 🏆", "Bring Ideas to Life💡"]}
                                    loop={0}
                                    cursor
                                    cursorStyle="|"
                                    typeSpeed={80}
                                    deleteSpeed={60}
                                    delaySpeed={1200}
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
                        <Fade cascade direction="right" triggerOnce>
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
                <Fade direction="up" triggerOnce>
                    <div className="mt-10 text-center">
                        <p className="text-lg mb-4">At CrowdCube, we bring whether it’s creative ideas, business ventures, startups, or even solving personal issues, our platform empowers people to turn ambitions into reality. Together, we can back initiatives that matter and make a lasting impact. If our mission inspires you, we invite you to explore our campaigns and to form a brighter future.</p>
                        <a
                            href="/campaigns"
                            className="inline-block px-3 py-3 bg-purple-900 text-white font-semibold rounded-lg shadow-md hover:bg-purple-700 transition duration-300"
                        >
                            View All Campaigns
                        </a>
                    </div>
                </Fade>
            </div>
        </section>
    );
};

export default SuccessStories;
