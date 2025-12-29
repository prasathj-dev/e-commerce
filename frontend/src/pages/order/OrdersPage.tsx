import OrderCard from '../../features/orders/components/OrderCard';
import { useOrder } from '../../features/orders/hooks/useOrders';

export default function OrdersPage() {
    const { data: orders } = useOrder();

    return (
        <>
            {/* <Header /> */}
            <div className="orders-page p-6 bg-gray-50 min-h-screen max-w-285  mt-30 px-7 
                mb-24 
                mx-auto  ">
                <h1 className="text-2xl font-bold mb-6">Your Orders</h1>

                <div className="flex flex-col space-y-6">
                    {orders?.map((order) => (
                        <OrderCard order={order} key={order.id} />
                    ))}
                </div>
            </div>
        </>
    );
}
