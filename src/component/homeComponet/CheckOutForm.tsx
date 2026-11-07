
import { motion, type Variants } from "motion/react";
import { useEffect } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, type SubmitHandler } from "react-hook-form";
import { useCart } from "../../../data/data.store";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

type FormValues = {
    fullname: string;
    phone: string;
    email: string;
    address: string;
    deliveryArea: string;
    paymentMethod: string;
};

const containerVariants: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.12,
        },
    },
};

const itemVariants: Variants = {
    hidden: {
        opacity: 0,
        y: 25,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: "easeOut",
        },
    },
};

export default function CheckOutForm() {
    const { cart, clearCart } = useCart();
    const navigate = useNavigate();

    const schema = z.object({
        fullname: z.string().min(1, "Full name is required"),
        phone: z
            .string()
            .trim()
            .min(7, "Phone number is too short")
            .max(20, "Phone number is too long")
            .regex(/^\+?[0-9\s()-]+$/, "Enter a valid phone number"),
        email: z.string().email("Enter a valid email address"),
        address: z.string().min(1, "Delivery address is required"),
        deliveryArea: z.string().min(1, "Select your delivery area"),
        paymentMethod: z.string().min(1, "Select a payment method"),
    });

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<FormValues>({
        resolver: zodResolver(schema),
    });

    const orderedPro = cart.map((item) => ({
        productId: item.id,
        productQuantity: item.quantity,
        image: item.image,
    }));

    const totalPrice = cart.reduce((total, current) => {
        return total + current.price * current.quantity;
    }, 0);

    const onSubmit: SubmitHandler<FormValues> = async (data) => {
        const finalOrder = {
            ...data,
            products: orderedPro,
            totalPrice: totalPrice,
            orderDate: new Date().toLocaleString("en-GB", {
                day: "2-digit",
                month: "short",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                hour12: true,
            }),
            status: "Pending",
        };

        try {
            await axios.post("http://localhost:3000/order", finalOrder);
            navigate("/order-success");
            clearCart();
        } catch {
            toast.error("Order isn't Placed");
        }

        document.querySelector("form")?.reset();
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <section className="min-h-screen bg-gray-50 py-12 px-4">
            <div className="max-w-3xl mx-auto">

                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-center mb-10"
                >
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                        Checkout
                    </h1>
                    <p className="text-gray-500 mt-2">
                        Complete your order by providing your delivery information.
                    </p>
                </motion.div>

                {/* Checkout Form */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, amount: 0.15 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-10"
                >

                    <div className="mb-8">
                        <h2 className="text-xl font-semibold text-gray-900">
                            Delivery Information
                        </h2>
                        <p className="text-sm text-gray-500 mt-1">
                            Please enter your personal details below.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

                        {/* Form Fields Animation */}
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.15 }}
                            className="space-y-6"
                        >

                            {/* Customer Name */}
                            <motion.div variants={itemVariants}>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Full Name <span className="text-red-500">*</span>
                                </label>
                                <input
                                    {...register("fullname")}
                                    type="text"
                                    placeholder="Enter your full name"
                                    className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 transition"
                                />
                                <span className="text-xs text-red-400">
                                    {errors.fullname?.message}
                                </span>
                            </motion.div>

                            {/* Phone & Email */}
                            <motion.div
                                variants={containerVariants}
                                className="grid grid-cols-1 md:grid-cols-2 gap-5"
                            >
                                <motion.div variants={itemVariants}>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Phone Number <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        {...register("phone")}
                                        type="tel"
                                        placeholder="01XXXXXXXXX"
                                        className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 transition"
                                    />
                                    <span className="text-xs text-red-400">
                                        {errors.phone?.message}
                                    </span>
                                </motion.div>

                                <motion.div variants={itemVariants}>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Email Address
                                    </label>
                                    <input
                                        {...register("email")}
                                        type="email"
                                        placeholder="Enter your email"
                                        className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 transition"
                                    />
                                    <span className="text-xs text-red-400">
                                        {errors.email?.message}
                                    </span>
                                </motion.div>
                            </motion.div>

                            {/* Delivery Address */}
                            <motion.div variants={itemVariants}>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Delivery Address <span className="text-red-500">*</span>
                                </label>
                                <textarea
                                    {...register("address")}
                                    rows={4}
                                    placeholder="House, Road, Area, City..."
                                    className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none resize-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 transition"
                                ></textarea>
                                <span className="text-xs text-red-400">
                                    {errors.address?.message}
                                </span>
                            </motion.div>

                            {/* Delivery Area */}
                            <motion.div variants={itemVariants}>
                                <label className="block text-sm font-medium text-gray-700 mb-3">
                                    Delivery Area <span className="text-red-500">*</span>
                                </label>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <label className="flex items-center gap-3 border border-gray-200 rounded-xl p-4 cursor-pointer hover:border-indigo-500 transition">
                                        <input
                                            {...register("deliveryArea")}
                                            value="Inside Dhaka"
                                            type="radio"
                                            className="accent-indigo-600"
                                        />
                                        <span className="text-sm font-medium text-gray-700">
                                            Inside Dhaka
                                        </span>
                                    </label>

                                    <label className="flex items-center gap-3 border border-gray-200 rounded-xl p-4 cursor-pointer hover:border-indigo-500 transition">
                                        <input
                                            {...register("deliveryArea")}
                                            value="Outside Dhaka"
                                            type="radio"
                                            className="accent-indigo-600"
                                        />
                                        <span className="text-sm font-medium text-gray-700">
                                            Outside Dhaka
                                        </span>
                                    </label>
                                </div>

                                <span className="text-xs text-red-400">
                                    {errors.deliveryArea?.message}
                                </span>
                            </motion.div>

                            {/* Payment Method */}
                            <motion.div variants={itemVariants}>
                                <label className="block text-sm font-medium text-gray-700 mb-3">
                                    Payment Method <span className="text-red-500">*</span>
                                </label>

                                <label className="flex items-center gap-3 border border-indigo-200 bg-indigo-50/50 rounded-xl p-4 cursor-pointer">
                                    <input
                                        {...register("paymentMethod")}
                                        value="Cash on Delivery"
                                        type="radio"
                                        defaultChecked
                                        className="accent-indigo-600"
                                    />

                                    <div>
                                        <p className="text-sm font-semibold text-gray-800">
                                            Cash on Delivery
                                        </p>
                                        <p className="text-xs text-gray-500 mt-1">
                                            Pay when your order arrives.
                                        </p>
                                    </div>
                                </label>

                                <span className="text-xs text-red-400">
                                    {errors.paymentMethod?.message}
                                </span>
                            </motion.div>

                        </motion.div>

                        {/* Submit Button */}
                        <motion.div
                            initial={{ opacity: 0, y: 25 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.2 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            className="pt-4"
                        >
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.97 }}
                                disabled={isSubmitting}
                                type="submit"
                                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-4 rounded-xl transition duration-300 shadow-lg shadow-indigo-100 disabled:opacity-60"
                            >
                                {isSubmitting ? "Placing Order..." : "Place Order"}
                            </motion.button>
                        </motion.div>

                    </form>
                </motion.div>

                {/* Footer Note */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.5 }}
                    transition={{ duration: 0.6 }}
                    className="text-center text-sm text-gray-400 mt-6"
                >
                    Thank you for shopping with ShopEase!
                </motion.p>

            </div>
        </section>
    );
}
