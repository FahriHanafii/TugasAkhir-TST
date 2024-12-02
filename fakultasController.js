const db = require('../db');

// CREATE: Tambah fakultas
exports.addFakultas = (req, res) => {
    const { nama_fakultas } = req.body;
    const query = 'INSERT INTO fakultas (nama_fakultas) VALUES (?)';
    db.query(query, [nama_fakultas], (err) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(201).json({ message: 'Fakultas berhasil ditambahkan.' });
    });
};

// READ: Ambil semua fakultas
exports.getAllFakultas = (req, res) => {
    const query = 'SELECT * FROM fakultas';
    db.query(query, (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
};

// UPDATE: Edit fakultas
exports.updateFakultas = (req, res) => {
    const { id } = req.params;
    const { nama_fakultas } = req.body;
    const query = 'UPDATE fakultas SET nama_fakultas = ? WHERE id_fakultas = ?';
    db.query(query, [nama_fakultas, id], (err) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: 'Fakultas berhasil diperbarui.' });
    });
};

// DELETE: Hapus fakultas
exports.deleteFakultas = (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM fakultas WHERE id_fakultas = ?';
    db.query(query, [id], (err) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: 'Fakultas berhasil dihapus.' });
    });
};
