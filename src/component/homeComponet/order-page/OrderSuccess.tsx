
import { FaArrowRight, FaCheck } from "react-icons/fa";
import { Link } from "react-router";
import { motion, type Variants } from "motion/react";

const cardVariants: Variants = {
    hidden: {
        opacity: 0,
        scale: 0.9,
        y: 40,
    },
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: {
            duration: 0.7,
            ease: "easeOut",
            staggerChildren: 0.15,
        },
    },
};

const itemVariants: Variants = {
    hidden: {
        opacity: 0,
        y: 25,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut",
        },
    },
};

const iconVariants: Variants = {
    hidden: {
        scale: 0,
        rotate: -90,
    },
    visible: {
        scale: 1,
        rotate: 0,
        transition: {
            type: "spring",
            stiffness: 200,
            damping: 12,
            delay: 0.2,
        },
    },
};

export default function OrderSuccess() {

    return (
        <section className="min-h-[70vh] flex items-center justify-center bg-gray-50 px-4 py-16">

            {/* Success Card */}
            <motion.div
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                className="w-full max-w-lg bg-white rounded-3xl border border-gray-100 shadow-sm p-8 md:p-12 text-center"
            >

                {/* Success Icon */}
                <motion.div
                    variants={itemVariants}
                    className="w-20 h-20 mx-auto flex items-center justify-center rounded-full bg-green-50 mb-6"
                >
                    <motion.div
                        variants={iconVariants}
                        className="w-14 h-14 flex items-center justify-center rounded-full bg-green-500"
                    >
                        <FaCheck className="text-white text-2xl" />
                    </motion.div>
                </motion.div>

                {/* Success Message */}
                <motion.h1
                    variants={itemVariants}
                    className="text-3xl md:text-4xl font-bold text-gray-900 mb-3"
                >
                    Thank You!
                </motion.h1>

                <motion.p
                    variants={itemVariants}
                    className="text-lg font-semibold text-indigo-600 mb-3"
                >
                    Thanks for your order!
                </motion.p>

                <motion.p
                    variants={itemVariants}
                    className="text-gray-500 text-sm leading-7 max-w-sm mx-auto"
                >
                    Your order has been placed successfully. We appreciate your trust
                    in ShopEase. Happy shopping!
                </motion.p>

                {/* Divider */}
                <motion.div
                    variants={itemVariants}
                    className="border-t border-gray-100 my-8"
                />

                {/* Continue Shopping */}
                <motion.div variants={itemVariants}>
                    <motion.div
                        whileHover={{ scale: 1.04, y: -3 }}
                        whileTap={{ scale: 0.96 }}
                    >
                        <Link
                            to="/"
                            className="inline-flex items-center justify-center gap-3 w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-4 rounded-xl transition duration-300 shadow-lg shadow-indigo-100"
                        >
                            Continue Shopping
                            <motion.span
                                animate={{ x: [0, 5, 0] }}
                                transition={{
                                    duration: 1.2,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                            >
                                <FaArrowRight className="text-sm" />
                            </motion.span>
                        </Link>
                    </motion.div>
                </motion.div>

                {/* Footer */}
                <motion.p
                    variants={itemVariants}
                    className="text-xs text-gray-400 mt-6"
                >
                    Thank you for choosing ShopEase ❤️
                </motion.p>

            </motion.div>

        </section>
    );
}
