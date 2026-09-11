import { useEffect, useState } from "react";
import { User, Mail, Shield, Wallet } from "lucide-react";
import { getCurrentUser } from "../services/userApi";

interface UserData {
  id: string;
  name: string;
  email: string;
  role: string;
  createdAt: string;
  wallet?: {
    balance: string;
  };
}

function Profile() {
  const [user, setUser] = useState<UserData | null>(null);

  useEffect(() => {
    const loadUser = async () => {
      const result = await getCurrentUser();

      if (result.user) {
        setUser(result.user);
      }
    };

    loadUser();
  }, []);

  return (
    <div>
      <div className="mb-8">
        <p className="text-sm font-medium text-emerald-400">
          YOUR PROFILE
        </p>

        <h1 className="mt-2 text-3xl font-bold">
          Profile
        </h1>

        <p className="mt-2 text-slate-400">
          Manage your StockMate account and view your learning profile.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Profile Card */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-emerald-500/10">
            <User className="h-10 w-10 text-emerald-400" />
          </div>

          <h2 className="mt-5 text-2xl font-bold">
            {user?.name || "Loading..."}
          </h2>

          <p className="mt-1 text-slate-400">
            {user?.role || "Student"}
          </p>
        </div>

        {/* Account Information */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 lg:col-span-2">
          <h2 className="mb-6 text-xl font-semibold">
            Account Information
          </h2>

          <div className="space-y-5">
            <div className="flex items-center gap-4">
              <div className="rounded-lg bg-slate-800 p-3">
                <User className="h-5 w-5 text-emerald-400" />
              </div>

              <div>
                <p className="text-sm text-slate-500">
                  Full Name
                </p>
                <p className="font-medium">
                  {user?.name || "Loading..."}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="rounded-lg bg-slate-800 p-3">
                <Mail className="h-5 w-5 text-emerald-400" />
              </div>

              <div>
                <p className="text-sm text-slate-500">
                  Email
                </p>
                <p className="font-medium">
                  {user?.email || "Loading..."}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="rounded-lg bg-slate-800 p-3">
                <Shield className="h-5 w-5 text-emerald-400" />
              </div>

              <div>
                <p className="text-sm text-slate-500">
                  Account Role
                </p>
                <p className="font-medium">
                  {user?.role || "Loading..."}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="rounded-lg bg-slate-800 p-3">
                <Wallet className="h-5 w-5 text-emerald-400" />
              </div>

              <div>
                <p className="text-sm text-slate-500">
                  Virtual Balance
                </p>
                <p className="font-medium">
                  ₹
                  {Number(
                    user?.wallet?.balance || 0
                  ).toLocaleString("en-IN")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;