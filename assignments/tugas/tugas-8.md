---
sidebar_label: Tugas 8
---

import Countdown from "@site/src/components/Countdown"

# Tugas 8: Flutter Form

Pemrograman Berbasis Platform (CSGE602022) - diselenggarakan oleh Fakultas Ilmu Komputer, Universitas Indonesia, Semester Ganjil 2022/2023

---

## Deskripsi Tugas

Pada tugas ini, kamu akan membuat sebuah *budget tracking app* sederhana menggunakan app yang sudah dibuat pada tugas sebelumnya.

_Checklist_ untuk tugas ini adalah sebagai berikut.

- [ ] Menambahkan drawer/hamburger menu pada app yang telah dibuat sebeumnya.
- [ ] Menambahkan dua tombol navigasi pada drawer/hamburger.
  - [ ] Navigasi pertama untuk ke halaman form.
  - [ ] Navigasi kedua untuk ke halaman yang menampilkan data _budget_ yang telah di-_input_ melalui form.

    ![Drawer](https://i.ibb.co/WFHW0V5/drawer.png)

- [ ] Menambahkan halaman form
  - [ ] Menambahkan elemen input dengan tipe data String berupa judul _budget_.
  - [ ] Menambahkan elemen input dengan tipe data int berupa nominal _budget_.
  - [ ] Menambahkan elemen dropdown yang berisi tipe _budget_ dengan pilihan pemasukan dan pengeluaran.
  - [ ] Menambahkan button untuk menyimpan _budget_.
    
    ```
    Catatan: Kamu bisa memanfaatkan struktur data seperti List untuk menyimpan data yang dibuat.
    ```

    ![Form](https://i.ibb.co/gJLdwgv/form.png)

- [ ] Menambahkan halaman data _budget_
  - [ ] Menampilkan semua judul, nominal, dan tipe _budget_ yang telah ditambahkan pada form.

    ![Data](https://i.ibb.co/QQTfr5V/data.png)

- [ ] Menjawab beberapa pertanyaan berikut pada `README.md` pada _root folder_ (silakan modifikasi `README.md` yang telah kamu buat sebelumnya; tambahkan subjudul untuk setiap tugas).
  - [ ] Jelaskan perbedaan `Navigator.push` dan `Navigator.pushReplacement`.
  - [ ] Sebutkan widget apa saja yang kamu pakai di proyek kali ini dan jelaskan fungsinya.
  - [ ] Sebutkan jenis-jenis _event_ yang ada pada Flutter (contoh: `onPressed`).
  - [ ] Jelaskan bagaimana cara kerja `Navigator` dalam "mengganti" halaman dari aplikasi Flutter.
  - [ ] Jelaskan bagaimana cara kamu mengimplementasikan _checklist_ di atas.
- [ ] Melakukan `add`-`commit`-`push` ke GitHub.

## Tenggat Waktu Pengerjaan

Tenggat waktu pengerjaan Tugas 8: <Countdown deadline={new Date("17 November 2022 12:00 GMT+7")} />

Asisten dosen akan mengecek *last commit* dari repositori tugas lab, sehingga kamu tidak perlu mengumpulkan tautan repositori ke dalam slot submisi.

## Bonus

Kamu akan mendapatkan nilai bonus pada penilaian tugas ini apabila kamu membuat fitur berikut.

- [ ] Menambahkan elemen date picker pada halaman form.
- [ ] Menampilkan elemen date (format bebas) pada setiap elemen _budget_ yang ada pada halaman data _budget_.
- [ ] _Refactor_ widget Drawer ke sebuah file terpisah.
