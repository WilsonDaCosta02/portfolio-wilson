import React from "react";
import { ArrowUp } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer
      className="border-t"
      style={{
        backgroundColor: "var(--background)",
        color: "var(--foreground)",
        borderColor: "var(--border)",
      }}
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-8 sm:flex-row sm:items-center sm:justify-between lg:px-8">
        {/* LEFT */}
        <div className="flex items-center gap-2">
          <span className="text-sm font-bold tracking-[0.15em]">WILSON</span>

          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />

          <span
            className="text-xs"
            style={{
              color: "var(--muted)",
            }}
          >
            {t.footer.role}
          </span>
        </div>

        {/* RIGHT */}
        <div
          className="flex w-full items-center justify-between gap-4 text-xs sm:w-auto sm:justify-end"
          style={{
            color: "var(--muted)",
          }}
        >
          <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-2">
            <span>{t.footer.tagline}</span>

            <span className="hidden sm:inline">•</span>

            <span>© 2025 Wilson da Costa.</span>
          </div>

          <a
            href="#home"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition hover:border-emerald-400 hover:text-emerald-400"
            style={{
              borderColor: "var(--border)",
            }}
            aria-label="Back to top"
          >
            <ArrowUp size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
