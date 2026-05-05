"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { toast } from "sonner";
import { products } from "@/data/products";

const StoreContext = createContext(null);

function readStorage(key, fallback) {
  if (typeof window === "undefined") return fallback;
  try {
    const value = window.localStorage.getItem(key);
    return value ? JSON.parse(value) : fallback;
  } catch {
    return fallback;
  }
}

export function StoreProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsLoggedIn(readStorage("tz_logged_in", false));
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setCartItems(readStorage("tz_cart_items", []));
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setWishlist(readStorage("tz_wishlist", []));
  }, []);

  const persist = (key, value) => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem(key, JSON.stringify(value));
    }
  };

  const login = () => {
    setIsLoggedIn(true);
    persist("tz_logged_in", true);
  };

  const logout = () => {
    setIsLoggedIn(false);
    persist("tz_logged_in", false);
  };

  const addToCart = (productId) => {
    const product = products.find(p => p.id === productId);
    setCartItems((prev) => {
      const existing = prev.find((item) => item.productId === productId);
      const next = existing
        ? prev.map((item) =>
            item.productId === productId ? { ...item, quantity: item.quantity + 1 } : item,
          )
        : [...prev, { productId, quantity: 1 }];
      persist("tz_cart_items", next);
      return next;
    });
    if (product) {
      toast.success(`${product.name} added to cart`);
    }
  };

  const updateQuantity = (productId, quantity) => {
    setCartItems((prev) => {
      const next = prev
        .map((item) => (item.productId === productId ? { ...item, quantity: Math.max(0, quantity) } : item))
        .filter((item) => item.quantity > 0);
      persist("tz_cart_items", next);
      return next;
    });
  };

  const removeFromCart = (productId) => {
    setCartItems((prev) => {
      const next = prev.filter((item) => item.productId !== productId);
      persist("tz_cart_items", next);
      return next;
    });
  };

  const toggleWishlist = (productId) => {
    const product = products.find(p => p.id === productId);
    setWishlist((prev) => {
      const exists = prev.includes(productId);
      const next = exists ? prev.filter((id) => id !== productId) : [...prev, productId];
      persist("tz_wishlist", next);
      
      if (product) {
        if (exists) {
          toast.info(`${product.name} removed from wishlist`);
        } else {
          toast.success(`${product.name} added to wishlist`);
        }
      }
      
      return next;
    });
  };

  const clearCart = () => {
    setCartItems([]);
    persist("tz_cart_items", []);
  };

  const value = {
    isLoggedIn,
    login,
    logout,
    cartItems,
    wishlist,
    addToCart,
    updateQuantity,
    removeFromCart,
    toggleWishlist,
    clearCart,
    cartCount: cartItems.reduce((total, item) => total + item.quantity, 0),
    wishlistCount: wishlist.length,
    cartProducts: cartItems
      .map((item) => ({ ...item, product: products.find((product) => product.id === item.productId) }))
      .filter((item) => item.product),
    wishlistProducts: products.filter((product) => wishlist.includes(product.id)),
  };

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
}

export function useStore() {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error("useStore must be used inside StoreProvider");
  }
  return context;
}
