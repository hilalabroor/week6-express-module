const express = require('express');
const router = express.Router();

const profiles = [
  { id: 1, nim: 'F1D02310123', nama: 'M. Wahyu Hilal Abroor', jurusan: 'Teknik Informatika' },
  { id: 2, nim: 'F1D02310114', nama: 'Izzat Naziefa', jurusan: 'Kedokteran' },
  { id: 3, nim: 'F1D02310098', nama: 'Yusri Abdi', jurusan: 'Teknik Nuklir' }
];

// route GET /profile
router.get('/', (req, res) => {
  res.json(profiles);
});

// route GET /profile/:id
router.get('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const profile = profiles.find(p => p.id == id);

  if (profile) {
    res.json(profile);
  } else {
    res.status(404).send({ message: "Profile tidak ditemukan" });
  }
});

module.exports = router;
