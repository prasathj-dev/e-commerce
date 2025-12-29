import { formatCurrency } from "../../../utils/currency-convert";
import { usePaymentSummary } from "../hooks/usePaymentSummary";

const PaymentSummary = () => {
    const { data: paymentSummary } = usePaymentSummary();
    return (
        <div className="bg-white rounded-xl shadow-md p-6 flex flex-col space-y-4">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
                Payment Summary
            </h2>
            {
                paymentSummary && (
                    <>
                        <div className="flex justify-between text-gray-700">
                            <span>Items : ({paymentSummary?.totalItems})</span>
                            <span className="font-medium">{formatCurrency(paymentSummary?.productCostCents ?? 0)}</span>
                        </div>
                        <div className="flex justify-between text-gray-700">
                            <span>Shipping &amp; handling:</span>
                            <span className="font-medium">{formatCurrency(paymentSummary?.shippingCostCents ?? 0)}</span>
                        </div>
                        <div className="flex justify-between text-gray-800 font-semibold border-t border-gray-200 pt-2">
                            <span>Total before tax:</span>
                            <span>{formatCurrency(paymentSummary?.totalCostBeforeTaxCents ?? 0)}</span>
                        </div>
                        <div className="flex justify-between text-gray-700">
                            <span>Estimated tax (10%):</span>
                            <span className="font-medium">{formatCurrency(paymentSummary?.taxCents ?? 0)}</span>
                        </div>
                        <div className="flex justify-between text-gray-900 font-bold text-lg border-t border-gray-200 pt-2">
                            <span>Order total:</span>
                            <span>{formatCurrency(paymentSummary?.totalCostCents ?? 0)}</span>
                        </div>

                        <button className="mt-4 w-full bg-emerald-700 hover:bg-emerald-600 text-white font-semibold py-3 rounded-xl transition-colors duration-200">
                            Place your order
                        </button>
                    </>
                )
            }



        </div>
    );
}
export default PaymentSummary;