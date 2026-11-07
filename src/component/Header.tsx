
import { useState } from "react";
import {
    FaHeart,
    FaShoppingCart,
    FaSearch,
    FaTrash,
    FaUserCircle,
    FaBars,
    FaTimes,
    FaHome,
    FaChevronRight,
    FaShoppingBag,
    FaThLarge,
    FaImages,
    FaEnvelope
} from "react-icons/fa";
import { NavLink } from "react-router";
import { useCart } from "../../data/data.store";

const Header = () => {
    const [cartOpen, setCartOpen] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    const { cart, favorite, delCartItem, inCrement, deCremnet } = useCart();

    const totalPrice = cart.reduce((total, current) => {
        return total + current.price * current.quantity;
    }, 0);

    return (
        <>
            {/* Header */}
            <header className="w-full bg-white shadow-md sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

                    {/* Logo */}
                    <div className="text-2xl font-bold text-indigo-600 cursor-pointer">
                        Shop<span className="text-gray-800">Ease</span>
                    </div>

                    {/* Nav buttons */}
                    <nav className="hidden lg:flex items-center gap-8">
                        <ul className="flex items-center gap-8">

                            <li>
                                <NavLink to="/" className={({ isActive }) =>
                                    `font-medium hover:text-indigo-600 transition-colors duration-200 ${isActive ? "font-bold text-indigo-600" : "text-gray-700"}`
                                }>
                                    Home
                                </NavLink>
                            </li>

                            <li>
                                <NavLink to="/shop" className={({ isActive }) =>
                                    `font-medium hover:text-indigo-600 transition-colors duration-200 ${isActive ? "font-bold text-indigo-600" : "text-gray-700"}`
                                }>
                                    Shop
                                </NavLink>
                            </li>

                            <li>
                                <NavLink to="/categrories" className={({ isActive }) =>
                                    `font-medium hover:text-indigo-600 transition-colors duration-200 ${isActive ? "font-bold text-indigo-600" : "text-gray-700"}`
                                }>
                                    Categories
                                </NavLink>
                            </li>

                            <li>
                                <NavLink to="/gallery" className={({ isActive }) =>
                                    `font-medium hover:text-indigo-600 transition-colors duration-200 ${isActive ? "font-bold text-indigo-600" : "text-gray-700"}`
                                }>
                                    Gallery
                                </NavLink>
                            </li>

                            <li>
                                <NavLink to="/contact" className={({ isActive }) =>
                                    `font-medium hover:text-indigo-600 transition-colors duration-200 ${isActive ? "font-bold text-indigo-600" : "text-gray-700"}`
                                }>
                                    Contact
                                </NavLink>
                            </li>

                        </ul>
                    </nav>

                    {/* Right side icons */}
                    <div className="flex items-center gap-5">

                        {/* Search */}
                        <button className="text-gray-700 text-xl hover:text-indigo-600 transition-colors duration-200">
                            <FaSearch />
                        </button>

                        {/* Favorite */}
                        <NavLink to="/favorite" className={({ isActive }) =>
                            `relative text-xl transition-colors duration-200 ${isActive ? "text-red-500" : "text-gray-700 hover:text-red-500"}`
                        }>
                            <FaHeart />

                            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
                                {favorite.length}
                            </span>
                        </NavLink>

                        {/* Header Cart Button */}
                        <button
                            onClick={() => setCartOpen(true)}
                            aria-label="Open cart"
                            className="relative text-gray-700 text-xl hover:text-indigo-600 transition-all duration-300"
                        >
                            <FaShoppingCart />

                            <span className="absolute -top-2 -right-2 bg-indigo-600 text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
                                {cart.length}
                            </span>
                        </button>

                        {/* Dashboard Button */}
                        <NavLink
                            to="/dashboard"
                            className={({ isActive }) =>
                                `hidden sm:inline-flex items-center gap-2 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors duration-200 ${isActive ? "bg-indigo-700" : "bg-indigo-600 hover:bg-indigo-700"}`
                            }
                        >
                            <FaUserCircle />
                            Dashboard
                        </NavLink>

                        {/* Menu Button */}
                        <button
                            onClick={() => setMenuOpen(true)}
                            className="lg:hidden text-gray-800 text-2xl hover:text-indigo-600 transition-colors duration-200"
                        >
                            <FaBars />
                        </button>

                    </div>
                </div>
            </header>

            {/* Sidebar Overlay */}
            <div className={`fixed inset-0 duration-300 ease-in-out z-[60] ${menuOpen ? "translate-x-0" : "translate-x-full"}`}>

                {/* Side Slider */}
                <div className="absolute top-0 right-0 w-[85%] sm:w-[380px] h-[610px] rounded-md bg-white shadow-2xl p-7 overflow-y-auto">

                    {/* Sidebar Header */}
                    <div className="flex items-center justify-between pb-6 border-b border-gray-200">
                        <h2 className="text-2xl font-bold text-indigo-600">
                            Shop<span className="text-gray-800">Ease</span>
                        </h2>

                        <button
                            onClick={() => setMenuOpen(false)}
                            className="text-gray-500 hover:text-red-500 text-2xl transition"
                        >
                            <FaTimes />
                        </button>
                    </div>

                    {/* Sidebar Navigation */}
                    <nav className="mt-8">
                        <ul className="space-y-3">

                            <li>
                                <NavLink onClick={() => setMenuOpen(false)} to="/" className={({ isActive }) =>
                                    `flex items-center gap-4 px-4 py-3 rounded-xl transition-colors duration-100 ${isActive ? "bg-indigo-50 text-indigo-600 font-bold" : "text-gray-700 hover:bg-indigo-50 hover:text-indigo-600"}`
                                }>
                                    <FaHome className="text-lg" />
                                    Home
                                    <FaChevronRight className="ml-auto text-sm" />
                                </NavLink>
                            </li>

                            <li>
                                <NavLink onClick={() => setMenuOpen(false)} to="/shop" className={({ isActive }) =>
                                    `flex items-center gap-4 px-4 py-3 rounded-xl transition-colors duration-100 ${isActive ? "bg-indigo-50 text-indigo-600 font-bold" : "text-gray-700 hover:bg-indigo-50 hover:text-indigo-600"}`
                                }>
                                    <FaShoppingBag className="text-lg" />
                                    Shop
                                    <FaChevronRight className="ml-auto text-sm" />
                                </NavLink>
                            </li>

                            <li>
                                <NavLink onClick={() => setMenuOpen(false)} to="/categrories" className={({ isActive }) =>
                                    `flex items-center gap-4 px-4 py-3 rounded-xl transition-colors duration-100 ${isActive ? "bg-indigo-50 text-indigo-600 font-bold" : "text-gray-700 hover:bg-indigo-50 hover:text-indigo-600"}`
                                }>
                                    <FaThLarge className="text-lg" />
                                    Categories
                                    <FaChevronRight className="ml-auto text-sm" />
                                </NavLink>
                            </li>

                            <li>
                                <NavLink onClick={() => setMenuOpen(false)} to="/gallery" className={({ isActive }) =>
                                    `flex items-center gap-4 px-4 py-3 rounded-xl transition-colors duration-100 ${isActive ? "bg-indigo-50 text-indigo-600 font-bold" : "text-gray-700 hover:bg-indigo-50 hover:text-indigo-600"}`
                                }>
                                    <FaImages className="text-lg" />
                                    Gallery
                                    <FaChevronRight className="ml-auto text-sm" />
                                </NavLink>
                            </li>

                            <li>
                                <NavLink onClick={() => setMenuOpen(false)} to="/contact" className={({ isActive }) =>
                                    `flex items-center gap-4 px-4 py-3 rounded-xl transition-colors duration-100 ${isActive ? "bg-indigo-50 text-indigo-600 font-bold" : "text-gray-700 hover:bg-indigo-50 hover:text-indigo-600"}`
                                }>
                                    <FaEnvelope className="text-lg" />
                                    Contact
                                    <FaChevronRight className="ml-auto text-sm" />
                                </NavLink>
                            </li>

                        </ul>
                    </nav>



                    {/* Sidebar Footer */}
                    <div className="mt-10 text-center">
                        <p className="text-sm text-gray-400">
                            © 2026 ShopEase. All rights reserved.
                        </p>
                    </div>

                </div>
            </div>

            {/* Cart Overlay */}
            <div
                onClick={() => setCartOpen(false)}
                className={`fixed inset-0 ${cartOpen ? "block" : "hidden"} bg-black/40 z-40`}
            />

            {/* Side slide cart panel */}
            <aside
                className={`fixed top-0 right-0 h-full duration-300 ease-in-out w-[85%] sm:w-[380px] ${cartOpen ? "translate-x-0" : "translate-x-full"} bg-white z-50 shadow-2xl flex flex-col`}
            >

                {/* Header */}
                <div className="flex items-center justify-between px-6 py-5 border-b border-gray-200">
                    <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                        <FaShoppingCart className="text-indigo-600" />
                        Your Cart

                        <span className="text-sm font-semibold bg-indigo-100 text-indigo-600 px-2 py-0.5 rounded-full">
                            {cart.length}
                        </span>
                    </h2>

                    <button
                        onClick={() => setCartOpen(false)}
                        type="button"
                        aria-label="Close cart"
                        className="w-9 h-9 flex items-center justify-center rounded-full text-gray-500 hover:bg-gray-100 hover:text-gray-900 transition-colors duration-200"
                    >
                        X
                    </button>
                </div>

                {/* Scrollable cart items */}
                <div className="flex-1 overflow-y-auto px-6 py-5 space-y-4">

                    {cart.map((item) => (
                        <div key={item.id} className="flex items-start gap-4 bg-white border border-gray-200 rounded-2xl p-3 hover:shadow-md transition-shadow duration-300">

                            <img
                                src={item.image}
                                alt={item.name}
                                className="w-20 h-20 object-cover rounded-xl"
                            />

                            <div className="flex-1">
                                <p className="text-xs text-indigo-600 font-semibold mb-0.5">
                                    {item.category}
                                </p>

                                <h3 className="text-sm font-semibold text-gray-900 mb-1">
                                    {item.name}
                                </h3>

                                {/* Quantity controls */}
                                <div className="flex items-center gap-2">
                                    <button
                                        onClick={() => deCremnet(item.id)}
                                        aria-label={`Decrease ${item.name} quantity`}
                                        className="w-7 h-7 flex items-center justify-center border border-gray-300 rounded-md text-gray-600 hover:border-indigo-600 hover:text-indigo-600 transition-colors duration-200"
                                    >
                                        −
                                    </button>

                                    <span className="text-sm font-semibold text-gray-900">
                                        {item.quantity}
                                    </span>

                                    <button
                                        onClick={() => inCrement(item.id)}
                                        aria-label={`Increase ${item.name} quantity`}
                                        className="w-7 h-7 flex items-center justify-center border border-gray-300 rounded-md text-gray-600 hover:border-indigo-600 hover:text-indigo-600 transition-colors duration-200"
                                    >
                                        +
                                    </button>
                                </div>
                            </div>

                            <div className="flex flex-col items-end justify-between h-20">
                                <button
                                    onClick={() => delCartItem(item.id)}
                                    aria-label={`Remove ${item.name}`}
                                    className="text-gray-400 hover:text-red-500 transition-colors duration-200"
                                >
                                    <FaTrash className="w-3 h-3" aria-hidden="true" />
                                </button>

                                <span className="text-sm font-bold text-gray-900">
                                    ${(item.price * item.quantity).toFixed(2)}
                                </span>
                            </div>
                        </div>
                    ))}

                    {cart.length === 0 && (
                        <p className="text-center text-gray-400 py-10">
                            Your cart is empty.
                        </p>
                    )}

                </div>

                {/* Footer: summary and checkout */}
                <div className="border-t border-gray-200 px-6 py-5 space-y-4">

                    <div className="border-t border-gray-200" />

                    {/* Total */}
                    <div className="flex items-center justify-between">
                        <span className="text-base font-bold text-gray-900">Total</span>

                        <span className="text-base font-bold text-indigo-600">
                            ${totalPrice.toFixed(2)}
                        </span>
                    </div>

                    {/* Checkout button */}
                    <NavLink
                        to="/checkoutform"
                        onClick={() => setCartOpen(false)}
                        className="w-full flex items-center justify-center gap-2 bg-indigo-600 text-white font-semibold py-3 rounded-lg hover:bg-indigo-700 transition-colors duration-200"
                    >
                        Proceed to Checkout
                        <i className="fa-solid fa-arrow-right text-sm" aria-hidden="true" />
                    </NavLink>

                    {/* Continue shopping */}
                    <button
                        type="button"
                        onClick={() => setCartOpen(false)}
                        className="w-full flex items-center justify-center gap-2 border border-gray-300 text-gray-700 font-semibold py-3 rounded-lg hover:border-indigo-600 hover:text-indigo-600 transition-colors duration-200"
                    >
                        <FaShoppingCart className="text-sm" />
                        Continue Shopping
                    </button>

                </div>
            </aside>
        </>
    );
};

export default Header;
