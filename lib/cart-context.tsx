"use client";

import { createContext, useContext, useState, useEffect } from "react";

type CartItem = {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
};

type CartContextType = {
  cart: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
  increaseQty: (id: string) => void;
  decreaseQty: (id: string) => void;
  clearCart: () => void;
  cartCount: number;
};

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {

  const [cart, setCart] = useState<CartItem[]>(() => {

    if (typeof window !== "undefined") {
      const savedCart = localStorage.getItem("cart");
      return savedCart ? JSON.parse(savedCart) : [];
    }

    return [];
  });

  /* Persist cart */
  useEffect(() => {

    localStorage.setItem("cart", JSON.stringify(cart));

  }, [cart]);

  /* Add item */
  function addItem(item: CartItem) {

    setCart((prev) => {

      const existing = prev.find((p) => p.id === item.id);

      if (existing) {
        return prev.map((p) =>
          p.id === item.id
            ? { ...p, quantity: p.quantity + 1 }
            : p
        );
      }

      return [...prev, item];
    });

  }

  /* Remove item */
  function removeItem(id: string) {
    setCart((prev) => prev.filter((item) => item.id !== id));
  }

  /* Increase quantity */
  function increaseQty(id: string) {

    setCart((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );

  }

  /* Decrease quantity */
  function decreaseQty(id: string) {

    setCart((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity - 1) }
          : item
      )
    );

  }

  /* Clear cart */
  function clearCart() {
    setCart([]);
  }

  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (

    <CartContext.Provider
      value={{
        cart,
        addItem,
        removeItem,
        increaseQty,
        decreaseQty,
        clearCart,
        cartCount
      }}
    >

      {children}

    </CartContext.Provider>

  );
}

export function useCart() {

  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used within CartProvider");
  }

  return context;
}