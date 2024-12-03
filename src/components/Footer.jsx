const Footer = () => {
    return (
        <div className='bg-[#020515] py-16 px-5'>
            <div className="lg:container mx-auto">
                <div className="footer flex flex-col lg:flex-row lg:justify-between">
                    {/* Contact Information */}
                    <div>
                        <h2 className="text-white text-base font-semibold uppercase">Contact Information</h2>
                        <p className='text-gray-300'>Email: <a href="https://mail.google.com/mail/u/0/#inbox?compose=new" className="link link-hover" target="_blank">donations@winterclothing.org</a></p>
                        <p className='text-gray-300'>Phone: <a className="link link-hover">+123 456 7890</a></p>
                        <p className='text-gray-300'>Address: 12, Mirpur-1, Dhaka</p>
                    </div>
                    {/* Social Media */}
                    <div>
                        <h2 className="text-white text-base font-semibold uppercase">Follow Us</h2>
                        <div className="flex gap-4">
                            <a
                                href="https://www.facebook.com/ashraful.islam.ratul.455820?mibextid=ZbWKwL"
                                className="btn btn-square btn-outline text-2xl bg-gray-200 text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {/* <FaFacebook /> */}
                            </a>
                            <a
                                href="https://www.linkedin.com/"
                                className="btn btn-square btn-outline text-2xl bg-gray-200 text-blue-700 border-blue-700 hover:bg-blue-700 hover:text-white"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {/* <FaLinkedin /> */}
                            </a>
                            <a
                                href="https://x.com/?lang=en"
                                className="btn btn-square btn-outline text-2xl bg-gray-200 text-blue-500 border-blue-400 hover:bg-blue-400 hover:text-white"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {/* <FaTwitter /> */}
                            </a>
                            <a
                                href="https://www.instagram.com/"
                                className="btn btn-square btn-outline text-2xl bg-gray-200 text-pink-500 border-pink-500 hover:bg-pink-500 hover:text-white"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {/* <FaInstagram /> */}
                            </a>
                        </div>
                    </div>
                    {/* Copyright Notice */}
                    <div>
                        <h2 className="text-white text-base font-semibold uppercase">Legal</h2>
                        <p className="text-sm text-gray-300">
                            &copy; {new Date().getFullYear()} Winter Donation. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;