const express = require('express');
const app = express();
const port = 3000;

// import modul math
const math = require('./utils/math');

// import router profile
const profileRouter = require('./routes/profile');

// route utama
app.get('/', (req, res) => {
  res.send('Nama: M. Wahyu Hilal Abroor <br> NIM: F1D02310123');
});

// route hitung penjumlahan
app.get('/hitung', (req, res) => {
  const hasil = math.tambah(17, 43);
  res.send(`Hasil penjumlahan 17 + 43 = ${hasil}`);
});

// gunakan route profile
app.use('/profile', profileRouter);

// jalankan server
app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
