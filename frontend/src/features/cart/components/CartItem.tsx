import { type CartItem, type CartItem as CartItemType } from '../types/cartItem';
import { formatCurrency } from '../../../utils/currency-convert';
import DeliveryOption from '../../delivery/components/DeliveryOption';
import { useFetchcartItems } from '../hooks/useFetchCart';
import { useDeliveryOptions } from '../../delivery/hooks/useDeliveryOptions';
import dayjs from 'dayjs';



export default function CartItem() {

  const { data: deliveryOptions } = useDeliveryOptions();
  const { data: carts, isLoading, error } = useFetchcartItems();

  const getDeliveryDate = (cartitem: CartItem) => {
    const selectedOption = deliveryOptions?.find(
      (opt) => opt.id === cartitem.deliveryOptionId
    );

    return selectedOption
      ? dayjs(selectedOption.estimatedDeliveryTimeMs, "day").format("dddd, MMMM D")
      : "Select delivery option";
  }

  return (
    <>
      {carts?.map((item: CartItemType) => (
        <div key={item.productId} className="bg-white rounded-xl shadow-md p-4 mb-4">
          <div className="text-gray-500 text-sm mb-3">
            Delivery date: {getDeliveryDate(item)}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
            <div className="sm:col-span-3">
              <img
                src={item.product.image}
                alt={item.product.name}
                className="w-full h-32 object-cover rounded-lg"
              />
            </div>

            <div className="sm:col-span-5 flex flex-col space-y-2">
              <div className="font-semibold text-gray-800">{item.product.name}</div>
              <div className="text-green-700 font-bold">
                {formatCurrency(item.product.priceCents)}
              </div>

              <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600">
                <span>
                  Quantity: <span className="font-medium">{item.quantity}</span>
                </span>
                <button className="text-blue-600 hover:underline">Update</button>
                <button className="text-red-600 hover:underline">Delete</button>
              </div>
            </div>

            {/* Delivery Options */}
            <div className="sm:col-span-4">
              <DeliveryOption cartItem={item} />
            </div>
          </div>
        </div>
      ))}

    </>
  );
}

