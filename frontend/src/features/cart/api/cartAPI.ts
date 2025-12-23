import type { CartItem } from "../types/cartItem";
import { api } from "../../../axios";


export const fetchCart = async (_query = ''): Promise<CartItem[]> => {
    const response = await api.get(`/cart-items?expand=product`)
    return  response.data;
}