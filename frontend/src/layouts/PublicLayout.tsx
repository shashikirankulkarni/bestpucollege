import { useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

const navigation = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/academics", label: "Academics" },
  { to: "/facilities", label: "Facilities" },
  { to: "/results", label: "Results" },
  { to: "/admissions", label: "Admissions" },
  { to: "/notices", label: "Notices" },
  { to: "/events", label: "Events" },
  { to: "/contact", label: "Contact" },
];

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  [
    "whitespace-nowrap rounded-lg px-3 py-2 text-sm font-semibold transition-colors",
    isActive
      ? "bg-brand-gold/10 text-brand-gold"
      : "text-white/80 hover:bg-white/10 hover:text-white",
  ].join(" ");

export function PublicLayout() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-brand-soft text-slate-900">
      {/* Top utility bar */}
      <div className="bg-brand-ink">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-2 px-4 py-2 text-xs text-slate-300 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <span>Savalagi Road, Jamkhandi, Karnataka</span>
            <span className="hidden sm:inline">|</span>
            <span className="hidden sm:inline">admissions@bestpucollege.edu.in</span>
          </div>
          <Link
            to="/admissions"
            className="font-bold text-brand-gold transition hover:text-white"
          >
            Apply Now &rarr;
          </Link>
        </div>
      </div>

      {/* Main header */}
      <header className="sticky top-0 z-40 border-b border-brand-navy/90 bg-brand-navy shadow-lg">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          {/* Logo / Brand */}
          <Link to="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-gold font-display text-lg font-extrabold text-brand-ink">
              B
            </div>
            <div className="hidden sm:block">
              <p className="font-display text-base font-bold leading-tight text-white">
                The Best Science & Commerce
              </p>
              <p className="text-xs font-medium text-brand-gold">
                P.U. College, Jamkhandi
              </p>
            </div>
            <div className="sm:hidden">
              <p className="font-display text-sm font-bold leading-tight text-white">
                Best PU College
              </p>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 lg:flex">
            {navigation.map((item) => (
              <NavLink key={item.to} to={item.to} end={item.to === "/"} className={navLinkClass}>
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Mobile menu toggle */}
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-white transition hover:bg-white/10 lg:hidden"
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile nav dropdown */}
        {mobileOpen && (
          <nav className="border-t border-white/10 bg-brand-navy px-4 pb-4 pt-2 lg:hidden">
            <div className="grid gap-1">
              {navigation.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === "/"}
                  className={navLinkClass}
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </nav>
        )}
      </header>

      {/* Page content */}
      <main>
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-brand-ink text-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
            {/* Brand column */}
            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-gold font-display text-lg font-extrabold text-brand-ink">
                  B
                </div>
                <div>
                  <p className="font-display text-base font-bold text-white">
                    The Best Science & Commerce
                  </p>
                  <p className="text-xs text-brand-gold">P.U. College, Jamkhandi</p>
                </div>
              </div>
              <p className="mt-4 max-w-sm text-sm leading-7 text-slate-400">
                Providing quality pre-university education for over 25 years. Recognized
                for academic excellence, experienced faculty, and a strong track record of
                board exam results in Bagalkot district.
              </p>
              <div className="mt-6 flex gap-4">
                <Link
                  to="/admissions"
                  className="rounded-lg bg-brand-gold px-5 py-2.5 text-sm font-bold text-brand-ink transition hover:bg-yellow-400"
                >
                  Apply Now
                </Link>
                <Link
                  to="/contact"
                  className="rounded-lg border border-white/20 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-white/10"
                >
                  Contact Us
                </Link>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-brand-gold">
                Quick Links
              </p>
              <div className="mt-4 grid gap-2.5 text-sm text-slate-400">
                <Link to="/about" className="transition hover:text-white">About the College</Link>
                <Link to="/academics" className="transition hover:text-white">Academic Streams</Link>
                <Link to="/facilities" className="transition hover:text-white">Campus Facilities</Link>
                <Link to="/results" className="transition hover:text-white">Results & Toppers</Link>
                <Link to="/admissions" className="transition hover:text-white">Admissions 2026-27</Link>
              </div>
            </div>

            {/* Resources */}
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-brand-gold">
                Resources
              </p>
              <div className="mt-4 grid gap-2.5 text-sm text-slate-400">
                <Link to="/notices" className="transition hover:text-white">Notices & Circulars</Link>
                <Link to="/events" className="transition hover:text-white">Events & Activities</Link>
                <Link to="/contact" className="transition hover:text-white">Contact & Directions</Link>
              </div>
            </div>

            {/* Contact */}
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-brand-gold">
                Contact
              </p>
              <div className="mt-4 grid gap-3 text-sm text-slate-400">
                <p>Savalagi Road, Jamkhandi<br />Bagalkot District, Karnataka - 587301</p>
                <p>admissions@bestpucollege.edu.in</p>
                <p>Mon - Sat: 9:00 AM - 5:00 PM</p>
              </div>
            </div>
          </div>

          <div className="mt-12 border-t border-white/10 pt-6 text-center text-xs text-slate-500">
            &copy; {new Date().getFullYear()} The Best Science & Commerce P.U. College, Jamkhandi. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
