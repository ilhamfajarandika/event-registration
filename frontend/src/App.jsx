import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "./pages/LandingPage.jsx";
import Events from "./pages/Events.jsx";
import Packages from "./pages/Packages.jsx";
import Support from "./pages/Support.jsx";
import Auth from "./pages/Auth.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/events" element={<Events />} />
      <Route path="/packages" element={<Packages />} />
      <Route path="/support" element={<Support />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

