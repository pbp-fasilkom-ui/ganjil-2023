---
sidebar_label: Tugas 7
---

import Countdown from "@site/src/components/Countdown"

# Tugas 7: Elemen Dasar Flutter

Pemrograman Berbasis Platform (CSGE602022) - diselenggarakan oleh Fakultas Ilmu Komputer
Universitas Indonesia, Semester Ganjil 2022/2023

---

## Deskripsi Tugas

Pada tugas ini, kamu akan mengimplementasikan beberapa elemen dasar pada Flutter.

_Checklist_ untuk tugas ini adalah sebagai berikut.

- [ ] Membuat sebuah program Flutter baru dengan nama `counter_7`.
- [ ] Mengubah tampilan program menjadi seperti berikut.

    ![Counter App](https://i.ibb.co/WKr6X9Q/Selection-576.png)

- [ ] Mengimplementasikan logika berikut pada program.
  - [ ] Tombol + menambahkan angka sebanyak satu satuan.
  - [ ] Tombol - mengurangi angka sebanyak satu satuan. Apabila _counter_ bernilai 0, maka tombol - tidak memiliki efek apapun pada _counter_.
  - [ ] Apabila _counter_ bernilai ganjil, maka teks indikator berubah menjadi "GANJIL" dengan warna biru.
  - [ ] Apabila _counter_ bernilai genap, maka teks indikator berubah menjadi "GENAP" dengan warna merah.
  - [ ] Angka 0 dianggap sebagai angka genap.
- [ ] Menjawab beberapa pertanyaan berikut pada `README.md` pada _root folder_.
  - [ ] Jelaskan apa yang dimaksud dengan _stateless widget_ dan _stateful widget_ dan jelaskan perbedaan dari keduanya.
  - [ ] Sebutkan widget apa saja yang kamu pakai di proyek kali ini dan jelaskan fungsinya.
  - [ ] Apa fungsi dari `setState()`? Jelaskan variabel apa saja yang dapat terdampak dengan fungsi tersebut.
  - [ ] Jelaskan perbedaan antara `const` dengan `final`.
  - [ ] Jelaskan bagaimana cara kamu mengimplementasikan _checklist_ di atas.
- [ ] Melakukan `add`-`commit`-`push` ke suatu repositori baru di GitHub. Kamu dapat menamai repositori barumu dengan nama `pbp-flutter-lab`.

## Tenggat Waktu Pengerjaan

Tenggat waktu pengerjaan Tugas 7: <Countdown deadline={new Date("9 November 2022 12:00 GMT+7")} />

Harap mengumpulkan tautan repositori yang kamu gunakan ke dalam slot submisi yang telah disediakan di SCELE.

## Bonus

Kamu akan mendapatkan nilai bonus pada penilaian tugas ini apabila kamu membuat fitur berikut.

- [ ] Menyembunyikan/menghilangkan tombol - apabila _counter_ bernilai 0.
