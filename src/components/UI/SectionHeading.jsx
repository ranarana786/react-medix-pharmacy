export default function SectionHeading({ title, subtitle }) {
  return (
    <div className="text-center mb-12 text-black">
      <h2 className="text-3xl md:text-4xl font-bold  mb-4">{title}</h2>
      <p className="text-lg  max-w-2xl mx-auto">{subtitle}</p>
    </div>
  );
}
