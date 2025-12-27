import { useQuery } from '@tanstack/react-query';
import { fetachDeliveryOptions } from '../api/ deliveryApi';
import type { DeliveryOption } from '../types/deliveryOption'
import dayjs from 'dayjs';
import { formatCurrency } from '../../../utils/currency-convert';

export default function DeliveryOption() {
    const { data: deliveryOptions, isLoading, error } = useQuery<DeliveryOption[]>({
        queryFn: () => fetachDeliveryOptions(),
        queryKey: ["delivery-options"]

    });
    console.log(deliveryOptions)
    return (
        <>
            <div className="delivery-options-title">
                Choose a delivery option:
            </div>
            {
                deliveryOptions?.map((dp: DeliveryOption) => {

                    return (
                        <div key={dp.id} className="delivery-option">
                            <input type="radio" checked
                                className="delivery-option-input"
                                name={`delivery-option-${dp.id}`} />
                            <div>
                                <div className="delivery-option-date">
                                    {dayjs(dp.estimatedDeliveryTimeMs).format('dddd, MMMM')}
                                </div>
                                <div className="delivery-option-price">
                                    {dp.priceCents > 0 ? `${formatCurrency(dp.priceCents)} - Shipping` : "FREE Shipping"}
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </>
    );
}
