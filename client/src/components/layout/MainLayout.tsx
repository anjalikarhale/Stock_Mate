import {
  LayoutDashboard,
  BookOpen,
  TrendingUp,
  ArrowLeftRight,
  Briefcase,
  School,
  Trophy,
  User,
  Settings,
  LogOut,
} from "lucide-react";

import { NavLink, Outlet } from "react-router-dom";

const navigationItems = [
  { name: "Dashboard", icon: LayoutDashboard, path: "/" },
  { name: "Learn", icon: BookOpen, path: "/learn" },
  { name: "Markets", icon: TrendingUp, path: "/markets" },
  { name: "Trade", icon: ArrowLeftRight, path: "/trade" },
  { name: "Portfolio", icon: Briefcase, path: "/portfolio" },
  { name: "Classroom", icon: School, path: "/classroom" },
  { name: "Achievements", icon: Trophy, path: "/achievements" },
];

function MainLayout() {
  const handleLogout = () => {
    localStorage.removeItem("stockmate_token");
    localStorage.removeItem("stockmate_user");

    window.location.href = "/login";
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 h-screen w-64 border-r border-slate-800 bg-slate-950 p-5">

        {/* Logo */}
        <div className="mb-8 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500">
            <TrendingUp className="h-6 w-6 text-white" />
          </div>

          <div>
            <h1 className="text-xl font-bold">StockMate</h1>
            <p className="text-xs text-slate-400">
              Learn. Trade. Grow.
            </p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="space-y-2">
          {navigationItems.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left transition ${
                    isActive
                      ? "bg-emerald-500/10 text-emerald-400"
                      : "text-slate-400 hover:bg-slate-800 hover:text-white"
                  }`
                }
              >
                <Icon className="h-5 w-5" />
                <span>{item.name}</span>
              </NavLink>
            );
          })}
        </nav>

        {/* Bottom section */}
        <div className="absolute bottom-5 left-5 right-5 space-y-2">
          <button
            className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-slate-400 transition hover:bg-slate-800 hover:text-white"
          >
            <User className="h-5 w-5" />
            <span>Profile</span>
          </button>

          <button
            className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-slate-400 transition hover:bg-slate-800 hover:text-white"
          >
            <Settings className="h-5 w-5" />
            <span>Settings</span>
          </button>

          <button
            onClick={handleLogout}
            className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-red-400 transition hover:bg-red-500/10 hover:text-red-300"
          >
            <LogOut className="h-5 w-5" />
            <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="ml-64 min-h-screen p-8">
        <Outlet />
      </main>
    </div>
  );
}

export default MainLayout;