import { Link } from "react-router-dom";
import { SectionHeading } from "@/components/SectionHeading";
import {
  eventHighlights,
  faqItems,
  featuredSections,
  heroHighlights,
  heroStats,
  homepageNotices,
  institutePillars,
  keyServices,
  programs,
  whyChooseItems,
} from "@/features/home/content";

export function HomePage() {
  return (
    <div>
      <section className="relative overflow-hidden bg-hero-radial">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.06),transparent_30%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-24">
          <div className="rounded-[2rem] border border-white/12 bg-brand-ink p-8 shadow-card md:p-10 lg:p-12">
            <p className="inline-flex rounded-full border border-white/12 bg-white/10 px-4 py-2 text-sm font-bold uppercase tracking-[0.25em] text-brand-gold">
              Educational Excellence
            </p>
            <h1
              className="mt-6 max-w-3xl font-display text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl"
              style={{ color: "#f8fafc" }}
            >
              A professional digital campus experience for admissions, academics, and public trust.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              The Best Science & Commerce P.U. College, Jamkhandi is building a modern website
              experience that helps students discover the institute, understand academic streams,
              and begin the admissions journey with clarity.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/admissions"
                className="rounded-full bg-brand-gold px-6 py-3 text-sm font-bold text-brand-ink transition hover:bg-[#e4ad3b]"
              >
                Apply for Admission
              </Link>
              <Link
                to="/academics"
                className="rounded-full border border-white/20 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/10"
              >
                Explore Academics
              </Link>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {heroStats.map((item) => (
                <div
                  key={item.value}
                  className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5"
                >
                  <p className="font-display text-3xl font-bold text-brand-gold">{item.value}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] bg-white p-8 shadow-card">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-brand-gold">
              Why this website matters
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold text-brand-ink">
              Built like a real institute website, not a placeholder page.
            </h2>
            <div className="mt-6 grid gap-4">
              {heroHighlights.map((item) => (
                <div
                  key={item}
                  className="rounded-[1.25rem] border border-slate-200 bg-brand-soft p-4 text-sm leading-7 text-brand-slate"
                >
                  {item}
                </div>
              ))}
            </div>
            <div className="mt-8 grid gap-4">
              <Link
                to="/about"
                className="rounded-full border border-slate-200 px-5 py-3 text-center text-sm font-semibold text-brand-navy transition hover:bg-brand-soft"
              >
                Learn About the College
              </Link>
              <Link
                to="/results"
                className="rounded-full border border-slate-200 px-5 py-3 text-center text-sm font-semibold text-brand-navy transition hover:bg-brand-soft"
              >
                View Results Direction
              </Link>
              <Link
                to="/contact"
                className="rounded-full border border-slate-200 px-5 py-3 text-center text-sm font-semibold text-brand-navy transition hover:bg-brand-soft"
              >
                Contact the Office
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          {institutePillars.map((item) => (
            <article
              key={item.title}
              className="rounded-[1.75rem] border border-slate-200/80 bg-white p-7 shadow-card-soft"
            >
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-brand-gold">
                Institute Pillar
              </p>
              <h2 className="mt-4 font-display text-2xl font-bold text-brand-ink">{item.title}</h2>
              <p className="mt-3 text-sm leading-7 text-brand-slate">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Academic Streams"
            title="Science and Commerce presented with clarity"
            description="A strong institute website should help prospective students immediately understand the college’s academic direction and how the digital platform will support them."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {programs.map((program) => (
              <article
                key={program.name}
                className="rounded-[2rem] border border-slate-200/80 bg-brand-soft p-8 shadow-card-soft"
              >
                <p className="text-sm font-bold uppercase tracking-[0.22em] text-brand-blue">
                  Stream
                </p>
                <h3 className="mt-4 font-display text-3xl font-bold text-brand-ink">
                  {program.name}
                </h3>
                <p className="mt-4 text-base leading-7 text-brand-slate">{program.summary}</p>
                <ul className="mt-6 space-y-3">
                  {program.points.map((point) => (
                    <li key={point} className="flex gap-3 text-sm leading-7 text-brand-slate">
                      <span className="mt-2 h-2.5 w-2.5 rounded-full bg-brand-gold" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/academics"
                  className="mt-7 inline-flex text-sm font-bold text-brand-navy hover:text-brand-blue"
                >
                  View academic page
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-soft py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Key Services"
            title="A digital platform built around real student and parent needs"
            description="The public site is designed to grow into a complete digital support layer while already serving admissions, notices, and institutional communication from the first release."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {keyServices.map((item) => (
              <article
                key={item.title}
                className="rounded-[1.5rem] border border-slate-200/80 bg-white p-6 shadow-card-soft"
              >
                <h3 className="font-display text-2xl font-bold text-brand-ink">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-brand-slate">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why Choose"
          title="The website should communicate confidence before the first enquiry"
          description="A serious institute site should present useful information clearly, connect academic and admissions journeys, and help students move forward with trust."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {whyChooseItems.map((item) => (
            <div
              key={item}
              className="rounded-[1.5rem] border border-slate-200/80 bg-white p-5 text-sm leading-7 text-brand-slate shadow-card-soft"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="bg-brand-ink py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Featured Information"
            title="The public website should feel informative, polished, and useful"
            description="These sections reflect the kind of structure expected from a professional educational institute website."
            tone="dark"
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {featuredSections.map((item) => (
              <article
                key={item.title}
                className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6"
              >
                <h3 className="font-display text-2xl font-bold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Notices and Updates"
            title="Important information should always be easy to reach"
            description="Students and parents should not have to search through social posts or offline notices to understand what is happening. The website should present updates in a clear public format."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {homepageNotices.map((notice) => (
              <article
                key={notice.title}
                className="rounded-[1.75rem] border border-slate-200/80 bg-brand-soft p-6 shadow-card-soft"
              >
                <p className="text-sm font-bold uppercase tracking-[0.22em] text-brand-blue">
                  {notice.category}
                </p>
                <h3 className="mt-4 font-display text-xl font-bold text-brand-ink">
                  {notice.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-brand-slate">{notice.summary}</p>
              </article>
            ))}
          </div>
          <div className="mt-8">
            <Link
              to="/notices"
              className="inline-flex rounded-full bg-brand-navy px-6 py-3 text-sm font-bold text-white"
            >
              Open Notices Page
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-brand-soft py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Events and Highlights"
            title="A campus website should celebrate activity and achievement"
            description="Events, academic milestones, and public highlights help create a more complete and credible online institution presence."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {eventHighlights.map((item) => (
              <article
                key={item.title}
                className="rounded-[1.75rem] border border-slate-200/80 bg-white p-6 shadow-card-soft"
              >
                <h3 className="font-display text-xl font-bold text-brand-ink">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-brand-slate">{item.description}</p>
              </article>
            ))}
          </div>
          <div className="mt-8">
            <Link
              to="/events"
              className="inline-flex rounded-full border border-slate-300 px-6 py-3 text-sm font-bold text-brand-navy"
            >
              Explore Events
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="FAQs"
          title="Questions a prospective student website should answer"
          description="The best institute websites reduce uncertainty by answering practical questions clearly and directly."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {faqItems.map((item) => (
            <article
              key={item.question}
              className="rounded-[1.75rem] border border-slate-200/80 bg-white p-6 shadow-card-soft"
            >
              <h3 className="font-display text-xl font-bold text-brand-ink">{item.question}</h3>
              <p className="mt-3 text-sm leading-7 text-brand-slate">{item.answer}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
