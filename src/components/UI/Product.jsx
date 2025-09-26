import dummyImage from "../../assets/images/med-img.jpg";
import { useContext, useState } from "react";
import { StoreContext } from "../store/store";
import ToastNotification from "./ToastNotification";

export default function Product({ data }) {
  const { addToCart } = useContext(StoreContext);
  const [showToast, setShowToast] = useState(false);

  function handleCart(data) {
    addToCart(data);
    setShowToast(true);
  }
  return (
    <div className="bg-white shadow rounded-lg p-4 hover:shadow-lg transition">
      <img
        src={dummyImage}
        height={100}
        width={100}
        alt={data.openfda?.brand_name?.[0] || "Medicine"}
        className="w-full h-40 object-cover rounded"
      />
      <h2 className="mt-2 text-lg font-bold">{data.category}</h2>
      <h3 className="mt-2 text-lg font-semibold">
        {data.name || "Unknown Medicine"}
      </h3>
      <p className="text-gray-500">{data.country || "Unknown Company"}</p>
      <p className="mt-1 font-bold text-blue-600">${data.price}</p>
      <button
        onClick={() => handleCart(data)}
        className="mt-3 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
      >
        Add to Cart
      </button>
      {showToast && (
        <ToastNotification
          message=" Added to cart!"
          onClose={() => setShowToast(false)}
        />
      )}
    </div>
  );
}
