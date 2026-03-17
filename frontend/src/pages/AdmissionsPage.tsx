import { useForm } from "react-hook-form";
import { SectionHeading } from "@/components/SectionHeading";
import { admissionsSteps, documentsChecklist } from "@/features/home/content";

type AdmissionFormValues = {
  studentName: string;
  stream: string;
  phone: string;
  city: string;
};

export function AdmissionsPage() {
  const { register, handleSubmit, reset } = useForm<AdmissionFormValues>();

  const onSubmit = (values: AdmissionFormValues) => {
    console.info("Admissions enquiry captured locally until backend is connected.", values);
    reset();
  };

  return (
    <div>
      <section className="bg-gradient-to-br from-brand-navy via-brand-blue to-sky-500 py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Admissions"
            title="Start the online admissions journey."
            description="The admissions experience is being designed to move students from enquiry to application with less friction, better follow-up, and a cleaner digital process for staff."
            tone="dark"
          />
          <div className="mt-10 grid gap-4 md:grid-cols-4">
            {admissionsSteps.map((item) => (
              <article
                key={item.step}
                className="rounded-[1.5rem] border border-white/12 bg-slate-900/18 p-5 backdrop-blur-sm"
              >
                <p className="font-display text-2xl font-bold text-brand-gold">{item.step}</p>
                <h3 className="mt-3 font-display text-lg font-bold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-100/90">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="space-y-6">
            <div className="rounded-[2rem] bg-brand-ink p-8 text-white shadow-card">
              <h3 className="font-display text-2xl font-bold">What phase 1 supports</h3>
              <ul className="mt-6 space-y-4 text-sm leading-7 text-slate-200">
                <li>Online enquiry and application intake</li>
                <li>Admin review and status tracking</li>
                <li>Document upload integration in the next backend step</li>
                <li>Email and WhatsApp notification triggers</li>
                <li>QR campaign routing directly to this admissions flow</li>
              </ul>
            </div>

            <div className="rounded-[2rem] border border-slate-200/80 bg-white p-8 shadow-card-soft">
              <h3 className="font-display text-2xl font-bold text-brand-ink">
                Prepare these details
              </h3>
              <ul className="mt-6 space-y-3 text-sm leading-7 text-brand-slate">
                {documentsChecklist.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-2.5 w-2.5 rounded-full bg-brand-gold" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="rounded-[2rem] border border-slate-200/80 bg-white p-8 shadow-card-soft"
          >
            <h3 className="font-display text-2xl font-bold text-brand-ink">Admissions Enquiry</h3>
            <p className="mt-3 text-sm leading-7 text-brand-slate">
              This is the frontend-ready version of the admissions form. It will connect to the
              backend workflow for real submission, validation, and status tracking.
            </p>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <label className="text-sm font-semibold text-slate-700">
                Student name
                <input
                  {...register("studentName")}
                  className="mt-2 w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 outline-none transition focus:border-brand-blue focus:bg-white"
                  placeholder="Enter student name"
                />
              </label>
              <label className="text-sm font-semibold text-slate-700">
                Preferred stream
                <select
                  {...register("stream")}
                  className="mt-2 w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 outline-none transition focus:border-brand-blue focus:bg-white"
                >
                  <option value="">Select stream</option>
                  <option value="science">Science</option>
                  <option value="commerce">Commerce</option>
                </select>
              </label>
              <label className="text-sm font-semibold text-slate-700">
                Phone number
                <input
                  {...register("phone")}
                  className="mt-2 w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 outline-none transition focus:border-brand-blue focus:bg-white"
                  placeholder="Enter contact number"
                />
              </label>
              <label className="text-sm font-semibold text-slate-700">
                City
                <input
                  {...register("city")}
                  className="mt-2 w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 outline-none transition focus:border-brand-blue focus:bg-white"
                  placeholder="Enter city"
                />
              </label>
            </div>

            <button
              type="submit"
              className="mt-8 rounded-full bg-brand-blue px-6 py-3 text-sm font-bold text-white transition hover:bg-brand-navy"
            >
              Save Frontend Prototype
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
