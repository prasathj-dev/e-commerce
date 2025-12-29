import type { OrderedProduct } from "./orderedProduct";

export type Order = {
  id: string;
  orderTimeMs: number;
  totalCostCents: number;
  products: OrderedProduct[];
  createdAt: string;
  updatedAt: string;
};
