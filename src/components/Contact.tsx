import React from "react";
import { ArrowUpRight, Mail } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

import githubIcon from "../assets/icons/github.png";
import glintsIcon from "../assets/icons/glints.png";
import instagramIcon from "../assets/icons/instagram.png";

const Contact: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section
      id="contact"
      className="relative flex min-h-auto scroll-mt-32 items-start overflow-hidden border-t pt-4 pb-12"
      style={{
        backgroundColor: "var(--background)",
        color: "var(--foreground)",
        borderColor: "var(--border)",
      }}
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute -bottom-20 -left-20 h-96 w-96 rounded-full bg-emerald-400/5 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-1/4 h-80 w-80 rounded-full bg-emerald-400/[0.03] blur-3xl" />

      <div className="relative mx-auto w-full max-w-[1600px] px-6 lg:px-10 xl:px-14">
        {/* items-stretch memastikan 3 kolom memiliki tinggi container utama yang sama */}
        <div className="grid gap-8 lg:grid-cols-3 lg:gap-10 items-stretch">
          {/* KOLOM 1: JUDUL UTAMA */}
          <div
            className="flex flex-col justify-between gap-6 border-b pb-8 lg:border-b-0 lg:border-r lg:pb-0 lg:pr-10"
            style={{ borderColor: "var(--border)" }}
          >
            <div>
              <div className="mb-4 flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                <span className="text-xs font-semibold tracking-[0.22em] text-emerald-400 uppercase">
                  {t.contact.label}
                </span>
              </div>

              <h2 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl xl:text-6xl">
                {t.contact.title}
              </h2>
            </div>

            <p
              className="text-sm leading-relaxed"
              style={{ color: "var(--muted)" }}
            >
              {t.contact.description}
            </p>
          </div>

          {/* KOLOM 2: KARTU EMAIL & CALL TO ACTION */}
          <div
            className="group relative flex flex-col justify-between gap-6 rounded-xl border p-6 transition-all duration-300 hover:border-emerald-400/40 lg:p-8"
            style={{
              backgroundColor:
                "color-mix(in srgb, var(--background) 94%, white 6%)",
              borderColor: "var(--border)",
            }}
          >
            <div>
              <div className="mb-4 mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-400/10 text-emerald-400">
                <Mail size={24} />
              </div>

              <h3 className="text-2xl font-bold">
                {t.contact.cardTitle || "Open for Work"}
              </h3>
              <p
                className="mt-2 text-sm leading-relaxed"
                style={{ color: "var(--muted)" }}
              >
                {t.contact.cardDescription ||
                  "Feel free to reach out for collaborations or just a friendly hello."}
              </p>
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <a
                href="mailto:wilsondacosta0205@gmail.com"
                className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg bg-emerald-400 px-4 py-3 text-xs font-semibold text-black transition-transform duration-200 hover:scale-[1.02] hover:bg-emerald-300 text-center"
              >
                <span>{t.contact.getInTouch}</span>
                <ArrowUpRight size={16} className="shrink-0" />
              </a>

              <a
                href="mailto:wilsondacosta0205@gmail.com"
                className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg border px-4 py-3 text-xs font-semibold transition hover:border-emerald-400 hover:text-emerald-400 text-center"
                style={{ borderColor: "var(--border)" }}
              >
                <span>{t.contact.emailMe}</span>
              </a>
            </div>
          </div>

          {/* KOLOM 3: SOCIAL MEDIA LINKS */}
          <div className="flex h-full flex-col justify-between gap-3">
            {/* GITHUB */}
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-1 min-h-[60px] items-center justify-between rounded-xl border px-5 py-3 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400/40"
              style={{
                backgroundColor:
                  "color-mix(in srgb, var(--background) 94%, white 6%)",
                borderColor: "var(--border)",
              }}
            >
              <div className="flex items-center gap-4">
                <img
                  src={githubIcon}
                  alt="GitHub"
                  className="h-6 w-6 object-contain"
                />
                <span className="text-sm font-semibold">GitHub</span>
              </div>
              <ArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-emerald-400 shrink-0"
                style={{ color: "var(--muted)" }}
              />
            </a>

            {/* GLINTS */}
            <a
              href="https://glints.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-1 min-h-[60px] items-center justify-between rounded-xl border px-5 py-3 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400/40"
              style={{
                backgroundColor:
                  "color-mix(in srgb, var(--background) 94%, white 6%)",
                borderColor: "var(--border)",
              }}
            >
              <div className="flex items-center gap-4">
                <img
                  src={glintsIcon}
                  alt="Glints"
                  className="h-6 w-6 object-contain"
                />
                <span className="text-sm font-semibold">Glints</span>
              </div>
              <ArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-emerald-400 shrink-0"
                style={{ color: "var(--muted)" }}
              />
            </a>

            {/* INSTAGRAM */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-1 min-h-[60px] items-center justify-between rounded-xl border px-5 py-3 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400/40"
              style={{
                backgroundColor:
                  "color-mix(in srgb, var(--background) 94%, white 6%)",
                borderColor: "var(--border)",
              }}
            >
              <div className="flex items-center gap-4">
                <img
                  src={instagramIcon}
                  alt="Instagram"
                  className="h-6 w-6 object-contain"
                />
                <span className="text-sm font-semibold">Instagram</span>
              </div>
              <ArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-emerald-400 shrink-0"
                style={{ color: "var(--muted)" }}
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
