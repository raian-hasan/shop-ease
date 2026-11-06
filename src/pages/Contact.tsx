
import { motion } from "motion/react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { toast } from "react-toastify";

type FormValues = {
    fullname: string;
    email: string;
    subject: string;
    message: string;
};

function Contact() {
    const schema = z.object({
        fullname: z
            .string()
            .trim()
            .min(3, "Full name must be at least 3 characters")
            .max(50, "Full name cannot exceed 50 characters"),

        email: z
            .string()
            .trim()
            .email("Please enter a valid email address")
            .max(100, "Email cannot exceed 100 characters"),

        subject: z
            .string()
            .trim()
            .min(5, "Subject must be at least 5 characters")
            .max(100, "Subject cannot exceed 100 characters"),

        message: z
            .string()
            .trim()
            .min(8, "Message must be at least 8 characters")
            .max(1000, "Message cannot exceed 1000 characters"),
    });

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<FormValues>({
        resolver: zodResolver(schema),
    });

    const onSubmit: SubmitHandler<FormValues> = async (data) => {
        try {
            await axios.post("http://localhost:3000/complain", data);
            toast.success("Message Successfully Sent");
            document.querySelector("form")?.reset();
        } catch {
            toast.error("Message Couldn't be Sent");
        }
    };

    return (
        <section className="bg-[#F8F7F4] min-h-screen py-20">
            <div className="max-w-[1200px] mx-auto px-5">

                {/* Page Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-center max-w-2xl mx-auto mb-16"
                >
                    <span className="text-indigo-600 font-semibold text-sm uppercase tracking-[3px]">
                        Get In Touch
                    </span>

                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-5">
                        We'd Love To <span className="text-indigo-600">Hear From You</span>
                    </h1>

                    <p className="text-gray-500 leading-relaxed">
                        Have a question, suggestion, or need help with your order?
                        Our team is always here to help you.
                    </p>
                </motion.div>

                {/* Contact Content */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

                    {/* Contact Information */}
                    <motion.div
                        initial={{ opacity: 0, x: -60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, amount: 0.2 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="bg-gray-900 text-white rounded-2xl p-8 md:p-10"
                    >
                        <h2 className="text-2xl font-bold mb-4">
                            Contact Information
                        </h2>

                        <p className="text-gray-400 leading-relaxed mb-10">
                            Feel free to reach out to us through any of the
                            following contact details.
                        </p>

                        <div className="space-y-8">

                            {/* Phone */}
                            <div className="flex items-start gap-5">
                                <div className="w-12 h-12 shrink-0 rounded-xl bg-indigo-600 flex items-center justify-center text-xl">
                                    ☎
                                </div>
                                <div>
                                    <h3 className="font-semibold mb-1">Phone</h3>
                                    <p className="text-gray-400 text-sm">
                                        +880 1234-567890
                                    </p>
                                </div>
                            </div>

                            {/* Email */}
                            <div className="flex items-start gap-5">
                                <div className="w-12 h-12 shrink-0 rounded-xl bg-indigo-600 flex items-center justify-center text-xl">
                                    ✉
                                </div>
                                <div>
                                    <h3 className="font-semibold mb-1">Email</h3>
                                    <p className="text-gray-400 text-sm">
                                        support@example.com
                                    </p>
                                </div>
                            </div>

                            {/* Address */}
                            <div className="flex items-start gap-5">
                                <div className="w-12 h-12 shrink-0 rounded-xl bg-indigo-600 flex items-center justify-center text-xl">
                                    📍
                                </div>
                                <div>
                                    <h3 className="font-semibold mb-1">Address</h3>
                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        123 Shopping Street, Dhaka,
                                        Bangladesh
                                    </p>
                                </div>
                            </div>

                            {/* Working Hours */}
                            <div className="flex items-start gap-5">
                                <div className="w-12 h-12 shrink-0 rounded-xl bg-indigo-600 flex items-center justify-center text-xl">
                                    ◷
                                </div>
                                <div>
                                    <h3 className="font-semibold mb-1">Working Hours</h3>
                                    <p className="text-gray-400 text-sm">
                                        Saturday - Thursday
                                    </p>
                                    <p className="text-gray-400 text-sm">
                                        9:00 AM - 8:00 PM
                                    </p>
                                </div>
                            </div>

                        </div>

                        {/* Social Links */}
                        <div className="border-t border-gray-700 mt-10 pt-8">
                            <h3 className="font-semibold mb-5">
                                Follow Us
                            </h3>

                            <div className="flex items-center gap-3">
                                <a href="#" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-indigo-600 transition flex items-center justify-center">
                                    f
                                </a>
                                <a href="#" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-indigo-600 transition flex items-center justify-center">
                                    𝕏
                                </a>
                                <a href="#" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-indigo-600 transition flex items-center justify-center">
                                    ◎
                                </a>
                                <a href="#" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-indigo-600 transition flex items-center justify-center">
                                    in
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form UI */}
                    <motion.div
                        initial={{ opacity: 0, x: 60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, amount: 0.2 }}
                        transition={{
                            duration: 0.8,
                            delay: 0.15,
                            ease: "easeOut",
                        }}
                        className="bg-white rounded-2xl p-8 md:p-10 shadow-sm border border-gray-100"
                    >
                        <h2 className="text-2xl font-bold text-gray-900 mb-3">
                            Send Us A Message
                        </h2>

                        <p className="text-gray-500 text-sm mb-8">
                            Fill out the form below and we'll get back to you.
                        </p>

                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

                            {/* Name */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Your Name
                                </label>
                                <input
                                    {...register("fullname")}
                                    type="text"
                                    placeholder="Enter your name"
                                    className={`w-full px-4 py-3 rounded-xl border border-gray-200 outline-none ${errors.fullname ? "border-red-500" : "focus:border-indigo-500"} transition`}
                                />
                                <span className="text-xs text-red-400">
                                    {errors.fullname?.message}
                                </span>
                            </div>

                            {/* Email */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Email Address
                                </label>
                                <input
                                    {...register("email")}
                                    type="email"
                                    placeholder="Enter your email"
                                    className={`w-full px-4 py-3 rounded-xl border border-gray-200 outline-none ${errors.email ? "border-red-500" : "focus:border-indigo-500"} transition`}
                                />
                                <span className="text-xs text-red-400">
                                    {errors.email?.message}
                                </span>
                            </div>

                            {/* Subject */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Subject
                                </label>
                                <input
                                    {...register("subject")}
                                    type="text"
                                    placeholder="What is this about?"
                                    className={`w-full px-4 py-3 rounded-xl border border-gray-200 outline-none ${errors.subject ? "border-red-500" : "focus:border-indigo-500"} transition`}
                                />
                                <span className="text-xs text-red-400">
                                    {errors.subject?.message}
                                </span>
                            </div>

                            {/* Message */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Message
                                </label>
                                <textarea
                                    {...register("message")}
                                    rows={5}
                                    placeholder="Write your message here..."
                                    className={`w-full px-4 py-3 rounded-xl border border-gray-200 outline-none ${errors.message ? "border-red-500" : "focus:border-indigo-500"} transition resize-none`}
                                ></textarea>
                                <span className="text-xs text-red-400">
                                    {errors.message?.message}
                                </span>
                            </div>

                            {/* Submit Button */}
                            <button
                                disabled={isSubmitting}
                                type="submit"
                                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-4 rounded-xl transition duration-300 disabled:opacity-60"
                            >
                                {isSubmitting ? "Sending..." : "Send Message →"}
                            </button>

                        </form>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}

export default Contact;
