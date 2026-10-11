import React, { useState } from 'react';
import books from '../Utils/books';

export default function Home() {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (book) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === book.id);
      if (existing) {
        return prev.map((item) =>
          item.id === book.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      // Memberikan harga default jika di books.js tidak ada properti price
      const bookPrice = book.price || 100000;
      return [...prev, { ...book, price: bookPrice, qty: 1 }];
    });
  };

  const totalAmount = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div>
      {/* Hero Banner Section */}
      <div className="bg-navy text-white py-5 mb-5">
        <div className="container py-3">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <span className="badge bg-warning text-dark mb-2 fw-bold">PROMO BUKU PILIHAN</span>
              <h1 className="fw-bold display-5 mb-3">Jelajahi Dunia Lewat Lembaran Buku Terbaik</h1>
              <p className="text-white-50 lead mb-0">
                Temukan koleksi buku populer, best seller, dan karya klasik berkualitas dengan penawaran harga terbaik.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Catalog Content */}
      <div className="container mb-5">
        <div className="row g-4">
          {/* Main Book Cards */}
          <div className="col-lg-8">
            <h4 className="fw-bold mb-4" style={{ color: '#0f172a' }}>Katalog Buku</h4>
            <div className="row g-4">
              {/* 2. Gunakan .map() dari data "books" yang diimpor */}
              {books.map((book) => (
                <div key={book.id} className="col-md-6">
                  <div className="card book-card-modern h-100 p-3">
                    <div className="d-flex gap-3">
                      <img
                        /* 3. Gunakan book.image sesuai struktur books.js */
                        src={book.image || book.cover}
                        alt={book.title}
                        className="rounded"
                        style={{ width: '100px', height: '140px', objectFit: 'cover' }}
                      />
                      <div className="d-flex flex-column justify-content-between flex-grow-1">
                        <div>
                          <div className="d-flex justify-content-between align-items-center mb-1">
                            <span className="book-badge">{book.category || 'Buku'}</span>
                            <small className="fw-bold text-dark">{book.rating || '⭐ 4.8'}</small>
                          </div>
                          <h6 className="fw-bold mb-1 text-dark">{book.title}</h6>
                          <p className="text-muted small mb-2">
                            {book.author} {book.year ? `(${book.year})` : ''}
                          </p>
                        </div>
                        <span className="fw-bold fs-6 text-primary">
                          Rp {(book.price || 100000).toLocaleString('id-ID')}
                        </span>
                      </div>
                    </div>

                    <p className="text-secondary small mt-3 mb-3">{book.description}</p>

                    <button
                      className="btn btn-navy w-100 btn-sm rounded-3 py-2 fw-semibold"
                      onClick={() => handleAddToCart(book)}
                    >
                      + Tambahkan ke Keranjang
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar Cart */}
          <div className="col-lg-4">
            <div className="card border-0 shadow-sm rounded-4 p-4 sticky-top" style={{ top: '90px' }}>
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h5 className="fw-bold mb-0">Ringkasan Belanja</h5>
                <span className="badge bg-primary rounded-pill">{cart.reduce((a, b) => a + b.qty, 0)} item</span>
              </div>
              <hr />

              {cart.length === 0 ? (
                <div className="text-center py-4 text-muted">
                  <p className="mb-0">Keranjang masih kosong.</p>
                  <small>Pilih buku favoritmu di samping.</small>
                </div>
              ) : (
                <div className="mb-3" style={{ maxHeight: '250px', overflowY: 'auto' }}>
                  {cart.map((item) => (
                    <div key={item.id} className="d-flex justify-content-between align-items-center mb-2 pb-2 border-bottom">
                      <div>
                        <div className="fw-bold small">{item.title}</div>
                        <small className="text-muted">{item.qty} x Rp {item.price.toLocaleString('id-ID')}</small>
                      </div>
                      <span className="fw-bold small">
                        Rp {(item.price * item.qty).toLocaleString('id-ID')}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              <hr />
              <div className="d-flex justify-content-between align-items-center mb-4">
                <span className="text-muted fw-medium">Total Tagihan</span>
                <span className="fs-5 fw-bold text-navy">
                  Rp {totalAmount.toLocaleString('id-ID')}
                </span>
              </div>

              <button
                className="btn btn-accent w-100 py-2.5 rounded-3 fw-bold"
                disabled={cart.length === 0}
                onClick={() => alert('Pesanan Anda berhasil dikirim!')}
              >
                Checkout Sekarang
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}