
import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaYoutube, FaEnvelope, FaPhone } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-green-900 text-white mt-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Contact Info */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Contact Us</h3>
                        <div className="space-y-3">
                            <p className="flex items-center space-x-2">
                                <FaEnvelope className="text-blue-400" />
                                <span>info@QurbaniHat.com</span>
                            </p>
                            <p className="flex items-center space-x-2">
                                <FaPhone className="text-blue-400" />
                                <span>+880 1234 567890</span>
                            </p>
                            <p className="text-gray-400 text-sm mt-2">
                                123 Animal Street, Dhaka, Bangladesh
                            </p>
                        </div>
                    </div>

                    {/* About Section */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">About QurbaniHat</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            QurbaniHat   is Bangladesh premier platform for buying and selling livestock.
                            We connect farmers and buyers with quality animals and transparent transactions.
                        </p>
                        <div className="mt-4 space-y-1 text-sm text-gray-400">
                            <p>✅ Trusted by 10,000+ farmers</p>
                            <p>✅ 500+ animals sold monthly</p>
                            <p>✅ 100% secure transactions</p>
                        </div>
                    </div>

                    {/* Social Links */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Follow Us</h3>
                        <div className="flex space-x-4">
                            <a
                                href="#"
                                className="bg-blue-600 p-3 rounded-full hover:bg-blue-700 transition"
                                aria-label="Facebook"
                            >
                                <FaFacebook size={20} />
                            </a>
                            <a
                                href="#"
                                className="bg-blue-400 p-3 rounded-full hover:bg-blue-500 transition"
                                aria-label="Twitter"
                            >
                                <FaTwitter size={20} />
                            </a>
                            <a
                                href="#"
                                className="bg-blue-700 p-3 rounded-full hover:bg-blue-800 transition"
                                aria-label="LinkedIn"
                            >
                                <FaLinkedin size={20} />
                            </a>
                            <a
                                href="#"
                                className="bg-red-600 p-3 rounded-full hover:bg-red-700 transition"
                                aria-label="YouTube"
                            >
                                <FaYoutube size={20} />
                            </a>
                        </div>
                        <p className="text-gray-400 text-sm mt-4">
                            Follow us for daily updates and livestock tips
                        </p>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
                    <p>© {new Date().getFullYear()} AnimalHub. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;