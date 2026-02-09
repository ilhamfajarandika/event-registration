import { Routes, Route, Navigate, useLocation } from "react-router-dom";

// ✅ page transition
import { AnimatePresence } from "framer-motion";

// ✅ general pages
import LandingPage from "./pages/LandingPage.jsx";
import Events from "./pages/Events.jsx";
import Merch from "./pages/Merch.jsx";

// ✅ auth pages
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import ForgotPassword from "./pages/ForgotPassword";

// ✅ Seat pages
import VipPinkSeat from "./pages/seats/VipPinkSeat";
import Cat1SkySeat from "./pages/seats/Cat1SkySeat";
import FestivalSeat from "./pages/seats/FestivalSeat";

// ✅ user pages
import UserDashboard from "./pages/user/UserDashboard.jsx";
import UserEvent from "./pages/user/UserEvent.jsx";
import UserMerch from "./pages/user/UserMerch.jsx";
import Profile from "./pages/user/Profile.jsx";

// ✅ user seats pages
import VipUserSeat from "./pages/user/seats/VipUserSeat";
import AdvanceUserSeat from "./pages/user/seats/AdvanceUserSeat";
import RegulerUserSeat from "./pages/user/seats/RegulerUserSeat";

import AdminDashboard from "./pages/admin/AdminDashboard.jsx";

// ✅ Protected Route component
import ProtectedRoute from "./components/ProtectedRoute.jsx";

export default function App() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        //✅ general pages Route
        <Route path="/" element={<LandingPage />} />
        <Route path="/events" element={<Events />} />
        <Route path="/merch" element={<Merch />} />

        //✅ auth pages Route
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        //✅ Seat pages Route(General)
        <Route path="/seats/vip-pink" element={<VipPinkSeat />} />
        <Route path="/seats/cat-1-sky" element={<Cat1SkySeat />} />
        <Route path="/seats/festival" element={<FestivalSeat />} />

        //✅ user pages Route (PROTECTED)
        <Route path="/dashboard" element={<ProtectedRoute><UserDashboard /></ProtectedRoute>} />
        <Route path="/user-events" element={<ProtectedRoute><UserEvent /></ProtectedRoute>} />
        <Route path="/user-merch" element={<ProtectedRoute><UserMerch /></ProtectedRoute>} />
        <Route path="/profile" element={<Profile />} />        

        //✅ user seats pages Route (PROTECTED)
        <Route path="/user/seats/vip-pink" element={<ProtectedRoute><VipUserSeat /></ProtectedRoute>} />
        <Route path="/user/seats/cat-1-sky" element={<ProtectedRoute><AdvanceUserSeat /></ProtectedRoute>} />
        <Route path="/user/seats/festival" element={<ProtectedRoute><RegulerUserSeat /></ProtectedRoute>} />

        //✅ admin pages Route (PROTECTED)
        <Route path="/admin" element={<AdminDashboard />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AnimatePresence>
  );
}
