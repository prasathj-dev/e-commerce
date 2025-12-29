import { useState } from "react";


interface QuantitySelectProps {
    initialQuantity?: number;
    onQuantityChange?: (quantity: number) => void;
}

const QuantitySelect = ({ initialQuantity = 2, onQuantityChange }: QuantitySelectProps) => {
    const [quantity, setQuantity] = useState<number>(initialQuantity);

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const q = Number(e.target.value);
        setQuantity(q);
        onQuantityChange?.(q);
    };

    return (
        <>
            <select value={quantity} onChange={handleChange} className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-emerald-300">
                {[...Array(20).keys()].map((n) => (
                    <option key={n + 1} value={n + 1}>
                        {n + 1}
                    </option>
                ))}
            </select>
        </>
    );
}

export default QuantitySelect;
