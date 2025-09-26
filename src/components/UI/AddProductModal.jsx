import { UserProgressiveContext } from "../store/UserProgressinveContext";
import Modal from "../UI/Modal";
import { useContext } from "react";
import ProductForm from "./ProductForm";

export default function AddProductModal() {
  const { progress, hideAddProduct } = useContext(UserProgressiveContext);
  function handleCloseModal() {
    hideAddProduct();
  }

  return (
    <Modal
      className="add-product"
      open={progress === "add-product"}
      onClose={progress === "add-product" ? handleCloseModal : null}
    >
      <ProductForm />
    </Modal>
  );
}
