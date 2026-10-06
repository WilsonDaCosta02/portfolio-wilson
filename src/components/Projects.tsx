import { useEffect, useState } from "react";
import { useLanguage } from "../context/LanguageContext";

function Projects() {
  const { t } = useLanguage();
  const [openRepo, setOpenRepo] = useState<string | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;

      if (!target.closest("[data-repo-popup]")) {
        setOpenRepo(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <section
      id="projects"
      className="relative pt-14 pb-2 sm:pt-16 sm:pb-2 lg:pt-20 lg:pb-2"
      style={{
        backgroundColor: "var(--background)",
        color: "var(--foreground)",
      }}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* ================= HEADER ================= */}
        <div className="-translate-y-8 mb-8 flex flex-col gap-6 lg:-translate-y-15 lg:flex-row lg:items-end lg:justify-between">
          <div>
            {/* Small label */}
            <div className="mb-3 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-emerald-400">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />

              {t.projects.featured}
            </div>

            {/* Title */}
            <h2 className="text-4xl font-black tracking-[-0.04em] sm:text-5xl">
              {t.projects.title}
            </h2>
          </div>

          {/* Description + button */}
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end lg:max-w-[540px]">
            <p
              className="-translate-x-90 max-w-md text-xs leading-5"
              style={{
                color: "var(--muted)",
              }}
            >
              {t.projects.description}
            </p>
          </div>
        </div>

        {/* ================= PROJECT GRID ================= */}
        <div className="-mt-17 grid grid-cols-1 gap-2 md:grid-cols-2 lg:gap-3">
          {/* PROJECT 1 */}
          <article
            className="group relative overflow-visible rounded-lg border transition-all duration-300 hover:-translate-y-1"
            style={{
              backgroundColor: "var(--surface)",
              borderColor: "var(--border)",
            }}
          >
            {/* Image */}
            <div className="relative p-1.5">
              <div className="relative aspect-[12/1.5] overflow-hidden rounded-md bg-black/10">
                <img
                  src="/images/project-sijalan.png"
                  alt="SI JALAN"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />

                {/* Number */}
                <div className="absolute left-2 top-2 flex h-9 w-9 items-center justify-center rounded-md border border-emerald-400/20 bg-black/60 text-xs font-medium text-emerald-400 backdrop-blur-md">
                  01
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="px-3 pb-3 pt-1.5">
              <p
                className="mb-1 text-[10px] font-medium"
                style={{ color: "var(--muted)" }}
              >
                {t.projects.items.sijalan.category}
              </p>

              <div className="mb-0 flex items-center justify-between gap-3">
                <h3 className="text-lg font-bold">SI JALAN</h3>

                <div className="relative" data-repo-popup>
                  <button
                    type="button"
                    onClick={() =>
                      setOpenRepo(openRepo === "sijalan" ? null : "sijalan")
                    }
                    aria-label="View SI JALAN repositories"
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border text-sm transition-all duration-300 hover:border-emerald-400 hover:text-emerald-400 cursor-pointer"
                    style={{
                      borderColor: "var(--border)",
                    }}
                  >
                    →
                  </button>

                  {openRepo === "sijalan" && (
                    <div
                      className="absolute right-0 bottom-10 z-50 w-32 rounded-lg border p-2 text-center shadow-xl backdrop-blur-xl"
                      style={{
                        backgroundColor: "var(--surface)",
                        borderColor: "var(--border)",
                      }}
                    >
                      <p
                        className="mb-1 px-2 py-1 text-[10px] font-medium"
                        style={{
                          color: "var(--muted)",
                        }}
                      >
                        View Repository
                      </p>

                      <a
                        href="https://github.com/WilsonDaCosta02/sijalan-bali-frontend"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block rounded-md px-2 py-2 text-xs transition-colors hover:bg-emerald-400/10 hover:text-emerald-400"
                        style={{
                          color: "var(--foreground)",
                        }}
                      >
                        Frontend ↗
                      </a>

                      <a
                        href="https://github.com/WilsonDaCosta02/sijalan-bali-backend"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block rounded-md px-2 py-2 text-xs transition-colors hover:bg-emerald-400/10 hover:text-emerald-400"
                        style={{
                          color: "var(--foreground)",
                        }}
                      >
                        Backend ↗
                      </a>
                    </div>
                  )}
                </div>
              </div>

              <p
                className="text-xs leading-4"
                style={{
                  color: "var(--muted)",
                }}
              >
                {t.projects.items.sijalan.description}
              </p>

              {/* Tech */}
              <div className="mt-2 flex flex-wrap gap-1">
                {[
                  "React",
                  "TypeScript",
                  "Vite",
                  "Node.js",
                  "REST API",
                  "MySql",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border px-2 py-1 text-[9px]"
                    style={{
                      borderColor: "var(--border)",
                      color: "var(--muted)",
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </article>

          {/* PROJECT 2 */}
          <article
            className="group overflow-hidden rounded-lg border transition-all duration-300 hover:-translate-y-1"
            style={{
              backgroundColor: "var(--surface)",
              borderColor: "var(--border)",
            }}
          >
            {/* Image */}
            <div className="relative p-1.5">
              <div className="relative aspect-[12/1.5] overflow-hidden rounded-md bg-black/10">
                <img
                  src="/images/project-eztix.jpeg"
                  alt="Ez-Tix"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />

                {/* Number */}
                <div className="absolute left-2 top-2 flex h-9 w-9 items-center justify-center rounded-md border border-emerald-400/20 bg-black/60 text-xs font-medium text-emerald-400 backdrop-blur-md">
                  02
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="px-3 pb-3 pt-1.5">
              <p
                className="mb-1 text-[10px] font-medium"
                style={{ color: "var(--muted)" }}
              >
                {t.projects.items.eztix.category}
              </p>

              <div className="mb-0 flex items-center justify-between gap-3">
                <h3 className="text-lg font-bold">Ez-Tix</h3>

                {/* GitHub */}
                <a
                  href="https://github.com/Vellapuspita/Ez-Tix-Ticketing"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View Ez-Tix repository"
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border text-sm transition-all duration-300 hover:border-emerald-400 hover:text-emerald-400"
                  style={{
                    borderColor: "var(--border)",
                  }}
                >
                  →
                </a>
              </div>

              <p
                className="text-xs leading-4"
                style={{
                  color: "var(--muted)",
                }}
              >
                {t.projects.items.eztix.description}
              </p>

              {/* Tech */}
              <div className="mt-2 flex flex-wrap gap-1">
                {[
                  "React",
                  "TypeScript",
                  "Vite",
                  "Node.js",
                  "REST API",
                  "MongoDB",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border px-2 py-1 text-[9px]"
                    style={{
                      borderColor: "var(--border)",
                      color: "var(--muted)",
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </article>
          {/* PROJECT 3 */}
          <article
            className="group relative overflow-hidden rounded-lg border transition-all duration-300 hover:-translate-y-1"
            style={{
              backgroundColor: "var(--surface)",
              borderColor: "var(--border)",
            }}
          >
            {/* Image */}
            <div className="relative p-1.5">
              <div className="relative aspect-[12/1.5] overflow-hidden rounded-md bg-black/10">
                <img
                  src="/images/project-travelPlanner.jpg"
                  alt="Travel Planner"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />

                {/* Number */}
                <div className="absolute left-2 top-2 flex h-9 w-9 items-center justify-center rounded-md border border-emerald-400/20 bg-black/60 text-xs font-medium text-emerald-400 backdrop-blur-md">
                  03
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="px-3 pb-3 pt-1.5">
              <p
                className="mb-1 text-[10px] font-medium"
                style={{ color: "var(--muted)" }}
              >
                {t.projects.items.travelPlanner.category}
              </p>

              <div className="mb-0 flex items-center justify-between gap-3">
                <h3 className="text-lg font-bold">Travel Planner</h3>

                {/* Repository Button */}
                <div className="relative">
                  <button
                    type="button"
                    onClick={() =>
                      setOpenRepo(
                        openRepo === "travelPlanner" ? null : "travelPlanner",
                      )
                    }
                    aria-label="View Travel Planner repositories"
                    className="flex h-8 w-8 shrink-0 cursor-pointer items-center justify-center rounded-full border text-sm transition-all duration-300 hover:border-emerald-400 hover:text-emerald-400"
                    style={{
                      borderColor: "var(--border)",
                    }}
                  >
                    →
                  </button>

                  {/* Repository Popup */}
                  {openRepo === "travelPlanner" && (
                    <div
                      className="absolute right-0 bottom-10 z-50 w-32 rounded-lg border p-2 text-center shadow-xl backdrop-blur-xl"
                      style={{
                        backgroundColor: "var(--surface)",
                        borderColor: "var(--border)",
                      }}
                    >
                      <p
                        className="mb-1 px-2 py-1 text-[10px] font-medium"
                        style={{
                          color: "var(--muted)",
                        }}
                      >
                        View Repository
                      </p>

                      {/* Frontend */}
                      <a
                        href="https://github.com/WilsonDaCosta02/Travel_Planner-main-ada-integrasi-back-end"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block rounded-md px-2 py-2 text-xs transition-colors hover:bg-emerald-400/10 hover:text-emerald-400"
                        style={{
                          color: "var(--foreground)",
                        }}
                        onClick={() => setOpenRepo(null)}
                      >
                        Frontend ↗
                      </a>

                      {/* Backend */}
                      <a
                        href="https://github.com/WilsonDaCosta02/travel-planner-fix-back-end"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block rounded-md px-2 py-2 text-xs transition-colors hover:bg-emerald-400/10 hover:text-emerald-400"
                        style={{
                          color: "var(--foreground)",
                        }}
                        onClick={() => setOpenRepo(null)}
                      >
                        Backend ↗
                      </a>
                    </div>
                  )}
                </div>
              </div>

              {/* Description */}
              <p
                className="text-xs leading-4"
                style={{
                  color: "var(--muted)",
                }}
              >
                {t.projects.items.travelPlanner.description}
              </p>

              {/* Tech */}
              <div className="mt-2 flex flex-wrap gap-1">
                {["Flutter", "Dart", "Node.js", "REST API", "MySql"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="rounded-md border px-2 py-1 text-[9px]"
                      style={{
                        borderColor: "var(--border)",
                        color: "var(--muted)",
                      }}
                    >
                      {tech}
                    </span>
                  ),
                )}
              </div>
            </div>
          </article>
          {/* PROJECT 4 */}
          <article
            className="group overflow-hidden rounded-lg border transition-all duration-300 hover:-translate-y-1"
            style={{
              backgroundColor: "var(--surface)",
              borderColor: "var(--border)",
            }}
          >
            {/* Image */}
            <div className="relative p-1.5">
              <div className="relative aspect-[12/1.5] overflow-hidden rounded-md bg-black/10">
                <img
                  src="/images/project-teashop.png"
                  alt="TeaShop"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />

                {/* Number */}
                <div className="absolute left-2 top-2 flex h-9 w-9 items-center justify-center rounded-md border border-emerald-400/20 bg-black/60 text-xs font-medium text-emerald-400 backdrop-blur-md">
                  04
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="px-3 pb-3 pt-1.5">
              <p
                className="mb-1 text-[10px] font-medium"
                style={{ color: "var(--muted)" }}
              >
                {t.projects.items.teashop.category}
              </p>

              <div className="mb-0 flex items-center justify-between gap-3">
                <h3 className="text-lg font-bold">TeaShop</h3>

                {/* GitHub Repository */}
                <a
                  href="https://github.com/RizkyAnggika/Mikroservis-aurashop"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View TeaShop repository"
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border text-sm transition-all duration-300 hover:border-emerald-400 hover:text-emerald-400"
                  style={{
                    borderColor: "var(--border)",
                  }}
                >
                  →
                </a>
              </div>

              {/* Description */}
              <p
                className="text-xs leading-4"
                style={{
                  color: "var(--muted)",
                }}
              >
                {t.projects.items.teashop.description}
              </p>

              {/* Tech */}
              <div className="mt-2 flex flex-wrap gap-1">
                {[
                  "React",
                  "TypeScript",
                  "Vite",
                  "Node.js",
                  "REST API",
                  "MySQL",
                  "Docker",
                  "Docker Compose",
                  "Minikube",
                  "Kubernetes",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border px-2 py-1 text-[9px]"
                    style={{
                      borderColor: "var(--border)",
                      color: "var(--muted)",
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Projects;
