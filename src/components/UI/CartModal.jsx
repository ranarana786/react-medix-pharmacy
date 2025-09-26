import React from "react";
import { useContext } from "react";
import { UserProgressiveContext } from "../store/UserProgressinveContext";
import Modal from "../UI/Modal";

export default function CartModal() {
  const cartItems = [];
  const { progress, hideCart } = useContext(UserProgressiveContext);
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  function handleCloseCart() {
    hideCart();
  }

  return (
    <>
      <Modal
        className="cart"
        open={progress === "cart"}
        onClose={progress === "cart" ? handleCloseCart : null}
      >
        {/* Modal Box */}
        <div
          className={`fixed left-1/2 top-1/2 w-11/12 max-w-md bg-white rounded-lg shadow-lg z-50 transform 
           transition-all duration-500 ease-out
  ${
    progress === "cart"
      ? "translate-x-[-50%] translate-y-[-50%] opacity-100"
      : "translate-y-full opacity-0"
  }
  `}
        >
          <div className="p-6 relative max-h-[80vh] overflow-y-auto">
            {/* Close Button */}
            <button
              onClick={handleCloseCart}
              className="absolute top-3 right-3 text-gray-600 hover:text-gray-800"
            >
              ✕
            </button>

            <h2 className="text-xl font-bold mb-4">Your Cart</h2>

            {/* Cart Items */}
            <div className="space-y-4">
              {cartItems.length === 0 ? (
                <p className="text-gray-500">Your cart is empty.</p>
              ) : (
                cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex justify-between items-center border-b pb-2"
                  >
                    <div>
                      <h3 className="font-medium">{item.name}</h3>
                      <p className="text-sm text-gray-500">
                        ${item.price} × {item.quantity}
                      </p>
                    </div>
                    <p className="font-semibold">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                ))
              )}
            </div>

            {/* Footer */}
            {cartItems.length > 0 && (
              <div className="mt-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="font-semibold">Total:</span>
                  <span className="text-lg font-bold">
                    ${totalPrice.toFixed(2)}
                  </span>
                </div>
                <button className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition">
                  Checkout
                </button>
              </div>
            )}
          </div>
        </div>
      </Modal>
    </>
  );
}
