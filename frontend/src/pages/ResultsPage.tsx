import { Link } from "react-router-dom";
import { SectionHeading } from "@/components/SectionHeading";
import { resultHighlights } from "@/features/home/content";

export function ResultsPage() {
  return (
    <div>
      <section className="bg-brand-ink py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Results and Highlights"
            title="Results communication should look credible and organized"
            description="A professional institute website should present academic outcomes, topper stories, and result-related highlights in a polished and trustworthy format."
            tone="dark"
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          {resultHighlights.map((item) => (
            <article
              key={item.title}
              className="rounded-[1.75rem] border border-slate-200/80 bg-white p-6 shadow-card-soft"
            >
              <h2 className="font-display text-2xl font-bold text-brand-ink">{item.title}</h2>
              <p className="mt-4 text-sm leading-7 text-brand-slate">{item.description}</p>
            </article>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap gap-4">
          <Link
            to="/events"
            className="rounded-full bg-brand-gold px-6 py-3 text-sm font-bold text-brand-ink"
          >
            View Event Highlights
          </Link>
          <Link
            to="/notices"
            className="rounded-full border border-slate-300 px-6 py-3 text-sm font-bold text-brand-navy"
          >
            Read Latest Notices
          </Link>
        </div>
      </section>
    </div>
  );
}
