---
sidebar_label: Tugas 9
---

import Countdown from "@site/src/components/Countdown"

# Tugas 9: Integrasi Web Service pada Flutter

Pemrograman Berbasis Platform (CSGE602022) - diselenggarakan oleh Fakultas Ilmu Komputer, Universitas Indonesia, Semester Ganjil 2022/2023

---

## Deskripsi Tugas

Pada tugas ini, kamu akan mengintegrasikan *mywatchlist* yang sudah kamu buat pada tugas 3 sebelumnya ke Flutter. Pengerjaan tugas ini akan menggunakan app yang sama dengan tugas Flutter sebelumnya.

*Checklist* untuk tugas ini adalah sebagai berikut.

- [ ] Menambahkan tombol navigasi pada drawer/hamburger untuk ke halaman *mywatchlist*.

- [ ] Membuat satu file dart yang berisi model *mywatchlist*.

- [ ] Menambahkan halaman *mywatchlist* yang berisi semua *watch list* yang ada pada endpoint JSON di Django yang telah kamu *deploy* ke Heroku sebelumnya ([Tugas 3](https://pbp-fasilkom-ui.github.io/ganjil-2023/assignments/tugas/tugas-3/)). Pada bagian ini, kamu cukup menampilkan judul dari setiap *mywatchlist* yang ada.
  - [ ] Membuat navigasi dari setiap judul *watch list* ke halaman detail

    ![Mywatchlist](https://i.ibb.co/dbnTnQz/mywatchlist.png)

- [ ] Menambahkan halaman detail untuk setiap *mywatchlist* yang ada pada daftar tersebut. Halaman ini menampilkan judul, release date, rating, *review*, dan status (sudah ditonton/belum).

- [ ] Menambahkan tombol untuk kembali ke daftar *mywatchlist*

    ![Detail](https://i.ibb.co/rdCFcYy/detail.png)

- [ ] Menjawab beberapa pertanyaan berikut pada `README.md` pada *root folder* (silakan modifikasi `README.md` yang telah kamu buat sebelumnya; tambahkan subjudul untuk setiap tugas).
  - [ ] Apakah bisa kita melakukan pengambilan data JSON tanpa membuat model terlebih dahulu? Jika iya, apakah hal tersebut lebih baik daripada membuat model sebelum melakukan pengambilan data JSON?
  - [ ] Sebutkan widget apa saja yang kamu pakai di proyek kali ini dan jelaskan fungsinya.
  - [ ] Jelaskan mekanisme pengambilan data dari json hingga dapat ditampilkan pada Flutter.
  - [ ] Jelaskan bagaimana cara kamu mengimplementasikan *checklist* di atas.
- [ ] Melakukan `add`-`commit`-`push` ke GitHub.

## Tenggat Waktu Pengerjaan

Tenggat waktu pengerjaan Tugas 9: <Countdown deadline={new Date("24 November 2022 12:00 GMT+7")} />

Asisten dosen akan mengecek *last commit* dari repositori tugas lab, sehingga kamu tidak perlu mengumpulkan tautan repositori ke dalam slot submisi.

## Bonus

Kamu akan mendapatkan nilai bonus pada penilaian tugas ini apabila kamu membuat fitur berikut.

- [ ] Menambahkan *checkbox* pada setiap *watchlist* pada halaman *mywatchlist*. Dimana *checkbox* akan tercentang jika status ditonton bernilai `true` dan tidak jika bernilai `false`.
  - [ ] Jika *checkbox* ditekan, maka status ditonton akan berubah (perubahan akan terjadi di lokal secara sementara saja, status pada endpoint tidak perlu diubah)
- [ ] Menambahkan warna untuk *outline* pada setiap *mywatchlist* pada halaman *mywatchlist* berdasarkan status ditonton (Dua warna yang dipilih bebas).
- [ ] *Refactor* function fetch data dari web service ke sebuah file terpisah.
