import "./App.css";
import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import ProductsPage from "./Pages/ProductsPage";
import RootLayout from "./Pages/Root";
import MedicalStoreProvider from "./components/store/store.jsx";
import Modal from "./components/UI/Modal.jsx";
import CartModal from "./components/UI/CartModal.jsx";
import UserProgressiveContextProvider from "./components/store/UserProgressinveContext.jsx";
import AddProductModal from "./components/UI/AddProductModal.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "products",
        element: <ProductsPage />,
      },
    ],
  },
]);

function App() {
  return (
    <UserProgressiveContextProvider>
      <MedicalStoreProvider>
        <CartModal />
        <AddProductModal />
        <RouterProvider router={router} />;
      </MedicalStoreProvider>
    </UserProgressiveContextProvider>
  );
}

export default App;
