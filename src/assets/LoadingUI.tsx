export default function LoadingUI() {



    return (
        <div className="min-h-screen bg-[#fafafa] animate-pulse">

            {/* Header Skeleton */}
            <div className="h-16 bg-white border-b border-gray-100 flex items-center justify-between px-6 md:px-12">
                <div className="h-7 w-32 rounded-lg bg-gray-200 blur-[1px]" />

                <div className="hidden md:flex items-center gap-6">
                    <div className="h-3 w-12 rounded bg-gray-200" />
                    <div className="h-3 w-12 rounded bg-gray-200" />
                    <div className="h-3 w-16 rounded bg-gray-200" />
                    <div className="h-3 w-12 rounded bg-gray-200" />
                </div>

                <div className="h-9 w-9 rounded-full bg-gray-200" />
            </div>

            {/* Hero Skeleton */}
            <div className="max-w-7xl mx-auto px-5 md:px-10 pt-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

                    <div className="space-y-5">
                        <div className="h-4 w-28 rounded-full bg-gray-200" />

                        <div className="h-10 md:h-14 w-full max-w-md rounded-xl bg-gray-200" />

                        <div className="h-10 md:h-14 w-3/4 rounded-xl bg-gray-200" />

                        <div className="space-y-2 pt-2">
                            <div className="h-3 w-full max-w-sm rounded bg-gray-200" />
                            <div className="h-3 w-3/4 rounded bg-gray-200" />
                        </div>

                        <div className="h-11 w-36 rounded-lg bg-gray-200 mt-5" />
                    </div>

                    <div className="h-64 md:h-80 rounded-2xl bg-gray-200 blur-[1px]" />
                </div>

                {/* Product Section */}
                <div className="mt-16">
                    <div className="flex justify-between items-center mb-6">
                        <div className="h-7 w-40 rounded-lg bg-gray-200" />
                        <div className="h-4 w-20 rounded bg-gray-200" />
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[1, 2, 3, 4].map((item) => (
                            <div
                                key={item}
                                className="bg-white rounded-xl p-3 border border-gray-100"
                            >
                                <div className="h-32 md:h-48 rounded-lg bg-gray-200 blur-[1px]" />

                                <div className="h-3 w-3/4 rounded bg-gray-200 mt-4" />

                                <div className="h-3 w-1/2 rounded bg-gray-200 mt-3" />

                                <div className="h-9 w-full rounded-lg bg-gray-200 mt-4" />
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
}