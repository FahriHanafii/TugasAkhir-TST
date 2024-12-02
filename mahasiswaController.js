const db = require('../db');

// CREATE: Tambah mahasiswa
exports.addMahasiswa = (req, res) => {
    const { nim, nama_lengkap, kota_lahir, tanggal_lahir, id_fakultas, id_prog_studi, gambar } = req.body;
    const query = `
        INSERT INTO mahasiswa_ub (nim, nama_lengkap, kota_lahir, tanggal_lahir, id_fakultas, id_prog_studi, gambar)
        VALUES (?, ?, ?, ?, ?, ?, ?)
    `;
    db.query(query, [nim, nama_lengkap, kota_lahir, tanggal_lahir, id_fakultas, id_prog_studi, gambar], (err) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(201).json({ message: 'Mahasiswa berhasil ditambahkan.' });
    });
};

// READ: Ambil semua mahasiswa
exports.getAllMahasiswa = (req, res) => {
    const query = 'SELECT * FROM mahasiswa_ub';
    db.query(query, (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
};

// UPDATE: Edit mahasiswa
exports.updateMahasiswa = (req, res) => {
    const { nim } = req.params;
    const { nama_lengkap, kota_lahir, tanggal_lahir, id_fakultas, id_prog_studi, gambar } = req.body;
    const query = `
        UPDATE mahasiswa_ub
        SET nama_lengkap = ?, kota_lahir = ?, tanggal_lahir = ?, id_fakultas = ?, id_prog_studi = ?, gambar = ?
        WHERE nim = ?
    `;
    db.query(query, [nama_lengkap, kota_lahir, tanggal_lahir, id_fakultas, id_prog_studi, gambar, nim], (err) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: 'Mahasiswa berhasil diperbarui.' });
    });
};

// DELETE: Hapus mahasiswa
exports.deleteMahasiswa = (req, res) => {
    const { nim } = req.params;
    const query = 'DELETE FROM mahasiswa_ub WHERE nim = ?';
    db.query(query, [nim], (err) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: 'Mahasiswa berhasil dihapus.' });
    });
};
