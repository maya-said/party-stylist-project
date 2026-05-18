import ProductCard from "../components/ProductCard";

const ProductsPage = () => {
  return (
    <div className="min-h-screen bg-[#fdf8f3] px-6 py-20">

      <h1 className="text-5xl font-bold text-center">
        Our Products
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

        <ProductCard
          title="Bride To Be Setup"
          category="Wedding"
          price="$250"
        />

        <ProductCard
          title="Baby Shower Decoration"
          category="Baby Shower"
          price="$180"
        />

        <ProductCard
          title="Birthday Styling"
          category="Birthday"
          price="$200"
        />

      </div>

    </div>
  );
};

export default ProductsPage;