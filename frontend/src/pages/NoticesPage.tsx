import { Link } from "react-router-dom";
import { SectionHeading } from "@/components/SectionHeading";

const allNotices = [
  {
    category: "Admissions",
    date: "March 15, 2026",
    title: "2026-27 Admissions Now Open for I PUC",
    summary:
      "Online applications are being accepted for I PUC Science and Commerce streams. Early applicants receive priority counseling and seat confirmation. Apply through the admissions page.",
  },
  {
    category: "Examinations",
    date: "March 10, 2026",
    title: "II PUC Preparatory Exam Schedule",
    summary:
      "Preparatory examinations for II PUC students commence April 1, 2026. Timetable has been shared on the student portal. Hall tickets can be collected from the office starting March 25.",
  },
  {
    category: "Events",
    date: "March 5, 2026",
    title: "Annual Science Exhibition - Entries Open",
    summary:
      "Register for the Annual Science and Innovation Exhibition on April 20, 2026. Individual and team entries welcome. Registration forms available in the Science department office.",
  },
  {
    category: "Academic",
    date: "February 28, 2026",
    title: "I PUC Annual Exam Time Table Released",
    summary:
      "I PUC annual examinations begin on April 10, 2026. Students are advised to collect hall tickets from the exam section. Detailed timetable posted on notice board and student portal.",
  },
  {
    category: "General",
    date: "February 20, 2026",
    title: "College Closed for Mahashivratri",
    summary:
      "The college will remain closed on February 26, 2026 (Wednesday) on account of Mahashivratri. Regular classes resume on February 27.",
  },
  {
    category: "Academic",
    date: "February 15, 2026",
    title: "Parent-Teacher Meeting for I PUC",
    summary:
      "PTM for I PUC students scheduled for March 1, 2026 (Saturday) from 10:00 AM to 1:00 PM. Parents are requested to attend with the student's progress card.",
  },
  {
    category: "Scholarships",
    date: "February 10, 2026",
    title: "State Scholarship Applications - Last Date Extended",
    summary:
      "Last date for submitting Karnataka state scholarship applications has been extended to March 15, 2026. Students with pending applications should contact the scholarship cell immediately.",
  },
  {
    category: "Sports",
    date: "February 5, 2026",
    title: "District-Level Inter-College Sports Meet",
    summary:
      "Selected students will represent the college at the Bagalkot District Inter-College Sports Meet from March 8-10. Participants list displayed on sports notice board.",
  },
];

export function NoticesPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-brand-soft py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Notices & Circulars"
            title="Stay Informed"
            description="Important announcements, exam schedules, holiday notices, and campus updates. Check back regularly or follow us for real-time updates."
          />
        </div>
      </section>

      {/* Notices list */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="grid gap-5">
          {allNotices.map((notice) => (
            <article
              key={notice.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-card-soft"
            >
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-brand-blue/10 px-3 py-1 text-xs font-bold text-brand-blue">
                  {notice.category}
                </span>
                <time className="text-xs text-brand-slate">{notice.date}</time>
              </div>
              <h3 className="mt-3 font-display text-lg font-bold text-brand-navy">
                {notice.title}
              </h3>
              <p className="mt-2 max-w-4xl text-sm leading-7 text-brand-slate">{notice.summary}</p>
            </article>
          ))}
        </div>

        <div className="mt-10 rounded-2xl bg-brand-navy p-8 text-center text-white">
          <h3 className="font-display text-xl font-bold">Never Miss an Update</h3>
          <p className="mt-2 text-sm text-slate-300">
            Important notices are also sent to parents and students via WhatsApp and SMS.
            Contact the office to ensure your number is registered.
          </p>
          <Link
            to="/contact"
            className="mt-6 inline-flex rounded-lg bg-brand-gold px-6 py-3 text-sm font-bold text-brand-ink transition hover:bg-yellow-400"
          >
            Contact Office
          </Link>
        </div>
      </section>
    </div>
  );
}
