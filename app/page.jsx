'use client'

import React, { useState } from 'react'
import React, { useState } from 'react'

export default function Page() {
  const [materi, setMateri] = useState('')
  const [tujuan, setTujuan] = useState('')
  const [guru, setGuru] = useState('')
  const [hasil, setHasil] = useState('')

  const generateRPM = () => {
    const output = `RENCANA PELAKSANAAN PEMBELAJARAN MENDALAM (RPM)\n\nSatuan Pendidikan: SMP Negeri 1 Labuhan Haji\nMata Pelajaran: Bahasa Indonesia\nMateri: ${materi}\n\nTujuan Pembelajaran:\n${tujuan}\n\nGuru: ${guru}\n\nAsesmen:\n- Diagnostik\n- Formatif\n- Sumatif`
    setHasil(output)
  }

  return (
    <main style={{ padding: 20, maxWidth: 900, margin: '0 auto', fontFamily: 'Arial' }}>
      <h1>Modul Ajar Generator AI</h1>

      <div style={{ display: 'grid', gap: 12 }}>
        <input
          placeholder="Materi"
          value={materi}
          onChange={(e) => setMateri(e.target.value)}
          style={{ padding: 10 }}
        />

        <textarea
          placeholder="Tujuan Pembelajaran"
          value={tujuan}
          onChange={(e) => setTujuan(e.target.value)}
          rows={4}
          style={{ padding: 10 }}
        />

        <input
          placeholder="Nama Guru"
          value={guru}
          onChange={(e) => setGuru(e.target.value)}
          style={{ padding: 10 }}
        />

        <button onClick={generateRPM} style={{ padding: 12 }}>
          Generate RPM
        </button>
      </div>

      <textarea
        value={hasil}
        readOnly
        rows={18}
        style={{ width: '100%', marginTop: 20, padding: 12 }}
      />
    </main>
  )
}
