import SlickSlider from "react-slick";
// import { useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slider = (SlickSlider as { default?: typeof SlickSlider }).default ?? SlickSlider;

export default function ReviewSlider() {

    const settings = {
        dots: true,
        infinite: true,
        speed: 700,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        arrows: true,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                }
            }
        ]
    };

    return (
        <div className="slider-container rounded-2xl overflow-hidden">

            <Slider {...settings}>

                {/* Review Card 1 */}
                <div className="px-3">
                    <div className="bg-white p-7 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition duration-300">

                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <img
                                    src="https://i.pravatar.cc/100?img=12"
                                    alt="Customer"
                                    className="w-12 h-12 rounded-full object-cover"
                                />

                                <div>
                                    <h3 className="font-bold text-gray-800">
                                        Sarah Johnson
                                    </h3>
                                    <p className="text-xs text-gray-400">
                                        Verified Customer
                                    </p>
                                </div>
                            </div>

                            <span className="text-xs text-gray-400">
                                Nov 02, 2026
                            </span>
                        </div>

                        {/* Rating */}
                        <div className="flex items-center gap-1 mt-5 text-yellow-400 text-lg">
                            ★★★★★
                        </div>

                        {/* Review */}
                        <p className="text-gray-600 text-sm leading-7 mt-4">
                            Amazing shopping experience! The product quality is
                            excellent and delivery was super fast. Definitely
                            shopping here again.
                        </p>

                    </div>
                </div>

                {/* Review Card 2 */}
                <div className="px-3">
                    <div className="bg-white p-7 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition duration-300">

                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <img
                                    src="https://i.pravatar.cc/100?img=47"
                                    alt="Customer"
                                    className="w-12 h-12 rounded-full object-cover"
                                />

                                <div>
                                    <h3 className="font-bold text-gray-800">
                                        Michael Smith
                                    </h3>
                                    <p className="text-xs text-gray-400">
                                        Verified Customer
                                    </p>
                                </div>
                            </div>

                            <span className="text-xs text-gray-400">
                                Nov 03, 2026
                            </span>
                        </div>

                        {/* Rating */}
                        <div className="flex items-center gap-1 mt-5 text-yellow-400 text-lg">
                            ★★★★★
                        </div>

                        {/* Review */}
                        <p className="text-gray-600 text-sm leading-7 mt-4">
                            Great products at reasonable prices. The website is
                            easy to use and the customer service was very helpful.
                            Highly recommended!
                        </p>

                    </div>
                </div>

                {/* Review Card 3 */}
                <div className="px-3">
                    <div className="bg-white p-7 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition duration-300">

                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <img
                                    src="https://i.pravatar.cc/100?img=32"
                                    alt="Customer"
                                    className="w-12 h-12 rounded-full object-cover"
                                />

                                <div>
                                    <h3 className="font-bold text-gray-800">
                                        Emily Wilson
                                    </h3>
                                    <p className="text-xs text-gray-400">
                                        Verified Customer
                                    </p>
                                </div>
                            </div>

                            <span className="text-xs text-gray-400">
                                Nov 04, 2026
                            </span>
                        </div>

                        {/* Rating */}
                        <div className="flex items-center gap-1 mt-5 text-yellow-400 text-lg">
                            ★★★★☆
                        </div>

                        {/* Review */}
                        <p className="text-gray-600 text-sm leading-7 mt-4">
                            I really love the collection. Everything arrived
                            safely and looked exactly like the pictures.
                            Very satisfied with my purchase.
                        </p>

                    </div>
                </div>

                {/* Review Card 4 */}
                <div className="px-3">
                    <div className="bg-white p-7 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition duration-300">

                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <img
                                    src="https://i.pravatar.cc/100?img=44"
                                    alt="Customer"
                                    className="w-12 h-12 rounded-full object-cover"
                                />

                                <div>
                                    <h3 className="font-bold text-gray-800">
                                        James Wilson
                                    </h3>
                                    <p className="text-xs text-gray-400">
                                        Verified Customer
                                    </p>
                                </div>
                            </div>

                            <span className="text-xs text-gray-400">
                                Nov 04, 2026
                            </span>
                        </div>

                        <div className="flex items-center gap-1 mt-5 text-yellow-400 text-lg">
                            ★★★★★
                        </div>

                        <p className="text-gray-600 text-sm leading-7 mt-4">
                            Excellent quality and amazing packaging.
                            I am really happy with my purchase.
                        </p>

                    </div>
                </div>

                {/* Review Card 5 */}
                <div className="px-3">
                    <div className="bg-white p-7 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition duration-300">

                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <img
                                    src="https://i.pravatar.cc/100?img=25"
                                    alt="Customer"
                                    className="w-12 h-12 rounded-full object-cover"
                                />

                                <div>
                                    <h3 className="font-bold text-gray-800">
                                        Olivia Martin
                                    </h3>
                                    <p className="text-xs text-gray-400">
                                        Verified Customer
                                    </p>
                                </div>
                            </div>

                            <span className="text-xs text-gray-400">
                                Nov 05, 2026
                            </span>
                        </div>

                        <div className="flex items-center gap-1 mt-5 text-yellow-400 text-lg">
                            ★★★★★
                        </div>

                        <p className="text-gray-600 text-sm leading-7 mt-4">
                            The shopping process was very smooth.
                            Loved the product and fast delivery service.
                        </p>

                    </div>
                </div>

                {/* Review Card 6 */}
                <div className="px-3">
                    <div className="bg-white p-7 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition duration-300">

                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <img
                                    src="https://i.pravatar.cc/100?img=15"
                                    alt="Customer"
                                    className="w-12 h-12 rounded-full object-cover"
                                />

                                <div>
                                    <h3 className="font-bold text-gray-800">
                                        Daniel Brown
                                    </h3>
                                    <p className="text-xs text-gray-400">
                                        Verified Customer
                                    </p>
                                </div>
                            </div>

                            <span className="text-xs text-gray-400">
                                Nov 05, 2026
                            </span>
                        </div>

                        <div className="flex items-center gap-1 mt-5 text-yellow-400 text-lg">
                            ★★★★★
                        </div>

                        <p className="text-gray-600 text-sm leading-7 mt-4">
                            Beautiful collection with great prices.
                            I will definitely recommend this store.
                        </p>

                    </div>
                </div>

            </Slider>

        </div>
    );
}