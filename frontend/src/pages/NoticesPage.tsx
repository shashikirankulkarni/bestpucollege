import { Link } from "react-router-dom";
import { SectionHeading } from "@/components/SectionHeading";
import { homepageNotices } from "@/features/home/content";

export function NoticesPage() {
  return (
    <div>
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Notices"
            title="Important college information should remain easy to access"
            description="This page is designed as the public communication board for admissions notices, academic updates, platform announcements, and future CMS-managed information."
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="grid gap-6">
          {homepageNotices.map((notice) => (
            <article
              key={notice.title}
              className="rounded-[1.75rem] border border-slate-200/80 bg-brand-soft p-6 shadow-card-soft"
            >
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-brand-blue">
                {notice.category}
              </p>
              <h3 className="mt-4 font-display text-2xl font-bold text-brand-ink">{notice.title}</h3>
              <p className="mt-3 max-w-4xl leading-7 text-brand-slate">{notice.summary}</p>
            </article>
          ))}
        </div>
        <div className="mt-8">
          <Link
            to="/admissions"
            className="inline-flex rounded-full bg-brand-navy px-6 py-3 text-sm font-bold text-white"
          >
            Go to Admissions
          </Link>
        </div>
      </section>
    </div>
  );
}
