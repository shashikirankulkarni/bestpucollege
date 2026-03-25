import { Link } from "react-router-dom";
import { SectionHeading } from "@/components/SectionHeading";
import { eventHighlights } from "@/features/home/content";

export function EventsPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-brand-soft py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Events & Activities"
            title="Campus Life & Celebrations"
            description="From academic competitions and science exhibitions to cultural festivals and sports events — our campus is always buzzing with activity."
          />
        </div>
      </section>

      {/* Events grid */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {eventHighlights.map((event) => (
            <article
              key={event.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-card-soft"
            >
              <time className="text-xs font-bold text-brand-blue">{event.date}</time>
              <h3 className="mt-2 font-display text-lg font-bold text-brand-navy">{event.title}</h3>
              <p className="mt-2 text-sm leading-7 text-brand-slate">{event.description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Annual calendar */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Annual Calendar"
            title="Key Events Through the Year"
            description="A snapshot of major events and activities across the academic year."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { month: "June", event: "New Academic Year Begins & Orientation" },
              { month: "August", event: "Independence Day Celebrations & Science Week" },
              { month: "September", event: "Teacher's Day & Inter-Class Competitions" },
              { month: "October", event: "Mid-Term Exams & Navaratri Festival" },
              { month: "November", event: "Kannada Rajyotsava & Children's Day" },
              { month: "December", event: "Commerce Fest - Vanijya Utsav" },
              { month: "January", event: "Republic Day & Annual Sports Day" },
              { month: "February", event: "Annual Day Celebration & Cultural Fest" },
              { month: "March", event: "Preparatory Exams & Science Exhibition" },
            ].map((item) => (
              <div
                key={item.month}
                className="flex items-center gap-4 rounded-xl border border-slate-200 bg-brand-soft p-4"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-brand-navy font-display text-sm font-bold text-white">
                  {item.month.slice(0, 3)}
                </div>
                <p className="text-sm font-medium text-brand-ink">{item.event}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-navy py-14 text-center text-white">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-bold">Want to Be Part of This Community?</h2>
          <p className="mt-3 text-base text-blue-100">
            Join a campus where learning goes beyond textbooks. Apply for 2026-27 today.
          </p>
          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              to="/admissions"
              className="rounded-lg bg-brand-gold px-8 py-3.5 text-sm font-bold text-brand-ink transition hover:bg-yellow-400"
            >
              Apply Now
            </Link>
            <Link
              to="/results"
              className="rounded-lg border border-white/25 px-8 py-3.5 text-sm font-bold text-white transition hover:bg-white/10"
            >
              View Results
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
