import { useEffect, useState } from "react";
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
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolling, setIsScrolling] = useState(false);

  const isEnglish = language === "en";

  // ========================================
  // CLOSE MOBILE MENU
  // ========================================
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // ========================================
  // NAVIGATION CLICK
  // ========================================
  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string,
  ) => {
    e.preventDefault();

    const section = document.getElementById(sectionId);

    if (!section) return;

    // Langsung ubah active indicator
    setActiveSection(sectionId);

    // Hentikan sementara scroll spy
    // agar tidak kembali ke section sebelumnya
    setIsScrolling(true);

    // Smooth scroll ke section tujuan
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    // Setelah animasi smooth scroll selesai,
    // aktifkan kembali scroll spy
    setTimeout(() => {
      setIsScrolling(false);
      setActiveSection(sectionId);
    }, 800);

    // Tutup mobile menu
    closeMenu();
  };

  // ========================================
  // SCROLL SPY
  // ========================================
  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean) as HTMLElement[];

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Jangan ubah active section ketika
        // smooth scroll sedang berlangsung
        if (isScrolling) return;

        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        const visibleSection = visibleSections[0];

        if (visibleSection) {
          setActiveSection(visibleSection.target.id);
        }
      },
      {
        rootMargin: "-80px 0px -55% 0px",
        threshold: [0.1, 0.25, 0.5],
      },
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, [isScrolling]);

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
        {/* ========================================
            LOGO
        ======================================== */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, "home")}
          className="group flex min-w-0 items-center gap-1.5 sm:gap-2"
        >
          <span className="whitespace-nowrap text-[10px] font-bold tracking-[0.12em] sm:text-sm sm:tracking-[0.3em]">
            Willybrodus Stephanus Da Costa
          </span>

          <span className="h-2 w-2 shrink-0 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.8)] transition-transform duration-300 group-hover:scale-125" />
        </a>

        {/* ========================================
            DESKTOP NAVIGATION
        ======================================== */}
        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;

            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
                className={`relative py-2 text-sm transition-colors duration-300 ${
                  isActive
                    ? "text-[var(--foreground)]"
                    : "text-[var(--muted)] hover:text-[var(--foreground)]"
                }`}
              >
                {isEnglish ? item.en : item.idn}

                {/* Active Indicator */}
                {isActive && (
                  <span className="absolute bottom-0 left-0 h-px w-full bg-emerald-400" />
                )}
              </a>
            );
          })}
        </div>

        {/* ========================================
            DESKTOP CONTROLS
        ======================================== */}
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
                language === "id" ? "text-emerald-400" : "text-[var(--muted)]"
              }
            >
              ID
            </span>

            <span className="mx-1.5 text-[var(--muted)]">/</span>

            <span
              className={
                language === "en" ? "text-emerald-400" : "text-[var(--muted)]"
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
            onClick={(e) => handleNavClick(e, "contact")}
            className="ml-2 rounded-lg border px-5 py-2.5 text-sm font-medium transition-all duration-300 hover:border-emerald-400/50 hover:bg-emerald-400/10"
            style={{
              borderColor: "var(--border)",
            }}
          >
            {isEnglish ? "Let's Talk" : "Hubungi Saya"}

            <span className="ml-2">↗</span>
          </a>
        </div>

        {/* ========================================
            MOBILE CONTROLS
        ======================================== */}
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

      {/* ========================================
          MOBILE MENU
      ======================================== */}
      <div
        className={`overflow-hidden border-t transition-all duration-300 md:hidden ${
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
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
            {navItems.map((item) => {
              const isActive = activeSection === item.id;

              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => handleNavClick(e, item.id)}
                  className={`border-b py-4 text-sm transition-colors ${
                    isActive
                      ? "text-emerald-400"
                      : "text-[var(--muted)] hover:text-[var(--foreground)]"
                  }`}
                  style={{
                    borderColor: "var(--border)",
                  }}
                >
                  {isEnglish ? item.en : item.idn}
                </a>
              );
            })}
          </div>

          {/* Mobile Contact */}
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "contact")}
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
