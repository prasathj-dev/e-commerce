import type { Product } from '../../features/products/types/product';
import ProductCard from '../../features/products/components/ProductCard';
import { fetchProducts } from '../../features/products/api/productAPI';
import { useQuery } from '@tanstack/react-query';

export default function HomePage() {

  // const [products, setProducts] = useState<Product[]>([]);
  // const [loading, setLoading] = useState<boolean>(true);

  const { data: products, isLoading, error } = useQuery({
    queryFn: () => fetchProducts(),
    queryKey: ['product']
  })

  // useEffect(() => {


  console.log(error?.message)
  //   fetchProducts()
  //     .then((res: Product[]) => setProducts(res))
  //     .catch((e: any) => console.log(e))
  //     .finally(() => setLoading(false))

  // }, []);

  return (
    <>
      <div className="home-page">

        <div>
          {isLoading && <p>Loading...</p>}
        </div>

        <div className="grid mt-22.5 gap-4 p-5 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {
            products?.map((product: Product) => (
              <ProductCard product={product} key={product.id} />
            ))
          }
        </div>
      </div>
    </>
  );
}
