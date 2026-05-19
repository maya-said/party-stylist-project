import { useState } from "react";

import { toast } from "sonner";

import { FaHeart } from "react-icons/fa";

import { useCart } from "../context/CartContext";

import type { Product } from "../types/productTypes";

type ProductCardProps = {
  id: number;
  title: string;
  category: string;
  price: string;
  image: string;
  badge: string;
  onClick: () => void;
};

const ProductCard = ({
  id,
  title,
  category,
  price,
  image,
  badge,
  onClick,
}: ProductCardProps) => {

  // Favorite State
  const [isFavorite, setIsFavorite] = useState(false);

  // Cart Context
  const { addToCart } = useCart();

  // Toggle Favorite
  const handleFavorite = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {

    event.stopPropagation();

    setIsFavorite(!isFavorite);

    if (!isFavorite) {
      toast.success("Added to favorites");
    } else {
      toast.error("Removed from favorites");
    }
  };

  // Add To Cart
  const handleAddToCart = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {

    event.stopPropagation();

    const product: Product = {
      id,
      title,
      category,
      price,
      image,
      badge,
    };

    addToCart(product);

    toast.success("Product added to cart");
  };

  return (
    <div
      onClick={onClick}
      className="bg-white rounded-3xl shadow-lg overflow-hidden transition-all duration-500 hover:-translate-y-4 hover:shadow-[0_25px_60px_rgba(0,0,0,0.15)] cursor-pointer group relative"
    >

      {/* Badge */}
      <div className="absolute top-4 left-4 z-20 bg-black text-white px-4 py-2 rounded-full text-xs font-semibold tracking-[2px] shadow-lg">

        {badge}

      </div>

      {/* Favorite Button */}
      <button
        onClick={handleFavorite}
        className="absolute top-4 right-4 z-20 bg-white/80 backdrop-blur-md p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-125 hover:bg-white"
      >

        <FaHeart
          className={`transition-all duration-300 ${
            isFavorite
              ? "text-red-500 scale-125"
              : "text-gray-400"
          }`}
        />

      </button>

      {/* Image Container */}
      <div className="overflow-hidden relative">

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition duration-500 z-10" />

        {/* Quick View Text */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 z-20">

          <span className="bg-white text-black px-8 py-4 rounded-full font-semibold shadow-2xl tracking-wide scale-75 group-hover:scale-100 transition-all duration-500">

            Quick View

          </span>

        </div>

        <img
          src={image}
          alt={title}
          className="w-full h-72 object-cover transition-all duration-700 group-hover:scale-125 group-hover:brightness-75"
        />

      </div>

      {/* Content */}
      <div className="p-7">

        <p className="text-sm text-gray-500 tracking-wide uppercase">

          {category}

        </p>

        <h3 className="text-2xl font-bold mt-3 leading-snug">

          {title}

        </h3>

        <p className="mt-5 text-xl font-bold">

          {price}

        </p>

        {/* Add To Cart Button */}
        <button
          onClick={handleAddToCart}
          className="mt-7 w-full bg-black text-white py-4 rounded-2xl transition-all duration-500 hover:bg-gray-900 hover:scale-105 hover:shadow-[0_15px_40px_rgba(0,0,0,0.3)] active:scale-95 tracking-wide font-semibold"
        >

          Add To Cart

        </button>

      </div>

    </div>
  );
};

export default ProductCard;