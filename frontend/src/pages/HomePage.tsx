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
  testimonials,
  whyChooseItems,
} from "@/features/home/content";

export function HomePage() {
  return (
    <div>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-hero-radial text-white">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.04%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-50" />
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <p className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brand-gold backdrop-blur-sm sm:text-sm">
              Admissions 2026-27 Now Open
            </p>
            <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.1] sm:text-5xl lg:text-6xl">
              Where Science & Commerce
              <span className="text-brand-gold"> Meet Excellence</span>
            </h1>
            <p className="mt-6 text-base leading-7 text-blue-100 sm:text-lg sm:leading-8">
              The Best Science & Commerce P.U. College, Jamkhandi — 25+ years of academic
              excellence, 95% board pass rate, and integrated CET/NEET coaching. Your
              journey to a great career starts here.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/admissions"
                className="rounded-lg bg-brand-gold px-7 py-3.5 text-center text-sm font-bold text-brand-ink transition hover:bg-yellow-400"
              >
                Apply for Admission
              </Link>
              <Link
                to="/academics"
                className="rounded-lg border border-white/25 bg-white/10 px-7 py-3.5 text-center text-sm font-bold text-white backdrop-blur-sm transition hover:bg-white/20"
              >
                Explore Programs
              </Link>
            </div>
          </div>

          {/* Hero highlights */}
          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {heroHighlights.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm"
              >
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-gold/20 text-xs text-brand-gold">
                  &#10003;
                </span>
                <span className="text-sm leading-6 text-blue-100">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Stats bar ── */}
      <section className="relative -mt-1 bg-white shadow-card">
        <div className="mx-auto grid max-w-7xl gap-px sm:grid-cols-2 lg:grid-cols-4">
          {heroStats.map((item) => (
            <div key={item.value} className="px-6 py-8 text-center sm:px-8">
              <p className="font-display text-3xl font-extrabold text-brand-navy sm:text-4xl">
                {item.value}
              </p>
              <p className="mt-2 text-sm text-brand-slate">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Institute Pillars ── */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <SectionHeading
          eyebrow="Why Best PU College"
          title="A Foundation Built on Excellence"
          description="Three pillars guide everything we do — from classroom teaching to campus culture."
          centered
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {institutePillars.map((item) => (
            <article
              key={item.title}
              className="group rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:shadow-card"
            >
              <h3 className="font-display text-xl font-bold text-brand-navy">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-brand-slate">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ── Academic Streams ── */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Academic Programs"
            title="Science & Commerce Streams"
            description="Choose the stream that aligns with your career goals. Both streams include integrated competitive exam coaching."
          />
          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            {programs.map((program) => (
              <article
                key={program.name}
                className="rounded-2xl border border-slate-200 bg-gradient-to-b from-brand-soft to-white p-7 shadow-sm sm:p-8"
              >
                <h3 className="font-display text-2xl font-bold text-brand-navy">
                  {program.name}
                </h3>
                <p className="mt-3 text-sm leading-7 text-brand-slate">{program.summary}</p>

                <div className="mt-5 space-y-2">
                  {program.subjects.map((s) => (
                    <div key={s.combination} className="flex items-baseline gap-2 text-sm">
                      <span className="rounded bg-brand-navy/10 px-2 py-0.5 font-mono text-xs font-bold text-brand-navy">
                        {s.combination}
                      </span>
                      <span className="text-brand-slate">{s.subjects}</span>
                    </div>
                  ))}
                </div>

                <ul className="mt-6 space-y-2.5">
                  {program.points.map((point) => (
                    <li key={point} className="flex gap-3 text-sm text-brand-slate">
                      <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-brand-gold" />
                      {point}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/academics"
                  className="mt-6 inline-flex text-sm font-bold text-brand-blue hover:text-brand-navy"
                >
                  View full details &rarr;
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Key Services ── */}
      <section className="bg-brand-soft py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="What We Offer"
            title="Everything Students & Parents Need"
            description="From admissions to career guidance — a complete digital platform for your educational journey."
            centered
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {keyServices.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition hover:shadow-card-soft"
              >
                <h3 className="font-display text-lg font-bold text-brand-navy">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-brand-slate">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured (Dark) ── */}
      <section className="bg-brand-navy py-16 text-white sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Highlights"
            title="What Sets Us Apart"
            description="Specialized programs and modern infrastructure that give our students a competitive edge."
            tone="dark"
            centered
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

      {/* ── Why Choose Us ── */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Built for Student Success"
          description="Every decision we make is guided by one question: does this help our students succeed?"
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {whyChooseItems.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <h3 className="font-display text-lg font-bold text-brand-navy">{item.title}</h3>
              <p className="mt-2 text-sm leading-7 text-brand-slate">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="bg-brand-soft py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Testimonials"
            title="Hear From Our Community"
            description="What students, alumni, and parents say about their experience at Best PU College."
            centered
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <article
                key={t.name}
                className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm"
              >
                <svg className="h-8 w-8 text-brand-gold/40" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-1.1.9-2 2-2V8zm14 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-1.1.9-2 2-2V8z" />
                </svg>
                <p className="mt-4 text-sm italic leading-7 text-brand-slate">"{t.quote}"</p>
                <div className="mt-5 border-t border-slate-100 pt-4">
                  <p className="text-sm font-bold text-brand-ink">{t.name}</p>
                  <p className="text-xs text-brand-slate">{t.year}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Notices ── */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Latest Notices"
            title="Stay Updated"
            description="Important announcements, exam schedules, and campus updates."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {homepageNotices.map((notice) => (
              <article
                key={notice.title}
                className="rounded-2xl border border-slate-200 bg-brand-soft p-6"
              >
                <div className="flex items-center justify-between">
                  <p className="text-xs font-bold uppercase tracking-widest text-brand-blue">
                    {notice.category}
                  </p>
                  <time className="text-xs text-brand-slate">{notice.date}</time>
                </div>
                <h3 className="mt-3 font-display text-lg font-bold text-brand-ink">
                  {notice.title}
                </h3>
                <p className="mt-2 text-sm leading-7 text-brand-slate">{notice.summary}</p>
              </article>
            ))}
          </div>
          <div className="mt-8">
            <Link
              to="/notices"
              className="inline-flex rounded-lg bg-brand-navy px-6 py-3 text-sm font-bold text-white transition hover:bg-brand-blue"
            >
              View All Notices
            </Link>
          </div>
        </div>
      </section>

      {/* ── Events ── */}
      <section className="bg-brand-soft py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Events & Activities"
            title="Campus Life at Best PU College"
            description="Academics, sports, cultural events, and celebrations that make our campus vibrant."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {eventHighlights.slice(0, 3).map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm"
              >
                <time className="text-xs font-semibold text-brand-blue">{item.date}</time>
                <h3 className="mt-2 font-display text-lg font-bold text-brand-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-brand-slate">{item.description}</p>
              </article>
            ))}
          </div>
          <div className="mt-8">
            <Link
              to="/events"
              className="inline-flex rounded-lg border border-slate-300 bg-white px-6 py-3 text-sm font-bold text-brand-navy transition hover:bg-brand-soft"
            >
              View All Events
            </Link>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <SectionHeading
          eyebrow="FAQs"
          title="Frequently Asked Questions"
          description="Find answers to common questions about admissions, programs, and campus life."
          centered
        />
        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {faqItems.map((item) => (
            <article
              key={item.question}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <h3 className="font-display text-base font-bold text-brand-navy">{item.question}</h3>
              <p className="mt-2 text-sm leading-7 text-brand-slate">{item.answer}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="bg-brand-navy py-16 text-center text-white sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            Ready to Begin Your Journey?
          </h2>
          <p className="mt-4 text-base leading-7 text-blue-100 sm:text-lg">
            Admissions for the 2026-27 academic year are now open. Apply online in
            under 10 minutes and secure your seat in Science or Commerce.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              to="/admissions"
              className="rounded-lg bg-brand-gold px-8 py-3.5 text-sm font-bold text-brand-ink transition hover:bg-yellow-400"
            >
              Apply Now
            </Link>
            <Link
              to="/contact"
              className="rounded-lg border border-white/25 px-8 py-3.5 text-sm font-bold text-white transition hover:bg-white/10"
            >
              Talk to Admissions
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
