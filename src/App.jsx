import React, { useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Import Layout dan Pages
import RootLayout from './layouts/RootLayout';
import Home from './pages/Home';
import Team from './pages/Team';
import Contact from './pages/Contact';

// Definisi Declarative Routing
const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />, // Navbar, Footer, dan struktur layout ada di sini
    children: [
      {
        index: true, // Rute default ("/")
        element: <Home />,
      },
      {
        path: 'team', // Rute ("/team")
        element: <Team />,
      },
      {
        path: 'contact', // Rute ("/contact")
        element: <Contact />,
      },
    ],
  },
]);

export default function App() {
  useEffect(() => {
    document.title = 'BukuKu - Toko Buku Online';
  }, []);

  return (
    <RouterProvider router={router} />
  );
}