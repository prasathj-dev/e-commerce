import Header from '../../components/Header';
import './HomePage.css'
import { products } from '../../../data/products'
import type { Product } from '../../features/products/types/product';
import ProductCard from '../../features/products/components/ProductCard';

export default function HomePage() {
  return (
    <>


      <Header />

      <div className="home-page">
        <div className="products-grid">
          {
            products.map((product: Product) => (
              <ProductCard product={product} key={product.id} />
            ))
          }
        </div>
      </div>
    </>
  );
}
