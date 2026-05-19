import { toast } from "sonner";

import { FaHeart } from "react-icons/fa";

type ProductCardProps = {
  title: string;
  category: string;
  price: string;
  image: string;
  onClick: () => void;
};

const ProductCard = ({
  title,
  category,
  price,
  image,
  onClick,
}: ProductCardProps) => {
  return (
    <div
      onClick={onClick}
      className="bg-white rounded-2xl shadow-md overflow-hidden transition duration-300 hover:-translate-y-2 hover:shadow-2xl cursor-pointer group relative"
    >

      {/* Favorite Button */}
      <button
        onClick={(event) => {
          event.stopPropagation();

          toast.success("Added to favorites");
        }}
        className="absolute top-4 right-4 z-10 bg-white/80 backdrop-blur-md p-3 rounded-full shadow-md transition duration-300 hover:scale-110"
      >

        <FaHeart className="text-red-500" />

      </button>

      {/* Image Container */}
      <div className="overflow-hidden">

        <img
          src={image}
          alt={title}
          className="w-full h-64 object-cover transition duration-500 group-hover:scale-110"
        />

      </div>

      <div className="p-6">

        <p className="text-sm text-gray-500">
          {category}
        </p>

        <h3 className="text-2xl font-semibold mt-2">
          {title}
        </h3>

        <p className="mt-4 text-lg font-bold">
          {price}
        </p>

        <button
          onClick={(event) => {
            event.stopPropagation();

            toast.success("Product added to cart");
          }}
          className="mt-6 w-full bg-black text-white py-3 rounded-lg transition duration-300 hover:bg-gray-800 hover:scale-105 active:scale-95"
        >

          Add To Cart

        </button>

      </div>

    </div>
  );
};

export default ProductCard;