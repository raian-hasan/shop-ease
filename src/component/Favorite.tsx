import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { useCart } from "../../data/data.store";
import type { IProducts } from "../../type/type";
import { toast } from "react-toastify";

export default function Favorite() {

    const { favorite, addToCart, delFavitem } = useCart()


    const handleDelFav = (product: IProducts) => {
        delFavitem(product)
        toast.error("Product Removed Successfully")
    }

    const handleAddToCart = (product: IProducts) => {
        addToCart(product)
        toast.success("Product Added To Cart")
    }

    return (

        <section className="w-full bg-gray-50 py-16">
            <div className="max-w-7xl mx-auto px-6">

                {/* Section heading */}
                <div className="flex items-end justify-between mb-10">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                            Your Favorites
                        </h2>
                        <p className="text-gray-500 text-sm">
                            Items you loved and saved for later
                        </p>
                    </div>
                    <button className="hidden md:block text-indigo-600 font-semibold text-sm hover:text-indigo-700 transition-colors duration-200">
                        View All →
                    </button>
                </div>

                {/* Favorites grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">



                    {favorite.map((product) => (
                        <div key={product.id} className="group bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300">
                            <div className="relative overflow-hidden">
                                <img
                                    src={product.image}
                                    alt="Smart Watch Pro"
                                    className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                                {/* Remove from favorites button */}
                                <button onClick={() => handleDelFav(product)} className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center bg-white rounded-full text-red-500 shadow hover:bg-red-500 hover:text-white transition-colors duration-200">
                                    <FaHeart />
                                </button>
                            </div>
                            <div className="p-5">
                                <p className="text-xs text-indigo-600 font-semibold mb-1">{product.category}</p>
                                <h3 className="text-gray-900 font-semibold mb-2 truncate">{product.name}</h3>
                                <div className="flex items-center gap-1 mb-3">
                                    <i className="fa-solid fa-star text-yellow-400 text-xs"></i>
                                    <span className="text-sm text-gray-600">{product.rating}</span>
                                </div>
                                <div onClick={() => handleAddToCart(product)} className="flex items-center justify-between">
                                    <span className="text-lg font-bold text-gray-900">${product.price}</span>
                                    <button className="flex items-center gap-2 bg-indigo-600 text-white text-sm font-semibold p-2 rounded-lg hover:bg-indigo-700 transition-colors duration-200">
                                        <FaShoppingCart className="text-sm" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}


                </div>
            </div>
        </section>

    )
}
