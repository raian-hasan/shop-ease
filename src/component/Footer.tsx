import { useEffect } from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { NavLink } from "react-router";

const Footer = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        // Main footer wrapper
        <footer className="w-full bg-gray-900 text-gray-300 mt-16">
            <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">

                {/* Brand / About column */}
                <div>
                    <h2 className="text-2xl font-bold text-white mb-4">
                        Shop<span className="text-indigo-500">Ease</span>
                    </h2>
                    <p className="text-sm leading-relaxed text-gray-400">
                        All the products you need in one place. Easy ordering, fast delivery, and guaranteed quality.
                    </p>
                    {/* Social icons */}
                    <div className="flex items-center gap-3 mt-5">
                        <button className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 hover:bg-indigo-600 transition-colors duration-200">
                            <FaFacebookF className="text-sm" />
                        </button>
                        <button className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 hover:bg-indigo-600 transition-colors duration-200">
                            <FaTwitter className="text-sm" />
                        </button>
                        <button className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 hover:bg-indigo-600 transition-colors duration-200">
                            <FaInstagram className="text-sm" />
                        </button>
                        <button className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 hover:bg-indigo-600 transition-colors duration-200">
                            <FaLinkedinIn className="text-sm" />
                        </button>
                    </div>
                </div>

                {/* Quick Links column */}
                <div>
                    <h3 className="text-white font-semibold mb-4">Quick Links</h3>
                    <ul className="space-y-2 text-sm">
                        <li>
                            <NavLink to="/" className={({ isActive }) =>
                                ` hover:text-indigo-600 transition-colors duration-200 ${isActive ? " text-indigo-600" : "text-white/80"}`
                            }>
                                Home
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to="/shop" className={({ isActive }) =>
                                ` hover:text-indigo-600 transition-colors duration-200 ${isActive ? " text-indigo-600" : "text-white/80"}`
                            }>
                                Shop
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to="/categrories" className={({ isActive }) =>
                                ` hover:text-indigo-600 transition-colors duration-200 ${isActive ? " text-indigo-600" : "text-white/80"}`
                            }>
                                Categories
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to="/gallery" className={({ isActive }) =>
                                ` hover:text-indigo-600 transition-colors duration-200 ${isActive ? " text-indigo-600" : "text-white/80"}`
                            }>
                                Gallery
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to="/contact" className={({ isActive }) =>
                                ` hover:text-indigo-600 transition-colors duration-200 ${isActive ? " text-indigo-600" : "text-white/80"}`
                            }>
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                </div>

                {/* Customer Service column */}
                <div>
                    <h3 className="text-white font-semibold mb-4">Customer Service</h3>
                    <ul className="space-y-2 text-sm">
                        <li><button className="hover:text-indigo-400 transition-colors duration-200">Privacy Policy</button></li>
                        <li><button className="hover:text-indigo-400 transition-colors duration-200">Terms & Conditions</button></li>
                        <li><button className="hover:text-indigo-400 transition-colors duration-200">Return Policy</button></li>
                        <li><button className="hover:text-indigo-400 transition-colors duration-200">FAQ</button></li>
                        <li><button className="hover:text-indigo-400 transition-colors duration-200">Support</button></li>
                    </ul>
                </div>

                {/* Contact column */}
                <div>
                    <h3 className="text-white font-semibold mb-4">Contact Us</h3>
                    <ul className="space-y-3 text-sm">
                        <li className="flex items-start gap-3">
                            <FaMapMarkerAlt className="text-indigo-500 mt-1" />
                            <span>123 Dhanmondi, Dhaka, Bangladesh</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <FaPhone className="text-indigo-500" />
                            <span>+880 1700-000000</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <FaEnvelope className="text-indigo-500" />
                            <span>support@shopease.com</span>
                        </li>
                    </ul>
                </div>

            </div>

            {/* Bottom bar */}
            <div className="border-t border-gray-800">
                <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-gray-500">
                    <p>© 2026 ShopEase. Designed by Raian Hasan.</p>
                    <div className="flex items-center gap-4">
                        <button className="hover:text-indigo-400 transition-colors duration-200">Privacy</button>
                        <button className="hover:text-indigo-400 transition-colors duration-200">Terms</button>
                        <button className="hover:text-indigo-400 transition-colors duration-200">Cookies</button>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;