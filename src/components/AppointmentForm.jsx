import { useState } from "react";
import { CalendarDays, Mail, Phone, User } from "lucide-react";

export default function AppointmentForm() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", date: "", department: "Cardiology" });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    // In a real app, send to backend here
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3500);
  }

  return (
    <section id="appointments" className="mx-auto max-w-7xl px-4 py-10">
      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <h2 className="text-lg font-semibold text-slate-800">Book an appointment</h2>
          <p className="mt-1 text-sm text-slate-600">Choose your department and preferred date. Our team will confirm instantly if a slot is available.</p>

          <form onSubmit={handleSubmit} className="mt-6 grid gap-4">
            <div className="grid gap-2">
              <label className="text-sm text-slate-700" htmlFor="name">Full Name</label>
              <div className="relative">
                <User className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                <input
                  id="name"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-slate-200 bg-white px-9 py-2 text-sm text-slate-700 placeholder:text-slate-400 focus:border-sky-400 focus:outline-none"
                  placeholder="John Doe"
                />
              </div>
            </div>

            <div className="grid gap-2">
              <label className="text-sm text-slate-700" htmlFor="email">Email</label>
              <div className="relative">
                <Mail className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-slate-200 bg-white px-9 py-2 text-sm text-slate-700 placeholder:text-slate-400 focus:border-sky-400 focus:outline-none"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div className="grid gap-2">
              <label className="text-sm text-slate-700" htmlFor="phone">Phone</label>
              <div className="relative">
                <Phone className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                <input
                  id="phone"
                  name="phone"
                  required
                  value={form.phone}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-slate-200 bg-white px-9 py-2 text-sm text-slate-700 placeholder:text-slate-400 focus:border-sky-400 focus:outline-none"
                  placeholder="+91 98765 43210"
                />
              </div>
            </div>

            <div className="grid gap-2">
              <label className="text-sm text-slate-700" htmlFor="department">Department</label>
              <select
                id="department"
                name="department"
                value={form.department}
                onChange={handleChange}
                className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 focus:border-sky-400 focus:outline-none"
              >
                <option>Cardiology</option>
                <option>Neurology</option>
                <option>Orthopedics</option>
                <option>Pediatrics</option>
                <option>Oncology</option>
              </select>
            </div>

            <div className="grid gap-2">
              <label className="text-sm text-slate-700" htmlFor="date">Preferred Date</label>
              <div className="relative">
                <CalendarDays className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                <input
                  id="date"
                  name="date"
                  type="date"
                  required
                  value={form.date}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-slate-200 bg-white px-9 py-2 text-sm text-slate-700 placeholder:text-slate-400 focus:border-sky-400 focus:outline-none"
                />
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button className="rounded-lg bg-sky-600 px-4 py-2 text-sm font-medium text-white hover:bg-sky-700">Submit</button>
              {submitted && (
                <span className="text-sm text-emerald-600">Request received. Well confirm shortly.</span>
              )}
            </div>
          </form>
        </div>

        <div className="rounded-xl border border-slate-200 bg-gradient-to-br from-sky-50 to-white p-6">
          <h3 className="text-base font-semibold text-slate-800">Why choose NarayanaCare</h3>
          <ul className="mt-4 space-y-3 text-sm text-slate-600">
            <li>• 24/7 emergency care with real-time triage</li>
            <li>• 1000+ specialist doctors across 30+ departments</li>
            <li>• Connected ICUs and remote monitoring</li>
            <li>• Instant digital reports and e-prescriptions</li>
          </ul>

          <div className="mt-6 grid grid-cols-2 gap-4">
            <InfoBadge title="Average wait" value="12 min" />
            <InfoBadge title="Bed occupancy" value="86%" />
            <InfoBadge title="On-duty doctors" value="48" />
            <InfoBadge title="Satisfaction" value="4.8/5" />
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoBadge({ title, value }) {
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-4 text-center">
      <p className="text-xs text-slate-500">{title}</p>
      <p className="text-lg font-semibold text-slate-800">{value}</p>
    </div>
  );
}
