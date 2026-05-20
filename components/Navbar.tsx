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

          <nav className="hidden md:flex items-center gap-10 text-lg font-medium text-slate-600">
            <a href="#skills" className="hover:text-violet-600 transition">
              Skills
            </a>

            <a href="#experience" className="hover:text-violet-600 transition">
              Experience
            </a>

            <a href="#projects" className="hover:text-violet-600 transition">
              Projects
            </a>

            <a href="#contact" className="hover:text-violet-600 transition">
              Contact
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}