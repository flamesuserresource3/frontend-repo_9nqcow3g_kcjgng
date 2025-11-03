import Header from './components/Header';
import StatsOverview from './components/StatsOverview';
import PatientTable from './components/PatientTable';
import AppointmentForm from './components/AppointmentForm';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
        <StatsOverview />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <PatientTable />
          </div>
          <div className="lg:col-span-1">
            <AppointmentForm />
          </div>
        </div>
      </main>

      <footer className="py-8 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Hospital Manager. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
