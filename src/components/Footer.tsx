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
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-8 lg:px-8">
        {/* LEFT */}
        <div className="flex items-center gap-2">
          <span className="text-sm font-bold tracking-[0.15em]">WILSON</span>

          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />

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
          className="flex items-center gap-2 text-xs"
          style={{
            color: "var(--muted)",
          }}
        >
          <span>{t.footer.tagline}</span>
          <span>© 2025 Wilson da Costa.</span>

          <a
            href="#home"
            className="ml-4 flex h-10 w-10 items-center justify-center rounded-full border transition hover:border-emerald-400 hover:text-emerald-400"
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
