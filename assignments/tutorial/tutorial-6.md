---
sidebar_label: "Lab 6"
---
import Countdown from "@site/src/components/Countdown"

# Lab 6: Introduction to Flutter

Pemrograman Berbasis Platform (CSGE602022) - diselenggarakan oleh Fakultas Ilmu Komputer
Universitas Indonesia, Semester Ganjil 2022/2023

---

## Tenggat Waktu Pengumpulan

#### Kelas A, B:
<Countdown deadline={new Date("03 November 2022 16:40 GMT+7")} />

#### Kelas C, D, E, F:
<Countdown deadline={new Date("03 November 2022 14:40 GMT+7")} />

---

## Tujuan Pembelajaran

Setelah menyelesaikan tutorial ini, mahasiswa diharapkan untuk:

- Mengerti proses instalasi Flutter.
- Mengerti dan menggunakan perintah-perintah dasar Flutter yang perlu diketahui untuk mengerjakan proyek aplikasi.
- Memahami alur dasar pembuatan dan eksekusi aplikasi Flutter.

## Pengenalan Flutter

Flutter adalah sebuah _framework_ aplikasi _mobile_ sumber terbuka (_open source_) yang diciptakan oleh Google pada 2017. Flutter digunakan dalam pengembangan aplikasi untuk sistem operasi Android dan iOS. Flutter juga mendukung untuk pengembangan aplikasi berbasis web, Windows, Linux, dan MacOS secara _native_.

Keuntungan dari Flutter sendiri adalah kemampuannya untuk menciptakan aplikasi untuk berbagai _platform_ dengan hanya satu _codebase_. Selain itu, fitur JIT (_just in time_) memungkinkan pengembang aplikasi untuk melihat perubahan yang dilakukan pada _codebase_ secara langsung tanpa harus mengulang proses kompilasi kode aplikasi dari awal.

## Instalasi Flutter

1. Akses tautan berikut sesuai dengan sistem operasi yang kamu gunakan.

    a. [Mac OS](https://docs.flutter.dev/get-started/install/macos)
  
    Khusus pengguna Mac OS yang menggunakan Homebrew, kamu dapat menggunakan perintah `brew install --cask flutter` untuk menginstal Flutter.
  
    b. [Windows](https://docs.flutter.dev/get-started/install/windows)

    c. [Linux](https://docs.flutter.dev/get-started/install/linux)

2. Instal Flutter versi terkini (_latest version_) dengan mengikuti panduan pada tautan di atas.
  
    Untuk pengguna Mac, dapat melewati tahap `iOS Setup` dan langsung ke tahap `Android Setup`.

3. Instal IDE pilihan kamu yang akan digunakan untuk mengembangkan aplikasi Flutter.

    a. [Android Studio (Recommended)](https://developer.android.com/studio)

    b. [Visual Studio Code](https://code.visualstudio.com/)

    Kamu dapat menggunakan Visual Studio Code untuk Flutter dengan menginstall ekstensi [Dart](https://marketplace.visualstudio.com/items?itemName=Dart-Code.dart-code) dan [Flutter](https://marketplace.visualstudio.com/items?itemName=Dart-Code.flutter).
    
    Kamu juga dapat membaca fungsionalitas IDE yang disediakan oleh ekstensi Flutter pada tautan yang tersedia.

## Tutorial: _Getting Started with Flutter_

1. Buka Terminal atau Command Prompt.

2. Masuk ke direktori sesuai keinginan masing-masing.

3. _Generate_ proyek Flutter dan masuk ke dalam direktori proyek.

    ```bash
    flutter create <APP_NAME>
    cd <APP_NAME>
    ```

4. Jalankan proyek melalui Terminal atau Command Prompt.

    ```bash
    flutter run
    ```

5. Akan muncul tampilan seperti di bawah ini.

    ![First App](https://i.ibb.co/GTq5p70/693e69f5108186abc024710adf4387bb.jpg)

6. Buka file `lib/main.dart` dengan _editor_ atau IDE pilihan kamu.

7. Ubah kalimat `You have pushed the button this many times` menjadi `You have clicked the button this many times`.

8. Simpan file dan lihat perubahannya pada tampilan aplikasi.

9. Setelah menyimpan perubahan yang telah dilakukan, lakukan `git init` pada _root folder_ dan `add`-`commit`-`push` proyek ke sebuah repositori baru di GitHub. Kamu dapat menamai repositori barumu dengan nama `pbp-flutter-tutorial`.

10. Kumpulkan tautan repositori kamu ke slot submisi yang ada pada Scele.

## Akhir Kata

Selamat, kamu telah membuat aplikasi Flutter pertamamu!

Setelah kamu menyelesaikan seluruh tutorial di atas, harapannya kini kamu lebih paham dan ke depannya kamu dapat lebih banyak bereksplorasi dengan _framework_ Flutter dalam membuat sebuah aplikasi _multiplatform_.

**Happy coding!**

## Referensi Tambahan

- [Flutter Docs](https://docs.flutter.dev/)
- [Write your first Flutter app, part 1](https://docs.flutter.dev/get-started/codelab)
- [An Introduction to Flutter: The Basics by FreeCodeCamp](https://www.freecodecamp.org/news/an-introduction-to-flutter-the-basics-9fe541fd39e2/)
- [Flutter Course for Beginners – 37-hour Cross Platform App Development Tutorial by FreeCodeCamp](https://www.youtube.com/watch?v=VPvVD8t02U8)

## Kontributor

- Muhammad Azis Husein
- Muhammad Athallah
- Adrian Ardizza
- Mohamad Rifqy Zulkarnaen
