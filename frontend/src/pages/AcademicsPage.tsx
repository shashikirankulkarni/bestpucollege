import { Link } from "react-router-dom";
import { SectionHeading } from "@/components/SectionHeading";
import { programs } from "@/features/home/content";

export function AcademicsPage() {
  return (
    <div>
      <section className="bg-brand-soft py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Academics"
            title="Academic streams presented with professional clarity"
            description="A strong institute website should make academic direction easy to understand for students and parents while reinforcing confidence in the institution."
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          {programs.map((program) => (
            <article
              key={program.name}
              className="rounded-[2rem] border border-slate-200/80 bg-white p-8 shadow-card-soft"
            >
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-brand-blue">
                Academic Stream
              </p>
              <h2 className="mt-4 font-display text-3xl font-bold text-brand-ink">
                {program.name}
              </h2>
              <p className="mt-4 text-base leading-8 text-brand-slate">{program.summary}</p>
              <ul className="mt-6 space-y-3">
                {program.points.map((point) => (
                  <li key={point} className="flex gap-3 text-sm leading-7 text-brand-slate">
                    <span className="mt-2 h-2.5 w-2.5 rounded-full bg-brand-gold" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-[2rem] bg-brand-ink p-8 text-white shadow-card">
          <h2 className="font-display text-3xl font-bold">Academic communication roadmap</h2>
          <p className="mt-4 max-w-4xl text-base leading-8 text-slate-300">
            The frontend is being built to support notices, study materials, tests, scores,
            results, and broader student-facing information visibility in later phases.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/results"
              className="rounded-full bg-brand-gold px-6 py-3 text-sm font-bold text-brand-ink"
            >
              View Results Page
            </Link>
            <Link
              to="/contact"
              className="rounded-full border border-white/15 px-6 py-3 text-sm font-bold text-white"
            >
              Contact for Information
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
