---
sidebar_label: Tugas 4
---

import Countdown from "@site/src/components/Countdown"

# Tugas 4: Pengimplementasian Form dan Autentikasi Menggunakan Django

Pemrograman Berbasis Platform (CSGE602022) - diselenggarakan oleh Fakultas Ilmu Komputer Universitas Indonesia, Semester Ganjil 2022/2023

---

## Deskripsi Tugas

Pada tugas ini, kamu akan mengimplementasikan elemen `<form>`, konsep autentikasi, dan beberapa hal yang sudah kamu pelajari selama tutorial lab.

_Checklist_ untuk tugas ini adalah sebagai berikut:

- [ ] Membuat suatu aplikasi baru bernama `todolist` di proyek tugas Django yang sudah digunakan sebelumnya.
- [ ] Menambahkan _path_ `todolist` sehingga pengguna dapat mengakses http://localhost:8000/todolist.
- [ ] Membuat sebuah model `Task` yang memiliki atribut sebagai berikut:
    - [ ] `user` untuk menghubungkan _task_ dengan pengguna yang membuat _task tersebut_.

        > Kamu dapat menggunakan tipe model `models.ForeignKey` dengan parameter `User`. Untuk mempelajari lebih lanjut mengenai `ForeignKey` pada Django, silakan baca dokumentasi Django (atau silakan klik [disini](https://docs.djangoproject.com/en/4.1/ref/models/fields/#foreignkey)).
    
    - [ ] `date` untuk mendeskripsikan tanggal pembuatan _task_.
    - [ ] `title` untuk mendeskripsikan judul _task_.
    - [ ] `description` untuk mendeskripsikan deskripsi _task_.
- [ ] Mengimplementasikan form registrasi, _login_, dan _logout_ agar pengguna dapat menggunakan `todolist` dengan baik.
- [ ] Membuat halaman utama `todolist` yang memuat _username_ pengguna, tombol `Tambah Task Baru`, tombol _logout_, serta tabel berisi tanggal pembuatan _task_, judul _task_, dan deskripsi _task_.
- [ ] Membuat halaman form untuk pembuatan _task_. Data yang perlu dimasukkan pengguna hanyalah judul _task_ dan deskripsi _task_.

    > Dokumentasi Django mengenai `Form` dapat kamu baca [disini](https://docs.djangoproject.com/en/4.1/topics/forms/).

- [ ] Membuat _routing_ sehingga beberapa fungsi dapat diakses melalui URL berikut:
    - [ ] http://localhost:8000/todolist berisi halaman utama yang memuat tabel _task_.
    - [ ] http://localhost:8000/todolist/login berisi form _login_.
    - [ ] http://localhost:8000/todolist/register berisi form registrasi akun.
    - [ ] http://localhost:8000/todolist/create-task berisi form pembuatan _task_.
    - [ ] http://localhost:8000/todolist/logout berisi mekanisme _logout_.
- [ ] Melakukan _deployment_ ke Heroku terhadap aplikasi yang sudah kamu buat sehingga nantinya dapat diakses oleh teman-temanmu melalui Internet.
- [ ] Membuat **dua** akun pengguna dan **tiga** _dummy data_ menggunakan model `Task` pada akun masing-masing di situs web Heroku.
- [ ] Membuat sebuah `README.md` pada folder `todolist` yang berisi tautan menuju aplikasi Heroku yang sudah kamu _deploy_ serta jawaban dari beberapa pertanyaan berikut:
    - [ ] Apa kegunaan `{% csrf_token %}` pada elemen `<form>`? Apa yang terjadi apabila tidak ada potongan kode tersebut pada elemen `<form>`?
    - [ ] Apakah kita dapat membuat elemen `<form>` secara manual (tanpa menggunakan _generator_ seperti `{{ form.as_table }}`)? Jelaskan secara gambaran besar bagaimana cara membuat `<form>` secara manual.
    - [ ] Jelaskan proses alur data dari submisi yang dilakukan oleh pengguna melalui HTML form, penyimpanan data pada _database_, hingga munculnya data yang telah disimpan pada _template_ HTML.
    - [ ] Jelaskan bagaimana cara kamu mengimplementasikan _checklist_ di atas.

## Tenggat Waktu Pengerjaan

Tenggat waktu pengerjaan Tugas 4: <Countdown deadline={new Date("29 September 2022 12:00 GMT+7")} />

Asisten dosen akan mengecek _last commit_ dari repositori tugas lab, sehingga kamu tidak perlu mengumpulkan tautan repositori ke dalam slot submisi.

## Bonus

Kamu akan mendapatkan nilai bonus pada penilaian tugas ini apabila kamu membuat fitur berikut.

- [ ] Tambahkan atribut `is_finished` pada model `Task` (dengan _default value_ `False`) dan buatlah dua kolom baru pada tabel _task_ yang berisi status penyelesaian _task_ dan tombol untuk mengubah status penyelesaian suatu _task_ menjadi `Selesai` atau `Belum Selesai`.
- [ ] Tambahkan kolom baru pada tabel _task_ yang berisi tombol untuk menghapus suatu _task_.

Kedua fitur di atas wajib diimplementaskan (bukan sekedar tombol, melainkan harus dapat melakukan _behavior_ yang diinginkan) jika kamu ingin mendapatkan nilai bonus.

>  Motivasi: Dengan menyelesaikan fitur bonus, kamu telah mempelajari dasar-dasar CRUD pada Django. 😉
