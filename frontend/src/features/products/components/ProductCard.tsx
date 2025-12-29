import { useState } from 'react';
import { useAddToCart } from '../../cart/hooks/useAddToCart';
import type { Product } from '../types/product';
import QuantitySelect from '../../../components/QuantitySelect';

type ProductProps = {
    product: Product
}

export default function ProductCard({ product }: ProductProps) {
    const { mutate: addToCart, isSuccess } = useAddToCart();
    const [selectedQuantity, setSelectedQuantity] = useState(1);

    return (
        <>
            <div
                className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col p-4 w-50 md:w-64 "
                key={product.id}
            >
                <div className="w-full h-48 overflow-hidden rounded-xl mb-4">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                </div>

                <div className="text-gray-800 font-semibold text-lg mb-2 line-clamp-2">
                    {product.name}
                </div>

                <div className="flex items-center mb-2">
                    <img
                        src="images/ratings/rating-45.png"
                        alt="Rating"
                        className="h-5 w-auto mr-2"
                    />
                    <span className="text-gray-600 text-sm">{product.rating.count}</span>
                </div>

                <div className="text-green-700 font-bold text-lg mb-3">
                    $ {(product.priceCents / 100).toFixed(2)}
                </div>

                <div className="mb-3">
                    <QuantitySelect
                        initialQuantity={1}
                        onQuantityChange={(q) => setSelectedQuantity(q)} />
                </div>

                <button onClick={() => addToCart({ productId: product.id, quantity: selectedQuantity })} className="bg-emerald-700 hover:bg-emerald-600 text-white font-semibold py-2 rounded-xl transition-colors duration-200 mb-2">
                    Add to Cart
                </button>

                {
                    isSuccess && (
                        <div className="flex items-center justify-center text-green-600 font-medium space-x-1">
                            <img src="images/icons/checkmark.png" alt="Added" className="h-5 w-5" />
                            <span>Added</span>
                        </div>
                    )
                }

            </div>

        </>
    );
}
