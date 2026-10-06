import React from "react";
import { Code2, Smartphone, Lightbulb } from "lucide-react";

import { useLanguage } from "../context/LanguageContext";

import reactIcon from "../assets/icons/react.png";
import typescriptIcon from "../assets/icons/typescript.png";
import javascriptIcon from "../assets/icons/javascript.png";
import tailwindIcon from "../assets/icons/tailwind.png";
import htmlCssIcon from "../assets/icons/html-css.png";

import nodejsIcon from "../assets/icons/nodejs.png";
import expressIcon from "../assets/icons/express.png";
import mysqlIcon from "../assets/icons/mysql.png";
import mongodbIcon from "../assets/icons/mongodb.png";
import restApiIcon from "../assets/icons/rest-api.png";

import flutterIcon from "../assets/icons/flutter.png";
import dartIcon from "../assets/icons/dart.png";

import gitIcon from "../assets/icons/git.png";
import n8nIcon from "../assets/icons/n8n.png";
import wordpressIcon from "../assets/icons/wordpress.png";
import figmaIcon from "../assets/icons/figma.png";
import androidStudioIcon from "../assets/icons/android-studio.png";

const techStack = {
  frontend: [
    { name: "React", icon: reactIcon },
    { name: "TypeScript", icon: typescriptIcon },
    { name: "JavaScript", icon: javascriptIcon },
    { name: "Tailwind CSS", icon: tailwindIcon },
    { name: "HTML & CSS", icon: htmlCssIcon },
  ],

  backend: [
    { name: "Node.js", icon: nodejsIcon },
    { name: "Express.js", icon: expressIcon },
    { name: "MySQL", icon: mysqlIcon },
    { name: "MongoDB", icon: mongodbIcon },
    { name: "REST API", icon: restApiIcon },
  ],

  mobile: [
    { name: "Flutter", icon: flutterIcon },
    { name: "Dart", icon: dartIcon },
  ],

  tools: [
    { name: "Git", icon: gitIcon },
    { name: "n8n", icon: n8nIcon },
    { name: "WordPress", icon: wordpressIcon },
    { name: "Figma", icon: figmaIcon },
    { name: "Android Studio", icon: androidStudioIcon },
  ],
};

export const About: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section
      id="about"
      className="relative border-t"
      style={{
        backgroundColor: "var(--background)",
        color: "var(--foreground)",
        borderColor: "var(--border)",
      }}
    >
      {/* ========================================
          ABOUT ME
      ======================================== */}

      <div className="-translate-y-10 mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-14">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_1fr_1.25fr]">
          {/* LEFT - TITLE */}
          <div>
            <div className="mb-4 flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />

              <span className="text-[10px] font-semibold tracking-[0.18em] text-emerald-400">
                {t.about.label}
              </span>
            </div>

            <h2 className="max-w-[340px] text-[36px] font-bold leading-[1.02] tracking-[-0.03em] sm:text-[42px] lg:text-[44px]">
              {t.about.titleStart}{" "}
              <span className="text-emerald-400">{t.about.titleHighlight}</span>
            </h2>
          </div>

          {/* CENTER - DESCRIPTION */}
          <div className="max-w-md translate-y-5">
            <p
              className="text-sm leading-6"
              style={{
                color: "var(--muted)",
              }}
            >
              {t.about.description}
            </p>

            <p
              className="mt-3 text-sm leading-6"
              style={{
                color: "var(--muted)",
              }}
            >
              {t.about.descriptionSecond}
            </p>

            <button
              type="button"
              className="mt-5 inline-flex items-center gap-2 rounded-md border px-4 py-2.5 text-xs font-medium transition-all duration-300 hover:border-emerald-400 hover:bg-emerald-400/10 hover:text-emerald-400"
              style={{
                borderColor: "var(--border)",
              }}
            >
              {t.about.moreAbout}
              <span>→</span>
            </button>
          </div>

          {/* RIGHT - PROFILE + ROLES */}
          <div className="relative flex min-h-[300px] items-center justify-center lg:min-h-[320px]">
            {/* Green Glow */}
            <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-400/20 blur-2xl" />

            {/* Green Circle */}
            <div className="absolute left-[45%] top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/20" />

            {/* Profile Image */}
            <div className="relative z-10 flex h-[300px] w-[230px] items-end justify-center overflow-hidden">
              <img
                src="/images/profile-about.png"
                alt="Willybrodus Stephanus Da Costa"
                className="h-[350px] w-auto -translate-x-5 object-contain"
              />
            </div>

            {/* Roles */}
            <div className="absolute right-0 top-1/2 z-20 flex -translate-y-1/2 flex-col gap-5">
              {/* Web Developer */}
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center text-emerald-400">
                  <Code2 size={22} />
                </div>

                <div>
                  <p className="text-xs font-semibold">{t.about.roles.web}</p>

                  <p
                    className="mt-0.5 text-[9px]"
                    style={{
                      color: "var(--muted)",
                    }}
                  >
                    {t.about.roles.webDescription}
                  </p>
                </div>
              </div>

              {/* Mobile Developer */}
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center text-emerald-400">
                  <Smartphone size={22} />
                </div>

                <div>
                  <p className="text-xs font-semibold">
                    {t.about.roles.mobile}
                  </p>

                  <p
                    className="mt-0.5 text-[9px]"
                    style={{
                      color: "var(--muted)",
                    }}
                  >
                    {t.about.roles.mobileDescription}
                  </p>
                </div>
              </div>

              {/* Problem Solver */}
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center text-emerald-400">
                  <Lightbulb size={22} />
                </div>

                <div>
                  <p className="text-xs font-semibold">
                    {t.about.roles.problemSolver}
                  </p>

                  <p
                    className="mt-0.5 text-[9px]"
                    style={{
                      color: "var(--muted)",
                    }}
                  >
                    {t.about.roles.problemSolverDescription}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================
    TECH STACK
