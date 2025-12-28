import { useQuery } from "@tanstack/react-query";
import { fetachDeliveryOptions } from "../api/ deliveryApi";
import type { DeliveryOption } from "../types/deliveryOption";

export const useDeliveryOptions = () => {
  return useQuery<DeliveryOption[]>({
    queryFn: () => fetachDeliveryOptions(),
    queryKey: ["delivery-options"],
    staleTime: 1000 * 60 * 60, // 1 hour
  });
};
