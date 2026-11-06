import { NavLink, Outlet } from "react-router";
import { products } from "../../db.json";






export default function ProductList() {



    return (

        <div className="min-h-screen bg-gray-100 p-6">
            <div className="mx-auto max-w-7xl">
                {/* Header */}
                <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-900">Product List</h1>
                        <p className="mt-1 text-sm text-gray-500">Manage all your store products</p>
                    </div>


                </div>

                {/* Stats */}
                <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
                    <div className="rounded-xl bg-white p-5 shadow-sm">
                        <p className="text-sm text-gray-500">Total Products</p>
                        <h2 className="mt-2 text-2xl font-bold text-gray-900">{products.length}</h2>
                    </div>
                    <div className="rounded-xl bg-white p-5 shadow-sm">
                        <p className="text-sm text-gray-500">Categories</p>
                        <h2 className="mt-2 text-2xl font-bold text-gray-900">4</h2>
                    </div>
                    <div className="rounded-xl bg-white p-5 shadow-sm">
                        <p className="text-sm text-gray-500">Average Rating</p>
                        <h2 className="mt-2 text-2xl font-bold text-gray-900">4.5 ⭐</h2>
                    </div>
                </div>

                {/* Search and Filter */}
                <div className="mb-5 flex flex-wrap items-center justify-between gap-3 rounded-xl bg-white p-4 shadow-sm">
                    <input
                        type="text"
                        placeholder="Search products..."
                        className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm outline-none focus:border-gray-900 sm:w-72"
                    />

                    <div>
                        <ul className="flex flex-wrap items-center gap-2">

                            <li>
                                <NavLink
                                    to="/productlist"
                                    className={({ isActive }) =>
                                        `rounded-md border px-3 py-2 text-xs font-medium transition ${isActive
                                            ? "bg-indigo-600 text-white border-indigo-600"
                                            : "border-gray-200 text-gray-700 hover:bg-indigo-50"
                                        }`
                                    }
                                >
                                    Featured Product
                                </NavLink>
                            </li>

                            <li>
                                <NavLink
                                    to="/newarrivallist"
                                    className={({ isActive }) =>
                                        `rounded-md border px-3 py-2 text-xs font-medium transition ${isActive
                                            ? "bg-indigo-600 text-white border-indigo-600"
                                            : "border-gray-200 text-gray-700 hover:bg-indigo-50"
                                        }`
                                    }
                                >
                                    New Arrival
                                </NavLink>
                            </li>

                            <li>
                                <NavLink
                                    to="/accessories"
                                    className={({ isActive }) =>
                                        `rounded-md border px-3 py-2 text-xs font-medium transition ${isActive
                                            ? "bg-indigo-600 text-white border-indigo-600"
                                            : "border-gray-200 text-gray-700 hover:bg-indigo-50"
                                        }`
                                    }
                                >
                                    Accessories
                                </NavLink>
                            </li>

                            <li>
                                <NavLink
                                    to="/kids"
                                    className={({ isActive }) =>
                                        `rounded-md border px-3 py-2 text-xs font-medium transition ${isActive
                                            ? "bg-indigo-600 text-white border-indigo-600"
                                            : "border-gray-200 text-gray-700 hover:bg-indigo-50"
                                        }`
                                    }
                                >
                                    Kids
                                </NavLink>
                            </li>

                        </ul>
                    </div>
                </div>

                {/* Product Table */}
                <Outlet />


            </div>
        </div>

    )
}
