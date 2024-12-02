const express = require('express');
const db = require('./db');

const mahasiswaRoutes = require('./routes/mahasiswaRoutes');
const fakultasRoutes = require('./routes/fakultasRoutes');
const progStudiRoutes = require('./routes/progStudiRoutes');

const app = express();
const PORT = 3000;

app.use(express.json());

app.use('/mahasiswa', mahasiswaRoutes);
app.use('/fakultas', fakultasRoutes);
app.use('/prog-studi', progStudiRoutes);

app.get('/', (req, res) => {
    res.send('API Backend Berjalan! Gunakan endpoint seperti /fakultas atau /mahasiswa.');
});

// Ubah listen agar mendengarkan pada semua interface (0.0.0.0)
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});