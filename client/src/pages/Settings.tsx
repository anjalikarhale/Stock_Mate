import { Settings as SettingsIcon, Bell, Moon, Shield } from "lucide-react";

function Settings() {
  return (
    <div>
      <div className="mb-8">
        <p className="text-sm font-medium text-emerald-400">
          PREFERENCES
        </p>

        <h1 className="mt-2 text-3xl font-bold">
          Settings
        </h1>

        <p className="mt-2 text-slate-400">
          Customize your StockMate experience.
        </p>
      </div>

      <div className="max-w-3xl space-y-6">

        {/* General */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <div className="mb-6 flex items-center gap-3">
            <SettingsIcon className="h-5 w-5 text-emerald-400" />
            <h2 className="text-xl font-semibold">
              General
            </h2>
          </div>

          <div className="flex items-center justify-between border-b border-slate-800 pb-5">
            <div>
              <p className="font-medium">Theme</p>
              <p className="mt-1 text-sm text-slate-500">
                Choose how StockMate looks.
              </p>
            </div>

            <select className="rounded-lg border border-slate-700 bg-slate-800 px-3 py-2 text-sm text-white outline-none">
              <option>Dark</option>
              <option>Light</option>
            </select>
          </div>

          <div className="mt-5 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Moon className="h-5 w-5 text-slate-400" />

              <div>
                <p className="font-medium">Dark Mode</p>
                <p className="mt-1 text-sm text-slate-500">
                  Use the dark StockMate interface.
                </p>
              </div>
            </div>

            <input
              type="checkbox"
              defaultChecked
              className="h-5 w-5 accent-emerald-500"
            />
          </div>
        </div>

        {/* Notifications */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <div className="mb-6 flex items-center gap-3">
            <Bell className="h-5 w-5 text-emerald-400" />
            <h2 className="text-xl font-semibold">
              Notifications
            </h2>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">
                Learning reminders
              </p>
              <p className="mt-1 text-sm text-slate-500">
                Get reminders to maintain your learning streak.
              </p>
            </div>

            <input
              type="checkbox"
              defaultChecked
              className="h-5 w-5 accent-emerald-500"
            />
          </div>
        </div>

        {/* Security */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <div className="mb-6 flex items-center gap-3">
            <Shield className="h-5 w-5 text-emerald-400" />
            <h2 className="text-xl font-semibold">
              Security
            </h2>
          </div>

          <div>
            <p className="font-medium">
              Account security
            </p>

            <p className="mt-1 text-sm text-slate-500">
              Your StockMate account is protected with authentication.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Settings;