
import { FaHeart, FaShoppingCart, FaStar } from "react-icons/fa";
import { newArrivals } from "../../../db.json";
import { BsCartCheckFill } from "react-icons/bs";
import { useCart } from "../../../data/data.store";
import { toast } from "react-toastify";
import type { IProducts } from "../../../type/type";
import { Link } from "react-router";
import { motion } from "motion/react";

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const cardVariants = {
    hidden: {
        opacity: 0,
        y: 35,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut" as const,
        },
    },
};

export default function NewArrival() {

    const { addToCart, addToFav, favorite, cart, delFavitem, delCartItem } = useCart();

    const handleFavClick = (product: IProducts) => {
        const exiting = favorite.find((item) => item.id === product.id);

        if (exiting) {
            delFavitem(product);
            toast.error("Product Removed Successfully");
        }
        else {
            addToFav(product);
            toast.success("Product Added to Favorite Item");
        }
    };

    const handleAddToCart = (product: IProducts) => {
        const exiting = cart.find((item) => item.id === product.id);

        if (exiting) {
            delCartItem(product.id);
            toast.error("Product Removed");
        }
        else {
            addToCart(product);
            toast.success("Product Added to Cart");
        }
    };

    return (
        <section className="w-full bg-white py-16">
            <div className="max-w-7xl mx-auto px-6">

                {/* Section Heading */}
                <div className="flex items-end justify-between mb-10">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                            NewArrival
                        </h2>

                        <p className="text-gray-500 text-sm">
                            Get yours before it's finished
                        </p>
                    </div>

                    <button className="hidden md:block text-indigo-600 font-semibold text-sm hover:text-indigo-700 transition-colors duration-200">
                        View All →
                    </button>
                </div>

                {/* Cards Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.15 }}
                    className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4 lg:gap-6"
                >
                    {newArrivals.map((product) => (

                        <motion.div
                            key={product.id}
                            variants={cardVariants}
                            whileHover={{
                                y: -7,
                                transition: { duration: 0.1 },
                            }}
                        >
                            <Link to={`/preview/${product.id}`}>

                                <div className="group min-w-0 overflow-hidden rounded-2xl border border-gray-200 bg-white transition-shadow duration-300 hover:shadow-xl">

                                    <div className="relative overflow-hidden">

                                        <motion.img
                                            src={product.image}
                                            alt={product.name}
                                            className="h-36 w-full object-cover sm:h-48 lg:h-56"
                                            whileHover={{ scale: 1.08 }}
                                            transition={{ duration: 0.4 }}
                                        />

                                        <span className="absolute left-2 top-2 rounded-full bg-red-500 px-2 py-1 text-[9px] font-bold text-white sm:left-3 sm:top-3 sm:text-[10px]">
                                            SALE
                                        </span>

                                        <button
                                            onClick={(e) => {
                                                e.preventDefault();
                                                e.stopPropagation();
                                                handleFavClick({
                                                    ...product,
                                                    rating: Number(product.rating),
                                                });
                                            }}
                                            className={`absolute right-2 top-2 flex h-7 w-7 cursor-pointer items-center justify-center rounded-full shadow transition-colors duration-200 sm:right-3 sm:top-3 sm:h-8 sm:w-8 ${favorite.find((item) => product.id === item.id)
                                                ? "bg-red-500 text-white"
                                                : "bg-white text-gray-500"
                                                }`}
                                        >
                                            <FaHeart className="text-xs sm:text-sm" />
                                        </button>

                                    </div>

                                    <div className="p-3 sm:p-5">

                                        <p className="mb-1 truncate text-[10px] font-semibold text-indigo-600 sm:text-xs">
                                            {product.category}
                                        </p>

                                        <h3 className="mb-2 truncate text-xs font-semibold text-gray-900 sm:text-base">
                                            {product.name}
                                        </h3>

                                        <div className="mb-3 flex items-center gap-1">
                                            <FaStar className="shrink-0 text-[10px] text-yellow-400 sm:text-xs" />

                                            <span className="text-xs text-gray-600 sm:text-sm">
                                                {product.rating}
                                            </span>
                                        </div>

                                        <div className="flex items-center justify-between gap-2">

                                            <div className="flex min-w-0 flex-wrap items-center gap-x-2 gap-y-1">

                                                <span className="text-sm font-bold text-gray-900 sm:text-lg">
                                                    ${product.price}
                                                </span>

                                                <span className="text-[10px] text-gray-400 line-through sm:text-sm">
                                                    ${product.oldPrice}
                                                </span>

                                            </div>

                                            <button
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    e.stopPropagation();
                                                    handleAddToCart({
                                                        ...product,
                                                        rating: Number(product.rating),
                                                    });
                                                }}
                                                className="flex h-8 w-8 shrink-0 cursor-pointer items-center justify-center rounded-lg bg-indigo-600 text-white transition-colors duration-200 hover:bg-indigo-700 sm:h-9 sm:w-9"
                                            >
                                                {cart.find((item) => product.id === item.id) ? (
                                                    <BsCartCheckFill className="text-xs sm:text-sm" />
                                                ) : (
                                                    <FaShoppingCart className="text-xs sm:text-sm" />
                                                )}
                                            </button>

                                        </div>
                                    </div>
                                </div>

                            </Link>
                        </motion.div>

                    ))}
                </motion.div>

            </div>
        </section>
    );
}
