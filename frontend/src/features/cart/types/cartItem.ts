import type { Product } from "../../products/types/product";

export type CartItem = {
  productId: string;
  quantity: number;
  product: Product;
  deliveryOptionId: string;
};
