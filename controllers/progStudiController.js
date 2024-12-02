const db = require('../db');

// CREATE: Tambah program studi
exports.addProgStudi = (req, res) => {
    const { id_fakultas, nama_prog_studi } = req.body;
    const query = 'INSERT INTO prog_studi (id_fakultas, nama_prog_studi) VALUES (?, ?)';
    db.query(query, [id_fakultas, nama_prog_studi], (err) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(201).json({ message: 'Program studi berhasil ditambahkan.' });
    });
};

// READ: Ambil semua program studi
exports.getAllProgStudi = (req, res) => {
    const query = 'SELECT * FROM prog_studi';
    db.query(query, (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
};

// UPDATE: Edit program studi
exports.updateProgStudi = (req, res) => {
    const { id } = req.params;
    const { id_fakultas, nama_prog_studi } = req.body;
    const query = 'UPDATE prog_studi SET id_fakultas = ?, nama_prog_studi = ? WHERE id_prog_studi = ?';
    db.query(query, [id_fakultas, nama_prog_studi, id], (err) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: 'Program studi berhasil diperbarui.' });
    });
};

// DELETE: Hapus program studi
exports.deleteProgStudi = (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM prog_studi WHERE id_prog_studi = ?';
    db.query(query, [id], (err) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: 'Program studi berhasil dihapus.' });
    });
};
