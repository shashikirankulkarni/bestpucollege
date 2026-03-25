import { Link } from "react-router-dom";
import { SectionHeading } from "@/components/SectionHeading";
import { facilityItems } from "@/features/home/content";

export function FacilitiesPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-brand-soft py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Campus & Facilities"
            title="Modern Infrastructure for Effective Learning"
            description="Our campus is designed to support academic excellence with well-equipped laboratories, smart classrooms, a comprehensive library, and spaces for sports and cultural activities."
          />
        </div>
      </section>

      {/* Facilities grid */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {facilityItems.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-card-soft"
            >
              <h3 className="font-display text-lg font-bold text-brand-navy">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-brand-slate">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Campus highlights */}
      <section className="bg-brand-navy py-16 text-white sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Campus Life"
            title="More Than Just Academics"
            description="A safe, supportive, and vibrant campus environment where students grow both academically and personally."
            tone="dark"
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "CCTV Surveillance", desc: "24/7 monitoring across campus for student safety" },
              { title: "Canteen", desc: "Hygienic food court with affordable meals and snacks" },
              { title: "First Aid Room", desc: "On-campus medical assistance with basic first aid facility" },
              { title: "Parking Area", desc: "Dedicated and secure parking for students and staff" },
            ].map((item) => (
              <div key={item.title} className="rounded-xl border border-white/10 bg-white/5 p-5">
                <p className="font-display text-base font-bold text-white">{item.title}</p>
                <p className="mt-2 text-sm text-slate-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="rounded-2xl bg-brand-soft p-8 text-center sm:p-12">
          <h2 className="font-display text-2xl font-bold text-brand-navy sm:text-3xl">
            Want to See Our Campus?
          </h2>
          <p className="mt-3 text-base text-brand-slate">
            Schedule a campus visit or contact us for more information about our facilities.
          </p>
          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              to="/contact"
              className="rounded-lg bg-brand-navy px-8 py-3 text-sm font-bold text-white transition hover:bg-brand-blue"
            >
              Schedule a Visit
            </Link>
            <Link
              to="/admissions"
              className="rounded-lg border border-slate-300 px-8 py-3 text-sm font-bold text-brand-navy transition hover:bg-white"
            >
              Apply for Admission
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
