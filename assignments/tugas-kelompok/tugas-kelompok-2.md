---
sidebar_label: Proyek Akhir Semester
---

import Countdown from "@site/src/components/Countdown"

# Proyek Akhir Semester

**Membuat Aplikasi Mobile menggunakan Framework Flutter (Berkelompok)**

---

## Tujuan Pembelajaran Khusus

1. Mengimplementasikan aplikasi *mobile* sederhana dengan *framework* Flutter.
2. Menerapkan widget untuk *layout* dan *input*, *event handling*, dan pemanggilan asinkronus ke *web service*.
3. Melakukan deploy aplikasi pada *cloud platform* dan perangkat mobile.

## Aturan Umum Tugas Kelompok

1. Satu kelompok membuat satu repositori Git yang digunakan oleh seluruh anggota kelompok untuk bekerja sama. Kumpulkan tautan repositori ke Scele.
2. Repositori Git memuat `README.md` yang berisi:
    - Nama anggota kelompok.
    - Deskripsi aplikasi (nama aplikasi, fungsi aplikasi, dan peran atau aktor pengguna aplikasi).
    - Daftar fitur atau modul yang diimplementasikan beserta kontrak kinerja per anggota kelompok.
    - Alur pengintegrasian dengan *web service* untuk terhubung dengan aplikasi web yang sudah dibuat saat Proyek Tengah Semester.
    - Tautan APK (Tidak harus ada pada saat Tahap I. Tautan APK dapat ditambahkan belakangan ke `README.md` setelah selesai mengerjakan Tahap II.)
3. Deployment Aplikasi:
    - Unggah APK sebagai `Release` di Git kelompok.
    - *Cloud Platform* seperti [Firebase App Distribution](https://firebase.google.com/docs/app-distribution) atau [Microsoft App Center](https://appcenter.ms/).
    - Gunakan logo aplikasi Anda sendiri.

## Aturan Khusus per Anggota Kelompok (Implementasi Modul)

1. Menerapkan widget untuk *layout* dan *input* (Material atau Cupertino, sesuai integrasi kelompok masing-masing).
2. Menerapkan *event handling*.
3. Menerapkan pemanggilan asinkronus ke *web service* Django (aplikasi web yang sudah dibuat saat [Proyek Tengah Semester](https://pbp-fasilkom-ui.github.io/ganjil-2023/assignments/tugas-kelompok/tugas-kelompok-1)).
4. Pengolahan data respons JSON dari *web service* Django dan menampilkan hasilnya di aplikasi.

## Rubrik

Rubrik dapat diakses melalui tautan berikut: [Rubrik Penilaian Proyek Tugas Kelompok PBP Gasal 2022/2023](https://docs.google.com/spreadsheets/d/1rMYRz1jw0JdfaiTaooLVhTBHaT6RuSQ4wUsQNRpF3CE/edit?usp=sharing)

## Tahapan Tugas Akhir Kelompok

<table>
    <tr>
        <th>Tahapan dan <em>deliverables</em></th>
        <th>Tenggat Waktu dan Keterangan</th>
    </tr>
    <tr>
        <td>
            <b>Tahap I (30%)</b>
            <ul>
                <li>Pembuatan GitHub kelompok</li>
                <li>Pembuatan <em>codebase</em> aplikasi kelompok</li>
                <li>README.md pada GitHub yang berisi:</li>
                    <ol>
                        <li>Nama-nama anggota kelompok</li>
                        <li>Deskripsi aplikasi (nama aplikasi, fungsi aplikasi, dan peran/aktor pengguna aplikasi)</li>
                        <li>Daftar fitur atau modul yang diimplementasikan beserta kontrak kinerja per anggota kelompok</li>
                        <li>Alur pengintegrasian dengan <em>web service</em> untuk terhubung dengan aplikasi web yang sudah dibuat saat Proyek Tengah Semester</li>
                    </ol>
            </ul>
        </td>
        <td>
            <b>Tenggat Waktu:</b>
            <Countdown deadline={new Date("28 November 2022 23:55 GMT+7")} />
            <b>Kumpulkan tautan GitHub</b> di Scele.
            <br />
            <br />
            <p><b>Kriteria Submisi:</b> Repositori GitHub yang sudah berisi file README.md dengan lengkap.</p>
        </td>
    </tr>
    <tr>
        <td>
            <b>Tahap II (70%)</b>
            <p>(Modul sudah terimplementasi dengan baik)</p>
            <p><em>Checklist:</em></p>
            <ul>
                <li>Fungsionalitas sesuai dengan rancangan desain aplikasi</li>
                <li>Penerapan <em>widget</em> pada fitur masing-masing secara individu</li>
                <li>Fitur atau modul tiap anggota kelompok sudah terintegrasi sebagai satu kesatuan aplikasi</li>
                <li>Tautan APK pada file README.md</li>
            </ul>
        </td>
        <td>
            <b>Tenggat Waktu:</b>
            <Countdown deadline={new Date("12 December 2022 23:55 GMT+7")} />
            <p><b>Kriteria Submisi:</b> Aplikasi tersedia dalam bentuk APK</p>
            <p><b>Presentasi: Demonstrasi ke Dosen pada periode UAS</b></p>
        </td>
    </tr>
    <tr>
        <td>
            <b>Bonus</b>
            <p>TBA.</p>
        </td>
        <td></td>
    </tr>
</table>
