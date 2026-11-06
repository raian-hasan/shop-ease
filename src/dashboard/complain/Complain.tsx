import { BiSolidTrash } from "react-icons/bi";
import { complain } from "../../../db.json";
import axios from "axios";
import { toast } from "react-toastify";

export default function Complain() {

    const handleDelCom = async (id: string | number) => {

        await axios.delete(`http://localhost:3000/complain/${id}`)
        toast.error("Message Removed Successfully")

    }


    return (
        <section className="bg-white rounded-2xl border border-gray-200 p-6">

            {/* Section Header */}
            <div className="mb-6 flex items-center justify-between">
                <div>
                    <h2 className="text-xl font-bold text-gray-800">
                        Customer Complaints
                    </h2>
                    <p className="text-sm text-gray-500 mt-1">
                        List of customer complaints
                    </p>
                </div>

                {/* Message Count */}
                <div className="flex items-center gap-2 bg-indigo-50 text-indigo-600 px-4 mr-20 py-2 rounded-xl">
                    <span className="text-sm font-semibold">
                        {complain.length} Messages
                    </span>
                </div>
            </div>

            {/* Complaint List */}
            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">

                    <thead>
                        <tr className="bg-gray-50 text-gray-600 text-sm">
                            <th className="px-4 py-4 font-semibold w-16">#</th>
                            <th className="px-4 py-4 font-semibold">Full Name</th>
                            <th className="px-4 py-4 font-semibold">Email</th>
                            <th className="px-4 py-4 font-semibold">Subject</th>
                            <th className="px-4 py-4 font-semibold">Message</th>
                            <th className="px-4 py-4 font-semibold text-center">Action</th>
                        </tr>
                    </thead>

                    <tbody className="text-sm text-gray-700">

                        {complain.map((item, index) => (
                            <tr
                                key={item.id}
                                className="border-b border-gray-100 hover:bg-gray-50/70 transition-colors"
                            >
                                <td className="px-4 py-4 text-gray-400 font-medium">
                                    {index + 1}
                                </td>

                                <td className="px-4 py-4 font-semibold text-gray-800">
                                    {item.fullname}
                                </td>

                                <td className="px-4 py-4">
                                    {item.email}
                                </td>

                                <td className="px-4 py-4">
                                    {item.subject}
                                </td>

                                <td className="px-4 py-4">
                                    {item.message}
                                </td>

                                <td className="px-4 py-4">
                                    <button
                                        onClick={() => handleDelCom(item.id)}
                                        className="mx-auto flex items-center gap-2 px-3 py-2 rounded-lg bg-red-50 text-red-500 hover:bg-red-500 hover:text-white transition-all duration-200 font-medium"
                                    >
                                        <BiSolidTrash />
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}

                    </tbody>

                </table>
            </div>

        </section>

    )
}
