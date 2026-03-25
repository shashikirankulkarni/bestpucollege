import { Link } from "react-router-dom";
import { SectionHeading } from "@/components/SectionHeading";
import { aboutSections, facultyHighlights } from "@/features/home/content";

export function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-hero-radial py-16 text-white sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="About Us"
            title="25+ Years of Shaping Futures in Jamkhandi"
            description="The Best Science & Commerce P.U. College has been a pillar of pre-university education in Bagalkot district — producing thousands of successful graduates who have gone on to prestigious universities and professional careers."
            tone="dark"
          />
        </div>
      </section>

      {/* Legacy, Mission, Vision */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-3">
          {aboutSections.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm"
            >
              <h2 className="font-display text-xl font-bold text-brand-navy">{item.title}</h2>
              <p className="mt-4 text-sm leading-7 text-brand-slate">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* At a Glance */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="At a Glance"
            title="The College in Numbers"
            description="Key facts about our institution, faculty strength, and academic infrastructure."
            centered
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { value: "1998", label: "Year Established" },
              { value: "2000+", label: "Current Enrollment" },
              { value: "50+", label: "Faculty Members" },
              { value: "95%", label: "Board Pass Rate (2024-25)" },
            ].map((stat) => (
              <div key={stat.label} className="rounded-2xl bg-brand-soft p-6 text-center">
                <p className="font-display text-3xl font-extrabold text-brand-navy">{stat.value}</p>
                <p className="mt-2 text-sm text-brand-slate">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty */}
      <section className="bg-brand-soft py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Faculty"
            title="Experienced & Dedicated Educators"
            description="Our faculty brings a combined experience of over 500 years in teaching and academic mentoring."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {facultyHighlights.map((f) => (
              <div
                key={f.department}
                className="rounded-xl border border-slate-200/80 bg-white p-5 shadow-sm"
              >
                <p className="font-display text-lg font-bold text-brand-navy">{f.department}</p>
                <p className="mt-1 text-sm text-brand-slate">
                  {f.faculty} faculty &middot; {f.qualification}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-navy py-16 text-center text-white">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold">Join Our Community</h2>
          <p className="mt-4 text-base leading-7 text-blue-100">
            Become part of a legacy of excellence. Admissions for 2026-27 are now open.
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
              Visit Campus
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
