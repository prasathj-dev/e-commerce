import { api } from "../../../axios";
import type { Order } from "../types/order";

export const fetchOrders = async (): Promise<Order[]> => {
  const result = await api.get("/orders?expand=products");
  return result.data;
};
