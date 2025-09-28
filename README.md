# Assignment 3: Express.js & Modul Node.js

## Identitas
- **Nama:** M. Wahyu Hilal Abroor
- **NIM:** F1D02310123

---

## Deskripsi Tugas
Program ini adalah sebuah program sederhana berbasis Node.js dengan framework Express.js. Program ini menjalankan server lokal yang punya beberapa endpoint, mulai dari menampilkan identitas seperti nama dan nim, melakukan operasi matematika sederhana, dan menampilkan data profil menggunakan konsep route modular. Berikut tahap pengerjaanya:
### Langkah Pengerjaan
1. **Membuat folder project**  
   Folder project diberi nama: expressModule_F1D02310123
3. **Inisialisasi Node.js Project**
   Inisialisasinya dengan perintah 'npm init -y' di terminal
4. **Intall Express.js**
   Installnya dengan perintah 'npm intall express' di terminal
5. **Melengkapi Isi Struktur Folder**
   berikut tampilan folder yang lengkap:
<img width="371" height="284" alt="image" src="https://github.com/user-attachments/assets/7c73ce58-ab90-43e2-9a30-ded6916784a5" />
   
   keterangan dan screenshot code:
   
   a. index.js
   
      Berisi konfigurasi utama program.

   <img width="808" height="784" alt="image" src="https://github.com/user-attachments/assets/2689de8e-2116-4804-8d59-917c4a450ba3" />

   b. utils/math.js
   
      Modul lokal berisi fungsi tambah(a,b) dan kali(a,b).

   <img width="635" height="381" alt="image" src="https://github.com/user-attachments/assets/07640aa5-34c3-4fbd-88d1-399d2eba1d47" />
   
   c. routes/profile.js
   
      Berfungsi untuk mengatur endpoint terkait data profil, mulai dari menampilkan seluruh daftar profil hingga detail profil berdasarkan id.

   <img width="1049" height="771" alt="image" src="https://github.com/user-attachments/assets/4101c4d8-b8c1-4a7c-b4c8-77a8dc45b87f" />
   
   d. node_modules, package.json, dan package-lock.json
   
      Bagian yang otomatis ada dari project Node.js setelah proses instalasi. fungsinya untuk menyimpan library yang diinstall serta mencatat informasi dan versi dependensinya supaya project berjalan dengan benar.
## Hasil
1. **GET/**
   
   Akan menampilkan Nama dan NIM dan diakses dengan alamat: http://localhost:3000/
   
   <img width="579" height="321" alt="image" src="https://github.com/user-attachments/assets/9c02307b-d0b3-4e36-8997-66c4c454a166" />

   
2. **GET/hitung**
   
   Akan menampilkan hasil perhitungan sederhana dan diakses dengan alamat: http://localhost:3000/hitung
   
   <img width="564" height="286" alt="image" src="https://github.com/user-attachments/assets/0707d4da-c6c5-43e1-8865-54e722301f85" />
   
3. **GET/profile**
   
   Akan menampilkan JSON array profile dan diakses dengan alamat: http://localhost:3000/profile
   
   <img width="542" height="683" alt="image" src="https://github.com/user-attachments/assets/4ec93896-7886-4bf1-b8c5-842c62b32e3e" />
   
4. **GET/profile/1**
   
   Akan menampilkan data profile berdasarkan id yang di input dan diakses dengan alamat: http://localhost:3000/profile/1
   
   <img width="619" height="452" alt="image" src="https://github.com/user-attachments/assets/a9947463-89e2-4df7-b859-b15db91414bb" />
   

