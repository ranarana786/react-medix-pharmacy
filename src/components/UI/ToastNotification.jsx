import { useEffect } from "react";

export default function Toast({ message, onClose }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 2000); // 2 sec baad band ho jaaye

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed top-20 right-5 bg-green-600 text-white px-4 py-2 rounded-lg shadow-lg animate-slide-up">
      {message}
    </div>
  );
}
