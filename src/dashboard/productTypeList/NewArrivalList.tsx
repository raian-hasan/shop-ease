import axios from "axios";
import { newArrivals } from "../../../db.json";
import { toast } from "react-toastify";


export default function NewArrivalList() {

    const handleDelList = async (id: string | number) => {

        try {
            await axios.delete(`http://localhost:3000/newArrivals/${id}`);
            toast.success("Product Successfully Deleted")
        } catch {
            toast.error("Product Cannot Delete")
        }

    }


    return (
        <div className="overflow-hidden rounded-xl bg-white shadow-sm">
            <div className="overflow-x-auto">
                <table className="w-full min-w-[850px] text-left">

                    {/* Table Header */}
                    <thead className="border-b bg-gray-50">
                        <tr className="text-sm text-gray-500">
                            <th className="px-6 py-4 font-semibold">#</th>
                            <th className="px-6 py-4 font-semibold">Product</th>
                            <th className="px-6 py-4 font-semibold">Category</th>
                            <th className="px-6 py-4 font-semibold">Rating</th>
                            <th className="px-6 py-4 font-semibold">Price</th>
                            <th className="px-6 py-4 font-semibold">Old Price</th>
                            <th className="px-6 py-4 text-center font-semibold">Actions</th>
                        </tr>
                    </thead>

                    {/* Product List */}
                    <tbody className="divide-y divide-gray-100">
                        {newArrivals.map((item, index) => (
                            <tr key={item.id} className="transition hover:bg-gray-50">

                                {/* Serial Number */}
                                <td className="px-6 py-4 text-sm font-medium text-gray-500">
                                    {index + 1}
                                </td>

                                {/* Product */}
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-3">
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="h-12 w-12 rounded-lg object-cover"
                                        />
                                        <span className="font-semibold text-gray-800">
                                            {item.name}
                                        </span>
                                    </div>
                                </td>

                                {/* Category */}
                                <td className="px-6 py-4 text-sm text-gray-600">
                                    {item.category}
                                </td>

                                {/* Rating */}
                                <td className="px-6 py-4 text-sm">
                                    ⭐ {item.rating}
                                </td>

                                {/* Price */}
                                <td className="px-6 py-4 font-semibold text-gray-800">
                                    ${item.price}
                                </td>

                                {/* Old Price */}
                                <td className="px-6 py-4 text-sm text-gray-400 line-through">
                                    ${item.oldPrice}
                                </td>

                                {/* Actions */}
                                <td className="px-6 py-4">
                                    <div className="flex justify-center gap-2">
                                        <button
                                            className="rounded-md bg-blue-50 px-3 py-2 text-xs font-semibold text-blue-600 hover:bg-blue-100"
                                        >
                                            Edit
                                        </button>

                                        <button
                                            onClick={() => handleDelList(item.id)}
                                            className="rounded-md bg-red-50 px-3 py-2 text-xs font-semibold text-red-600 hover:bg-red-100"
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>

                </table>
            </div>



        </div>
    )
}
