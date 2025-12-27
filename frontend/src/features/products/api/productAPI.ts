import type { Product } from "../types/product";
import { api } from "../../../axios";
import type { FetchProductsResponse } from "../types/fetchProductsResponse";

//using Fetch
//  export const  fetchProducts = async (): Promise<Product[]>  =>  {
//     const fetchRes = await fetch(`${BASE_URL}/Products`);

//     if (!fetchRes.ok) {
//       throw new Error("Failed to fetch products");
//     }

//     const data: Product[] = await fetchRes.json();
//     return data;
// }

// export const fetchProducts = async (): Promise<Product[]> => {
//   const response = await api.get(`/Products`);
//   return response.data;
// };

export const fetchProducts = async ({
  pageParam = 1,
  search = "",
}: {
  pageParam?: number;
  search?: string;
}): Promise<FetchProductsResponse> => {
  const res = await api.get(
    `/products?search=${search}&page=${pageParam}&limit=10`
  );
  //if (!res.ok) throw new Error("Failed to fetch products");

  return res.data;
};
