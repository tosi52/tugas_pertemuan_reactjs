import React from 'react';

import fotoIbnu from '../assets/ibnu.jpeg';
import fotoDimas from '../assets/dimas.jpeg';
import fotoZufar from '../assets/zufar.jpeg';

export default function Team() {
  const members = [
    {
      name: 'Ahmad ibnu Batutah',
      role: 'Founder & Chief Executive Officer',
      bio: 'Memimpin visi strategis BookStoreHub untuk memberikan akses literasi digital yang mudah bagi masyarakat.',
      img: fotoIbnu, 
    },
    {
      name: 'Dimas Alip',
      role: 'Head of Content & Editorial',
      bio: 'Mengelola kurasi penulis, ulasan buku, serta menjalin kerja sama dengan penerbit ternama.',
      img: fotoDimas, 
    },
    {
      name: 'Zufar Rasyad',
      role: 'Lead Fullstack Engineer',
      bio: 'Mengembangkan infrastruktur aplikasi web React JS agar selalu cepat, aman, dan responsif.',
      img: fotoZufar, 
    },
  ];

  return (
    <div className="container py-5">
      <div className="text-center mb-5" style={{ maxWidth: '600px', margin: '0 auto' }}>
        <span className="badge bg-light text-primary border mb-2 px-3 py-2 fw-semibold">OUR TEAM</span>
        <h2 className="fw-bold text-navy">Tim di Balik BookStoreHub</h2>
        <p className="text-muted">
          Kami adalah tim profesional yang berdedikasi menciptakan platform membaca yang lebih baik.
        </p>
      </div>

      <div className="row g-4">
        {members.map((member, idx) => (
          <div key={idx} className="col-md-4">
            <div className="card border-0 shadow-sm rounded-4 text-center p-4 h-100 bg-white">
              <img
                src={member.img}
                alt={member.name}
                className="rounded-circle mx-auto mb-3 shadow-sm"
                style={{ width: '110px', height: '110px', objectFit: 'cover' }}
              />
              <h5 className="fw-bold mb-1 text-dark">{member.name}</h5>
              <p className="text-primary small fw-semibold mb-3">{member.role}</p>
              <p className="text-secondary small mb-0">{member.bio}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}