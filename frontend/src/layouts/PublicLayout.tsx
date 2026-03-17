import { Link, NavLink, Outlet } from "react-router-dom";

const navigation = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/academics", label: "Academics" },
  { to: "/facilities", label: "Facilities" },
  { to: "/results", label: "Results" },
  { to: "/notices", label: "Notices" },
  { to: "/events", label: "Events" },
  { to: "/contact", label: "Contact" },
];

export function PublicLayout() {
  return (
    <div className="min-h-screen bg-brand-soft text-slate-900">
      <div className="bg-brand-ink text-white">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-3 text-sm sm:px-6 lg:px-8">
          <p className="text-slate-200">
            The Best Science & Commerce P.U. College, Jamkhandi
          </p>
          <div className="flex flex-wrap items-center gap-4 text-slate-300">
            <span>Digital admissions and communication platform</span>
            <Link to="/admissions" className="font-semibold text-brand-gold hover:text-white">
              Apply Online
            </Link>
          </div>
        </div>
      </div>

      <header className="sticky top-0 z-30 border-b border-slate-200/80 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-6 px-4 py-5 sm:px-6 lg:px-8">
          <Link to="/" className="max-w-xl">
            <p className="font-display text-sm font-extrabold uppercase tracking-[0.26em] text-brand-gold">
              Jamkhandi
            </p>
            <h1 className="font-display text-xl font-bold text-brand-navy sm:text-2xl">
              The Best Science & Commerce P.U. College
            </h1>
            <p className="mt-1 text-sm text-brand-slate">
              An institute website focused on admissions, academic communication, and student
              support.
            </p>
          </Link>

          <nav className="flex flex-wrap items-center gap-2">
            {navigation.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  [
                    "rounded-full px-4 py-2 text-sm font-semibold transition-colors",
                    isActive
                      ? "bg-brand-mist text-brand-navy"
                      : "text-brand-slate hover:bg-slate-100 hover:text-brand-navy",
                  ].join(" ")
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="bg-brand-ink text-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:px-6 lg:grid-cols-[1.3fr_1fr_1fr] lg:px-8">
          <div>
            <p className="font-display text-2xl font-bold">
              The Best Science & Commerce P.U. College
            </p>
            <p className="mt-4 max-w-lg text-sm leading-7 text-slate-300">
              A professional public website experience for admissions, academic visibility,
              notices, results communication, and future student support services.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                to="/admissions"
                className="rounded-full bg-brand-gold px-5 py-3 text-sm font-bold text-brand-ink"
              >
                Begin Admissions
              </Link>
              <Link
                to="/contact"
                className="rounded-full border border-white/15 px-5 py-3 text-sm font-bold text-white"
              >
                Contact Office
              </Link>
            </div>
          </div>

          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand-gold">
              Quick Links
            </p>
            <div className="mt-4 grid gap-3 text-sm text-slate-300">
              <Link to="/about" className="hover:text-white">
                About the College
              </Link>
              <Link to="/academics" className="hover:text-white">
                Academic Streams
              </Link>
              <Link to="/results" className="hover:text-white">
                Results and Highlights
              </Link>
              <Link to="/notices" className="hover:text-white">
                Latest Notices
              </Link>
            </div>
          </div>

          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand-gold">
              Contact Direction
            </p>
            <div className="mt-4 grid gap-3 text-sm text-slate-300">
              <p>Jamkhandi, Karnataka</p>
              <p>English and Kannada-ready communication direction</p>
              <p>Admissions, notices, results, and event visibility</p>
              <Link to="/contact" className="font-semibold text-white hover:text-brand-gold">
                Visit Contact Page
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
