import CartItem from '../../features/cart/components/CartItem';
import PaymentSummary from '../../features/payment/components/PaymentSummary';

export default function CheckoutPage() {
    return (
        <>
            <div className="max-w-285 
                px-7 
                mt-36 
                mb-24 
                mx-auto p-6 bg-gray-50 min-h-screen">
                <h1 className="text-2xl font-bold mb-6">Review your order</h1>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2 space-y-4">
                        <CartItem />
                    </div>

                    {/* Payment Summary */}
                    <PaymentSummary />
                </div>
            </div>

        </>
    );
}
