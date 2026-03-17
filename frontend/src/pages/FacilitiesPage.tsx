import { Link } from "react-router-dom";
import { SectionHeading } from "@/components/SectionHeading";
import { facilityItems } from "@/features/home/content";

export function FacilitiesPage() {
  return (
    <div>
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Facilities and Support"
            title="An institute website should reflect support systems, not only pages"
            description="Even in its early phase, the public platform can communicate the kind of support environment the college is building for students, parents, and administration."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {facilityItems.map((item) => (
              <article
                key={item}
                className="rounded-[1.5rem] border border-slate-200/80 bg-brand-soft p-6 text-sm leading-7 text-brand-slate shadow-card-soft"
              >
                {item}
              </article>
            ))}
          </div>

          <div className="mt-12 rounded-[2rem] border border-slate-200/80 bg-white p-8 shadow-card-soft">
            <h2 className="font-display text-3xl font-bold text-brand-ink">
              Facility communication direction
            </h2>
            <p className="mt-4 max-w-4xl text-base leading-8 text-brand-slate">
              As real campus information becomes available, this page can be expanded into
              classrooms, labs, library, student support systems, and other institute facilities.
              For now, it establishes a strong framework for a polished educational institute
              presentation.
            </p>
            <div className="mt-8">
              <Link
                to="/contact"
                className="inline-flex rounded-full bg-brand-navy px-6 py-3 text-sm font-bold text-white"
              >
                Ask for More Information
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
