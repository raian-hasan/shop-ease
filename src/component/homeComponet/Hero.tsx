import { FaArrowRight, FaShoppingBag, FaTruck, FaShieldAlt } from "react-icons/fa";
import { motion } from "motion/react";
import SimpleSlider from "./SimpleSlider";

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: {
        opacity: 0,
        y: 30,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.7,
            ease: "easeOut" as const,
        },
    },
};

const Hero = () => {
    return (
        <section className="w-full bg-gradient-to-br from-indigo-50 via-white to-purple-50">
            <div className="max-w-7xl mx-auto px-6 py-16 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                {/* Left Content */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.2 }}
                >
                    {/* Small Tag */}
                    <motion.span
                        variants={itemVariants}
                        className="inline-block bg-indigo-100 text-indigo-600 text-xs font-semibold px-3 py-1 rounded-full mb-5"
                    >
                        New Arrivals 2026
                    </motion.span>

                    {/* Heading */}
                    <motion.h1
                        variants={itemVariants}
                        className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-6"
                    >
                        Shop Smarter, <br />
                        <span className="text-indigo-600">Live Better</span>
                    </motion.h1>

                    {/* Subtext */}
                    <motion.p
                        variants={itemVariants}
                        className="text-gray-600 text-base md:text-lg leading-relaxed mb-8 max-w-lg"
                    >
                        Discover thousands of quality products at unbeatable prices. Fast delivery,
                        easy returns, and a shopping experience you can trust.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        variants={itemVariants}
                        className="flex flex-wrap items-center gap-4"
                    >
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center gap-2 bg-indigo-600 text-white font-semibold px-7 py-3 rounded-lg hover:bg-indigo-700 transition-colors duration-200"
                        >
                            Shop Now
                            <FaArrowRight className="text-sm" />
                        </motion.button>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center gap-2 border border-gray-300 text-gray-700 font-semibold px-7 py-3 rounded-lg hover:border-indigo-600 hover:text-indigo-600 transition-colors duration-200"
                        >
                            <FaShoppingBag className="text-sm" />
                            Browse Deals
                        </motion.button>
                    </motion.div>

                    {/* Trust Badges */}
                    <motion.div
                        variants={itemVariants}
                        className="flex flex-wrap items-center gap-6 mt-10 text-sm text-gray-600"
                    >
                        <div className="flex items-center gap-2">
                            <FaTruck className="text-indigo-600" />
                            <span>Free Delivery</span>
                        </div>

                        <div className="flex items-center gap-2">
                            <FaShieldAlt className="text-indigo-600" />
                            <span>Secure Payment</span>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Right Image Slider */}
                <motion.div
                    initial={{
                        opacity: 0,
                        x: 60,
                        scale: 0.95,
                    }}
                    whileInView={{
                        opacity: 1,
                        x: 0,
                        scale: 1,
                    }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{
                        duration: 1,
                        ease: "easeOut",
                    }}
                >
                    <SimpleSlider />
                </motion.div>

            </div>
        </section>
    );
};

export default Hero;