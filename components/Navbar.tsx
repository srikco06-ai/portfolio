import Link from "next/link";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="section-wrapper">
        <div className="flex h-20 items-center justify-between">
          <Link
            href="/"
            className="text-2xl font-black tracking-tight text-slate-900"
          >
            Sri Krishna Chaitanya
          </Link>

          <nav className="hidden items-center gap-10 text-lg font-medium text-slate-600 md:flex">
            <a
              href="#skills"
              className="transition hover:text-violet-600"
            >
              Skills
            </a>

            <a
              href="#experience"
              className="transition hover:text-violet-600"
            >
              Experience
            </a>

            <a
              href="#projects"
              className="transition hover:text-violet-600"
            >
              Projects
            </a>

            <a
              href="#certifications"
              className="transition hover:text-violet-600"
            >
              Certifications
            </a>

            <a
              href="#contact"
              className="transition hover:text-violet-600"
            >
              Contact
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}