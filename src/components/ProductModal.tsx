import { motion } from "framer-motion";

type ProductModalProps = {
  title: string;
  category: string;
  price: string;
  image: string;
  onClose: () => void;
};

const ProductModal = ({
  title,
  category,
  price,
  image,
  onClose,
}: ProductModalProps) => {
  return (
    <div
      onClick={onClose}
      className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 px-6"
    >

      <motion.div
        initial={{
          opacity: 0,
          scale: 0.5,
          y: 200,
          rotate: -8,
        }}

        animate={{
          opacity: 1,
          scale: 1,
          y: 0,
          rotate: 0,
        }}

        exit={{
          opacity: 0,
          scale: 0.5,
          y: 200,
          rotate: 8,
        }}

        transition={{
          duration: 0.5,
          type: "spring",
        }}

        onClick={(event) => event.stopPropagation()}
        className="bg-white rounded-2xl max-w-lg w-full overflow-hidden relative"
      >

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-2xl z-10"
        >
          ×
        </button>

        {/* Product Image */}
        <img
          src={image}
          alt={title}
          className="w-full h-80 object-cover"
        />

        {/* Content */}
        <div className="p-6">

          <p className="text-sm text-gray-500">
            {category}
          </p>

          <h2 className="text-3xl font-bold mt-2">
            {title}
          </h2>

          <p className="mt-4 text-xl font-semibold">
            {price}
          </p>

          <p className="mt-6 text-gray-600 leading-7">
            Luxury event styling and premium decoration setup for unforgettable celebrations.
          </p>

        </div>

      </motion.div>

    </div>
  );
};

export default ProductModal;