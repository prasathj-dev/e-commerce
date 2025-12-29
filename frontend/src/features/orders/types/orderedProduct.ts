import type { Product } from "../../products/types/product";

export type OrderedProduct = {
  productId: string;
  quantity: number;
  estimatedDeliveryTimeMs: number;
  product: Product;
};
