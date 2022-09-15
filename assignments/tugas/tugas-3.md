---
sidebar_label: Tugas 3
---

# Tugas 3: Pengimplementasian Data Delivery Menggunakan Django

Pemrograman Berbasis Platform (CSGE602022) - diselenggarakan oleh Fakultas Ilmu Komputer Universitas Indonesia, Semester Ganjil 2022/2023

---

## Deskripsi Tugas

Pada tugas ini, kamu akan mengimplementasikan konsep _data delivery_ serta beberapa hal yang sudah kamu pelajari selama tutorial lab.

_Checklist_ untuk tugas ini adalah sebagai berikut:

- [ ] Membuat suatu aplikasi baru bernama `mywatchlist` di proyek Django Tugas 2 pekan lalu
- [ ] Menambahkan _path_ `mywatchlist` sehingga pengguna dapat mengakses http://localhost:8000/mywatchlist
- [ ] Membuat sebuah model `MyWatchList` yang memiliki atribut sebagai berikut:
    - [ ] `watched` untuk mendeskripsikan film tersebut sudah ditonton atau belum
    - [ ] `title` untuk mendeskripsikan judul film
    - [ ] `rating` untuk mendeskripsikan rating film dalam rentang 1 sampai dengan 5
    - [ ] `release_date` untuk mendeskripsikan kapan film dirilis
    - [ ] `review` untuk mendeskripsikan _review_ untuk film tersebut
- [ ] Menambahkan minimal 10 data untuk objek `MyWatchList` yang sudah dibuat di atas
- [ ] Mengimplementasikan sebuah fitur untuk menyajikan data di poin 4 dalam tiga format:
    - [ ] HTML
    - [ ] XML
    - [ ] JSON 
- [ ] Membuat _routing_ sehingga data di atas dapat diakses melalui URL:
    - [ ] http://localhost:8000/mywatchlist/html untuk mengakses `mywatchlist` dalam format HTML
    - [ ] http://localhost:8000/mywatchlist/xml untuk mengakses `mywatchlist` dalam format XML
    - [ ] http://localhost:8000/mywatchlist/json untuk mengakses `mywatchlist` dalam format JSON
- [ ] Melakukan _deployment_ ke Heroku terhadap aplikasi yang sudah kamu buat sehingga nantinya dapat diakses oleh teman-temanmu melalui Internet.
- [ ] Membuat sebuah `README.md` yang berisi tautan menuju aplikasi Heroku yang sudah kamu _deploy_ serta jawaban dari beberapa pertanyaan berikut:
    - [ ] Jelaskan perbedaan antara JSON, XML, dan HTML!
    - [ ] Jelaskan mengapa kita memerlukan _data delivery_ dalam pengimplementasian sebuah platform?
    - [ ] Jelaskan bagaimana cara kamu mengimplementasikan poin 1 sampai dengan 3 di atas.
- [ ] Mengakses tiga URL di poin 6 menggunakan Postman, menangkap _screenshot_, dan menambahkannya ke dalam `README.md`
- [ ] Menambahkan _unit test_ pada `tests.py` untuk menguji bahwa tiga URL di poin 6 dapat mengembalikan respon `HTTP 200 OK`

Perhatikan bahwa kamu harus mengerjakan tugas ini menggunakan repositori berbeda dengan tutorial, namun kamu dapat **menggunakan proyek Django tugas 2 pekan lalu untuk menyelesaikan tugas ini**. 

## Tenggat Waktu Pengerjaan

Tugas ini memiliki tenggat waktu pengumpulan pada tanggal 22 September 2022 pada pukul 12.00. Asisten dosen akan mengecek _last commit_ dari repositori tugas lab, sehingga kamu tidak perlu mengumpulkan tautan repositori ke dalam slot submisi.

## Bonus

Kamu akan mendapatkan nilai bonus pada penilaian tugas ini apabila kamu membuat fitur yang menampilkan pesan dengan aturan sebagai berikut:

- [ ] Jika jumlah film yang sudah ditonton lebih banyak atau sama dengan jumlah film yang belum ditonton, tampilkan pesan "Selamat, kamu sudah banyak menonton!" dalam bentuk HTML
- [ ] Jika jumlah film yang belum ditonton lebih banyak dari jumlah film yang sudah ditonton, tampilkan pesan "Wah, kamu masih sedikit menonton!" dalam bentuk HTML
