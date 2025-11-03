import { Phone, Mail } from 'lucide-react';

const patients = [
  { id: 'P-1024', name: 'Ava Thompson', age: 32, condition: 'Flu', phone: '+1 202 555 0134', email: 'ava.t@example.com' },
  { id: 'P-1031', name: 'Liam Johnson', age: 57, condition: 'Hypertension', phone: '+1 202 555 0178', email: 'liam.j@example.com' },
  { id: 'P-1042', name: 'Sophia Williams', age: 41, condition: 'Diabetes', phone: '+1 202 555 0190', email: 'sophia.w@example.com' },
  { id: 'P-1056', name: 'Noah Brown', age: 26, condition: 'Allergy', phone: '+1 202 555 0109', email: 'noah.b@example.com' },
];

export default function PatientTable() {
  return (
    <section className="rounded-xl border bg-white overflow-hidden">
      <div className="px-4 sm:px-5 py-4 border-b flex items-center justify-between">
        <h3 className="text-base font-semibold">Recent Patients</h3>
        <span className="text-sm text-gray-500">Last 24 hours</span>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-50 text-gray-600">
            <tr>
              <th className="text-left py-3.5 px-4 sm:px-5 font-medium">ID</th>
              <th className="text-left py-3.5 px-4 sm:px-5 font-medium">Name</th>
              <th className="text-left py-3.5 px-4 sm:px-5 font-medium">Age</th>
              <th className="text-left py-3.5 px-4 sm:px-5 font-medium">Condition</th>
              <th className="text-left py-3.5 px-4 sm:px-5 font-medium">Contact</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {patients.map((p) => (
              <tr key={p.id} className="hover:bg-gray-50">
                <td className="py-3.5 px-4 sm:px-5 font-medium text-gray-900">{p.id}</td>
                <td className="py-3.5 px-4 sm:px-5">{p.name}</td>
                <td className="py-3.5 px-4 sm:px-5">{p.age}</td>
                <td className="py-3.5 px-4 sm:px-5">
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-blue-50 text-blue-700">
                    {p.condition}
                  </span>
                </td>
                <td className="py-3.5 px-4 sm:px-5">
                  <div className="flex items-center gap-3 text-gray-600">
                    <a href={`tel:${p.phone}`} className="inline-flex items-center gap-1 hover:text-blue-600">
                      <Phone className="h-4 w-4" />
                      <span className="hidden sm:inline">{p.phone}</span>
                    </a>
                    <a href={`mailto:${p.email}`} className="inline-flex items-center gap-1 hover:text-blue-600">
                      <Mail className="h-4 w-4" />
                      <span className="hidden sm:inline">{p.email}</span>
                    </a>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
