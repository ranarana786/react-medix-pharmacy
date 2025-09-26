export default function Section({ sectionId, children }) {
  return (
    <section id={sectionId} className="py-16 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">{children}</div>
    </section>
  );
}
