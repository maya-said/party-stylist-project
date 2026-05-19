type ProductCardProps = {
  title: string;
  category: string;
  price: string;
  image: string;
};

const ProductCard = ({
  title,
  category,
  price,
  image,
}: ProductCardProps) => {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden transition duration-300 hover:-translate-y-2 hover:shadow-2xl">

      <img
        src={image}
        alt={title}
        className="w-full h-64 object-cover"
      />

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

        <button className="mt-6 w-full bg-black text-white py-3 rounded-lg transition duration-300 hover:bg-gray-800 hover:scale-105 active:scale-95">

          Add To Cart

        </button>

      </div>

    </div>
  );
};

export default ProductCard;