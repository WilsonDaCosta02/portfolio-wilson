import { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { useLanguage } from "../context/LanguageContext";

const navItems = [
  {
    id: "home",
    en: "Home",
    idn: "Beranda",
  },
  {
    id: "projects",
    en: "Projects",
    idn: "Proyek",
  },
  {
    id: "about",
    en: "About",
    idn: "Tentang",
  },
  {
    id: "experience",
    en: "Experience",
    idn: "Pengalaman",
  },
  {
    id: "contact",
    en: "Contact",
    idn: "Kontak",
  },
];

function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage } = useLanguage();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isEnglish = language === "en";

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 border-b backdrop-blur-xl transition-colors duration-300"
      style={{
        backgroundColor:
          theme === "dark"
            ? "rgba(8, 12, 11, 0.75)"
            : "rgba(245, 247, 246, 0.8)",
        borderColor: "var(--border)",
      }}
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">

        {/* Logo */}
        <a
          href="#home"
          onClick={closeMenu}
          className="group flex items-center gap-2"
        >
          <span className="text-sm font-bold tracking-[0.3em]">
            Willybrodus Stephanus Da Costa
          </span>

          <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.8)] transition-transform duration-300 group-hover:scale-125" />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item, index) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`relative py-2 text-sm transition-colors duration-300 ${
                index === 0
                  ? "text-[var(--foreground)]"
                  : "text-[var(--muted)] hover:text-[var(--foreground)]"
              }`}
            >
              {isEnglish ? item.en : item.idn}

              {/* Active indicator */}
              {index === 0 && (
                <span className="absolute bottom-0 left-0 h-px w-full bg-emerald-400" />
              )}
            </a>
          ))}
        </div>

        {/* Desktop Controls */}
        <div className="hidden items-center gap-3 md:flex">

          {/* Language */}
          <button
            type="button"
            onClick={toggleLanguage}
            aria-label="Change language"
            className="rounded-lg border px-3 py-2 text-xs font-semibold transition-all duration-300 hover:border-emerald-400/40 hover:bg-emerald-400/5"
            style={{
              borderColor: "var(--border)",
            }}
          >
            <span
              className={
                language === "id"
                  ? "text-emerald-400"
                  : "text-[var(--muted)]"
              }
            >
              ID
            </span>

            <span className="mx-1.5 text-[var(--muted)]">
              /
            </span>

            <span
              className={
                language === "en"
                  ? "text-emerald-400"
                  : "text-[var(--muted)]"
              }
            >
              EN
            </span>
          </button>

          {/* Theme */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Change theme"
            className="flex h-10 w-10 items-center justify-center rounded-lg border text-sm transition-all duration-300 hover:border-emerald-400/40 hover:bg-emerald-400/5"
            style={{
              borderColor: "var(--border)",
            }}
          >
            {theme === "dark" ? "☀" : "☾"}
          </button>

          {/* Contact */}
          <a
            href="#contact"
            className="ml-2 rounded-lg border px-5 py-2.5 text-sm font-medium transition-all duration-300 hover:border-emerald-400/50 hover:bg-emerald-400/10"
            style={{
              borderColor: "var(--border)",
            }}
          >
            {isEnglish ? "Let's Talk" : "Hubungi Saya"}
            <span className="ml-2">↗</span>
          </a>
        </div>

        {/* Mobile Controls */}
        <div className="flex items-center gap-2 md:hidden">

          {/* Mobile Theme */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Change theme"
            className="flex h-10 w-10 items-center justify-center rounded-lg border text-sm"
            style={{
              borderColor: "var(--border)",
            }}
          >
            {theme === "dark" ? "☀" : "☾"}
          </button>

          {/* Mobile Language */}
          <button
            type="button"
            onClick={toggleLanguage}
            aria-label="Change language"
            className="rounded-lg border px-3 py-2 text-xs font-semibold"
            style={{
              borderColor: "var(--border)",
            }}
          >
            {language.toUpperCase()}
          </button>

          {/* Hamburger */}
          <button
            type="button"
            onClick={() => setIsMenuOpen((current) => !current)}
            aria-label="Open navigation menu"
            aria-expanded={isMenuOpen}
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-lg border"
            style={{
              borderColor: "var(--border)",
            }}
          >
            <span
              className={`h-px w-4 bg-current transition-transform duration-300 ${
                isMenuOpen ? "translate-y-1 rotate-45" : ""
              }`}
            />

            <span
              className={`h-px w-4 bg-current transition-opacity duration-300 ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            />

            <span
              className={`h-px w-4 bg-current transition-transform duration-300 ${
                isMenuOpen ? "-translate-y-1 -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden border-t transition-all duration-300 md:hidden ${
          isMenuOpen
            ? "max-h-96 opacity-100"
            : "max-h-0 opacity-0"
        }`}
        style={{
          borderColor: "var(--border)",
          backgroundColor:
            theme === "dark"
              ? "rgba(8, 12, 11, 0.96)"
              : "rgba(245, 247, 246, 0.97)",
        }}
      >
        <div className="mx-auto max-w-7xl px-6 py-5">

          <div className="flex flex-col">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={closeMenu}
                className="border-b py-4 text-sm text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
                style={{
                  borderColor: "var(--border)",
                }}
              >
                {isEnglish ? item.en : item.idn}
              </a>
            ))}
          </div>

          <a
            href="#contact"
            onClick={closeMenu}
            className="mt-5 block rounded-lg bg-emerald-400 px-5 py-3 text-center text-sm font-bold text-black transition hover:bg-emerald-300"
          >
            {isEnglish ? "Let's Talk ↗" : "Hubungi Saya ↗"}
          </a>
        </div>
      </div>
    </header>
  );
}

export default Navbar;