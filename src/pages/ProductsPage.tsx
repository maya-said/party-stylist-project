import { useState } from "react";

import ProductCard from "../components/ProductCard";
import { products } from "../data/products";

const ProductsPage = () => {

  // Search state
  const [search, setSearch] = useState("");

  // Filter products
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#fdf8f3] px-6 py-20">

      {/* Top Section */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

        <div>

          <h1 className="text-5xl font-bold">
            Our Products
          </h1>

          <p className="mt-4 text-gray-600">
            Discover elegant event styling and luxury decorations.
          </p>

        </div>

        {/* Search Input */}
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          className="border border-gray-300 bg-white px-5 py-3 rounded-xl outline-none focus:ring-2 focus:ring-black transition"
        />

      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

        {
          filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              title={product.title}
              category={product.category}
              price={product.price}
              image={product.image}
            />
          ))
        }

      </div>

    </div>
  );
};

export default ProductsPage;