import React from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import LandingPage from "./pages/LandingPage.jsx";
import Events from "./pages/Events.jsx";
import Packages from "./pages/Packages.jsx";
import Support from "./pages/Support.jsx";
import Auth from "./pages/Auth.jsx";

import Profile from "./pages/user/Profile.jsx";

import VipPinkSeat from "./pages/seats/VipPinkSeat";
import Cat1SkySeat from "./pages/seats/Cat1SkySeat";
import FestivalSeat from "./pages/seats/FestivalSeat";

// ✅ user dashboard (sesuaikan path folder kamu)
import UserDashboard from "./pages/user/UserDashboard.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";

export default function App() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<LandingPage />} />

        <Route path="/events" element={<Events />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/support" element={<Support />} />
        <Route path="/auth" element={<Auth />} />

        <Route path="/profile" element={<Profile />} />

        {/* ✅ seat pages */}
        <Route path="/seats/vip-pink" element={<VipPinkSeat />} />
        <Route path="/seats/cat-1-sky" element={<Cat1SkySeat />} />
        <Route path="/seats/festival" element={<FestivalSeat />} />

        {/* ✅ user dashboard */}
        <Route path="/dashboard" element={<ProtectedRoute><UserDashboard /></ProtectedRoute>} />

        {/* keep this LAST */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AnimatePresence>
  );
}
