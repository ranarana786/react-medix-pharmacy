// src/components/AboutSection.jsx
import medImage from "../../assets/images/hero-image.jpg";
export default function AboutSection() {
  return (
    <section className="bg-green-50 py-16 px-6" id="about">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Side Image */}
        <div className="flex justify-center">
          <img
            src={medImage}
            alt="Pharmacy"
            className="rounded-lg shadow-lg w-full max-w-md"
          />
        </div>

        {/* Right Side Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-6">
            About <span className="text-green-600">Medix Pharmacy</span>
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            At <strong>Medix Pharmacy</strong>, we believe that healthcare
            should be simple, accessible, and affordable. We offer a wide range
            of genuine medicines, wellness products, and healthcare essentials
            delivered directly to your doorstep.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Our mission is to make your life healthier by ensuring the
            availability of trusted medicines, 24/7 support, and professional
            guidance whenever you need it.
          </p>

          <button className="bg-green-600 text-white px-6 py-2 rounded-lg shadow hover:bg-green-700 transition">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
