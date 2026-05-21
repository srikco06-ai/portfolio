const certifications = [
  "Quantum Computing & Machine Learning — IIT Delhi × TimesPro",
  "Data Science & Machine Learning",
  "SAP UI5 / SAP Fiori Development",
  "CCNA | MCP | MCSE",
];

export default function Certifications() {
  return (
    <section id="certifications" className="bg-slate-50 py-24">
      <div className="max-w-7xl mx-auto px-6">
        <h2
          className="
            mb-16
            text-4xl
            sm:text-5xl
            font-black
            tracking-tight
            text-slate-950
          "
        >
          Certifications
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          {certifications.map((cert) => (
            <div
              key={cert}
              className="
                rounded-3xl
                border border-slate-200
                bg-white
                p-8
                text-lg
                font-semibold
                text-slate-800
                shadow-sm
                transition duration-300
                hover:-translate-y-1
                hover:shadow-xl
              "
            >
              {cert}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}