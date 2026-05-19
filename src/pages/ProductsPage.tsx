import { useState } from "react";

import ProductCard from "../components/ProductCard";
import { products } from "../data/products";

const ProductsPage = () => {

  // Search State
  const [search, setSearch] = useState("");

  // Category State
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filter Products
  const filteredProducts = products.filter((product) => {

    const matchesSearch =
      product.title
        .toLowerCase()
        .includes(search.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" ||
      product.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

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

          {/* Product Count */}
          <p className="mt-4 text-sm text-gray-500">

            Showing {filteredProducts.length} products

          </p>

        </div>

        <div className="flex flex-col md:flex-row gap-4">

          {/* Search Input */}
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            className="border border-gray-300 bg-white px-5 py-3 rounded-xl outline-none focus:ring-2 focus:ring-black transition"
          />

          {/* Category Select */}
          <select
            value={selectedCategory}
            onChange={(event) =>
              setSelectedCategory(event.target.value)
            }
            className="border border-gray-300 bg-white px-5 py-3 rounded-xl outline-none focus:ring-2 focus:ring-black transition"
          >

            <option value="All">
              All
            </option>

            <option value="Wedding">
              Wedding
            </option>

            <option value="Birthday">
              Birthday
            </option>

            <option value="Baby Shower">
              Baby Shower
            </option>

          </select>

        </div>

      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

        {
          filteredProducts.length > 0 ? (

            filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                title={product.title}
                category={product.category}
                price={product.price}
                image={product.image}
              />
            ))

          ) : (

            <div className="col-span-full text-center">

              <h2 className="text-3xl font-bold">
                No Products Found
              </h2>

              <p className="mt-4 text-gray-500">
                Try searching with another keyword.
              </p>

            </div>

          )
        }

      </div>

    </div>
  );
};

export default ProductsPage;