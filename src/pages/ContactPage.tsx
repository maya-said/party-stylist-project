import ProductCard from "../components/ProductCard";
import { products } from "../data/products";

const ProductsPage = () => {
  return (
    <div className="min-h-screen bg-[#fdf8f3] px-6 py-20">

      <h1 className="text-5xl font-bold text-center">
        Our Products
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

        {
          products.map((product) => (
            <ProductCard
              key={product.id}
              title={product.title}
              category={product.category}
              price={product.price}
            />
          ))
        }

      </div>

    </div>
  );
};

export default ProductsPage;