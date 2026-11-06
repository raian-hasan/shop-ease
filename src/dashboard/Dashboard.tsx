import { NavLink, Outlet } from "react-router";







function Dashboard() {




    return (
        <div className="min-h-screen bg-gray-100 flex">

            {/* Sidebar */}
            <aside className="w-64 bg-gray-950 text-white min-h-screen p-6 hidden md:block">
                <div className="mb-12">
                    <h1 className="text-2xl font-bold tracking-wide">
                        Shop<span className="text-[#4F39F6]">Ease</span>
                    </h1>
                    <p className="text-gray-500 text-xs mt-2">
                        ADMIN DASHBOARD
                    </p>
                </div>

                <p className="text-gray-500 text-xs font-semibold uppercase tracking-widest mb-4">
                    Menu
                </p>

                <nav>
                    <ul className="space-y-2">

                        {/* <li>
                            <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-xl bg-indigo-600 text-white font-medium">
                                <span>▦</span>
                                Overview
                            </a>
                        </li> */}

                        <li>
                            <NavLink to="/dashboard" className={({ isActive }) => `flex items-center gap-3 px-4 py-3 rounded-xl text-gray-400 ${isActive
                                ? "bg-indigo-600 text-white border-indigo-600"
                                : "border-gray-200 hover:text-white text-gray-400 hover:bg-gray-800"
                                } transition`}>
                                <span>＋</span>
                                Add Product
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to="/productlist" className={({ isActive }) => `flex items-center gap-3 px-4 py-3 rounded-xl text-gray-400 ${isActive
                                ? "bg-indigo-600 text-white border-indigo-600"
                                : "border-gray-200 hover:text-white text-gray-400 hover:bg-gray-800"
                                } transition`}>
                                <span>▤</span>
                                Product List
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to="/complain" className={({ isActive }) => `flex items-center gap-3 px-4 py-3 rounded-xl text-gray-400 ${isActive
                                ? "bg-indigo-600 text-white border-indigo-600"
                                : "border-gray-200 hover:text-white text-gray-400 hover:bg-gray-800"
                                } transition`}>
                                <span>◈</span>
                                Complain
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to="/order-list" className={({ isActive }) => `flex items-center gap-3 px-4 py-3 rounded-xl text-gray-400 ${isActive
                                ? "bg-indigo-600 text-white border-indigo-600"
                                : "border-gray-200 hover:text-white text-gray-400 hover:bg-gray-800"
                                } transition`}>
                                <span>◈</span>
                                Orders
                            </NavLink>
                        </li>

                    </ul>
                </nav>

                <div className="border-t border-gray-800 mt-10 pt-6">
                    <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-400 hover:bg-gray-800 hover:text-white transition">
                        <span>⚙</span>
                        Settings
                    </a>
                </div>

                <div className="mt-20 bg-gray-900 rounded-xl p-4">
                    <p className="text-sm font-semibold">Need Help?</p>
                    <p className="text-xs text-gray-500 mt-2">
                        Contact our support team for assistance.
                    </p>
                    <a href="#" className="text-indigo-400 text-xs font-semibold mt-3 inline-block">
                        Get Support →
                    </a>
                </div>
            </aside>

            {/* Main Dashboard */}
            <main className="flex-1 min-w-0">

                {/* Header */}
                <header className="bg-white border-b border-gray-200 px-5 md:px-8 py-5 flex items-center justify-between">
                    <div>
                        <h2 className="text-xl font-bold text-gray-900">
                            Dashboard
                        </h2>
                        <p className="text-gray-500 text-sm mt-1">
                            Manage your store products
                        </p>
                    </div>

                    <div className="flex items-center gap-4">
                        <NavLink to="/" className="flex items-center gap-2 bg-gray-100 hover:bg-indigo-50 text-gray-700 hover:text-indigo-600 px-4 py-2.5 rounded-lg text-sm font-semibold transition">
                            <span>⌂</span>
                            Home
                        </NavLink>

                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 font-bold">
                                A
                            </div>
                            <div className="hidden sm:block">
                                <p className="text-sm font-semibold text-gray-800">
                                    Admin
                                </p>
                                <p className="text-xs text-gray-500">
                                    Store Manager
                                </p>
                            </div>
                        </div>
                    </div>
                </header>


                <Outlet />
            </main>
        </div >

    );
}

export default Dashboard;
