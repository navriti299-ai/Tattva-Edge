/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Landing from './pages/Landing';
import Auth from './pages/Auth';
import Dashboard from './pages/Dashboard';
import GigMarket from './pages/GigMarket';
import Notes from './pages/Notes';
import BuySell from './pages/BuySell';
import Events from './pages/Events';
import Community from './pages/Community';
import Profile from './pages/Profile';
import Premium from './pages/Premium';
import Referral from './pages/Referral';
import Admin from './pages/Admin';
import Layout from './components/Layout';
import { useAuthStore } from './store/authStore';

export default function App() {
  const { user } = useAuthStore();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<Auth />} />
        
        {/* Protected Routes */}
        <Route element={<Layout />}>
          <Route path="/dashboard" element={user ? <Dashboard /> : <Navigate to="/auth" />} />
          <Route path="/gigs" element={user ? <GigMarket /> : <Navigate to="/auth" />} />
          <Route path="/notes" element={user ? <Notes /> : <Navigate to="/auth" />} />
          <Route path="/marketplace" element={user ? <BuySell /> : <Navigate to="/auth" />} />
          <Route path="/events" element={user ? <Events /> : <Navigate to="/auth" />} />
          <Route path="/community" element={user ? <Community /> : <Navigate to="/auth" />} />
          <Route path="/profile" element={user ? <Profile /> : <Navigate to="/auth" />} />
          <Route path="/premium" element={user ? <Premium /> : <Navigate to="/auth" />} />
          <Route path="/referral" element={user ? <Referral /> : <Navigate to="/auth" />} />
          <Route path="/admin" element={user?.role === 'admin' ? <Admin /> : <Navigate to="/dashboard" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
