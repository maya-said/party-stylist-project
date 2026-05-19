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
    <div className="min-h-screen bg-[#fdf8f3]">

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#f8ede3] via-[#fdf8f3] to-[#f5e6d3] px-6 py-24 shadow-sm">

        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">

          {/* Left Content */}
          <div>

            <p className="uppercase tracking-[6px] text-sm text-gray-500 font-semibold">

              Luxury Event Styling

            </p>

            <h1 className="text-5xl md:text-6xl font-bold mt-6 leading-tight">

              Elegant Party <br />

              Decorations & Styling

            </h1>

            <p className="mt-6 text-gray-600 text-lg max-w-2xl leading-8">

              Discover premium decorations, unforgettable event styling,
              and luxury setups crafted for weddings, birthdays,
              baby showers, and special celebrations.

            </p>

            <p className="mt-6 text-sm text-gray-500">

              Showing {filteredProducts.length} products

            </p>

          </div>

          {/* Filters */}
          <div className="bg-white p-6 rounded-3xl shadow-xl flex flex-col gap-4 min-w-[320px]">

            {/* Search Input */}
            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              className="border border-gray-300 bg-white px-5 py-4 rounded-xl outline-none focus:ring-2 focus:ring-black transition"
            />

            {/* Category Select */}
            <select
              value={selectedCategory}
              onChange={(event) =>
                setSelectedCategory(event.target.value)
              }
              className="border border-gray-300 bg-white px-5 py-4 rounded-xl outline-none focus:ring-2 focus:ring-black transition"
            >

              <option value="All">
                All Categories
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
              className="border border-gray-300 bg-white px-5 py-4 rounded-xl outline-none focus:ring-2 focus:ring-black transition"
            >

              <option value="default">
                Default Sorting
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

      </div>

      {/* Products Grid */}
      <div className="px-6 py-20 max-w-7xl mx-auto">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {
            filteredProducts.length > 0 ? (

              filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  title={product.title}
                  category={product.category}
                  price={product.price}
                  image={product.image}
                  badge={product.badge}
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