import Header from '../../../components/Navbar';

export default function OrdersPage() {
    const orders = [
        {
            id: "27cba69d-4c3d-4098-b42d-ac7fa62b7664",
            date: "August 12",
            total: 35.06,
            products: [
                {
                    id: 1,
                    name: "Black and Gray Athletic Cotton Socks - 6 Pairs",
                    image: "images/products/athletic-cotton-socks-6-pairs.jpg",
                    deliveryDate: "August 15",
                    quantity: 1,
                },
                {
                    id: 2,
                    name: "Adults Plain Cotton T-Shirt - 2 Pack",
                    image: "images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg",
                    deliveryDate: "August 19",
                    quantity: 2,
                },
            ],
        },
    ];


    return (
        <>
            <Header />
            <div className="orders-page p-6 bg-gray-50 min-h-screen mt-22.5">
                <h1 className="text-2xl font-bold mb-6">Your Orders</h1>

                <div className="flex flex-col space-y-6">
                    {orders.map((order) => (
                        <div
                            key={order.id}
                            className="bg-white rounded-xl shadow-md p-4 space-y-4"
                        >
                            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-gray-200 pb-4">
                                <div className="flex flex-col sm:flex-row sm:space-x-6 space-y-2 sm:space-y-0">
                                    <div>
                                        <div className="text-gray-500 text-sm font-medium">Order Placed:</div>
                                        <div className="text-gray-800">{order.date}</div>
                                    </div>
                                    <div>
                                        <div className="text-gray-500 text-sm font-medium">Total:</div>
                                        <div className="text-gray-800">${order.total.toFixed(2)}</div>
                                    </div>
                                </div>
                                <div className="mt-2 sm:mt-0">
                                    <div className="text-gray-500 text-sm font-medium">Order ID:</div>
                                    <div className="text-gray-800 text-sm break-all">{order.id}</div>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {order.products.map((product) => (
                                    <div
                                        key={product.id}
                                        className="flex flex-col sm:flex-row bg-gray-50 rounded-lg p-3 items-center space-y-2 sm:space-y-0 sm:space-x-4"
                                    >
                                        <div className="w-24 h-24 shrink-0">
                                            <img
                                                src={product.image}
                                                alt={product.name}
                                                className="w-full h-full object-cover rounded-lg"
                                            />
                                        </div>

                                        <div className="flex-1 flex flex-col space-y-1">
                                            <div className="font-semibold text-gray-800 line-clamp-2">
                                                {product.name}
                                            </div>
                                            <div className="text-sm text-gray-500">
                                                Arriving on: {product.deliveryDate}
                                            </div>
                                            <div className="text-sm text-gray-500">
                                                Quantity: {product.quantity}
                                            </div>
                                        </div>

                                        <div className="flex flex-col space-y-2 sm:space-y-0 sm:space-x-2 sm:flex-row">
                                            <button className="flex items-center bg-emerald-700 hover:bg-emerald-600 text-white text-sm font-medium px-3 py-2 rounded-lg transition-colors duration-200">
                                                <img
                                                    src="images/icons/buy-again.png"
                                                    alt="Buy Again"
                                                    className="h-4 w-4 mr-1"
                                                />
                                                Add to Cart
                                            </button>
                                            <a href="tracking">
                                                <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 text-sm font-medium px-3 py-2 rounded-lg transition-colors duration-200">
                                                    Track Package
                                                </button>
                                            </a>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
