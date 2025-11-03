import { Hospital, Phone, Search, Menu } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200/60 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:py-4">
        <div className="flex items-center gap-2">
          <Hospital className="h-6 w-6 text-sky-600" />
          <span className="font-semibold text-slate-800">NarayanaCare</span>
        </div>

        <div className="hidden flex-1 items-center justify-center md:flex">
          <div className="relative w-full max-w-md">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <input
              className="w-full rounded-full border border-slate-200 bg-slate-50 pl-9 pr-4 py-2 text-sm text-slate-700 placeholder:text-slate-400 focus:border-sky-400 focus:bg-white focus:outline-none"
              placeholder="Search doctors, departments, services"
            />
          </div>
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <a href="#appointments" className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-700 hover:bg-slate-50">
            <Phone className="h-4 w-4 text-sky-600" />
            Emergency: 1800-000-123
          </a>
          <a href="#appointments" className="rounded-full bg-sky-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-sky-700">
            Book Appointment
          </a>
        </div>

        <button aria-label="Open menu" className="md:hidden" onClick={() => setOpen(!open)}>
          <Menu className="h-6 w-6 text-slate-700" />
        </button>
      </div>

      {open && (
        <div className="space-y-3 border-t border-slate-200 px-4 py-3 md:hidden">
          <a href="#services" className="block text-slate-700">Services</a>
          <a href="#doctors" className="block text-slate-700">Doctors</a>
          <a href="#locations" className="block text-slate-700">Locations</a>
          <a href="#appointments" className="block rounded-md bg-sky-600 px-4 py-2 text-white">Book Appointment</a>
        </div>
      )}
    </header>
  );
}
