import { Link } from "react-router-dom";
import { SectionHeading } from "@/components/SectionHeading";
import { contactChannels } from "@/features/home/content";

export function ContactPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-brand-soft py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Contact Us"
            title="Get in Touch"
            description="Have questions about admissions, academics, or campus life? Reach out through any of the channels below. We are here to help."
          />
        </div>
      </section>

      {/* Contact cards */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          {contactChannels.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <p className="text-xs font-bold uppercase tracking-widest text-brand-blue">
                {item.title}
              </p>
              <p className="mt-3 font-display text-lg font-bold text-brand-navy">{item.value}</p>
              <p className="mt-2 text-sm leading-7 text-brand-slate">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Map placeholder + office hours */}
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-brand-soft p-6">
            <h3 className="font-display text-xl font-bold text-brand-navy">Office Hours</h3>
            <div className="mt-4 space-y-3 text-sm text-brand-slate">
              <div className="flex justify-between">
                <span>Monday - Friday</span>
                <span className="font-bold text-brand-navy">9:00 AM - 5:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday</span>
                <span className="font-bold text-brand-navy">9:00 AM - 1:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday</span>
                <span className="font-bold text-brand-navy">Closed</span>
              </div>
            </div>
            <div className="mt-6 rounded-lg bg-white p-4 text-sm text-brand-slate">
              <p className="font-bold text-brand-navy">Admission Cell</p>
              <p className="mt-1">For admission-specific queries, the admissions cell operates Monday to Saturday, 9:00 AM to 6:00 PM during the admission season (March - July).</p>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="font-display text-xl font-bold text-brand-navy">How to Reach Us</h3>
            <div className="mt-4 space-y-4 text-sm text-brand-slate">
              <div>
                <p className="font-bold text-brand-navy">By Road</p>
                <p className="mt-1">Jamkhandi is well connected by road from Bagalkot (40 km), Belgaum (130 km), and Hubli (120 km). The college is located on Savalagi Road, 1 km from the Jamkhandi bus stand.</p>
              </div>
              <div>
                <p className="font-bold text-brand-navy">By Rail</p>
                <p className="mt-1">Nearest railway station: Bagalkot (40 km). Auto-rickshaws and local buses are available from the station to Jamkhandi.</p>
              </div>
              <div>
                <p className="font-bold text-brand-navy">By Air</p>
                <p className="mt-1">Nearest airport: Hubli Airport (120 km) or Belgaum Airport (130 km).</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-navy py-14 text-center text-white">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-bold">Ready to Apply?</h2>
          <p className="mt-3 text-base text-blue-100">
            Start your online application or visit our campus for a personal tour.
          </p>
          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              to="/admissions"
              className="rounded-lg bg-brand-gold px-8 py-3.5 text-sm font-bold text-brand-ink transition hover:bg-yellow-400"
            >
              Apply Now
            </Link>
            <Link
              to="/about"
              className="rounded-lg border border-white/25 px-8 py-3.5 text-sm font-bold text-white transition hover:bg-white/10"
            >
              About the College
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
