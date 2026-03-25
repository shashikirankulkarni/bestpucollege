import { useForm } from "react-hook-form";
import { SectionHeading } from "@/components/SectionHeading";
import { admissionsSteps, documentsChecklist } from "@/features/home/content";
import { useState } from "react";

type EnquiryFormValues = {
  studentName: string;
  parentName: string;
  phone: string;
  email: string;
  stream: string;
  previousSchool: string;
  city: string;
  message: string;
};

export function AdmissionsPage() {
  const { register, handleSubmit, reset } = useForm<EnquiryFormValues>();
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (values: EnquiryFormValues) => {
    // Will connect to backend API in full-stack phase
    console.info("Admission enquiry:", values);
    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div>
      {/* Hero */}
      <section className="bg-hero-radial py-16 text-white sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Admissions 2026-27"
            title="Your Future Starts Here"
            description="Apply for I PUC Science or Commerce. Complete your application online in under 10 minutes — no campus visit required for the initial application."
            tone="dark"
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {admissionsSteps.map((item) => (
              <article
                key={item.step}
                className="rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm"
              >
                <p className="font-display text-2xl font-bold text-brand-gold">{item.step}</p>
                <h3 className="mt-2 font-display text-base font-bold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-blue-100">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Form + sidebar */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr]">
          {/* Sidebar */}
          <div className="space-y-6">
            {/* Eligibility */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="font-display text-xl font-bold text-brand-navy">Eligibility</h3>
              <ul className="mt-4 space-y-3 text-sm text-brand-slate">
                <li className="flex gap-3">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-brand-gold" />
                  Passed SSLC / 10th Standard from any recognized board
                </li>
                <li className="flex gap-3">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-brand-gold" />
                  Minimum 35% aggregate for general admission
                </li>
                <li className="flex gap-3">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-brand-gold" />
                  Minimum 60% in Science/Maths for Science stream
                </li>
              </ul>
            </div>

            {/* Documents */}
            <div className="rounded-2xl bg-brand-navy p-6 text-white">
              <h3 className="font-display text-xl font-bold">Documents Required</h3>
              <ul className="mt-4 space-y-3 text-sm text-slate-200">
                {documentsChecklist.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-brand-gold" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Important dates */}
            <div className="rounded-2xl border border-slate-200 bg-brand-soft p-6">
              <h3 className="font-display text-xl font-bold text-brand-navy">Important Dates</h3>
              <div className="mt-4 space-y-3 text-sm text-brand-slate">
                <div className="flex justify-between">
                  <span>Applications Open</span>
                  <span className="font-bold text-brand-navy">March 15, 2026</span>
                </div>
                <div className="flex justify-between">
                  <span>Early Admission Deadline</span>
                  <span className="font-bold text-brand-navy">April 30, 2026</span>
                </div>
                <div className="flex justify-between">
                  <span>Regular Deadline</span>
                  <span className="font-bold text-brand-navy">May 31, 2026</span>
                </div>
                <div className="flex justify-between">
                  <span>Classes Begin</span>
                  <span className="font-bold text-brand-navy">June 15, 2026</span>
                </div>
              </div>
            </div>
          </div>

          {/* Enquiry form */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
          >
            <h3 className="font-display text-2xl font-bold text-brand-navy">Admission Enquiry</h3>
            <p className="mt-2 text-sm text-brand-slate">
              Fill in your details and we will get back to you within 24 hours.
            </p>

            {submitted && (
              <div className="mt-4 rounded-lg bg-green-50 p-4 text-sm font-medium text-green-800">
                Thank you! Your enquiry has been received. We will contact you shortly.
              </div>
            )}

            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              <label className="text-sm font-semibold text-slate-700">
                Student Name *
                <input
                  {...register("studentName", { required: true })}
                  className="mt-1.5 w-full rounded-lg border border-slate-300 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-brand-blue focus:bg-white focus:ring-1 focus:ring-brand-blue"
                  placeholder="Full name of the student"
                />
              </label>
              <label className="text-sm font-semibold text-slate-700">
                Parent / Guardian Name *
                <input
                  {...register("parentName", { required: true })}
                  className="mt-1.5 w-full rounded-lg border border-slate-300 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-brand-blue focus:bg-white focus:ring-1 focus:ring-brand-blue"
                  placeholder="Parent or guardian name"
                />
              </label>
              <label className="text-sm font-semibold text-slate-700">
                Phone Number *
                <input
                  {...register("phone", { required: true })}
                  type="tel"
                  className="mt-1.5 w-full rounded-lg border border-slate-300 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-brand-blue focus:bg-white focus:ring-1 focus:ring-brand-blue"
                  placeholder="+91 XXXXX XXXXX"
                />
              </label>
              <label className="text-sm font-semibold text-slate-700">
                Email Address
                <input
                  {...register("email")}
                  type="email"
                  className="mt-1.5 w-full rounded-lg border border-slate-300 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-brand-blue focus:bg-white focus:ring-1 focus:ring-brand-blue"
                  placeholder="Email (optional)"
                />
              </label>
              <label className="text-sm font-semibold text-slate-700">
                Preferred Stream *
                <select
                  {...register("stream", { required: true })}
                  className="mt-1.5 w-full rounded-lg border border-slate-300 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-brand-blue focus:bg-white focus:ring-1 focus:ring-brand-blue"
                >
                  <option value="">Select stream</option>
                  <option value="science-pcmb">Science (PCMB)</option>
                  <option value="science-pcms">Science (PCMS)</option>
                  <option value="science-pcmc">Science (PCMC)</option>
                  <option value="commerce-beba">Commerce (BEBA)</option>
                  <option value="commerce-seba">Commerce (SEBA)</option>
                  <option value="commerce-csba">Commerce (CSBA)</option>
                </select>
              </label>
              <label className="text-sm font-semibold text-slate-700">
                Previous School
                <input
                  {...register("previousSchool")}
                  className="mt-1.5 w-full rounded-lg border border-slate-300 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-brand-blue focus:bg-white focus:ring-1 focus:ring-brand-blue"
                  placeholder="Name of previous school"
                />
              </label>
              <label className="text-sm font-semibold text-slate-700 sm:col-span-2">
                City / Town
                <input
                  {...register("city")}
                  className="mt-1.5 w-full rounded-lg border border-slate-300 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-brand-blue focus:bg-white focus:ring-1 focus:ring-brand-blue"
                  placeholder="Where are you from?"
                />
              </label>
              <label className="text-sm font-semibold text-slate-700 sm:col-span-2">
                Any questions or message?
                <textarea
                  {...register("message")}
                  rows={3}
                  className="mt-1.5 w-full rounded-lg border border-slate-300 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-brand-blue focus:bg-white focus:ring-1 focus:ring-brand-blue"
                  placeholder="Anything you'd like to ask us..."
                />
              </label>
            </div>

            <button
              type="submit"
              className="mt-6 w-full rounded-lg bg-brand-navy px-6 py-3.5 text-sm font-bold text-white transition hover:bg-brand-blue sm:w-auto"
            >
              Submit Enquiry
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
