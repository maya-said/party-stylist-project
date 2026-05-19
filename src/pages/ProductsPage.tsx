import { useState, useEffect } from "react";

import { AnimatePresence } from "framer-motion";

import ProductCard from "../components/ProductCard";
import ProductModal from "../components/ProductModal";
import Loader from "../components/Loader";

import { products } from "../data/products";

import type { Product } from "../types/productTypes";

const ProductsPage = () => {

  // Search State
  const [search, setSearch] = useState("");

  // Category State
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Sort State
  const [sortOption, setSortOption] = useState("default");

  // Modal State
  const [selectedProduct, setSelectedProduct] =
    useState<Product | null>(null);

  // Loading State
  const [loading, setLoading] = useState(true);

  // Fake Loading
  useEffect(() => {

    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);

  }, []);

  // Filter Products
  const filteredProducts = products
    .filter((product) => {

      const matchesSearch =
        product.title
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesCategory =
        selectedCategory === "All" ||
        product.category === selectedCategory;

      return matchesSearch && matchesCategory;
    })

    .sort((a, b) => {

      const priceA = Number(a.price.replace("$", ""));
      const priceB = Number(b.price.replace("$", ""));

      if (sortOption === "lowToHigh") {
        return priceA - priceB;
      }

      if (sortOption === "highToLow") {
        return priceB - priceA;
      }

      return 0;
    });

  // Loading Screen
  if (loading) {
    return <Loader />;
  }

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

          {/* Sort Select */}
          <select
            value={sortOption}
            onChange={(event) =>
              setSortOption(event.target.value)
            }
            className="border border-gray-300 bg-white px-5 py-3 rounded-xl outline-none focus:ring-2 focus:ring-black transition"
          >

            <option value="default">
              Default
            </option>

            <option value="lowToHigh">
              Price: Low To High
            </option>

            <option value="highToLow">
              Price: High To Low
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
                onClick={() => setSelectedProduct(product)}
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

      {/* Product Modal */}
      <AnimatePresence>

        {
          selectedProduct && (
            <ProductModal
              title={selectedProduct.title}
              category={selectedProduct.category}
              price={selectedProduct.price}
              image={selectedProduct.image}
              onClose={() => setSelectedProduct(null)}
            />
          )
        }

      </AnimatePresence>

    </div>
  );
};

export default ProductsPage;