import { Link } from "react-router-dom";
import { SectionHeading } from "@/components/SectionHeading";
import { contactChannels } from "@/features/home/content";

export function ContactPage() {
  return (
    <div>
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Contact"
            title="Contact pathways should move students toward action"
            description="The contact page should help students and parents reach the right next step quickly, whether that means enquiry, admissions, or information access."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {contactChannels.map((item) => (
              <div
                key={item.title}
                className="rounded-[1.75rem] border border-slate-200/80 bg-brand-soft p-6 shadow-card-soft"
              >
                <p className="text-sm font-bold uppercase tracking-[0.22em] text-brand-gold">
                  Contact Path
                </p>
                <p className="mt-4 font-display text-xl font-bold text-brand-ink">{item.title}</p>
                <p className="mt-3 text-sm leading-7 text-brand-slate">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-[2rem] bg-brand-ink p-8 text-white shadow-card">
            <h3 className="font-display text-2xl font-bold">Recommended next additions</h3>
            <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              <div className="rounded-[1.25rem] border border-white/10 bg-white/5 p-4 text-sm text-slate-200">
                Final campus address and contact numbers
              </div>
              <div className="rounded-[1.25rem] border border-white/10 bg-white/5 p-4 text-sm text-slate-200">
                Google Business and Maps links
              </div>
              <div className="rounded-[1.25rem] border border-white/10 bg-white/5 p-4 text-sm text-slate-200">
                WhatsApp contact shortcut and message templates
              </div>
              <div className="rounded-[1.25rem] border border-white/10 bg-white/5 p-4 text-sm text-slate-200">
                Social media handles and campaign attribution links
              </div>
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/admissions"
                className="rounded-full bg-brand-gold px-6 py-3 text-sm font-bold text-brand-ink"
              >
                Go to Admissions
              </Link>
              <Link
                to="/about"
                className="rounded-full border border-white/15 px-6 py-3 text-sm font-bold text-white"
              >
                About the College
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
