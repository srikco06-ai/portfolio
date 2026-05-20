const experiences = [
  {
    role: "Full Stack Developer Intern",
    company: "Aiwoox / Navocent",
    period: "Aug 2025 – Apr 2026",
    points: [
      "Worked on AI-enabled applications including personalized medical chatbot systems and ERPNext workflows.",
      "Built frontend/backend workflows using Next.js, React Native, Python, FastAPI, and Supabase.",
      "Managed deployment workflows across VPS, Hostinger, and cloud-based environments.",
      "Contributed to SQL Server to MariaDB migration pipelines and ERPNext integrations.",
    ],
  },

  {
    role: "Data Scientist Intern",
    company: "Aivariant / ExcelR",
    period: "Jan 2023 – Jun 2024",
    points: [
      "Built churn prediction models using Random Forest and feature engineering workflows.",
      "Developed NLP classification systems using TF-IDF and Logistic Regression.",
      "Worked on forecasting, recommendation systems, and clustering analysis.",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
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
          Experience
        </h2>

        <div className="space-y-10">
          {experiences.map((exp) => (
            <div
              key={exp.role}
              className="
                rounded-3xl
                border border-slate-200
                bg-white
                p-10
                shadow-sm
              "
            >
              <div
                className="
                  flex flex-col gap-4
                  md:flex-row
                  md:items-start
                  md:justify-between
                "
              >
                <div>
                  <h3 className="text-3xl font-black text-slate-950">
                    {exp.role}
                  </h3>

                  <p className="mt-2 text-lg text-slate-500">
                    {exp.company}
                  </p>
                </div>

                <p className="text-base font-medium text-slate-500">
                  {exp.period}
                </p>
              </div>

              <ul className="mt-8 space-y-5">
                {exp.points.map((point) => (
                  <li
                    key={point}
                    className="
                      flex gap-3
                      text-lg
                      leading-8
                      text-slate-700
                    "
                  >
                    <span className="mt-2 h-2 w-2 rounded-full bg-violet-600" />

                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}