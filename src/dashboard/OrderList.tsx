import { FaTrash } from "react-icons/fa";
import { order } from "../../db.json";
import axios from "axios";
import { toast } from "react-toastify";


export default function OrderList() {


    const handleOrderDel = async (id: string) => {

        await axios.delete(`http://localhost:3000/order/${id}`);
        toast.success("Order Removed")

    }



    return (
        <section className="bg-white rounded-2xl border border-gray-100 p-4 sm:p-5">

            {/* Section Heading */}
            <div className="mb-5">
                <h2 className="text-xl font-bold text-gray-800">
                    Recent Orders
                </h2>
                <p className="text-sm text-gray-500 mt-1">
                    List of customer orders
                </p>
            </div>

            {/* Order List - 4 Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3">

                {order.map((item, index) => (
                    <div
                        key={item.id}
                        className="border border-gray-200 rounded-xl overflow-hidden"
                    >
                        {/* Order Header */}
                        <div className="flex flex-wrap items-center justify-between gap-2 p-3 bg-gray-50 border-b border-gray-200">
                            <div className="flex items-center gap-2">
                                <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-indigo-100 text-indigo-600 text-sm font-bold">
                                    {index + 1}
                                </span>

                                <div>
                                    <h3 className="text-sm font-bold text-gray-800">
                                        {item.fullname}
                                    </h3>

                                    <p className="text-[10px] text-gray-500">
                                        Order ID: {item.id}
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-2">
                                <span className="px-2 py-1 text-[10px] font-semibold rounded-full bg-yellow-100 text-yellow-700">
                                    {item.status}
                                </span>

                                <button
                                    onClick={() => handleOrderDel(item.id)}
                                    className="w-8 h-8 flex items-center justify-center rounded-lg bg-red-50 text-red-500 hover:bg-red-500 hover:text-white transition-all duration-300"
                                >
                                    <FaTrash size={13} />
                                </button>
                            </div>
                        </div>

                        {/* Customer Information */}
                        <div className="p-3">
                            <h4 className="text-sm font-bold text-gray-800 mb-2">
                                Customer Information
                            </h4>

                            <div className="grid grid-cols-1 gap-2 text-xs">
                                <p className="text-gray-600">
                                    <span className="font-semibold text-gray-800">
                                        Phone:
                                    </span>{" "}
                                    {item.phone}
                                </p>

                                <p className="text-gray-600">
                                    <span className="font-semibold text-gray-800">
                                        Payment:
                                    </span>{" "}
                                    {item.paymentMethod}
                                </p>

                                <p className="text-gray-600 break-words">
                                    <span className="font-semibold text-gray-800">
                                        Address:
                                    </span>{" "}
                                    {item.address}
                                </p>

                                <p className="text-gray-600">
                                    <span className="font-semibold text-gray-800">
                                        Order Date:
                                    </span>{" "}
                                    {item.orderDate}
                                </p>
                            </div>

                            {/* Ordered Products */}
                            <div className="mt-4">
                                <h4 className="text-sm font-bold text-gray-800 mb-2">
                                    Ordered Products
                                </h4>

                                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                                    {item.products.map((product) => (
                                        <div
                                            key={product.productId}
                                            className="p-2 rounded-lg bg-gray-50 border border-gray-100"
                                        >
                                            <img
                                                src={product.image}
                                                alt="Product"
                                                className="w-full h-16 object-cover rounded-md"
                                            />

                                            <p className="text-[10px] font-semibold text-gray-800 break-all mt-2">
                                                ID: {product.productId}
                                            </p>

                                            <p className="text-[10px] text-gray-500 mt-1">
                                                Quantity: {product.productQuantity}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Total Price */}
                            <div className="mt-4 pt-3 border-t border-gray-200 flex items-center justify-between">
                                <span className="text-xs font-semibold text-gray-700">
                                    Total Amount
                                </span>

                                <span className="text-lg font-bold text-indigo-600">
                                    ${item.totalPrice}
                                </span>
                            </div>
                        </div>
                    </div>
                ))}

            </div>
        </section>
    )
}
