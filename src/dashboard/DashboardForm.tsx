import axios from "axios";
import { useForm, type SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod"
import { toast } from "react-toastify";



type FormValues = {
    image: string;
    name: string;
    category: string;
    rating: string;
    price: number;
    oldPrice: number;
    productType: string;
}



export default function DashboardForm() {

    const schema = z.object({
        image: z
            .string()
            .min(1, "Please select a product photo.")
            .url("Please select a valid product image URL."),

        name: z
            .string()
            .trim()
            .min(3, "Product name must be at least 3 characters.")
            .max(100, "Product name cannot exceed 100 characters."),

        category: z
            .string()
            .min(1, "Please select a category.")
            .refine(
                (value) =>
                    ["Electronics", "Footwear", "Accessories", "Fashion"].includes(value),
                "Please select a valid category."
            ),

        rating: z
            .string()
            .min(1, "Please select a product rating.")
            .refine(
                (value) => ["5", "4.5", "4", "3.5", "3"].includes(value),
                "Please select a valid rating."
            ),

        price: z
            .number("Price must be a number.")
            .positive("Price must be greater than 0.")
            .max(1000000, "Price is too high."),

        oldPrice: z
            .number("Old price must be a number.")
            .positive("Old price must be greater than 0.")
            .max(1000000, "Old price is too high."),

        productType: z.
            string()
            .min(1, "Product type is required"),
    });



    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm<FormValues>({
        resolver: zodResolver(schema),

        // defaultValues: {
        //     image: "",
        //     name: "",
        //     category: "",
        //     rating: "",
        //     price: 0,
        //     oldPrice: 0,
        // },
    })


    const onSubmit: SubmitHandler<FormValues> = async (data) => {
        try {

            if (data.productType == "Featured Product") {
                await axios.post(
                    "http://localhost:3000/products",
                    data
                );
            }

            else {
                await axios.post(
                    "http://localhost:3000/newArrivals",
                    data
                );
            }




            toast.success("Product Successfuly Added")
            document.querySelector("form")?.reset();

        } catch {

            toast.error("Product Didn't Add")
        }
    };

    return (
        <div className="p-5 md:p-8 max-w-[1200px] mx-auto">

            {/* Page Title */}
            <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900">
                    Add New Product
                </h2>
                <p className="text-gray-500 text-sm mt-2">
                    Add a new product to your online store.
                </p>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">

                {/* Product Form */}

                <div className="xl:col-span-2 bg-white rounded-2xl border border-gray-200 p-6 md:p-8">

                    <h3 className="text-lg font-bold text-gray-900 mb-6">
                        Product Information
                    </h3>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

                        {/* Product Photo Selection */}
                        <div>

                            <div>
                                <label className="mb-2 block text-sm font-medium text-gray-700">
                                    Select Product Photo
                                </label>

                                <select
                                    {...register("image")}
                                    className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm outline-none focus:border-indigo-500"
                                >
                                    <option value="">Choose a product photo</option>
                                    <option value="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500">
                                        Wireless Headphones
                                    </option>
                                    <option value="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500">
                                        Classic Sneakers
                                    </option>
                                    <option value="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500">
                                        Smart Watch
                                    </option>
                                    <option value="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500">
                                        Leather Backpack
                                    </option>
                                    <option value="https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500">
                                        Classic Sunglasses
                                    </option>
                                    <option value="https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500">
                                        Men's Casual Jacket
                                    </option>
                                    <option value="https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=500">
                                        Minimalist Wrist Watch
                                    </option>
                                    <option value="https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=500">
                                        Running Shoes
                                    </option>
                                    <option value="https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=500">
                                        Product 9
                                    </option>
                                    <option value="https://images.unsplash.com/photo-1560343090-f0409e92791a?w=500">
                                        Product 10
                                    </option>
                                    <option value="https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500">
                                        Product 11
                                    </option>
                                    <option value="https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=500">
                                        Product 12
                                    </option>
                                    <option value="https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500">
                                        Product 13
                                    </option>
                                    <option value="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=500">
                                        Product 14
                                    </option>
                                    <option value="https://images.unsplash.com/photo-1608042314453-ae338d80c427?w=500">
                                        Product 15
                                    </option>
                                    <option value="https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=500">
                                        Product 16
                                    </option>
                                    <option value="https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?w=500">
                                        Product 17
                                    </option>
                                    <option value="https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=500">
                                        Product 18
                                    </option>
                                    <option value="https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=500">
                                        Product 19
                                    </option>
                                    <option value="https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500">
                                        Product 20
                                    </option>
                                    <option value="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=500">
                                        Product 21
                                    </option>
                                    <option value="https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?w=500">
                                        Product 22
                                    </option>
                                    <option value="https://images.unsplash.com/photo-1556906781-9a412961c28c?w=500">
                                        Product 23
                                    </option>
                                    <option value="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=500">
                                        Product 24
                                    </option>
                                    <option value="https://images.unsplash.com/photo-1498049794561-7780e7231661?w=500">
                                        Product 25
                                    </option>
                                    <option value="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500">
                                        Product 26
                                    </option>
                                    <option value="https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=500">
                                        Product 27
                                    </option>
                                    <option value="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500">
                                        Product 28
                                    </option>
                                    <option value="https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?w=500">
                                        Product 29
                                    </option>
                                    <option value="https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500">
                                        Product 30
                                    </option>
                                    <option value="https://images.unsplash.com/photo-1527814050087-3793815479db?w=500">
                                        Product 31
                                    </option>
                                    <option value="https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500">
                                        Product 32
                                    </option>
                                    <option value="https://images.unsplash.com/photo-1593642532842-98d0fd5ebc1a?w=500">
                                        Product 33
                                    </option>
                                    <option value="https://images.unsplash.com/photo-1583394838336-acd977736f90?w=500">
                                        Product 34
                                    </option>
                                    <option value="https://images.unsplash.com/photo-1592890288564-76628a30a657?w=500">
                                        Product 35
                                    </option>
                                    <option value="https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=500">
                                        Product 36
                                    </option>
                                    <option value="https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=500">
                                        Product 37
                                    </option>
                                    <option value="https://images.unsplash.com/photo-1526738549149-8e07eca6c147?w=500">
                                        Product 38
                                    </option>
                                    <option value="https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500">
                                        Product 39
                                    </option>
                                    <option value="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500">
                                        Product 40
                                    </option>
                                    <option value="https://images.unsplash.com/photo-1550009158-9ebf69173e03?w=500">
                                        Product 41
                                    </option>
                                    <option value="https://images.unsplash.com/photo-1468495244123-6c6c332eeece?w=500">
                                        Product 42
                                    </option>
                                    <option value="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500">
                                        Product 43
                                    </option>
                                    <option value="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500">
                                        Product 44
                                    </option>
                                    <option value="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500">
                                        Product 45
                                    </option>
                                    <option value="https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=500">
                                        Product 46
                                    </option>
                                    <option value="https://images.unsplash.com/photo-1560343090-f0409e92791a?w=500">
                                        Product 47
                                    </option>
                                    <option value="https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500">
                                        Product 48
                                    </option>
                                    <option value="https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=500">
                                        Product 49
                                    </option>
                                    <option value="https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500">
                                        Product 50
                                    </option>
                                </select>
                                <span className="text-xs text-red-500">{errors.image?.message}</span>
                            </div>

                        </div>

                        {/* Product Name */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Product Name
                            </label>
                            <input
                                {...register("name")}
                                type="text"
                                placeholder="Enter product name"
                                className="w-full px-4 py-3 border border-gray-200 rounded-xl outline-none focus:border-indigo-500 transition"
                            />
                            <span className="text-xs text-red-500">{errors.name?.message}</span>
                        </div>

                        {/* Category and Rating */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                            {/* Category */}
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Category
                                </label>
                                <select {...register("category")} className="w-full px-4 py-3 border border-gray-200 rounded-xl outline-none focus:border-indigo-500 bg-white">
                                    <option value="">Select Category</option>
                                    <option value="Electronics">Electronics</option>
                                    <option value="Footwear">Footwear</option>
                                    <option value="Accessories">Accessories</option>
                                    <option value="Fashion">Fashion</option>
                                </select>
                                <span className="text-xs text-red-500">{errors.category?.message}</span>
                            </div>

                            {/* Rating */}
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Rating
                                </label>
                                <select {...register("rating")} className="w-full px-4 py-3 border border-gray-200 rounded-xl outline-none focus:border-indigo-500 bg-white">
                                    <option value="">Select Rating</option>
                                    <option value="5">5.0 Stars</option>
                                    <option value="4.5">4.5 Stars</option>
                                    <option value="4">4.0 Stars</option>
                                    <option value="3.5">3.5 Stars</option>
                                    <option value="3">3.0 Stars</option>
                                </select>
                                <span className="text-xs text-red-500">{errors.rating?.message}</span>
                            </div>

                        </div>

                        {/* Price */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Product Price ($)
                            </label>
                            <input
                                {...register("price", { valueAsNumber: true })}

                                type="number"
                                placeholder="Enter product price"
                                className="w-full px-4 py-3 border border-gray-200 rounded-xl outline-none focus:border-indigo-500 transition"
                            />
                            <span className="text-xs text-red-500">{errors.price?.message}</span>
                        </div>

                        {/* Old Price */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Old Price ($)
                            </label>
                            <input
                                {...register("oldPrice", { valueAsNumber: true })}

                                type="number"
                                placeholder="Enter old price"
                                className="w-full px-4 py-3 border border-gray-200 rounded-xl outline-none focus:border-indigo-500 transition"
                            />
                            <span className="text-xs text-red-500">{errors.oldPrice?.message}</span>
                        </div>

                        {/* Product Type */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Product Type
                            </label>

                            <select
                                {...register("productType")}
                                className="w-full px-4 py-3 border border-gray-200 rounded-xl outline-none focus:border-indigo-500 bg-white"
                            >
                                <option value="">Select Product Type</option>
                                <option value="New Arrival">New Arrival Product</option>
                                <option value="Featured Product">Featured Product</option>
                            </select>

                            <span className="text-xs text-red-500">
                                {errors.productType?.message}
                            </span>
                        </div>

                        {/* Buttons */}
                        <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-gray-100">

                            <button
                                disabled={isSubmitting}
                                type="submit"
                                className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-8 py-3 rounded-xl transition"
                            >
                                + Add Product
                            </button>

                            <button
                                onClick={() => reset()}
                                type="reset"
                                className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold px-8 py-3 rounded-xl transition"
                            >
                                Reset Form
                            </button>

                        </div>

                    </form>
                </div>


                {/* Product Preview */}
                <div>
                    <div className="bg-white rounded-2xl border border-gray-200 p-6">
                        <h3 className="text-lg font-bold text-gray-900 mb-5">
                            Product Preview
                        </h3>

                        <div className="rounded-xl overflow-hidden border border-gray-100">
                            <div className="h-52 bg-gray-100 flex items-center justify-center">
                                <span className="text-gray-400 text-sm">
                                    Product Image Preview
                                </span>
                            </div>

                            <div className="p-5">
                                <span className="text-xs font-semibold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">
                                    Category
                                </span>

                                <h3 className="text-lg font-bold text-gray-900 mt-4">
                                    Product Name
                                </h3>

                                <div className="flex items-center gap-2 mt-3">
                                    <span className="text-yellow-500">★★★★★</span>
                                    <span className="text-xs text-gray-400">
                                        (4.5)
                                    </span>
                                </div>

                                <div className="flex items-center justify-between mt-5">
                                    <span className="text-xl font-bold text-indigo-600">
                                        $0.00
                                    </span>

                                    <span className="text-xs text-gray-400">
                                        New Product
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Tips */}
                    <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-5 mt-5">
                        <h3 className="text-sm font-bold text-indigo-900">
                            Product Tips
                        </h3>
                        <p className="text-xs text-indigo-700 leading-relaxed mt-2">
                            Use a high-quality product image and
                            provide an accurate product name,
                            category and price.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    )
}
