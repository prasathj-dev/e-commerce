import dayjs from "dayjs";
import type { OrderedProduct } from "../types/orderedProduct";

const OrderProductCard = ({ orderProduct }: { orderProduct: OrderedProduct }) => {


    return (
        <>
            <div className="flex flex-col sm:flex-row bg-gray-50 rounded-lg p-3 items-start sm:items-center gap-3">
                {/* Product Image */}
                <div className="w-24 h-24 shrink-0">
                    <img
                        src={orderProduct.product.image}
                        alt={orderProduct.product.name}
                        className="w-full h-full object-cover rounded-lg"
                    />
                </div>

                {/* Product Info */}
                <div className="flex-1 flex flex-col gap-0.5">
                    <div className="font-semibold text-gray-800 line-clamp-2">
                        {orderProduct.product.name}
                    </div>
                    <div className="text-sm text-gray-500">
                        Arriving on: {dayjs(orderProduct.estimatedDeliveryTimeMs).format("MMMM D")}
                    </div>
                    <div className="text-sm text-gray-500">
                        quantity: {orderProduct.quantity}
                    </div>
                </div>

                {/* Buttons */}
                <div className="flex flex-col gap-2 sm:shrink-0 sm:w-40">
                    <button className="w-full flex items-center justify-center bg-emerald-700 hover:bg-emerald-600 text-white text-sm font-medium px-3 py-2 rounded-lg transition-colors duration-200">
                        <img
                            src="images/icons/buy-again.png"
                            alt="Buy Again"
                            className="h-4 w-4 mr-1"
                        />
                        Add to Cart
                    </button>
                    <a href="/tracking">
                        <button className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 text-sm font-medium px-3 py-2 rounded-lg transition-colors duration-200">
                            Track Package
                        </button>
                    </a>
                </div>
            </div>

        </>
    );
}
export default OrderProductCard; 
