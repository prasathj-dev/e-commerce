import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateCartQuantity } from "../api/cartAPI";

export const useUpdateCartItemQuantity = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: updateCartQuantity,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
  });
};
