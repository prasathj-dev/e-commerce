import dayjs from "dayjs";
import { formatCurrency } from "../../../utils/currency-convert";
import type { Order } from "../types/order";
import OrderProductCard from "./OrderProductCard";

const OrderCard = ({ order }: { order: Order }) => {
    return (
        <>
            <div
                key={order.id}
                className="bg-white rounded-xl shadow-md p-4 space-y-4"
            >
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-gray-200 pb-4">
                    <div className="flex flex-col sm:flex-row sm:space-x-6 space-y-2 sm:space-y-0">
                        <div>
                            <div className="text-gray-500 text-sm font-medium">Order Placed:</div>
                            <div className="text-gray-800">{order.createdAt}</div>
                        </div>
                        <div>
                            <div className="text-gray-500 text-sm font-medium">Total:</div>
                            <div className="text-gray-800">{formatCurrency(order.totalCostCents || 0)}</div>
                        </div>
                    </div>
                    <div className="mt-2 sm:mt-0">
                        <div className="text-gray-500 text-sm font-medium">Order ID:</div>
                        <div className="text-gray-800 text-sm break-all">{order.id}</div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {order.products.map((orderProduct) => (
                        <OrderProductCard orderProduct={orderProduct} key={orderProduct.product.id} />
                    ))}
                </div>
            </div>
        </>
    );
}
export default OrderCard;  