======================================== */}

      {/* Horizontal Divider */}
      <div
        className="relative -translate-y-20 h-px w-full"
        style={{
          backgroundColor: "var(--border)",
        }}
      />

      {/* Tech Stack Content */}
      <div>
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
          <div className="-translate-y-32 -mb-30 grid gap-6 lg:grid-cols-[1fr_1.1fr_1.1fr_0.8fr_1fr_1fr]">
            {/* TITLE */}
            <div className="translate-y-2">
              <div className="mb-3 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />

                <span className="text-[10px] font-semibold tracking-[0.18em] text-emerald-400">
                  {t.skills.label}
                </span>
              </div>

              <h3 className="text-3xl font-bold leading-tight sm:text-4xl">
                {t.skills.title}
              </h3>
            </div>

            {/* FRONTEND */}
            <TechColumn title={t.skills.frontend} items={techStack.frontend} />

            {/* BACKEND */}
            <TechColumn title={t.skills.backend} items={techStack.backend} />

            {/* MOBILE */}
            <TechColumn title={t.skills.mobile} items={techStack.mobile} />

            {/* TOOLS */}
            <TechColumn title={t.skills.tools} items={techStack.tools} />

            {/* QUOTE */}
            <div className="translate-y-1">
              {/* Quote atas */}
              <div className="text-2xl leading-none text-emerald-400">“</div>

              {/* Text */}
              <p
                className="text-sm leading-6"
                style={{
                  color: "var(--muted)",
                }}
              >
                {t.skills.statement}
              </p>

              {/* Quote bawah */}
              <div className="-mt-1 text-right text-2xl leading-[0.5] text-emerald-400">
                ”
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ========================================
   TECH COLUMN
======================================== */

interface TechColumnProps {
  title: string;
  items: {
    name: string;
    icon: string;
  }[];
}

const TechColumn: React.FC<TechColumnProps> = ({ title, items }) => {
  return (
    <div
      className="lg:border-l lg:pl-5"
      style={{
        borderColor: "var(--border)",
      }}
    >
      <div className="translate-y-2">
        <h4 className="mb-3 text-sm font-semibold">{title}</h4>

        <div className="space-y-2.5">
          {items.map((item) => {
            return (
              <div key={item.name} className="flex items-center gap-3">
                <img
                  src={item.icon}
                  alt={item.name}
                  className="h-[18px] w-[18px] object-contain"
                />

                <span
                  className="text-xs"
                  style={{
                    color: "var(--muted)",
                  }}
                >
                  {item.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default About;
