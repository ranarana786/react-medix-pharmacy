import heroImage from "../assets/images/hero-image.jpg";

export default function HeroSection() {
  return (
    <section className="bg-green-50 py-12">
      <div className="container mx-auto flex flex-col md:flex-row items-center px-6 md:px-12">
        {/* Left Side - Text */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold text-green-900 mb-6">
            Your Trusted Pharmacy Partner
          </h1>
          <p className="text-lg text-green-800 mb-6">
            We provide genuine medicines, healthcare products, and fast delivery
            at your doorstep. Making healthcare simple and accessible for
            everyone.
          </p>

          {/* Buttons */}
          <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#shop"
              className="bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition"
            >
              Shop Now
            </a>
            <a
              href="#contact"
              className="border border-green-600 text-green-700 px-6 py-3 rounded-lg font-medium hover:bg-green-100 transition"
            >
              Contact Us
            </a>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="flex-1 flex justify-end items-end mt-8 md:mt-0 md:ml-8">
          <img
            src={heroImage}
            alt="Pharmacy"
            className="max-w-xs md:max-w-sm lg:max-w-md rounded-xl shadow-lg object-contain"
          />
        </div>
      </div>
    </section>
  );
}
