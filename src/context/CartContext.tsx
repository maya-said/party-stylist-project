import {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from "react";

import type { Product } from "../types/productTypes";

type CartItem = Product & {
  quantity: number;
};

type CartContextType = {
  cartItems: CartItem[];

  addToCart: (product: Product) => void;

  removeFromCart: (id: number) => void;
};

const CartContext =
  createContext<CartContextType | null>(null);

type CartProviderProps = {
  children: ReactNode;
};

export const CartProvider = ({
  children,
}: CartProviderProps) => {

  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // Add To Cart
  const addToCart = (product: Product) => {

    const existingItem = cartItems.find(
      (item) => item.id === product.id
    );

    if (existingItem) {

      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        )
      );

    } else {

      setCartItems([
        ...cartItems,
        {
          ...product,
          quantity: 1,
        },
      ]);

    }
  };

  // Remove From Cart
  const removeFromCart = (id: number) => {

    setCartItems(
      cartItems.filter((item) => item.id !== id)
    );
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
      }}
    >

      {children}

    </CartContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useCart = () => {

  const context = useContext(CartContext);

  if (!context) {
    throw new Error(
      "useCart must be used inside CartProvider"
    );
  }

  return context;
};