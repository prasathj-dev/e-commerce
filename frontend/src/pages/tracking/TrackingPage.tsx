

export default function TrackingPage() {
    return (
        <>

            <div className="tracking-page max-w-[850px] mx-auto mt-24 mb-24 px-[30px]">
                {/* Back to Orders Link */}
                <a
                    href="orders"
                    className="inline-block text-blue-600 hover:underline mb-7"
                >
                    View all orders
                </a>

                {/* Delivery Date */}
                <div className="text-[25px] font-bold mb-2.5">
                    Arriving on Monday, June 13
                </div>

                {/* Product Info */}
                <div className="mb-1 text-gray-800 font-medium">
                    Black and Gray Athletic Cotton Socks - 6 Pairs
                </div>
                <div className="mb-1 text-gray-800">Quantity: 1</div>

                {/* Product Image */}
                <img
                    src="images/products/athletic-cotton-socks-6-pairs.jpg"
                    alt="Product"
                    className="max-w-37.5 max-h-37.5 mt-6 mb-12 object-cover rounded-lg"
                />

                {/* Progress Labels */}
                <div className="flex justify-between text-[20px] font-medium mb-4 sm:text-[16px] sm:flex-col sm:mb-1">
                    <div className="mb-0 sm:mb-1">Preparing</div>
                    <div className="text-green-700 mb-0 sm:mb-1">Shipped</div>
                    <div className="mb-0 sm:mb-1">Delivered</div>
                </div>

                {/* Progress Bar */}
                <div className="h-6.25 w-full border border-gray-300 rounded-[50px] overflow-hidden">
                    <div className="h-full bg-green-700 rounded-[50px] w-1/2"></div>
                </div>
            </div>

        </>
    );
}
