import { Link } from "react-router-dom";
import { SectionHeading } from "@/components/SectionHeading";
import { aboutSections } from "@/features/home/content";

export function AboutPage() {
  return (
    <div className="bg-white">
      <section className="bg-brand-ink py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="About the College"
            title="A public identity shaped around academics, clarity, and digital readiness"
            description="This website direction is built to present The Best Science & Commerce P.U. College, Jamkhandi as a serious educational institute with a cleaner admissions and information experience."
            tone="dark"
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-3">
          {aboutSections.map((item) => (
            <article
              key={item.title}
              className="rounded-[1.75rem] border border-slate-200/80 bg-brand-soft p-7 shadow-card-soft"
            >
              <h2 className="font-display text-2xl font-bold text-brand-ink">{item.title}</h2>
              <p className="mt-4 text-sm leading-7 text-brand-slate">{item.description}</p>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-[2rem] border border-slate-200/80 bg-white p-8 shadow-card-soft">
          <h2 className="font-display text-3xl font-bold text-brand-ink">Website purpose</h2>
          <p className="mt-4 max-w-4xl text-base leading-8 text-brand-slate">
            The website is intended to support discovery, admissions, public trust, and academic
            communication. It is not only a brochure. It is the first layer of a larger college
            digital platform that will evolve into student-facing academic and communication
            services.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/academics"
              className="rounded-full bg-brand-navy px-6 py-3 text-sm font-bold text-white"
            >
              Explore Academics
            </Link>
            <Link
              to="/admissions"
              className="rounded-full border border-slate-300 px-6 py-3 text-sm font-bold text-brand-navy"
            >
              Start Admissions
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
