import { createContext, useState } from "react";

export const StoreContext = createContext({
  storeData: [],
  cart: [],
});

export default function MedicalStoreProvider({ children }) {
  const [storeData, setStoreData] = useState([]);
  const [cart, setCart] = useState([]);

  function getMedicinceData(data) {
    setStoreData(data);
  }

  function addToCart(newItem) {
    setCart((prevCart) => {
      // deep copy
      const updatedCart = prevCart.map((item) =>
        item.id === newItem.id ? { ...item, quantity: item.quantity + 1 } : item
      );

      const exists = prevCart.some((item) => item.id === newItem.id);

      if (exists) {
        return updatedCart;
      } else {
        return [...prevCart, { ...newItem, quantity: 1 }];
      }
    });
  }

  const storeCtx = {
    storeData,
    getMedicinceData,
    addToCart,
    cart,
  };

  return (
    <StoreContext.Provider value={storeCtx}>{children} </StoreContext.Provider>
  );
}
