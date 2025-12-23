import CartItem from '../../features/cart/components/CartItem';

export default function CheckoutPage() {
    return (
        <>
            <div className="  max-w-275 
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
                    <div className="bg-white rounded-xl shadow-md p-6 flex flex-col space-y-4">
                        <h2 className="text-lg font-semibold text-gray-800 mb-4">
                            Payment Summary
                        </h2>

                        <div className="flex justify-between text-gray-700">
                            <span>Items (3):</span>
                            <span className="font-medium">$42.75</span>
                        </div>
                        <div className="flex justify-between text-gray-700">
                            <span>Shipping &amp; handling:</span>
                            <span className="font-medium">$4.99</span>
                        </div>
                        <div className="flex justify-between text-gray-800 font-semibold border-t border-gray-200 pt-2">
                            <span>Total before tax:</span>
                            <span>$47.74</span>
                        </div>
                        <div className="flex justify-between text-gray-700">
                            <span>Estimated tax (10%):</span>
                            <span className="font-medium">$4.77</span>
                        </div>
                        <div className="flex justify-between text-gray-900 font-bold text-lg border-t border-gray-200 pt-2">
                            <span>Order total:</span>
                            <span>$52.51</span>
                        </div>

                        <button className="mt-4 w-full bg-emerald-700 hover:bg-emerald-600 text-white font-semibold py-3 rounded-xl transition-colors duration-200">
                            Place your order
                        </button>
                    </div>
                </div>
            </div>

        </>
    );
}
