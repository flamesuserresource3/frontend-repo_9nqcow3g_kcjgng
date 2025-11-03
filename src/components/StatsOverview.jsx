import { Activity, Users, Calendar, Stethoscope } from 'lucide-react';

const StatCard = ({ icon: Icon, label, value, trend }) => (
  <div className="rounded-xl border bg-white p-4 sm:p-5 shadow-sm">
    <div className="flex items-start justify-between">
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-lg bg-blue-50 text-blue-600 grid place-items-center">
          <Icon className="h-5 w-5" />
        </div>
        <div>
          <p className="text-sm text-gray-500">{label}</p>
          <p className="text-xl font-semibold mt-0.5">{value}</p>
        </div>
      </div>
      {trend && (
        <span className={`text-xs px-2 py-1 rounded-full ${trend > 0 ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
          {trend > 0 ? '+' : ''}{trend}%
        </span>
      )}
    </div>
  </div>
);

export default function StatsOverview() {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <StatCard icon={Users} label="Active Patients" value="1,248" trend={12} />
      <StatCard icon={Stethoscope} label="On-duty Doctors" value="58" trend={3} />
      <StatCard icon={Calendar} label="Today's Appointments" value="162" trend={-4} />
      <StatCard icon={Activity} label="Bed Occupancy" value="78%" trend={6} />
    </section>
  );
}
