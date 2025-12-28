import { useQuery } from '@tanstack/react-query';
import { fetachDeliveryOptions } from '../api/ deliveryApi';
import type { DeliveryOption } from '../types/deliveryOption'
import dayjs from 'dayjs';
import { formatCurrency } from '../../../utils/currency-convert';
import { UseUpdateDeliveryOption } from '../../cart/hooks/useUpdateDeliveryOption';
import type { CartItem } from '../../cart/types/cartItem';
import { useDeliveryOptions } from '../hooks/useDeliveryOptions';

type deliveryOptionProps = {
    cartItem: CartItem
}


export default function DeliveryOption({ cartItem }: deliveryOptionProps) {
    const { mutate: updateDeliveryOption } = UseUpdateDeliveryOption();

    const { data: deliveryOptions, isLoading, error } = useDeliveryOptions();

    return (
        <>
            <div className="delivery-options-title">
                Choose a delivery option:
            </div>
            {
                deliveryOptions?.map((dp: DeliveryOption) => {

                    return (
                        <label
                            key={dp.id}
                            className="flex cursor-pointer items-start gap-3 rounded-lg  p-3 hover:bg-gray-50"
                        >
                            <input
                                type="radio"
                                name={`delivery-option-${cartItem.productId}`}
                                checked={cartItem.deliveryOptionId === dp.id}
                                onChange={() =>
                                    updateDeliveryOption({
                                        productId: cartItem.productId,
                                        deliveryOptionId: dp.id,
                                    })
                                }
                                className="mt-1 h-4 w-4 accent-blue-600"
                            />

                            <div className="flex flex-col">
                                <div className="text-sm font-medium text-gray-900">
                                    {dayjs(dp.estimatedDeliveryTimeMs).format("dddd, MMMM")}
                                </div>

                                <div className="text-sm text-gray-500">
                                    {dp.priceCents > 0
                                        ? `${formatCurrency(dp.priceCents)} Shipping`
                                        : "FREE Shipping"}
                                </div>
                            </div>
                        </label>
                    );

                })
            }
        </>
    );
}
