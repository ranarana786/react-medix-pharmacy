export default function InfoCard({ image, icon, title, text }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
      <img src={image} alt={title} className="w-full h-48 object-cover" />

      <div className="p-6 flex items-start gap-4">
        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-green-100 text-green-600 text-2xl">
          {icon}
        </div>

        <div>
          <h3 className="text-xl font-semibold text-black mb-2">{title}</h3>
          <p className="text-black">{text}</p>
        </div>
      </div>
    </div>
  );
}
