import { useActiveSection } from "../hooks/useActiveSection";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const NAV_ITEMS = ["about", "skills", "projects", "experience", "contact"];

export default function Navbar() {
  const active = useActiveSection(NAV_ITEMS);
  const [open, setOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/80 backdrop-blur border-b border-gray-100">
      <nav className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="font-bold text-lg tracking-tight">Portfolio</span>

        {/* Desktop */}
        <ul className="hidden md:flex gap-8">
          {NAV_ITEMS.map((item) => (
            <li key={item}>
              <button
                onClick={() => scrollTo(item)}
                className={`capitalize text-sm font-medium transition-colors ${
                  active === item
                    ? "text-indigo-600"
                    : "text-gray-500 hover:text-gray-900"
                }`}
              >
                {item}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <ul className="md:hidden px-6 pb-4 flex flex-col gap-3 bg-white border-b border-gray-100">
          {NAV_ITEMS.map((item) => (
            <li key={item}>
              <button
                onClick={() => scrollTo(item)}
                className={`capitalize text-sm font-medium ${
                  active === item ? "text-indigo-600" : "text-gray-500"
                }`}
              >
                {item}
              </button>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
