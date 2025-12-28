import { useInfiniteQuery } from "@tanstack/react-query";
import { useRef, useEffect } from "react";
import { fetchProducts } from "../api/productAPI";
import type { FetchProductsResponse } from "../types/fetchProductsResponse";
import type { Product } from "../types/product";
import ProductCard from "./ProductCard";
import { useSearchStore } from "../store/searchStore";
import ErrorState from "../../../components/ErrorState";
import EmptyState from "./EmptyState";
import ProductSkeleton from "./ProductSkeleton";

const ProductList = () => {
    const loadMoreRef = useRef<HTMLDivElement>(null);
    const searchText = useSearchStore((state) => state.searchText);


    //Featch products using react-Infinite-query
    const {
        data,
        isLoading,
        error,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
    } = useInfiniteQuery<
        FetchProductsResponse,
        Error
    >({
        queryKey: ['products', searchText] as [string, string],
        queryFn: (context) => {
            const pageParam: number = (context.pageParam as number) ?? 1;
            return fetchProducts({ pageParam, search: searchText });
        },
        getNextPageParam: (lastPage) => lastPage.nextPage ?? undefined,
        initialPageParam: 1,
        // retry: false,

    });

    useEffect(() => {
        if (!loadMoreRef.current || !hasNextPage) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    fetchNextPage();
                }
            },
            { threshold: 1 }
        );

        observer.observe(loadMoreRef.current);

        return () => observer.disconnect();
    }, [fetchNextPage, hasNextPage]);



    const products = data?.pages.flatMap(page => page.data) ?? [];

    if (error) {
        return <ErrorState />;
    }

    if (isLoading) {
        return <ProductSkeleton />;
    }

    if (products.length === 0) return <EmptyState />;

    return (
        <>
            <div className="prpduct-results">
                <div className="grid mt-22.5 gap-4 p-5 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
                    {
                        products?.map((product: Product) => (
                            <ProductCard product={product} key={product.id} />
                        ))
                    }
                </div>
                <div ref={loadMoreRef} style={{ height: "20px" }}></div>

            </div>
        </>
    );
}


export default ProductList;