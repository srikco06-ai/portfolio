"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-24 pb-16">
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-6xl"
      >
        <p
          className="
            mb-8
            text-sm
            font-semibold
            uppercase
            tracking-[0.3em]
            text-violet-600
          "
        >
          AI Engineer • Full Stack Developer
        </p>

        <h1
          className="
            text-5xl
            sm:text-6xl
            lg:text-7xl
            font-black
            tracking-tight
            leading-[0.92]
            text-slate-950
          "
        >
          Sri Krishna
          <br />

          <span className="gradient-text">
            Chaitanya Ogirala
          </span>
        </h1>

        <p
          className="
            mt-10
            max-w-3xl
            text-lg
            sm:text-xl
            leading-9
            text-slate-600
          "
        >
          Building AI systems, enterprise migration workflows,
          ERP integrations, and scalable full-stack products
          using Python, FastAPI, Next.js, Supabase,
          and LLM-powered architectures.
        </p>

        <div className="mt-12 flex flex-wrap gap-4">
          <a
            href="/resume/SriKrishna_Ogirala_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center justify-center
              rounded-2xl
              bg-linear-to-r from-violet-600 to-indigo-600
              px-7 py-4
              text-base font-semibold text-white
              shadow-lg shadow-violet-500/20
              transition duration-300
              hover:-translate-y-1 hover:shadow-xl
            "
          >
            Download Resume
          </a>

          <a
            href="mailto:sri.epd@gmail.com"
            className="
              inline-flex items-center justify-center
              rounded-2xl
              border border-slate-200
              bg-white
              px-7 py-4
              text-base font-semibold text-slate-700
              shadow-sm
              transition duration-300
              hover:-translate-y-1
              hover:bg-slate-50
              hover:shadow-lg
            "
          >
            Contact Me
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
              text-base font-semibold text-slate-700
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

        <div className="mt-16 flex flex-wrap gap-3">
          <span className="skill-pill">
            Python
          </span>

          <span className="skill-pill">
            FastAPI
          </span>

          <span className="skill-pill">
            Next.js
          </span>

          <span className="skill-pill">
            Supabase
          </span>

          <span className="skill-pill">
            ERPNext
          </span>

          <span className="skill-pill">
            LLM Workflows
          </span>
        </div>
      </motion.div>
    </section>
  );
}