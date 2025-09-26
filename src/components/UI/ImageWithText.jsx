export default function ImageWithText({ image, title, text, reverse = false }) {
  return (
    <section className="py-12 bg-white">
      <div
        className={`container mx-auto flex flex-col md:flex-row items-center gap-8 px-6 md:px-12 ${
          reverse ? "md:flex-row-reverse" : ""
        }`}
      >
        <div className="flex-1">
          <img
            src={image}
            alt={title}
            className="w-full h-auto rounded-xl shadow-md"
          />
        </div>

        <div className="flex-1 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-4">
            {title}
          </h2>
          <p className="text-lg text-gray-700 mb-6">{text}</p>
          <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition">
            Buy Now
          </button>
        </div>
      </div>
    </section>
  );
}
