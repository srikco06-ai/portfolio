import Image from "next/image";

const projects = [
  {
    title: "AI-Powered Trading Platform",
    description:
      "Built modern fintech workflows with AI-assisted stock analysis, portfolio management, subscription billing, and trading dashboards using scalable SaaS architecture.",
    highlights: [
      "AI-assisted stock insights",
      "Portfolio management workflows",
      "Subscription billing integration",
    ],
    tech: ["Next.js", "Supabase", "Razorpay", "VPS"],
    image: "/projects/trading-platform-main.jpg",
  },

  {
    title: "AI Medical Chatbot",
    description:
      "Developed AI-assisted healthcare workflows including personalized symptom analysis, appointment handling, and LLM-powered medical assistant interactions.",
    highlights: [
      "LLM-powered medical assistant",
      "Patient interaction workflows",
      "Healthcare dashboard systems",
    ],
    tech: ["React.js", "FastAPI", "Python", "LLM APIs"],
    image: "/projects/medical-chatbot.jpg",
  },

  {
    title: "ERPNext Migration Workflow",
    description:
      "Built enterprise migration pipelines for extracting, validating, transforming, and migrating large-scale SQL Server datasets into ERPNext/MariaDB systems.",
    highlights: [
      "SQL Server → MariaDB migration",
      "Automated ETL validation",
      "ERPNext integration workflows",
    ],
    tech: ["Python", "ERPNext", "MariaDB", "MS SQL"],
    image: "/projects/erpnext-migration.jpg",
  },

  {
    title: "Hybrid Quantum-Classical ML",
    description:
      "Worked on QCNN, QViT, and QANN benchmarking using MNIST and Fashion-MNIST datasets with hybrid quantum-classical machine learning workflows.",
    highlights: [
      "QCNN benchmarking experiments",
      "Quantum ML model evaluation",
      "MNIST/Fashion-MNIST analysis",
    ],
    tech: ["PyTorch", "PennyLane", "QCNN", "QML"],
    image: "/projects/quantum-ml.jpg",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-white py-24"
    >
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
          Featured Projects
        </h2>

        <div className="grid gap-10 md:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.title}
              className="
                overflow-hidden
                rounded-3xl
                border border-slate-200
                bg-white
                shadow-sm
                transition duration-300
                hover:-translate-y-1
                hover:shadow-2xl
              "
            >
              <div
                className="
                  relative
                  h-[320px]
                  w-full
                  border-b
                  border-slate-200
                  bg-slate-100
                "
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-contain bg-white p-2"
                />
              </div>

              <div className="p-8">
                <h3
                  className="
                    mb-5
                    text-3xl
                    font-black
                    text-slate-950
                  "
                >
                  {project.title}
                </h3>

                <p
                  className="
                    mb-6
                    text-lg
                    leading-9
                    text-slate-600
                  "
                >
                  {project.description}
                </p>

                <ul className="mb-8 space-y-3">
                  {project.highlights.map((item) => (
                    <li
                      key={item}
                      className="
                        flex
                        items-start
                        gap-3
                        text-slate-700
                      "
                    >
                      <span className="mt-2 h-2 w-2 rounded-full bg-violet-600" />

                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-3">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="
                        rounded-full
                        border
                        border-slate-200
                        bg-slate-100
                        px-4
                        py-2
                        text-sm
                        font-medium
                        text-slate-700
                      "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}