
import { motion } from "motion/react";

const images = [
    "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400",
    "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400",
    "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400",
    "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400",
    "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=400",
    "https://images.unsplash.com/photo-1560343090-f0409e92791a?w=400",
    "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400",
    "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=400",
    "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400",
    "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=400",
    "https://images.unsplash.com/photo-1608042314453-ae338d80c427?w=400",
    "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=400",
    "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?w=400",
    "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400",
    "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=400",
    "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400",
    "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400",
    "https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?w=400",
    "https://images.unsplash.com/photo-1556906781-9a412961c28c?w=400",
    "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=400",
    "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=400",
    "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400",
    "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=400",
    "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400",
    "https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?w=400",
    "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400",
    "https://images.unsplash.com/photo-1527814050087-3793815479db?w=400",
    "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=400",
    "https://images.unsplash.com/photo-1593642532842-98d0fd5ebc1a?w=400",
    "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400",
    "https://images.unsplash.com/photo-1592890288564-76628a30a657?w=400",
    "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=400",
    "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=400",
    "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400",
    "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=400",
    "https://images.unsplash.com/photo-1526738549149-8e07eca6c147?w=400",
    "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=400",
    "https://images.unsplash.com/photo-1608042314453-ae338d80c427?w=400",
    "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400",
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400",
    "https://images.unsplash.com/photo-1550009158-9ebf69173e03?w=400",
    "https://images.unsplash.com/photo-1468495244123-6c6c332eeece?w=400",
    "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=400",
    "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400",
    "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=400",
    "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400",
    "https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?w=400",
    "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400",
    "https://images.unsplash.com/photo-1527814050087-3793815479db?w=400",
    "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=400",
];

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.06,
        },
    },
};

const cardVariants = {
    hidden: {
        opacity: 0,
        y: 40,
        scale: 0.94,
    },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.6,
            ease: "easeOut" as const,
        },
    },
};

const imageHeights = [
    "h-44",
    "h-64",
    "h-52",
    "h-72",
    "h-56",
    "h-48",
];

export default function Gallery() {
    return (
        <>
            <section className="w-full bg-white py-16">
                <div className="max-w-7xl mx-auto px-6">

                    {/* Section heading */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.5 }}
                        transition={{
                            duration: 0.7,
                            ease: "easeOut",
                        }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                            Our Gallery
                        </h2>

                        <p className="text-gray-500 text-sm">
                            A glimpse of our products and store
                        </p>
                    </motion.div>

                    {/* Masonry Gallery */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{
                            once: false,
                            amount: 0.05,
                        }}
                        className="columns-2 sm:columns-3 lg:columns-4 gap-4"
                    >
                        {images.map((image, index) => (
                            <motion.div
                                key={index}
                                variants={cardVariants}
                                whileHover={{
                                    y: -7,
                                    transition: {
                                        duration: 0.3,
                                    },
                                }}
                                className="group relative inline-block w-full mb-4 overflow-hidden rounded-2xl break-inside-avoid shadow-sm hover:shadow-xl transition-shadow duration-300"
                            >
                                {/* Gallery Image */}
                                <div className="relative overflow-hidden">
                                    <motion.img
                                        src={image}
                                        alt={`Product ${index + 1}`}
                                        className={`w-full ${imageHeights[index % imageHeights.length]} object-cover`}
                                        whileHover={{
                                            scale: 1.1,
                                        }}
                                        transition={{
                                            duration: 0.6,
                                            ease: "easeOut",
                                        }}
                                    />

                                    {/* Image Overlay */}
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-all duration-500" />

                                    {/* Bottom Gradient */}
                                    <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                </div>
            </section>
        </>
    );
}
