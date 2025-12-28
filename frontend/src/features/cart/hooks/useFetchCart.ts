import { useQuery } from "@tanstack/react-query";
import { fetchCart } from "../api/cartAPI";
import type { CartItem } from "../types/cartItem";

export const useFetchcartItems = () => {
  return useQuery<CartItem[]>({
    queryFn: () => fetchCart(),
    queryKey: ["cart"],
  });
};
