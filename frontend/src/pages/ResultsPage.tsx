import { Link } from "react-router-dom";
import { SectionHeading } from "@/components/SectionHeading";
import { resultHighlights, toppers } from "@/features/home/content";

export function ResultsPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-hero-radial py-16 text-white sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Results & Achievements"
            title="A Track Record of Academic Excellence"
            description="Our students consistently achieve outstanding results in PU Board examinations, competitive exams, and university rankings."
            tone="dark"
          />
        </div>
      </section>

      {/* Result stats */}
      <section className="relative -mt-1 bg-white shadow-card">
        <div className="mx-auto grid max-w-7xl gap-px sm:grid-cols-3">
          {resultHighlights.map((item) => (
            <div key={item.title} className="p-8 text-center">
              <p className="font-display text-4xl font-extrabold text-brand-navy">{item.value}</p>
              <p className="mt-1 font-display text-sm font-bold text-brand-navy">{item.title}</p>
              <p className="mt-2 text-sm text-brand-slate">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Toppers */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <SectionHeading
          eyebrow="Our Toppers"
          title="Stars of 2024-25"
          description="These outstanding students have made us proud with their exceptional performance in board examinations."
          centered
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {toppers.map((t) => (
            <article
              key={t.name}
              className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm"
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand-gold/10">
                <span className="font-display text-2xl font-extrabold text-brand-gold">
                  {t.percentage}
                </span>
              </div>
              <h3 className="mt-4 font-display text-lg font-bold text-brand-navy">{t.name}</h3>
              <p className="mt-1 text-sm text-brand-slate">{t.stream}</p>
              <p className="mt-2 inline-flex rounded-full bg-brand-navy/10 px-3 py-1 text-xs font-bold text-brand-navy">
                {t.rank}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Year-wise performance */}
      <section className="bg-brand-soft py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Performance Trends"
            title="Consistent Excellence Year After Year"
            description="Our board exam pass rates and distinction percentages over the last five years."
          />
          <div className="mt-10 overflow-x-auto">
            <table className="w-full min-w-[500px] text-sm">
              <thead>
                <tr className="border-b border-slate-300 text-left">
                  <th className="py-3 pr-4 font-bold text-brand-navy">Academic Year</th>
                  <th className="py-3 pr-4 font-bold text-brand-navy">Pass %</th>
                  <th className="py-3 pr-4 font-bold text-brand-navy">Distinction %</th>
                  <th className="py-3 pr-4 font-bold text-brand-navy">University Ranks</th>
                  <th className="py-3 font-bold text-brand-navy">CET Top 1000</th>
                </tr>
              </thead>
              <tbody className="text-brand-slate">
                {[
                  { year: "2024-25", pass: "95%", dist: "42%", ranks: 12, cet: 18 },
                  { year: "2023-24", pass: "93%", dist: "38%", ranks: 9, cet: 15 },
                  { year: "2022-23", pass: "94%", dist: "40%", ranks: 11, cet: 14 },
                  { year: "2021-22", pass: "91%", dist: "35%", ranks: 7, cet: 12 },
                  { year: "2020-21", pass: "92%", dist: "36%", ranks: 8, cet: 10 },
                ].map((row) => (
                  <tr key={row.year} className="border-b border-slate-200">
                    <td className="py-3 pr-4 font-medium text-brand-ink">{row.year}</td>
                    <td className="py-3 pr-4">{row.pass}</td>
                    <td className="py-3 pr-4">{row.dist}</td>
                    <td className="py-3 pr-4">{row.ranks}</td>
                    <td className="py-3">{row.cet}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-navy py-14 text-center text-white">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold">Be Part of Our Next Success Story</h2>
          <p className="mt-4 text-base text-blue-100">
            Join a college with a proven track record. Apply for 2026-27 admissions today.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              to="/admissions"
              className="rounded-lg bg-brand-gold px-8 py-3.5 text-sm font-bold text-brand-ink transition hover:bg-yellow-400"
            >
              Apply Now
            </Link>
            <Link
              to="/events"
              className="rounded-lg border border-white/25 px-8 py-3.5 text-sm font-bold text-white transition hover:bg-white/10"
            >
              View Campus Events
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
