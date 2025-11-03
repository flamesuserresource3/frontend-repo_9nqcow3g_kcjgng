import { useEffect, useMemo, useState } from "react";
import { Activity, Bed, Clock, Stethoscope } from "lucide-react";

function StatCard({ icon: Icon, label, value, suffix, trend }) {
  return (
    <div className="flex flex-1 items-center gap-4 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-sky-50">
        <Icon className="h-5 w-5 text-sky-600" />
      </div>
      <div className="flex flex-1 items-end justify-between gap-3">
        <div>
          <p className="text-xs text-slate-500">{label}</p>
          <p className="text-2xl font-semibold text-slate-800">
            {value}
            {suffix ? <span className="ml-1 text-sm font-medium text-slate-500">{suffix}</span> : null}
          </p>
        </div>
        <span className={`text-xs font-medium ${trend >= 0 ? "text-emerald-600" : "text-rose-600"}`}>
          {trend >= 0 ? "+" : ""}{trend}%
        </span>
      </div>
    </div>
  );
}

export default function LiveStats() {
  const [stats, setStats] = useState({
    wait: 12,
    beds: 86,
    doctors: 48,
    activity: 72,
  });

  const ranges = useMemo(
    () => ({ wait: [5, 25], beds: [60, 98], doctors: [40, 60], activity: [50, 95] }),
    []
  );

  useEffect(() => {
    const id = setInterval(() => {
      setStats((prev) => ({
        wait: clamp(jitter(prev.wait, -2, 2), ranges.wait),
        beds: clamp(jitter(prev.beds, -2, 3), ranges.beds),
        doctors: clamp(jitter(prev.doctors, -1, 1), ranges.doctors),
        activity: clamp(jitter(prev.activity, -3, 3), ranges.activity),
      }));
    }, 1500);
    return () => clearInterval(id);
  }, [ranges]);

  const cards = [
    { icon: Clock, label: "Avg ER wait", value: `${stats.wait}`, suffix: "min", trend: trend(stats.wait, 15) },
    { icon: Bed, label: "Bed occupancy", value: `${stats.beds}`, suffix: "%", trend: trend(stats.beds, 80) },
    { icon: Stethoscope, label: "On-duty doctors", value: `${stats.doctors}`, suffix: "", trend: trend(stats.doctors, 50) },
    { icon: Activity, label: "System activity", value: `${stats.activity}`, suffix: "%", trend: trend(stats.activity, 70) },
  ];

  return (
    <section id="stats" className="mx-auto max-w-7xl px-4 py-10">
      <h2 className="mb-4 text-lg font-semibold text-slate-800">Live hospital status</h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((c, i) => (
          <StatCard key={i} {...c} />
        ))}
      </div>
    </section>
  );
}

function jitter(value, minDelta, maxDelta) {
  const delta = Math.floor(Math.random() * (maxDelta - minDelta + 1)) + minDelta;
  return value + delta;
}

function clamp(value, [min, max]) {
  return Math.max(min, Math.min(max, value));
}

function trend(current, baseline) {
  const diff = Math.round(((current - baseline) / Math.max(1, baseline)) * 100);
  return diff;
}
