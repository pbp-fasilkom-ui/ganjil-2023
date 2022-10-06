---
sidebar_label: Tugas 6
---

import Countdown from "@site/src/components/Countdown"

# Tugas 6: Javascript dan AJAX

Pemrograman Berbasis Platform (CSGE602022) - diselenggarakan oleh Fakultas Ilmu Komputer
Universitas Indonesia, Semester Ganjil 2022/2023

---

## Deskripsi Tugas

Pada tugas ini, kamu akan mengimplementasikan AJAX pada fungsionalitas `todolist` yang telah kamu buat saat Tugas 4 dan 5.

_Checklist_ untuk tugas ini adalah sebagai berikut:

- [ ] Mengubah tugas 4 yang telah dibuat sebelumnya menjadi menggunakan AJAX.
    - [ ] AJAX GET
        - [ ] Buatlah _view_ baru yang mengembalikan seluruh data task dalam bentuk JSON.
        - [ ] Buatlah _path_ `/todolist/json` yang mengarah ke _view_ yang baru kamu buat.
        - [ ] Lakukan pengambilan task menggunakan AJAX GET.
    - [ ] AJAX POST
        - [ ] Buatlah sebuah tombol `Add Task` yang membuka sebuah modal Bootstrap dengan form untuk menambahkan task.

            > Untuk mempelajari lebih lanjut mengenai modal Bootsrap, silakan baca dokumentasi berikut: [https://getbootstrap.com/docs/4.0/components/modal/](https://getbootstrap.com/docs/4.0/components/modal/).
        
        - [ ] Buatlah _view_ baru untuk menambahkan task baru ke dalam _database_.
        - [ ] Buatlah _path_ `/todolist/add` yang mengarah ke _view_ yang baru kamu buat. 
        - [ ] Hubungkan form yang telah kamu buat di dalam modal Bootstrap kamu ke _path_ `/todolist/add`
        - [ ] Tutup modal setelah penambahan task telah berhasil dilakukan.
        - [ ] Lakukan _refresh_ pada halaman utama secara asinkronus untuk menampilkan _list_ terbaru tanpa _reload_ seluruh _page_.
- [ ] Menjawab beberapa pertanyaan berikut pada `README-TWO.md` pada folder `todolist`.
	- [ ] Jelaskan perbedaan antara _asynchronous programming_ dengan _synchronous programming_.
	- [ ] Dalam penerapan JavaScript dan AJAX, terdapat penerapan paradigma _Event-Driven Programming_. Jelaskan maksud dari paradigma tersebut dan sebutkan salah satu contoh penerapannya pada tugas ini.
	- [ ] Jelaskan penerapan _asynchronous programming_ pada AJAX.
	- [ ] Jelaskan bagaimana cara kamu mengimplementasikan _checklist_ di atas.

## Tenggat Waktu Pengerjaan

Tenggat waktu pengerjaan Tugas 6: <Countdown deadline={new Date("13 October 2022 12:00 GMT+7")} />

Asisten dosen akan mengecek _last commit_ dari repositori tugas lab, sehingga kamu tidak perlu mengumpulkan tautan repositori ke dalam slot submisi.

## Bonus

Kamu akan mendapatkan nilai bonus pada penilaian tugas ini apabila kamu membuat fitur berikut.

- [ ] Menambahkan fungsionalitas hapus dengan menggunakan AJAX DELETE.
    - [ ] Buatlah kolom baru pada task dengan tombol Hapus.
    - [ ] Buatlah _view_ baru yang menghapus task dengan ID tertentu.
    - [ ] Buatlah _path_ `/todolist/delete/{id}` yang menerima ID dari _path_ dan meneruskannya kepada _view_.
    - [ ] Buatlah fungsi JavaScript yang memanggil _endpoint_ penghapusan task.
    - [ ] Lakukan _refresh_ pada halaman utama secara asinkronus untuk menampilkan _list_ terbaru tanpa _reload_ seluruh _page_.
