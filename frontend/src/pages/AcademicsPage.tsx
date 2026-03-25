import { Link } from "react-router-dom";
import { SectionHeading } from "@/components/SectionHeading";
import { programs, featuredSections } from "@/features/home/content";

export function AcademicsPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-brand-soft py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Academics"
            title="Science & Commerce Programs"
            description="Two well-structured streams with multiple subject combinations, integrated competitive exam coaching, and a track record of outstanding board results."
          />
        </div>
      </section>

      {/* Streams detail */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2">
          {programs.map((program) => (
            <article
              key={program.name}
              className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm sm:p-8"
            >
              <p className="text-xs font-bold uppercase tracking-widest text-brand-blue">Stream</p>
              <h2 className="mt-3 font-display text-2xl font-bold text-brand-navy">
                {program.name}
              </h2>
              <p className="mt-3 text-sm leading-7 text-brand-slate">{program.summary}</p>

              <div className="mt-5 rounded-xl bg-brand-soft p-4">
                <p className="text-xs font-bold uppercase tracking-widest text-brand-navy">
                  Subject Combinations
                </p>
                <div className="mt-3 space-y-2">
                  {program.subjects.map((s) => (
                    <div key={s.combination} className="flex items-baseline gap-2 text-sm">
                      <span className="rounded bg-brand-navy/10 px-2 py-0.5 font-mono text-xs font-bold text-brand-navy">
                        {s.combination}
                      </span>
                      <span className="text-brand-slate">{s.subjects}</span>
                    </div>
                  ))}
                </div>
              </div>

              <ul className="mt-6 space-y-2.5">
                {program.points.map((point) => (
                  <li key={point} className="flex gap-3 text-sm text-brand-slate">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-brand-gold" />
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {/* Special programs */}
      <section className="bg-brand-navy py-16 text-white sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Special Programs"
            title="Beyond the Classroom"
            description="Specialized programs that give our students a competitive edge in board exams and entrance tests."
            tone="dark"
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {featuredSections.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
              >
                <h3 className="font-display text-xl font-bold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Academic calendar highlight */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="font-display text-2xl font-bold text-brand-navy">Academic Structure</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-3">
            <div>
              <p className="text-sm font-bold text-brand-navy">Regular Classes</p>
              <p className="mt-1 text-sm text-brand-slate">Mon - Sat, 8:00 AM - 3:30 PM</p>
            </div>
            <div>
              <p className="text-sm font-bold text-brand-navy">Coaching Classes</p>
              <p className="mt-1 text-sm text-brand-slate">Mon - Fri, 4:00 PM - 6:00 PM</p>
            </div>
            <div>
              <p className="text-sm font-bold text-brand-navy">Weekly Tests</p>
              <p className="mt-1 text-sm text-brand-slate">Every Saturday with result analysis</p>
            </div>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/results"
              className="rounded-lg bg-brand-navy px-6 py-3 text-sm font-bold text-white transition hover:bg-brand-blue"
            >
              View Results
            </Link>
            <Link
              to="/admissions"
              className="rounded-lg border border-slate-300 px-6 py-3 text-sm font-bold text-brand-navy transition hover:bg-brand-soft"
            >
              Apply for Admission
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
