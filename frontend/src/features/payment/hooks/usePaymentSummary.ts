import { useQuery } from "@tanstack/react-query";
import { getPaymentSummary } from "../api/paymentSummaryApi";

export const usePaymentSummary = () => {
  return useQuery({
    queryFn: getPaymentSummary,
    queryKey: ["payment-summary"],
  });
};
