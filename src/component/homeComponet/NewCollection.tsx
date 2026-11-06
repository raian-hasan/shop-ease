
import { motion, type Variants } from "motion/react";

export default function NewCollection() {
    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants: Variants = {
        hidden: {
            opacity: 0,
            y: 30,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.7,
                ease: "easeOut",
            },
        },
    };

    return (
        <section className="bg-white px-6 py-16 md:px-12 lg:py-20">
            <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2">

                {/* Left Image */}
                <motion.div
                    initial={{ opacity: 0, x: -60, scale: 0.95 }}
                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="overflow-hidden rounded-2xl"
                >
                    <img
                        src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=900"
                        alt="Latest Collection"
                        className="h-[300px] w-full object-cover md:h-[420px]"
                    />
                </motion.div>

                {/* Right Content */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3 }}
                    className="space-y-6 md:pl-8"
                >
                    <motion.span
                        variants={itemVariants}
                        className="block text-sm font-semibold uppercase tracking-[3px] text-orange-500"
                    >
                        Special Collection
                    </motion.span>

                    <motion.h2
                        variants={itemVariants}
                        className="text-4xl font-bold leading-tight text-gray-900 md:text-5xl"
                    >
                        Upgrade Your <br />
                        Everyday Lifestyle
                    </motion.h2>

                    <motion.p
                        variants={itemVariants}
                        className="max-w-md text-base leading-7 text-gray-600"
                    >
                        Discover our latest collection of premium products.
                        Quality, style and comfort — everything you need in one place.
                    </motion.p>

                    <motion.button
                        variants={itemVariants}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="rounded-md bg-gray-900 px-8 py-3 font-semibold text-white transition hover:bg-[#432DD7]"
                    >
                        Explore Collection
                    </motion.button>
                </motion.div>

            </div>
        </section>
    );
}
