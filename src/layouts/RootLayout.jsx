import React from 'react';
import { Outlet } from 'react-router-dom';

import Navbar from '../components/organisms/Navbar';
import Footer from '../components/organisms/Footer';

export default function RootLayout() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <main className="flex-grow-1">
        {/* Outlet adalah tempat halaman (Home, Team, Contact) akan dimuat */}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}