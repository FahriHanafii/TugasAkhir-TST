const express = require('express');
const {
    addMahasiswa,
    getAllMahasiswa,
    updateMahasiswa,
    deleteMahasiswa
} = require('../controllers/mahasiswaController');

const router = express.Router();

router.post('/', addMahasiswa); // Tambah mahasiswa
router.get('/', getAllMahasiswa); // Ambil semua mahasiswa
router.put('/:nim', updateMahasiswa); // Edit mahasiswa berdasarkan NIM
router.delete('/:nim', deleteMahasiswa); // Hapus mahasiswa berdasarkan NIM

module.exports = router;
