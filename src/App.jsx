import React, { useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import RootLayout from './layouts/RootLayout';
import Home from './pages/Home';
import Book from './pages/Book';
import Team from './pages/Team';
import Contact from './pages/Contact';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'book',
        element: <Book />,
      },
      {
        path: 'team',
        element: <Team />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
    ],
  },
]);

export default function App() {
  useEffect(() => {
    document.title = 'BookStoreHub - Toko Buku Online';
  }, []);

  return <RouterProvider router={router} />;
}