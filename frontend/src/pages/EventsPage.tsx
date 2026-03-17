import { Link } from "react-router-dom";
import { SectionHeading } from "@/components/SectionHeading";
import { eventHighlights } from "@/features/home/content";

export function EventsPage() {
  return (
    <div>
      <section className="bg-brand-soft py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Events"
            title="A professional events page adds life to the institute website"
            description="Event visibility, achievement highlights, and public updates help students and parents understand the rhythm and credibility of the institution."
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          {eventHighlights.map((event) => (
            <article
              key={event.title}
              className="rounded-[1.75rem] border border-slate-200/80 bg-white p-6 shadow-card-soft"
            >
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-brand-blue">Event</p>
              <h3 className="mt-4 font-display text-xl font-bold text-brand-ink">{event.title}</h3>
              <p className="mt-3 text-sm leading-7 text-brand-slate">{event.description}</p>
            </article>
          ))}
        </div>
        <div className="mt-8">
          <Link
            to="/results"
            className="inline-flex rounded-full border border-slate-300 px-6 py-3 text-sm font-bold text-brand-navy"
          >
            View Results Highlights
          </Link>
        </div>
      </section>
    </div>
  );
}
