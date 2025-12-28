import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateDeliveryOption } from "../api/cartAPI";

export const UseUpdateDeliveryOption = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateDeliveryOption,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
      queryClient.invalidateQueries({ queryKey: ["payment-summary"] });
    },
  });
};
