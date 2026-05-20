export default function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-slate-200 py-24"
    >
      <div className="max-w-5xl mx-auto px-6 text-center">
        <div
          className="
            inline-flex items-center
            rounded-full
            border border-violet-200
            bg-violet-100/60
            px-4 py-2
            text-sm
            font-semibold
            tracking-wide
            text-violet-700
          "
        >
          AVAILABLE FOR WORK
        </div>

        <h2
          className="
            mt-8
            text-5xl
            sm:text-6xl
            lg:text-7xl
            font-black
            tracking-tight
            leading-[0.95]
            text-slate-950
          "
        >
          Let’s Build Something
          <br />
          Meaningful
        </h2>

        <p
          className="
            mx-auto
            mt-8
            max-w-3xl
            text-lg
            leading-9
            text-slate-600
            sm:text-xl
          "
        >
          Available for AI engineering, full-stack development,
          ERP workflows, startup collaborations,
          and remote opportunities.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="mailto:sri.epd@gmail.com"
            className="
              inline-flex items-center justify-center
              rounded-2xl
              bg-linear-to-r from-violet-600 to-indigo-600
              px-7 py-4
              text-base
              font-semibold
              text-white
              shadow-lg shadow-violet-500/20
              transition duration-300
              hover:-translate-y-1
              hover:shadow-xl
            "
          >
            Email Me
          </a>

          <a
            href="https://www.linkedin.com/in/sri-krishna-c-ogirala-2522b660/"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center justify-center
              rounded-2xl
              border border-slate-200
              bg-white
              px-7 py-4
              text-base
              font-semibold
              text-slate-700
              shadow-sm
              transition duration-300
              hover:-translate-y-1
              hover:bg-slate-50
              hover:shadow-lg
            "
          >
            LinkedIn
          </a>
        </div>

        <div
          className="
            mt-10
            flex flex-wrap items-center justify-center
            gap-3
            text-sm text-slate-500
          "
        >
          <span className="rounded-full border border-slate-200 bg-white px-4 py-2 shadow-sm">
            Python
          </span>

          <span className="rounded-full border border-slate-200 bg-white px-4 py-2 shadow-sm">
            FastAPI
          </span>

          <span className="rounded-full border border-slate-200 bg-white px-4 py-2 shadow-sm">
            Next.js
          </span>

          <span className="rounded-full border border-slate-200 bg-white px-4 py-2 shadow-sm">
            AI Workflows
          </span>

          <span className="rounded-full border border-slate-200 bg-white px-4 py-2 shadow-sm">
            ERPNext
          </span>
        </div>

        <div
          className="
            mt-10
            border-t
            border-slate-200
            pt-8
            text-sm
            text-slate-400
          "
        >
          © 2026 Sri Krishna Chaitanya.
          Designed & Developed by Sri Krishna Chaitanya.
        </div>
      </div>
    </section>
  );
}