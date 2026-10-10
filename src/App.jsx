import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/organisms/Navbar';
import Footer from './components/organisms/Footer';

import Home from './pages/Home';
import Team from './pages/Team';
import Contact from './pages/Contact';

export default function App() {
  useEffect(() => {
    document.title = 'BukuKu - Toko Buku Online';
  }, []);

  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <Navbar />
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/team" element={<Team />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}