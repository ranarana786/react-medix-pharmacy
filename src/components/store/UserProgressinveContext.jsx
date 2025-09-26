import { createContext, useState } from "react";

export const UserProgressiveContext = createContext({
  progress: "",
});

export default function UserProgressiveContextProvider({ children }) {
  const [userProgress, setUserProgress] = useState("");

  function showCart() {
    setUserProgress("cart");
  }

  function hideCart() {
    setUserProgress("");
  }

  function showCheckout() {
    setUserProgress("checkout");
  }

  function hideCheckout() {
    setUserProgress("");
  }

  function showAddProduct() {
    setUserProgress("add-product");
  }

  function hideAddProduct() {
    setUserProgress("");
  }

  const userProgressCtx = {
    progress: userProgress,
    showCart,
    hideCart,
    showCheckout,
    hideCheckout,
    showAddProduct,
    hideAddProduct,
  };
  return (
    <UserProgressiveContext.Provider value={userProgressCtx}>
      {children}
    </UserProgressiveContext.Provider>
  );
}
