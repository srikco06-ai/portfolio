const skills = [
  {
    title: "Artificial Intelligence",
    items: [
      "Machine Learning",
      "NLP",
      "LLM Workflows",
      "LLM Integration",
      "Forecasting",
      "Recommendation Systems",
    ],
  },

  {
    title: "Frontend",
    items: [
      "React.js",
      "Next.js",
      "React Native",
      "TypeScript",
    ],
  },

  {
    title: "Backend",
    items: [
      "Python",
      "FastAPI",
      "REST APIs",
      "Supabase",
    ],
  },

  {
    title: "Databases",
    items: [
      "PostgreSQL",
      "MongoDB",
      "MariaDB",
      "MS SQL Server",
    ],
  },

  {
    title: "Enterprise Systems",
    items: [
      "ERPNext",
      "Frappe",
      "SQL Migration",
      "ETL Workflows",
    ],
  },

  {
    title: "Cloud & Deployment",
    items: [
      "AWS",
      "VPS",
      "Hostinger",
      "Linux Deployment",
    ],
  },

  {
    title: "Libraries & Tools",
    items: [
      "PyTorch",
      "TensorFlow",
      "Scikit-learn",
      "Git/GitHub",
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="bg-slate-50 py-24"
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
          Technical Skills
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill) => (
            <div
              key={skill.title}
              className="
                rounded-3xl
                border border-slate-200
                bg-white
                p-8
                shadow-sm
                transition duration-300
                hover:-translate-y-1
                hover:shadow-xl
              "
            >
              <h3
                className="
                  mb-8
                  text-2xl
                  font-black
                  text-slate-950
                "
              >
                {skill.title}
              </h3>

              <div className="flex flex-wrap gap-4">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="
                      rounded-full
                      border border-slate-200
                      bg-slate-100
                      px-5 py-3
                      text-sm
                      font-medium
                      text-slate-700
                    "
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}