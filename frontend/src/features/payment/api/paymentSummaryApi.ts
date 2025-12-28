import { api } from "../../../axios";
import type { PaymentSummary } from "../types/paymentSummary";

export const getPaymentSummary = async (): Promise<PaymentSummary> => {
  const response = await api.get("/payment-summary");
  return response.data;
};
