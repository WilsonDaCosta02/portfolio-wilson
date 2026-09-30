import { useLanguage } from "../context/LanguageContext";

function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="home"
      className="relative min-h-[100svh] overflow-hidden"
      style={{
        backgroundColor: "var(--background)",
        color: "var(--foreground)",
      }}
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute -right-40 top-20 h-[500px] w-[500px] rounded-full bg-emerald-400/10 blur-[140px]" />

      <div className="mx-auto grid min-h-[100svh] max-w-7xl items-center px-6 pb-8 pt-24 sm:pb-10 lg:grid-cols-2 lg:gap-10 lg:px-8 lg:pb-8 lg:pt-24">
        {/* ================= LEFT ================= */}
        <div className="relative z-10">
          {/* Availability */}
          <div className="mb-6 flex items-center gap-3 text-sm font-medium tracking-[0.15em] text-emerald-400">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.9)]" />

            {t.hero.availability}
          </div>

          {/* Heading */}
          <h1 className="max-w-3xl text-5xl font-black leading-[0.92] tracking-[-0.045em] sm:text-6xl lg:text-7xl xl:text-8xl">
            FULLSTACK
            <span className="block bg-gradient-to-r from-[var(--foreground)] via-[var(--foreground)] to-emerald-400 bg-clip-text text-transparent">
              DEVELOPER
            </span>
          </h1>

          {/* Description */}
          <p
            className="mt-5 max-w-xl text-sm leading-6 sm:text-base lg:text-[17px]"
            style={{
              color: "var(--muted)",
            }}
          >
            {t.hero.description}
          </p>

          {/* CTA */}
          <div className="mt-6 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="group rounded-lg bg-emerald-400 px-6 py-3.5 text-sm font-bold text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-emerald-300 hover:shadow-[0_10px_30px_rgba(52,211,153,0.15)]"
            >
              {t.hero.viewWork}

              <span className="ml-3 inline-block transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>

            <a
              href="/cv.pdf"
              download="CV-Willybrodus-Stephanus-Da-Costa.pdf"
              className="group rounded-lg border px-6 py-3.5 text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/5"
              style={{
                borderColor: "var(--border)",
              }}
            >
              {t.hero.downloadCv}

              <span className="ml-3 inline-block transition-transform duration-300 group-hover:translate-y-0.5">
                ↓
              </span>
            </a>
          </div>

          {/* Stats */}
          <div
            className="mt-8 flex max-w-xl divide-x"
            style={{ borderColor: "var(--border)" }}
          >
            <div className="pr-8">
              <p className="text-2xl font-bold">3+</p>

              <p className="mt-1 text-xs" style={{ color: "var(--muted)" }}>
                {t.hero.stats.projects}
              </p>
            </div>

            <div className="px-8">
              <p className="text-2xl font-bold">1+</p>

              <p className="mt-1 text-xs" style={{ color: "var(--muted)" }}>
                {t.hero.stats.experience}
              </p>
            </div>

            <div className="pl-8">
              <p className="text-2xl font-bold">∞</p>

              <p className="mt-1 text-xs" style={{ color: "var(--muted)" }}>
                {t.hero.stats.passion}
              </p>
            </div>
          </div>
        </div>

        {/* ================= RIGHT ================= */}
        <div className="relative h-[400px] w-full max-w-[410px] translate-x-2 sm:h-[430px] sm:max-w-[430px] lg:h-[420px] lg:max-w-[430px] lg:translate-x-5 xl:h-[460px] xl:max-w-[450px] xl:translate-x-8">
          {/* Glow */}
          <div className="absolute right-10 top-10 h-[380px] w-[380px] rounded-full bg-emerald-400/10 blur-[100px]" />

          {/* Main visual */}
          <div className="relative h-full w-full">
            {/* Decorative circle */}
            <div className="absolute right-0 top-6 h-[320px] w-[320px] rounded-full border border-emerald-400/10 bg-emerald-400/5 sm:h-[350px] sm:w-[350px] lg:h-[350px] lg:w-[350px] xl:h-[390px] xl:w-[390px]" />
            {/* Photo */}
            <div className="absolute inset-x-12 bottom-0 top-12 overflow-hidden rounded-[2rem] sm:inset-x-14 sm:top-14 lg:inset-x-16 lg:top-16">
              {/* Image */}
              <img
                src="/images/profile.png"
                alt="Willybrodus Stephanus Da Costa"
                className="h-full w-full object-cover object-top"
              />

              {/* Bottom gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#080c0b] via-transparent to-transparent" />
            </div>

            {/* Name card */}
            <div
              className="absolute bottom-2 left-0 z-20 rounded-xl border px-4 py-3 shadow-2xl backdrop-blur-xl"
              style={{
                backgroundColor:
                  "color-mix(in srgb, var(--surface) 90%, transparent)",
                borderColor: "var(--border)",
              }}
            >
              <p className="text-sm font-semibold tracking-wide">
                WILLYBRODUS STEPHANUS DA COSTA
              </p>

              <p className="mt-1 text-xs" style={{ color: "var(--muted)" }}>
                Fullstack Developer
              </p>
            </div>

            {/* Quote */}
            <div className="absolute right-0 top-10 z-20 hidden w-40 lg:block xl:w-44">
              <span className="block text-4xl leading-[0.3] text-emerald-400">
                “
              </span>

              <p
                className="mt-0 text-sm leading-5"
                style={{ color: "var(--muted)" }}
              >
                {t.hero.quote}
              </p>

              <div className="mt-3 h-px w-8 bg-emerald-400" />
            </div>

            {/* Current status */}
            <div
              className="absolute bottom-24 right-0 z-20 hidden rounded-xl border px-4 py-3 backdrop-blur-xl lg:block"
              style={{
                backgroundColor:
                  "color-mix(in srgb, var(--surface) 90%, transparent)",
                borderColor: "var(--border)",
              }}
            >
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />

                <span className="text-xs font-medium">{t.hero.currently}</span>
              </div>

              <p className="mt-2 text-xs" style={{ color: "var(--muted)" }}>
                {t.hero.currentlyText}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom labels */}
      <div className="absolute bottom-1 left-1/2 hidden -translate-x-1/2 items-center gap-5 text-[10px] tracking-[0.25em] md:flex">
        <span style={{ color: "var(--muted)" }}>{t.hero.labels.web}</span>

        <span className="opacity-30">×</span>

        <span style={{ color: "var(--muted)" }}>{t.hero.labels.mobile}</span>

        <span className="opacity-30">×</span>

        <span style={{ color: "var(--muted)" }}>{t.hero.labels.api}</span>

        <span className="opacity-30">×</span>

        <span style={{ color: "var(--muted)" }}>
          {t.hero.labels.automation}
        </span>
      </div>
    </section>
  );
}

export default Hero;
