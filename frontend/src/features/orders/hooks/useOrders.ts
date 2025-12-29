import { useQuery } from "@tanstack/react-query";
import { fetchOrders } from "../api/order";

export const useOrder = () => {
  return useQuery({
    queryKey: ["orders"],
    queryFn: fetchOrders,
  });
};
