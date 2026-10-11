import React, { useState } from 'react';
import initialBooks from '../Utils/books';

export default function Book() {
  // Menggunakan Hooks useState untuk menyimpan data buku
  const [bookList, setBookList] = useState(initialBooks);

  // Fungsi untuk menambahkan buku baru ke dalam state
  const handleAddBook = () => {
    const newBook = {
      id: bookList.length + 1,
      title: `Buku Baru #${bookList.length + 1}`,
      author: "Penulis Baru",
      year: new Date().getFullYear(),
      description: "Ini adalah buku baru yang ditambahkan secara dinamis menggunakan React Hooks.",
      image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400"
    };

    // Memperbarui state dengan menambahkan buku baru
    setBookList([...bookList, newBook]);
  };

  return (
    <div className="container py-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2 className="fw-bold mb-0">Kelola Koleksi Buku</h2>
          <small className="text-muted">Total Buku: {bookList.length}</small>
        </div>
        
        {/* Tombol penambah data untuk nilai tambah Hooks */}
        <button onClick={handleAddBook} className="btn btn-primary fw-bold shadow-sm">
          + Tambah Buku Baru
        </button>
      </div>

      <div className="row g-4">
        {/* Render data menggunakan fungsi .map() */}
        {bookList.map((book) => (
          <div key={book.id} className="col-12 col-md-6 col-lg-4">
            <div className="card h-100 shadow-sm border-1 border-primary">
              <img 
                src={book.image} 
                className="card-img-top" 
                alt={book.title} 
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title fw-bold text-navy">{book.title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  Penulis: {book.author} ({book.year})
                </h6>
                <p className="card-text text-secondary flex-grow-1">{book.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}