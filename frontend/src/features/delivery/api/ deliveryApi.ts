import { api } from "../../../axios";
import type { DeliveryOption } from "../types/deliveryOption";


 export const fetachDeliveryOptions = async (): Promise<DeliveryOption[]>   => {
         const response = await api.get(`/delivery-options?expand=estimatedDeliveryTime`)
         return  response.data;
}