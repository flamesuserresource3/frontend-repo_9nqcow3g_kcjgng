import { Search, Bell, User } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-20 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-lg bg-blue-600 grid place-items-center text-white font-semibold">H</div>
            <h1 className="text-lg sm:text-xl font-semibold tracking-tight">Hospital Manager</h1>
          </div>

          <div className="hidden md:flex items-center gap-2 w-full max-w-md">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search patients, doctors, departments..."
                className="w-full pl-9 pr-3 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
              />
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-600 hover:bg-gray-100">
              <Bell className="h-5 w-5" />
              <span className="sr-only">Notifications</span>
              <span className="absolute -top-0.5 -right-0.5 inline-flex h-2.5 w-2.5 rounded-full bg-red-500"></span>
            </button>
            <div className="flex items-center gap-2 rounded-full border px-3 py-1.5">
              <User className="h-4 w-4 text-gray-600" />
              <span className="text-sm font-medium hidden sm:inline">Admin</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
