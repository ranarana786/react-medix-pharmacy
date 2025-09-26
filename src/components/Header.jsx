// src/components/Header.jsx
import { Link } from "react-router-dom";
import { FaShoppingCart, FaUserCircle } from "react-icons/fa";
import { useContext } from "react";
import { StoreContext } from "./store/store";
import { UserProgressiveContext } from "./store/UserProgressinveContext";

export default function Header() {
  const { cart } = useContext(StoreContext);
  const { showCart, progress } = useContext(UserProgressiveContext);
  console.log("the user progress ctx are following", progress);
  return (
    <header className="bg-green-200 shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <div className="text-2xl font-bold text-green-900">MedixPharma</div>

        {/* Nav links */}
        <nav className="flex-1 mx-8">
          <ul className="flex items-center justify-center space-x-6 text-green-800 font-medium">
            <li>
              <Link to={"/"} className="hover:text-green-800">
                Home
              </Link>
            </li>
            <li>
              <a href="#about" className="hover:text-green-800">
                About
              </a>
            </li>
            <li>
              <a href="#service" className="hover:text-green-800">
                Services
              </a>
            </li>
            <li>
              <Link to={"/products"} className="hover:text-green-800">
                Products
              </Link>
            </li>
            <li>
              <a href="#" className="hover:text-green-800">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        {/* Right-side icons */}
        <div className="flex items-center space-x-4">
          {/* Profile */}
          <Link
            to="/profile"
            className="inline-flex items-center p-1 text-green-900 hover:text-green-800"
            aria-label="Profile"
          >
            <FaUserCircle size={26} />
          </Link>

          {/* Cart (relative wrapper so badge can be absolute) */}
          <button
            className="relative inline-flex items-center p-1 text-green-900 hover:text-green-800"
            aria-label="Cart"
            onClick={showCart}
          >
            <FaShoppingCart size={24} />

            {/* Badge: positioned at icon's top-right corner */}
            {cart && (
              <span className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 bg-green-900 text-white text-xs font-bold px-1.5 py-0.5 rounded-full shadow">
                {cart.length}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
