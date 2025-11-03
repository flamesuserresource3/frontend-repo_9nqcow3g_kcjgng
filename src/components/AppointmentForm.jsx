import { useState } from 'react';
import { Calendar, User, Stethoscope, Plus } from 'lucide-react';

export default function AppointmentForm() {
  const [form, setForm] = useState({
    patient: '',
    doctor: '',
    date: '',
    reason: '',
  });
  const [appointments, setAppointments] = useState([]);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!form.patient || !form.doctor || !form.date) return;
    setAppointments((prev) => [
      { id: Date.now(), ...form },
      ...prev,
    ]);
    setForm({ patient: '', doctor: '', date: '', reason: '' });
  };

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <div className="rounded-xl border bg-white p-4 sm:p-5">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-base font-semibold">Book Appointment</h3>
        </div>
        <form className="grid grid-cols-1 sm:grid-cols-2 gap-3" onSubmit={onSubmit}>
          <label className="flex flex-col gap-1">
            <span className="text-sm text-gray-600">Patient Name</span>
            <div className="relative">
              <User className="h-4 w-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                value={form.patient}
                onChange={update('patient')}
                placeholder="John Doe"
                className="w-full pl-9 pr-3 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </label>

          <label className="flex flex-col gap-1">
            <span className="text-sm text-gray-600">Doctor</span>
            <div className="relative">
              <Stethoscope className="h-4 w-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                value={form.doctor}
                onChange={update('doctor')}
                placeholder="Dr. Smith"
                className="w-full pl-9 pr-3 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </label>

          <label className="flex flex-col gap-1">
            <span className="text-sm text-gray-600">Date & Time</span>
            <div className="relative">
              <Calendar className="h-4 w-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="datetime-local"
                value={form.date}
                onChange={update('date')}
                className="w-full pl-9 pr-3 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </label>

          <label className="sm:col-span-2 flex flex-col gap-1">
            <span className="text-sm text-gray-600">Reason</span>
            <input
              value={form.reason}
              onChange={update('reason')}
              placeholder="General checkup, consulting, ..."
              className="w-full px-3 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </label>

          <div className="sm:col-span-2 flex justify-end">
            <button type="submit" className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-blue-600 text-white font-medium hover:bg-blue-700">
              <Plus className="h-4 w-4" />
              Create appointment
            </button>
          </div>
        </form>
      </div>

      <div className="rounded-xl border bg-white p-4 sm:p-5">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-base font-semibold">Upcoming Appointments</h3>
          <span className="text-sm text-gray-500">Local preview</span>
        </div>
        {appointments.length === 0 ? (
          <p className="text-sm text-gray-500">No appointments yet. Add one using the form.</p>
        ) : (
          <ul className="space-y-3 max-h-80 overflow-auto pr-1">
            {appointments.map((a) => (
              <li key={a.id} className="rounded-lg border p-3">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">{a.patient} with {a.doctor}</p>
                    <p className="text-sm text-gray-500">{new Date(a.date).toLocaleString()}</p>
                  </div>
                  {a.reason && <span className="text-xs px-2 py-1 rounded-full bg-blue-50 text-blue-700">{a.reason}</span>}
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
