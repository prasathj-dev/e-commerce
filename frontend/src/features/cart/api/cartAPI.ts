import type { CartItem } from "../types/cartItem";
import { api } from "../../../axios";

export const fetchCart = async (_query = ""): Promise<CartItem[]> => {
  const response = await api.get(`/cart-items?expand=product`);
  return response.data;
};

export const addToCart = async ({
  productId,
  quantity,
}: {
  productId: string;
  quantity: number;
}): Promise<CartItem[]> => {
  const response = await api.post(`/cart-items`, { productId, quantity });
  return response.data;
};

export const updateDeliveryOption = async ({
  productId,
  deliveryOptionId,
}: {
  productId: string;
  deliveryOptionId: string;
}): Promise<CartItem[]> => {
  const response = await api.put(`/cart-items/${productId}`, {
    productId,
    deliveryOptionId,
  });
  return response.data;
};

export const removeCartItem = async ({ productId }: { productId: string }) => {
  const response = await api.delete(`/cart-items/${productId}`);
  return response.data;
};

export const updateCartQuantity = async ({
  cartItemId,
  quantity,
}: {
  cartItemId: string;
  quantity: number;
}) => {
  const respose = await api.put(`/cart-items/update-quantity/${cartItemId}`, {
    quantity: quantity,
  });
  return respose.data;
};
