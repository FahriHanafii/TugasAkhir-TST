const express = require('express');
const {
    addFakultas,
    getAllFakultas,
    updateFakultas,
    deleteFakultas
} = require('../controllers/fakultasController');

const router = express.Router();

router.post('/', addFakultas); // Tambah fakultas
router.get('/', getAllFakultas); // Ambil semua fakultas
router.put('/:id', updateFakultas); // Edit fakultas berdasarkan ID
router.delete('/:id', deleteFakultas); // Hapus fakultas berdasarkan ID

module.exports = router;
