import type { ReactNode } from "react";

export type CartItem = {
  id: number;
  title: string;
  price: number;
  image: string;
  quantity: number;
  description: string;
  category: {
    name: string;
  };
};

export type CartContextType = {
  cartItems: CartItem[];

  addToCart: (item: CartItem) => void;

  removeFromCart: (id: number) => void;

  clearCart: () => void;

  totalItems: number;

  totalPrice: number;
};

export type CartProviderProps = {
  children: ReactNode;
};
