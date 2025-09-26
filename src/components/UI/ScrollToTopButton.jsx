import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function ScrollToTopButton() {
  const [visibility, setVisibility] = useState(false);
  useEffect(() => {
    const toggleVisibiliy = () => {
      if (window.scrollY > 200) {
        setVisibility(true);
      } else {
        setVisibility(false);
      }
    };

    window.addEventListener("scroll", toggleVisibiliy);
    return () => window.removeEventListener("scroll", toggleVisibiliy);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    visibility && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 p-3 rounded-full bg-green-500 text-white shadow-lg hover:bg-green-600 transition-all duration-300"
      >
        <FaArrowUp size={24} />
      </button>
    )
  );
}
