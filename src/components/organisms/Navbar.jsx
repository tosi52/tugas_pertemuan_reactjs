import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();

  const isActive = (path) =>
    location.pathname === path ? 'text-gold fw-bold' : 'text-white-50';

  return (
    <nav className="navbar navbar-expand-lg bg-navy navbar-dark py-3 shadow-sm sticky-top">
      <div className="container">
        {/* Brand / Logo di Kiri */}
        <Link className="navbar-brand d-flex align-items-center fw-bold fs-4 text-white" to="/">
          <span className="badge bg-primary me-2 px-2 py-1 fs-5">📚</span> 
          <span>BookStore<span className="text-gold">Hub</span></span>
        </Link>

        {/* Menu Navigasi di Tengah (mx-auto) */}
        <div className="navbar-nav mx-auto flex-row gap-4 align-items-center">
          <Link className={`nav-link ${isActive('/')}`} to="/">Katalog Buku</Link>
          <Link className={`nav-link ${isActive('/team')}`} to="/team">Tim Kami</Link>
          <Link className={`nav-link ${isActive('/contact')}`} to="/contact">Hubungi Kami</Link>
        </div>
      </div>
    </nav>
  );
}