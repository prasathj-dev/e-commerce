import type { Product } from "../types/product";
import { api } from "../../../axios";

//using Fetch
//  export const  fetchProducts = async (): Promise<Product[]>  =>  {
//     const fetchRes = await fetch(`${BASE_URL}/Products`);

//     if (!fetchRes.ok) {
//       throw new Error("Failed to fetch products");
//     }

//     const data: Product[] = await fetchRes.json();
//     return data;
// }

export const fetchProducts = async (): Promise<Product[]> => {
  const response = await api.get(`/Products`);
  return response.data;
};
