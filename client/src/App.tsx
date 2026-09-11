import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./components/layout/MainLayout";
import Dashboard from "./pages/Dashboard";
import PlaceholderPage from "./pages/PlaceholderPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProtectedRoute from "./components/common/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Authentication routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Protected application routes */}
        <Route element={<ProtectedRoute />}>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Dashboard />} />

            <Route
              path="/learn"
              element={
                <PlaceholderPage
                  title="Learn"
                  description="Master the stock market from basics to advanced concepts."
                />
              }
            />

            <Route
              path="/markets"
              element={
                <PlaceholderPage
                  title="Markets"
                  description="Explore live market prices, stocks and charts."
                />
              }
            />

            <Route
              path="/trade"
              element={
                <PlaceholderPage
                  title="Trade"
                  description="Practice buying and selling stocks with virtual money."
                />
              }
            />

            <Route
              path="/portfolio"
              element={
                <PlaceholderPage
                  title="Portfolio"
                  description="Track your holdings, investments and P&L."
                />
              }
            />

            <Route
              path="/classroom"
              element={
                <PlaceholderPage
                  title="Classroom"
                  description="Learn, compete and practice with your classmates."
                />
              }
            />

            <Route
              path="/achievements"
              element={
                <PlaceholderPage
                  title="Achievements"
                  description="Track your XP, badges, levels and milestones."
                />
              }
            />

            <Route
              path="/profile"
              element={
                <PlaceholderPage
                  title="Profile"
                  description="Manage your StockMate profile."
                />
              }
            />

            <Route
              path="/settings"
              element={
                <PlaceholderPage
                  title="Settings"
                  description="Customize your StockMate experience."
                />
              }
            />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;