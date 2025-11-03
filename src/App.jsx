import Header from "./components/Header";
import Hero3D from "./components/Hero3D";
import LiveStats from "./components/LiveStats";
import AppointmentForm from "./components/AppointmentForm";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <main className="mx-auto max-w-[100rem]">
        <Hero3D />
        <LiveStats />
        <AppointmentForm />
      </main>
      <footer className="mt-12 border-t border-slate-200 bg-white py-6">
        <div className="mx-auto max-w-7xl px-4 text-sm text-slate-500">
          © {new Date().getFullYear()} NarayanaCare Hospitals. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
