---
sidebar_label: Tugas 2
---

# Tugas 2: Pengenalan Aplikasi Django dan Models View Template (MVT) pada Django

Pemrograman Berbasis Platform (CSGE602022) - diselenggarakan oleh Fakultas Ilmu Komputer Universitas Indonesia, Semester Ganjil 2022/2023

---

## Deskripsi Tugas

Pada tugas ini, kamu akan mengimplementasikan konsep Model-View-Template serta beberapa hal yang sudah kamu pelajari selama tutorial lab. Kamu dapat menyelesaikan tugas ini dengan memanfaatkan [_source code_ tugas lab berikut](https://github.com/pbp-fasilkom-ui/assignment-repository). Adapun pada tugas lab 1 ini kamu diminta untuk:

1. Membuat sebuah fungsi pada `views.py` yang dapat melakukan pengambilan data dari model dan dikembalikan ke dalam sebuah HTML.
2. Membuat sebuah routing untuk memetakan fungsi yang telah kamu buat pada `views.py`.
3. Memetakan data yang didapatkan ke dalam HTML dengan sintaks dari Django untuk pemetaan data template.
4. Melakukan `deployment` ke Heroku terhadap aplikasi yang sudah kamu buat sehingga nantinya dapat diakses oleh teman-temanmu melalui Internet.
5. Membuat sebuah `README.md` yang berisi link menuju aplikasi Heroku yang sudah kamu _deploy_ serta jawaban dari beberapa pertanyaan berikut: 
    - Buatlah bagan yang berisi _request client_ ke web aplikasi berbasis Django beserta responnya dan jelaskan pada bagan tersebut kaitan antara `urls.py`, `views.py`, `models.py`, dan berkas `html`; 
    - Jelaskan kenapa menggunakan _virtual environment_? Apakah kita tetap dapat membuat aplikasi web berbasis Django tanpa menggunakan _virtual environment_? 
    - Jelaskan bagaimana cara kamu mengimplementasikan poin 1 sampai dengan 4 di atas.

Perhatikan bahwa kamu harus mengerjakan tugas ini menggunakan **repositori berbeda** dengan tutorial.

## Deadline Pengerjaan

Tugas ini memiliki tenggat waktu pengumpulan pada tanggal 15 September 2022 pada pukul 12.00. Harap mengumpulkan link repositori yang kamu gunakan ke dalam slot submisi yang telah disediakan di SCELE.

## Bonus

Kamu akan mendapatkan nilai bonus pada penilaian tugas ini apabila kamu berhasil mengimplementasikan dan mendemonstrasikan _testing_ dasar (contoh: _unit testing_, _functional testing_, dan lain-lain). Silakan cari di Google untuk melihat cara membuat _testing_ di Django.