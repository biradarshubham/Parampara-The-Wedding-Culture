import { createContext, useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
export const CartContext = createContext();

export const ProductContext = ({ children }) => {

  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // ✅ Add to Cart or Increase Quantity
  const addToCart = (product) => {
   
    setCart((prevCart) => {
      return prevCart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ).concat(!prevCart.some((item) => item.id === product.id) ? { ...product, quantity: 1 } : []);
    });
    toast.dismiss();
    toast.clearWaitingQueue();
    toast.success("Product added to cart successfully", {
      autoClose: 2000, // 2 seconds
    });

  };

  // ✅ Decrease Quantity
  const decrementQuantity = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity - 1 }
          : item
      ).filter(item => item.quantity > 0) // Remove item if quantity is 0
    );
  };

  // ✅ Remove Item from Cart
  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
    toast.dismiss();
    toast.success("Product removed from cart", {
      autoClose: 2000, // 2 seconds
    });
  };

  // ✅ Clear Cart
  const clearCart = () => {
    setCart([]);
    toast.dismiss();
    toast.success("cart cleared successfully...", {
      autoClose: 2000, // 2 seconds
    });
  };

  // ✅ Calculate Total Price
  const cartTotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  // ✅ Calculate Total Items in Cart
  const cartCount = cart.reduce((count, item) => count + item.quantity, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, decrementQuantity, removeFromCart, clearCart, cartTotal, cartCount }}>
      {children}
      <ToastContainer  autoClose={2000}/>
    </CartContext.Provider>
  );
};
