import React, { useState } from 'react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="container py-5">
      <div className="row g-5 align-items-center">
        <div className="col-lg-5">
          <span className="badge bg-light text-primary border mb-2 px-3 py-2 fw-semibold">HUBUNGI KAMI</span>
          <h2 className="fw-bold text-navy mb-3">Ada Pertanyaan? Kami Siap Membantu</h2>
          <p className="text-muted mb-4">
            Silakan kirimkan masukan, kendala pemesanan, atau pertanyaan seputar kerja sama penulis di sini.
          </p>

          <div className="d-flex align-items-center gap-3 mb-3">
            <div className="bg-light p-3 rounded-circle text-primary fw-bold">📍</div>
            <div>
              <h6 className="fw-bold mb-0">Lokasi Kantor</h6>
              <small className="text-muted">Jl. Kemayoran Jati Baru no .15</small>
            </div>
          </div>

          <div className="d-flex align-items-center gap-3">
            <div className="bg-light p-3 rounded-circle text-primary fw-bold">✉️</div>
            <div>
              <h6 className="fw-bold mb-0">Email Layanan</h6>
              <small className="text-muted">support@bookstorehub.com</small>
            </div>
          </div>
        </div>

        <div className="col-lg-7">
          <div className="card border-0 shadow-sm rounded-4 p-4 p-md-5 bg-white">
            {submitted ? (
              <div className="alert alert-success text-center my-4 py-4 rounded-3">
                <h5>Pesan Berhasil Terkirim!</h5>
                <p className="mb-0 small">Tim kami akan membalas ke email Anda dalam 1x24 jam.</p>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
                <h4 className="fw-bold mb-4 text-navy">Kirim Pesan</h4>
                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label small fw-semibold">Nama Depan</label>
                    <input type="text" className="form-control" placeholder="zufar" required />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label small fw-semibold">Nama Belakang</label>
                    <input type="text" className="form-control" placeholder="Doe" required />
                  </div>
                  <div className="col-12">
                    <label className="form-label small fw-semibold">Email</label>
                    <input type="email" className="form-control" placeholder="zufar@example.com" required />
                  </div>
                  <div className="col-12">
                    <label className="form-label small fw-semibold">Pesan Anda</label>
                    <textarea className="form-control" rows="4" placeholder="Tuliskan pertanyaan Anda..." required></textarea>
                  </div>
                  <div className="col-12 mt-4">
                    <button type="submit" className="btn btn-navy w-100 py-2.5 rounded-3 fw-bold">
                      Kirimkan Sekarang
                    </button>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}