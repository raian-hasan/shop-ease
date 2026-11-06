import { useLoaderData } from "react-router";
import { products, newArrivals } from "../../../db.json";
import { useCart } from "../../../data/data.store";
import { toast } from "react-toastify";
import type { IProducts } from "../../../type/type";
import { MdFavorite } from "react-icons/md";
import { BsCartPlusFill, BsCartXFill } from "react-icons/bs";
import { FaCartShopping } from "react-icons/fa6";
import { useEffect } from "react";

export default function Preview() {
    const { addToCart, addToFav, favorite, cart, delFavitem, delCartItem, inCrement, deCremnet } = useCart()

    const id = useLoaderData();

    const product = [...products, ...newArrivals].find((item) => item.id == id)

    const handleAddToCart = (product: IProducts) => {
        const exiting = cart.find((item) => item.id === product.id)
        if (exiting) {
            delCartItem(product.id)
            toast.error("Product Removed")

        }

        else {
            addToCart(product)
            toast.success("Product Added to Cart")
        }

    }


    const handleFavClick = (product: IProducts) => {
        const exiting = favorite.find((item) => item.id === product.id)

        if (exiting) {
            delFavitem(product)
            toast.error("Product Removed Successfully")

        }

        else {
            addToFav(product)
            toast.success("Product Added to Favorite Item")
        }

    }

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <section className="w-full bg-white py-16">
            <div className="max-w-7xl mx-auto px-6">

                {/* Breadcrumb */}
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-8">
                    <span className="hover:text-indigo-600 cursor-pointer">Home</span>
                    <i className="fa-solid fa-chevron-right text-[10px]"></i>
                    <span className="hover:text-indigo-600 cursor-pointer">Electronics</span>
                    <i className="fa-solid fa-chevron-right text-[10px]"></i>
                    <span className="text-gray-900 font-medium">Wireless Headphones</span>
                </div>

                {/* Main grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                    {product ?

                        <>
                            {/* Left: product image gallery */}
                            <div key={product.id}>
                                {/* Main image */}
                                <div className="relative rounded-2xl overflow-hidden border border-gray-200 mb-4">
                                    <img
                                        src={product.image}
                                        alt={product.category}
                                        className="w-full h-[450px] object-cover"
                                    />
                                    {/* Discount badge */}
                                    <span className="absolute top-4 left-4 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                                        -25% OFF
                                    </span>
                                </div>


                            </div>

                            {/* Right: product info */}
                            <div>
                                {/* Category + stock */}
                                <div className="flex items-center gap-3 mb-3">
                                    <span className="text-xs font-semibold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">{product.category}</span>
                                    <span className="text-xs font-semibold text-green-600 bg-green-50 px-3 py-1 rounded-full">In Stock</span>
                                </div>

                                {/* Title */}
                                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                                    {product.name}
                                </h1>

                                {/* Rating */}
                                <div className="flex items-center gap-3 mb-5">

                                    <span className="text-sm text-gray-600">{product.rating} (128 reviews)</span>
                                    <span className="text-sm text-gray-400">|</span>
                                    <span className="text-sm text-indigo-600 font-medium cursor-pointer hover:underline">Write a review</span>
                                </div>

                                {/* Price */}
                                <div className="flex items-end gap-3 mb-6">
                                    <span className="text-4xl font-bold text-gray-900">${product.price}</span>
                                    <span className="text-xl text-gray-400 line-through mb-1">${product.oldPrice}</span>
                                    <span className="text-sm font-semibold text-red-500 mb-1">Save ${product.price - product.oldPrice}</span>
                                </div>

                                {/* Short description */}
                                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                                    Experience premium sound with active noise cancellation, 30-hour battery life,
                                    and ultra-soft ear cushions. Perfect for travel, work, and everyday listening.
                                </p>

                                {/* Divider */}
                                <div className="border-t border-gray-200 mb-6"></div>

                                {/* Quantity + Add to cart */}
                                <div className="flex flex-wrap items-center gap-4 mb-6">
                                    {/* Quantity control */}
                                    <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
                                        <button onClick={() => inCrement(product.id)} className="w-10 h-11 flex items-center justify-center text-gray-600 hover:bg-gray-100 transition-colors duration-200">
                                            +
                                        </button>
                                        <span className="w-12 text-center text-sm font-semibold text-gray-900">{cart.find((item) => item.id === product.id)?.quantity ?? 0}</span>
                                        <button onClick={() => deCremnet(product.id)} className="w-10 h-11 flex items-center justify-center text-gray-600 hover:bg-gray-100 transition-colors duration-200">
                                            -
                                        </button>
                                    </div>

                                    {/* Add to cart */}
                                    <button onClick={() => handleAddToCart({ ...product, rating: Number(product.rating) })} className="flex-1 min-w-[160px] flex items-center justify-center gap-2 bg-indigo-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors duration-200">

                                        {cart.find((item) => product.id == item.id) ? (<BsCartXFill />) : (<BsCartPlusFill />)}
                                        {cart.find((item) => product.id == item.id) ? "Remove from Cart" : "Add to Cart"}
                                    </button>

                                    {/* Favorite */}
                                    <button onClick={() => handleFavClick({ ...product, rating: Number(product.rating) })} className={`w-11 h-11 flex items-center justify-center border border-gray-300 rounded-lg  ${favorite.find((item) => item.id == product.id) ? "text-red-500" : "text-gray-600"} hover: hover:border-red-300 transition-colors duration-200`}>
                                        <MdFavorite />
                                    </button>
                                </div>

                                {/* Buy now */}
                                <button className="w-full flex items-center justify-center gap-2 border border-indigo-600 text-indigo-600 font-semibold px-6 py-3 rounded-lg hover:bg-indigo-50 transition-colors duration-200 mb-6">
                                    <FaCartShopping />
                                    Buy Now
                                </button>

                                {/* Trust info */}
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
                                    <div className="flex items-center gap-2 text-gray-600">
                                        <i className="fa-solid fa-truck text-indigo-600"></i>
                                        <span>Free Delivery</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-gray-600">
                                        <i className="fa-solid fa-rotate-left text-indigo-600"></i>
                                        <span>7-Day Returns</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-gray-600">
                                        <i className="fa-solid fa-shield-halved text-indigo-600"></i>
                                        <span>1-Year Warranty</span>
                                    </div>
                                </div>

                            </div>

                        </>

                        :

                        <>
                            <p className="text-center">No Product found</p>

                        </>

                    }

                </div>

                {/* Tabs: Description / Specifications / Reviews */}
                <div className="mt-14">
                    {/* Tab headers */}
                    <div className="flex items-center gap-6 border-b border-gray-200 mb-6">
                        <button className="pb-3 text-sm font-semibold text-indigo-600 border-b-2 border-indigo-600">
                            Description
                        </button>
                        <button className="pb-3 text-sm font-semibold text-gray-500 hover:text-indigo-600 transition-colors duration-200">
                            Specifications
                        </button>
                        <button className="pb-3 text-sm font-semibold text-gray-500 hover:text-indigo-600 transition-colors duration-200">
                            Reviews (128)
                        </button>
                    </div>

                    {/* Tab content */}
                    <div className="text-gray-600 text-sm leading-relaxed space-y-3">
                        <p>
                            Our Wireless Noise-Cancelling Headphones deliver studio-quality sound with
                            advanced active noise cancellation technology. Designed for comfort and durability,
                            they feature plush memory-foam ear cushions and an adjustable headband.
                        </p>
                        <p>
                            Enjoy up to 30 hours of playback on a single charge, fast USB-C charging,
                            and seamless Bluetooth 5.2 connectivity. The built-in microphone ensures crystal-clear
                            calls, while the foldable design makes them easy to carry anywhere.
                        </p>
                        <ul className="list-disc list-inside space-y-1 pt-2">
                            <li>Active Noise Cancellation (ANC)</li>
                            <li>30-hour battery life</li>
                            <li>Bluetooth 5.2 with multipoint pairing</li>
                            <li>USB-C fast charging</li>
                            <li>Foldable, lightweight design</li>
                        </ul>
                    </div>
                </div>

            </div>
        </section >
    )
}
