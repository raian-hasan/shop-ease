import SliderImport from "react-slick";


const Slider = (SliderImport as { default?: typeof SliderImport }).default ?? SliderImport

export default function SimpleSlider() {
    const settings = {
        infinite: true,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        fade: false,
        rtl: true,
        pauseOnHover: true
    };
    return (
        <div className="slider-container rounded-2xl overflow-hidden">
            <Slider {...settings}>

                {/* Slide 1 */}
                <div className="relative">
                    <div className="absolute -top-6 -left-6 w-24 h-24 bg-indigo-200 rounded-full blur-2xl opacity-60"></div>
                    <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-purple-200 rounded-full blur-2xl opacity-60"></div>
                    <img
                        src="https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=400"
                        alt="Product 1"
                        className="relative w-full h-[400px] object-cover rounded-2xl"
                    />
                </div>

                {/* Slide 2 */}
                <div className="relative">
                    <div className="absolute -top-6 -left-6 w-24 h-24 bg-indigo-200 rounded-full blur-2xl opacity-60"></div>
                    <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-purple-200 rounded-full blur-2xl opacity-60"></div>
                    <img
                        src="https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400"
                        alt="Product 2"
                        className="relative w-full h-[400px] object-cover rounded-2xl"
                    />
                </div>

                {/* Slide 3 */}
                <div className="relative">
                    <div className="absolute -top-6 -left-6 w-24 h-24 bg-indigo-200 rounded-full blur-2xl opacity-60"></div>
                    <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-purple-200 rounded-full blur-2xl opacity-60"></div>
                    <img
                        src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400"
                        alt="Product 3"
                        className="relative w-full h-[400px] object-cover rounded-2xl"
                    />
                </div>

                {/* Slide 4 */}
                <div className="relative">
                    <div className="absolute -top-6 -left-6 w-24 h-24 bg-indigo-200 rounded-full blur-2xl opacity-60"></div>
                    <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-purple-200 rounded-full blur-2xl opacity-60"></div>
                    <img
                        src="https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?w=400"
                        alt="Product 4"
                        className="relative w-full h-[400px] object-cover rounded-2xl"
                    />
                </div>

                {/* Slide 5 */}
                <div className="relative">
                    <div className="absolute -top-6 -left-6 w-24 h-24 bg-indigo-200 rounded-full blur-2xl opacity-60"></div>
                    <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-purple-200 rounded-full blur-2xl opacity-60"></div>
                    <img
                        src="https://images.unsplash.com/photo-1556906781-9a412961c28c?w=400"
                        alt="Product 5"
                        className="relative w-full h-[400px] object-cover rounded-2xl"
                    />
                </div>

                {/* Slide 6 */}
                <div className="relative">
                    <div className="absolute -top-6 -left-6 w-24 h-24 bg-indigo-200 rounded-full blur-2xl opacity-60"></div>
                    <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-purple-200 rounded-full blur-2xl opacity-60"></div>
                    <img
                        src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=400"
                        alt="Product 6"
                        className="relative w-full h-[400px] object-cover rounded-2xl"
                    />
                </div>

                {/* Slide 7 */}
                <div className="relative">
                    <div className="absolute -top-6 -left-6 w-24 h-24 bg-indigo-200 rounded-full blur-2xl opacity-60"></div>
                    <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-purple-200 rounded-full blur-2xl opacity-60"></div>
                    <img
                        src="https://images.unsplash.com/photo-1498049794561-7780e7231661?w=400"
                        alt="Product 7"
                        className="relative w-full h-[400px] object-cover rounded-2xl"
                    />
                </div>

                {/* Slide 8 */}
                <div className="relative">
                    <div className="absolute -top-6 -left-6 w-24 h-24 bg-indigo-200 rounded-full blur-2xl opacity-60"></div>
                    <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-purple-200 rounded-full blur-2xl opacity-60"></div>
                    <img
                        src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400"
                        alt="Product 8"
                        className="relative w-full h-[400px] object-cover rounded-2xl"
                    />
                </div>

                {/* Slide 9 */}
                <div className="relative">
                    <div className="absolute -top-6 -left-6 w-24 h-24 bg-indigo-200 rounded-full blur-2xl opacity-60"></div>
                    <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-purple-200 rounded-full blur-2xl opacity-60"></div>
                    <img
                        src="https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=400"
                        alt="Product 9"
                        className="relative w-full h-[400px] object-cover rounded-2xl"
                    />
                </div>

                {/* Slide 10 */}
                <div className="relative">
                    <div className="absolute -top-6 -left-6 w-24 h-24 bg-indigo-200 rounded-full blur-2xl opacity-60"></div>
                    <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-purple-200 rounded-full blur-2xl opacity-60"></div>
                    <img
                        src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400"
                        alt="Product 10"
                        className="relative w-full h-[400px] object-cover rounded-2xl"
                    />
                </div>

                {/* Slide 11 */}
                <div className="relative">
                    <div className="absolute -top-6 -left-6 w-24 h-24 bg-indigo-200 rounded-full blur-2xl opacity-60"></div>
                    <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-purple-200 rounded-full blur-2xl opacity-60"></div>
                    <img
                        src="https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?w=400"
                        alt="Product 11"
                        className="relative w-full h-[400px] object-cover rounded-2xl"
                    />
                </div>

                {/* Slide 12 */}
                <div className="relative">
                    <div className="absolute -top-6 -left-6 w-24 h-24 bg-indigo-200 rounded-full blur-2xl opacity-60"></div>
                    <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-purple-200 rounded-full blur-2xl opacity-60"></div>
                    <img
                        src="https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400"
                        alt="Product 12"
                        className="relative w-full h-[400px] object-cover rounded-2xl"
                    />
                </div>

                {/* Slide 13 */}
                <div className="relative">
                    <div className="absolute -top-6 -left-6 w-24 h-24 bg-indigo-200 rounded-full blur-2xl opacity-60"></div>
                    <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-purple-200 rounded-full blur-2xl opacity-60"></div>
                    <img
                        src="https://images.unsplash.com/photo-1527814050087-3793815479db?w=400"
                        alt="Product 13"
                        className="relative w-full h-[400px] object-cover rounded-2xl"
                    />
                </div>

                {/* Slide 14 */}
                <div className="relative">
                    <div className="absolute -top-6 -left-6 w-24 h-24 bg-indigo-200 rounded-full blur-2xl opacity-60"></div>
                    <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-purple-200 rounded-full blur-2xl opacity-60"></div>
                    <img
                        src="https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=400"
                        alt="Product 14"
                        className="relative w-full h-[400px] object-cover rounded-2xl"
                    />
                </div>

                {/* Slide 15 */}
                <div className="relative">
                    <div className="absolute -top-6 -left-6 w-24 h-24 bg-indigo-200 rounded-full blur-2xl opacity-60"></div>
                    <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-purple-200 rounded-full blur-2xl opacity-60"></div>
                    <img
                        src="https://images.unsplash.com/photo-1593642532842-98d0fd5ebc1a?w=400"
                        alt="Product 15"
                        className="relative w-full h-[400px] object-cover rounded-2xl"
                    />
                </div>

                {/* Slide 16 */}
                <div className="relative">
                    <div className="absolute -top-6 -left-6 w-24 h-24 bg-indigo-200 rounded-full blur-2xl opacity-60"></div>
                    <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-purple-200 rounded-full blur-2xl opacity-60"></div>
                    <img
                        src="https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400"
                        alt="Product 16"
                        className="relative w-full h-[400px] object-cover rounded-2xl"
                    />
                </div>

                {/* Slide 17 */}
                <div className="relative">
                    <div className="absolute -top-6 -left-6 w-24 h-24 bg-indigo-200 rounded-full blur-2xl opacity-60"></div>
                    <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-purple-200 rounded-full blur-2xl opacity-60"></div>
                    <img
                        src="https://images.unsplash.com/photo-1592890288564-76628a30a657?w=400"
                        alt="Product 17"
                        className="relative w-full h-[400px] object-cover rounded-2xl"
                    />
                </div>

                {/* Slide 18 */}
                <div className="relative">
                    <div className="absolute -top-6 -left-6 w-24 h-24 bg-indigo-200 rounded-full blur-2xl opacity-60"></div>
                    <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-purple-200 rounded-full blur-2xl opacity-60"></div>
                    <img
                        src="https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=400"
                        alt="Product 18"
                        className="relative w-full h-[400px] object-cover rounded-2xl"
                    />
                </div>

                {/* Slide 19 */}
                <div className="relative">
                    <div className="absolute -top-6 -left-6 w-24 h-24 bg-indigo-200 rounded-full blur-2xl opacity-60"></div>
                    <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-purple-200 rounded-full blur-2xl opacity-60"></div>
                    <img
                        src="https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=400"
                        alt="Product 19"
                        className="relative w-full h-[400px] object-cover rounded-2xl"
                    />
                </div>

                {/* Slide 20 */}
                <div className="relative">
                    <div className="absolute -top-6 -left-6 w-24 h-24 bg-indigo-200 rounded-full blur-2xl opacity-60"></div>
                    <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-purple-200 rounded-full blur-2xl opacity-60"></div>
                    <img
                        src="https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400"
                        alt="Product 20"
                        className="relative w-full h-[400px] object-cover rounded-2xl"
                    />
                </div>

                {/* Slide 21 */}
                <div className="relative">
                    <div className="absolute -top-6 -left-6 w-24 h-24 bg-indigo-200 rounded-full blur-2xl opacity-60"></div>
                    <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-purple-200 rounded-full blur-2xl opacity-60"></div>
                    <img
                        src="https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=400"
                        alt="Product 21"
                        className="relative w-full h-[400px] object-cover rounded-2xl"
                    />
                </div>

                {/* Slide 22 */}
                <div className="relative">
                    <div className="absolute -top-6 -left-6 w-24 h-24 bg-indigo-200 rounded-full blur-2xl opacity-60"></div>
                    <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-purple-200 rounded-full blur-2xl opacity-60"></div>
                    <img
                        src="https://images.unsplash.com/photo-1526738549149-8e07eca6c147?w=400"
                        alt="Product 22"
                        className="relative w-full h-[400px] object-cover rounded-2xl"
                    />
                </div>

                {/* Slide 23 */}
                <div className="relative">
                    <div className="absolute -top-6 -left-6 w-24 h-24 bg-indigo-200 rounded-full blur-2xl opacity-60"></div>
                    <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-purple-200 rounded-full blur-2xl opacity-60"></div>
                    <img
                        src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=400"
                        alt="Product 23"
                        className="relative w-full h-[400px] object-cover rounded-2xl"
                    />
                </div>

                {/* Slide 24 */}
                <div className="relative">
                    <div className="absolute -top-6 -left-6 w-24 h-24 bg-indigo-200 rounded-full blur-2xl opacity-60"></div>
                    <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-purple-200 rounded-full blur-2xl opacity-60"></div>
                    <img
                        src="https://images.unsplash.com/photo-1608042314453-ae338d80c427?w=400"
                        alt="Product 24"
                        className="relative w-full h-[400px] object-cover rounded-2xl"
                    />
                </div>

                {/* Slide 25 */}
                <div className="relative">
                    <div className="absolute -top-6 -left-6 w-24 h-24 bg-indigo-200 rounded-full blur-2xl opacity-60"></div>
                    <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-purple-200 rounded-full blur-2xl opacity-60"></div>
                    <img
                        src="https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400"
                        alt="Product 25"
                        className="relative w-full h-[400px] object-cover rounded-2xl"
                    />
                </div>

                {/* Slide 26 */}
                <div className="relative">
                    <div className="absolute -top-6 -left-6 w-24 h-24 bg-indigo-200 rounded-full blur-2xl opacity-60"></div>
                    <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-purple-200 rounded-full blur-2xl opacity-60"></div>
                    <img
                        src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400"
                        alt="Product 26"
                        className="relative w-full h-[400px] object-cover rounded-2xl"
                    />
                </div>

                {/* Slide 27 */}
                <div className="relative">
                    <div className="absolute -top-6 -left-6 w-24 h-24 bg-indigo-200 rounded-full blur-2xl opacity-60"></div>
                    <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-purple-200 rounded-full blur-2xl opacity-60"></div>
                    <img
                        src="https://images.unsplash.com/photo-1550009158-9ebf69173e03?w=400"
                        alt="Product 27"
                        className="relative w-full h-[400px] object-cover rounded-2xl"
                    />
                </div>

                {/* Slide 28 */}
                <div className="relative">
                    <div className="absolute -top-6 -left-6 w-24 h-24 bg-indigo-200 rounded-full blur-2xl opacity-60"></div>
                    <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-purple-200 rounded-full blur-2xl opacity-60"></div>
                    <img
                        src="https://images.unsplash.com/photo-1468495244123-6c6c332eeece?w=400"
                        alt="Product 28"
                        className="relative w-full h-[400px] object-cover rounded-2xl"
                    />
                </div>

                {/* Slide 29 */}
                <div className="relative">
                    <div className="absolute -top-6 -left-6 w-24 h-24 bg-indigo-200 rounded-full blur-2xl opacity-60"></div>
                    <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-purple-200 rounded-full blur-2xl opacity-60"></div>
                    <img
                        src="https://images.unsplash.com/photo-1498049794561-7780e7231661?w=400"
                        alt="Product 29"
                        className="relative w-full h-[400px] object-cover rounded-2xl"
                    />
                </div>

                {/* Slide 30 */}
                <div className="relative">
                    <div className="absolute -top-6 -left-6 w-24 h-24 bg-indigo-200 rounded-full blur-2xl opacity-60"></div>
                    <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-purple-200 rounded-full blur-2xl opacity-60"></div>
                    <img
                        src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400"
                        alt="Product 30"
                        className="relative w-full h-[400px] object-cover rounded-2xl"
                    />
                </div>

                {/* Slide 31 */}
                <div className="relative">
                    <div className="absolute -top-6 -left-6 w-24 h-24 bg-indigo-200 rounded-full blur-2xl opacity-60"></div>
                    <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-purple-200 rounded-full blur-2xl opacity-60"></div>
                    <img
                        src="https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=400"
                        alt="Product 31"
                        className="relative w-full h-[400px] object-cover rounded-2xl"
                    />
                </div>

                {/* Slide 32 */}
                <div className="relative">
                    <div className="absolute -top-6 -left-6 w-24 h-24 bg-indigo-200 rounded-full blur-2xl opacity-60"></div>
                    <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-purple-200 rounded-full blur-2xl opacity-60"></div>
                    <img
                        src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400"
                        alt="Product 32"
                        className="relative w-full h-[400px] object-cover rounded-2xl"
                    />
                </div>

                {/* Slide 33 */}
                <div className="relative">
                    <div className="absolute -top-6 -left-6 w-24 h-24 bg-indigo-200 rounded-full blur-2xl opacity-60"></div>
                    <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-purple-200 rounded-full blur-2xl opacity-60"></div>
                    <img
                        src="https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?w=400"
                        alt="Product 33"
                        className="relative w-full h-[400px] object-cover rounded-2xl"
                    />
                </div>

                {/* Slide 34 */}
                <div className="relative">
                    <div className="absolute -top-6 -left-6 w-24 h-24 bg-indigo-200 rounded-full blur-2xl opacity-60"></div>
                    <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-purple-200 rounded-full blur-2xl opacity-60"></div>
                    <img
                        src="https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400"
                        alt="Product 34"
                        className="relative w-full h-[400px] object-cover rounded-2xl"
                    />
                </div>

                {/* Slide 35 */}
                <div className="relative">
                    <div className="absolute -top-6 -left-6 w-24 h-24 bg-indigo-200 rounded-full blur-2xl opacity-60"></div>
                    <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-purple-200 rounded-full blur-2xl opacity-60"></div>
                    <img
                        src="https://images.unsplash.com/photo-1527814050087-3793815479db?w=400"
                        alt="Product 35"
                        className="relative w-full h-[400px] object-cover rounded-2xl"
                    />
                </div>

            </Slider>
        </div>
    );
}
