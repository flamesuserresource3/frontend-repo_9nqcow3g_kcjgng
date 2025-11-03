import Spline from "@splinetool/react-spline";
import { ChevronRight } from "lucide-react";

export default function Hero3D() {
  return (
    <section className="relative h-[420px] w-full overflow-hidden rounded-none bg-slate-900 text-white md:h-[520px]">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/3y8g3nAhEw3s0n4x/scene.splinecode"
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900/40 via-slate-900/50 to-slate-900" />

      <div className="relative mx-auto flex h-full max-w-7xl flex-col items-start justify-center gap-6 px-4">
        <h1 className="text-balance text-3xl font-semibold leading-tight md:text-5xl">
          World-class care, now in real-time
        </h1>
        <p className="max-w-xl text-pretty text-sm text-slate-200 md:text-base">
          Track live ER wait times, bed availability, and appointment slots across our network. Book instantly and get care without delays.
        </p>
        <div className="pointer-events-auto flex flex-wrap items-center gap-3">
          <a
            href="#appointments"
            className="inline-flex items-center gap-2 rounded-full bg-sky-500 px-5 py-2.5 text-sm font-medium text-white shadow hover:bg-sky-600"
          >
            Book Appointment
            <ChevronRight className="h-4 w-4" />
          </a>
          <a
            href="#stats"
            className="inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-2.5 text-sm font-medium text-white ring-1 ring-white/20 backdrop-blur hover:bg-white/20"
          >
            View Live Status
          </a>
        </div>
      </div>
    </section>
  );
}
