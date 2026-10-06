import React from "react";
import { ArrowUpRight, Mail } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const Contact: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section
      id="contact"
      className="min-h-screen scroll-mt-24 border-t flex items-center"
      style={{
        backgroundColor: "var(--background)",
        color: "var(--foreground)",
        borderColor: "var(--border)",
      }}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-[0.9fr_1.4fr_0.8fr]">
          {/* TITLE */}
          <div className="border-r py-8 pr-8">
            <div className="mb-3">
              <span className="text-[10px] font-semibold tracking-[0.18em] text-emerald-400">
                {t.contact.label}
              </span>
            </div>

            <h2 className="max-w-xs text-3xl font-bold leading-tight sm:text-4xl">
              {t.contact.title}
            </h2>
          </div>

          {/* DESCRIPTION + BUTTONS */}
          <div className="border-r px-8 py-8">
            <p
              className="max-w-lg text-sm leading-6"
              style={{
                color: "var(--muted)",
              }}
            >
              {t.contact.description}
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              {/* GET IN TOUCH */}
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-md bg-emerald-400 px-5 py-3 text-xs font-semibold text-black transition hover:bg-emerald-300"
              >
                {t.contact.getInTouch}
                <ArrowUpRight size={15} />
              </a>

              {/* EMAIL */}
              <a
                href="mailto:natudenilson@gmail.com"
                className="inline-flex items-center gap-2 rounded-md border px-5 py-3 text-xs font-semibold transition hover:border-emerald-400 hover:text-emerald-400"
                style={{
                  borderColor: "var(--border)",
                }}
              >
                {t.contact.emailMe}
                <Mail size={15} />
              </a>
            </div>
          </div>

          {/* SOCIAL */}
          <div className="flex flex-col justify-center gap-4 px-8 py-8">
            <a
              href="#"
              className="flex items-center gap-4 text-sm transition hover:text-emerald-400"
            >
              <span className="w-6 font-semibold">GH</span>
              <span>GitHub</span>
            </a>

            <a
              href="#"
              className="flex items-center gap-4 text-sm transition hover:text-emerald-400"
            >
              <span className="w-6 font-semibold">in</span>
              <span>LinkedIn</span>
            </a>

            <a
              href="#"
              className="flex items-center gap-4 text-sm transition hover:text-emerald-400"
            >
              <span className="w-6 font-semibold">◎</span>
              <span>Instagram</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
