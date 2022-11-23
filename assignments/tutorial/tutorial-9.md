---
sidebar_label: Lab 9
---

# Tutorial 9: State Management Dasar, Menghubungkan Django dengan Flutter, dan Git Branching

Pemrograman Berbasis Platform (CSGE602022) - diselenggarakan oleh Fakultas Ilmu Komputer, Universitas Indonesia, Semester Ganjil 2022/2023

---

## Tujuan Pembelajaran

Setelah menyelesaikan tutorial ini, mahasiswa diharapkan untuk:

- Memahami *package* Provider untuk melakukan *state management* dasar.
- Dapat melakukan autentikasi dengan peladen Django dengan aplikasi Flutter.
- Memahami penggunaan Git *branching* yang baik dan benar.

## State Management Dasar dengan Provider

Provider adalah sebuah pembungkus di sekitar `InheritedWidget` agar `InheritedWidget` lebih mudah digunakan dan lebih dapat digunakan kembali. `InheritedWidget` sendiri adalah kelas dasar untuk widget Flutter yang secara efisien menyebarkan informasi ke widget lainnya yang berada pada satu *tree*.

Manfaat menggunakan `provider` adalah sebagai berikut.

- Mengalokasikan *resource* menjadi lebih sederhana.
- *Lazy-loading*.
- Mengurangi *boilerplate* tiap kali membuat *class* baru.
- Didukung oleh Flutter Devtool sehingga `provider` dapat di-*track* dari Devtool.
- Peningkatan skalabilitas untuk *class* yang memanfaatkan mekanisme *listen* yang dibangun secara kompleks.

Untuk mengetahui `provider` secara lebih lanjut, silakan buka halaman *package* Provider: <https://pub.dev/packages/provider>

## Tutorial: Menggunakan Peladen Django di Flutter

Untuk memudahkan pembuatan sistem autentikasi, tim asisten dosen telah membuatkan *package* Flutter yang dapat dipakai untuk melakukan kontak dengan *web service* Django (termasuk operasi `GET` dan `POST`).

*Package* dapat diakses melalui tautan berikut: [pbp_django_auth](https://pub.dev/packages/pbp_django_auth)

Silakan baca dokumentasi untuk melihat tata cara penggunaan *package*.

> Apabila kamu memiliki kritik atau saran untuk *package* tersebut, kamu dapat menyampaikannya secara langsung di Discord. 🤩

## Penggunaan Git Branching yang Baik dan Benar

Salah satu fungsi terpenting dari Git adalah kontrol cabang pengembangan yang membantu meningkatkan produktivitas dalam penciptaan proyek. Secara umum, *development branch* adalah bifurkasi dari kondisi kode yang membuat alur baru bagi evolusinya. Cabang ini dapat diparalelkan ke cabang lain yang kamu buat. Kamu dapat memasukkan fungsi baru ke dalam kode secara teratur dan tepat.

Git *branching* memiliki banyak keuntungan. Kedua keuntungan pertama dari penggunaan Git *branching* adalah:

1. Memungkinkan pengembangan fitur baru bagi aplikasi tanpa mengganggu pengembangan di *branch* utama.
2. Memungkinkan pembuatan *branch-branch* pengembangan berbeda yang dapat berpusat di satu repositori; contohnya adalah *stable branch* dan *staging branch*.

Berikut adalah contoh penggunaan Git *branching* yang dapat kamu terapkan untuk pengerjaan proyek akhir semester.

1. `main` *branch*; berisi kode yang siap digunakan sebagai *codebase* aplikasi versi produksi dan biasanya menjadi *branch* acuan dari CI/CD untuk *build* aplikasi.
2. `staging` atau `development` *branch*; berisi kumpulan kode kesatuan fitur atau modul yang telah diintegrasikan dengan baik dan menyeluruh.
3. *Branch* yang berisi fitur atau modul anggota secara individu; biasanya dinamai oleh nama fitur atau nama anggota yang mengerjakan (atau bahkan keduanya).

Berikut adalah hal-hal yang perlu diperhatikan saat menggunakan *branching*.

1. Sebelum *push* kode ke *branch* individu, **pastikan kamu *pull* kode dari *branch* staging**. Hal ini dilakukan untuk menghindari konflik yang dapat terjadi ketika kamu melakukan *merge request* ke *branch* `staging`.
2. Saat ingin melakukan *merge request* dari *branch* individu, **pastikan kamu melakukan merge ke dalam *branch* staging**. Hal ini dilakukan untuk menghindari *error* yang dapat terjadi saat dilakukannya *push* ke branch utama yang berisi kode kesatuan aplikasi. Bayangkan jika kamu langsung *push* ke *branch* `main` dan ternyata masih banyak *error* yang terjadi namun (sayangnya) kode kesatuan aplikasi sudah terbentuk ke dalam satu file APK dan sudah diakses oleh pengguna; tentu hal tersebut ingin kita hindari, kan?
3. Fokuskan *branch* `main` untuk perilisan aplikasi ke khalayak umum dan *branch* `staging` untuk pengintegrasian aplikasi menjadi satu kesatuan yang bebas dari *error* sebelum dirilis.
4. Dengan adanya fokus tersebut, maka **__hanya lakukan *push* ke dalam *branch* main dari *branch* staging.__**

Dengan adanya penjelasan dan contoh singkat dari Git *branching*, diharapkan kamu dapat melakukan pengerjaan proyek akhir semester dengan lebih teratur dan sistematis. 😉

## Referensi Tambahan

- [Simple app state management | Flutter](https://docs.flutter.dev/development/data-and-backend/state-mgmt/simple)
- [Flutter State Management with Provider](https://blog.devgenius.io/flutter-state-management-with-provider-5a57eca108f1)
- [Pengenalan State Management Flutter dan Jenis-jenisnya](https://caraguna.com/pengenalan-state-management-flutter/)
- [git - panduan ringkas - gak pake ribet](https://rogerdudler.github.io/git-guide/index.id.html)
- [Using Branches in Git](https://uoftcoders.github.io/studyGroup/lessons/git/branches/lesson/)
- [How to Use Branches in Git – the Ultimate Cheatsheet](https://www.freecodecamp.org/news/how-to-use-branches-in-git/)
- [Cara Menggunakan Git Branch](https://www.hostinger.co.id/tutorial/git-branch)

## Kontributor

Muhammad Athallah.
