import React from "react";
import { useLanguage } from "../context/LanguageContext";

const Experience: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section
      id="experience"
      className="relative scroll-mt-24 overflow-hidden border-t py-16 lg:py-20"
      style={{
        backgroundColor: "var(--background)",
        color: "var(--foreground)",
        borderColor: "var(--border)",
      }}
    >
      {/* Subtle background glow */}
      <div className="pointer-events-none absolute left-0 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-emerald-400/5 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-0 h-96 w-96 rounded-full bg-emerald-400/[0.03] blur-3xl" />

      <div className="relative mx-auto max-w-[1600px] px-6 lg:px-10 xl:px-14">
        {/* SECTION HEADER */}
        <div className="mb-12 flex items-end justify-between gap-8 lg:mb-16">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />

              <span className="text-xs font-semibold tracking-[0.22em] text-emerald-400">
                {t.experience.label}
              </span>
            </div>

            <h2 className="text-3xl font-bold leading-none tracking-tight sm:text-4xl lg:text-5xl">
              {t.experience.title}
            </h2>
          </div>

          <div className="hidden max-w-sm text-centre lg:block">
            <p
              className="text-sx leading-6"
              style={{
                color: "var(--muted)",
              }}
            >
              {t.experience.subtitle}
            </p>
          </div>
        </div>

        {/* TIMELINE */}
        <div className="relative">
          {/* Timeline line */}
          <div
            className="absolute left-0 right-0 top-[20px] hidden h-px lg:block"
            style={{
              backgroundColor: "var(--border)",
            }}
          />

          {/* Cards */}
          <div className="grid gap-5 lg:grid-cols-3 lg:gap-6">
            {/* 2024 */}
            <article
              className="group relative flex min-h-[300px] flex-col justify-between border p-6 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400/40 lg:p-7"
              style={{
                backgroundColor:
                  "color-mix(in srgb, var(--background) 94%, white 6%)",
                borderColor: "var(--border)",
              }}
            >
              {/* Timeline point */}
              <span className="absolute -top-[5px] left-7 hidden h-2.5 w-2.5 rounded-full border-2 border-emerald-400 bg-[var(--background)] lg:block" />

              <div>
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {/* Hapus titik bulat pendobel di sini */}
                    <span
                      className="text-sm font-medium"
                      style={{
                        color: "var(--muted)",
                      }}
                    >
                      01
                    </span>
                  </div>

                  <span className="text-xs tracking-[0.15em] text-emerald-400">
                    2024
                  </span>
                </div>

                <h3 className="max-w-xs text-xl font-semibold leading-tight lg:text-2xl">
                  Frontend & Backend Web
                </h3>

                <p className="mt-1.5 text-sm font-medium text-emerald-400">
                  MSIB - Dicoding Indonesia
                </p>
              </div>

              <p
                className="mt-6 max-w-md text-sm leading-relaxed"
                style={{
                  color: "var(--muted)",
                }}
              >
                {t.experience.cards.intern.description}
              </p>
            </article>

            {/* 2025 */}
            <article
              className="group relative flex min-h-[300px] flex-col justify-between border p-6 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400/40 lg:p-7"
              style={{
                backgroundColor:
                  "color-mix(in srgb, var(--background) 94%, white 6%)",
                borderColor: "var(--border)",
              }}
            >
              {/* Timeline point */}
              <span className="absolute -top-[5px] left-7 hidden h-2.5 w-2.5 rounded-full bg-emerald-400 lg:block" />

              <div>
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {/* Hapus titik bulat pendobel di sini */}
                    <span
                      className="text-sm font-medium"
                      style={{
                        color: "var(--muted)",
                      }}
                    >
                      02
                    </span>
                  </div>

                  <span className="text-xs tracking-[0.15em] text-emerald-400">
                    2025
                  </span>
                </div>

                <h3 className="max-w-xs text-xl font-semibold leading-tight lg:text-2xl">
                  IT / Web Development
                </h3>

                <p className="mt-1.5 text-sm font-medium text-emerald-400">
                  PKL - CV. Sinar Teknologi Indonesia
                </p>
              </div>

              <p
                className="mt-6 max-w-md text-sm leading-relaxed"
                style={{
                  color: "var(--muted)",
                }}
              >
                {t.experience.cards.pkl.description}
              </p>
            </article>

            {/* CURRENT */}
            <article
              className="group relative flex min-h-[300px] flex-col justify-start border p-6 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400/40 lg:p-7"
              style={{
                backgroundColor:
                  "color-mix(in srgb, var(--background) 94%, white 6%)",
                borderColor: "var(--border)",
              }}
            >
              {/* Timeline point */}
              <span className="absolute -top-[5px] left-7 hidden h-2.5 w-2.5 rounded-full bg-emerald-400 lg:block" />

              <div>
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span
                      className="text-sm font-medium"
                      style={{
                        color: "var(--muted)",
                      }}
                    >
                      03
                    </span>
                  </div>

                  <span className="text-xs tracking-[0.15em] text-emerald-400">
                    {t.experience.cards.current.year}
                  </span>
                </div>

                <h3 className="max-w-sm text-xl font-semibold leading-tight lg:text-2xl">
                  {t.experience.cards.current.role}
                </h3>

                <div className="mt-2 inline-flex items-center gap-2 text-sm font-medium text-emerald-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  {t.experience.cards.current.company}
                </div>
              </div>

              {/* Ubah mt-6 ke mt-4 jika ingin jaraknya lebih rapat lagi */}
              <p
                className="mt-12 max-w-md text-sm leading-relaxed"
                style={{
                  color: "var(--muted)",
                }}
              >
                {t.experience.cards.current.description}
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
