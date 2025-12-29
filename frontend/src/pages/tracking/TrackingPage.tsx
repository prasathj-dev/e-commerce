

export default function TrackingPage() {
    return (
        <>

            <div className="tracking-page max-w-xl mx-auto mt-27 mb-24 px-6 sm:px-4 ">
                {/* Back to Orders Link */}
                <a
                    href="/orders"
                    className="inline-block text-blue-600 hover:underline mb-6 text-sm"
                >
                    ← View all orders
                </a>

                {/* Delivery Date */}
                <div className="text-2xl sm:text-xl font-bold mb-4">
                    Arriving on <span className="text-gray-700">Monday, June 13</span>
                </div>

                {/* Product Info */}
                <div className="mb-1 text-gray-800 font-medium">
                    Black and Gray Athletic Cotton Socks - 6 Pairs
                </div>
                <div className="mb-4 text-gray-600">quantity: 1</div>

                {/* Product Image */}
                <div className="w-full flex justify-center mb-8">
                    <img
                        src="images/products/athletic-cotton-socks-6-pairs.jpg"
                        alt="Product"
                        className="w-48 h-48 sm:w-36 sm:h-36 object-cover rounded-lg shadow-md"
                    />
                </div>

                {/* Progress Steps */}
                <div className="flex justify-between items-center mb-2 sm:flex-col sm:items-start sm:gap-2">
                    <div className="flex flex-col items-center sm:items-start">
                        <span className="w-3 h-3 bg-gray-300 rounded-full mb-1"></span>
                        <span className="text-gray-500 text-sm">Preparing</span>
                    </div>
                    <div className="flex flex-col items-center sm:items-start">
                        <span className="w-3 h-3 bg-green-700 rounded-full mb-1"></span>
                        <span className="text-green-700 text-sm">Shipped</span>
                    </div>
                    <div className="flex flex-col items-center sm:items-start">
                        <span className="w-3 h-3 bg-gray-300 rounded-full mb-1"></span>
                        <span className="text-gray-500 text-sm">Delivered</span>
                    </div>
                </div>

                {/* Progress Bar */}
                <div className="relative h-3 w-full bg-gray-300 rounded-full overflow-hidden mb-6">
                    <div
                        className="absolute top-0 left-0 h-full bg-green-700 rounded-full"
                        style={{ width: "50%" }} // dynamically set based on progress
                    ></div>
                </div>

                {/* Optional: Add Tracking Details / Updates */}
                <div className="space-y-4">
                    <div className="text-gray-700 text-sm">
                        <span className="font-medium">Shipped:</span> Your package left the warehouse.
                    </div>
                    <div className="text-gray-700 text-sm">
                        <span className="font-medium">Preparing:</span> We are getting your order ready.
                    </div>
                </div>
            </div>


        </>
    );
}
