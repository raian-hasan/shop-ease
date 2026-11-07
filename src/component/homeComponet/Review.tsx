
import { motion } from "motion/react";
import ReviewSlider from "./reviewComponent/ReviewSlider";

export default function Review() {
    return (
        <>
            {/* Customer Reviews Section */}
            <section className="bg-gray-50 py-20 px-6 overflow-hidden">

                <div className="max-w-7xl mx-auto w-full min-w-0">

                    {/* Section Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-center mb-14"
                    >
                        <span className="text-indigo-600 font-semibold text-sm uppercase tracking-widest">
                            Customer Feedback
                        </span>

                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">
                            What Our Customers Say
                        </h2>

                        <p className="text-gray-500 mt-4 max-w-xl mx-auto">
                            Don't just take our word for it. See what our happy customers
                            have to say about their shopping experience.
                        </p>
                    </motion.div>

                    {/* Review Cards */}
                    <motion.div
                        initial={{ opacity: 0, y: 50, scale: 0.97 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: false, amount: 0.2 }}
                        transition={{
                            duration: 0.5,
                            delay: 0.2,
                            ease: "easeOut",
                        }}
                        className="w-full min-w-0 overflow-hidden"
                    >
                        <ReviewSlider />
                    </motion.div>

                </div>

            </section>
        </>
    );
}
