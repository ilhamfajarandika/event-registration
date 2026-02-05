import React from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import LandingPage from "./pages/LandingPage.jsx";
import Events from "./pages/Events.jsx";
import Packages from "./pages/Packages.jsx";
import Support from "./pages/Support.jsx";
import Auth from "./pages/Auth.jsx";
import VipPinkSeat from "./pages/seats/VipPinkSeat";
import Cat1SkySeat from "./pages/seats/Cat1SkySeat";
import FestivalSeat from "./pages/seats/FestivalSeat";

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
        <Route path="*" element={<Navigate to="/" replace />} />
        <Route path="/seats/vip-pink" element={<VipPinkSeat />} />
        <Route path="/seats/cat-1-sky" element={<Cat1SkySeat />} />
        <Route path="/seats/festival" element={<FestivalSeat />} />
      </Routes>
    </AnimatePresence>
  );
}

