import type { Product } from "./product";

export interface FetchProductsResponse {
  data: Product[];
  nextPage: number | null;
  hasMore: boolean;
  page: number;
}
