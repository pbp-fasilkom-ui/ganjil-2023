---
sidebar_label: Proyek Tengah Semester
---

import Countdown from "@site/src/components/Countdown"

# Proyek Tengah Semester

**Membuat Website menggunakan Framework Django (Berkelompok)**

---

## Tujuan Pembelajaran Khusus

1. Merancang halaman web
2. Mengimplementasikan _website_ dengan _framework_ Django dengan memenuhi _models_, _views_, dan _template_
3. Memanfaatkan _framework_ CSS untuk mewujudkan _Responsive Web Design_
4. Mengimplementasikan _unit test_ dan _deployment_ menggunakan CI/CD (bonus)

### Catatan

Perlu diperhatikan selain tujuan pembelajaran khusus seperti tertulis di atas, peserta kuliah juga perlu mempelajari dan dilatih beberapa aspek kecendekiaan sebagai calon sarjana. Di antaranya yang relevan dalam kuliah ini adalah keteguhan (_grit_), kemandirian, ketelitian, termasuk juga metakognitif (secara sederhana bisa diartikan kemampuan mengatur strategi belajar yang sesuai dengan dirinya meliputi perencanaan, _monitoring_ dan evaluasi proses belajar mandiri), termasuk di dalamnya kemampuan untuk memahami, mengkomunikasikan masalah, diskusi dan bertanya,  sehingga peserta kuliah juga perlu siap bersikap positif dengan kondisi-kondisi yang secara tidak langsung atau tidak pasti akan dihadapi dan mungkin dapat menghabiskan banyak waktu. Kondisi tersebut bisa dianggap kendala, seperti keterbatasan sumber daya, _bug tools_, kesulitan teknis atau lainnya. Walaupun dirasakan menyulitkan, perlu diupayakan untuk disikapi dengan positif agar dapat menjadi manfaat terkait aspek kecendekiaan yang perlu dilatih peserta kuliah. Sikap negatif hanya akan memperburuk keadaan dan menghilangkan manfaat tugas ini untuk pembelajaran yang akan dapat dirasakan di kemudian hari. Tim asisten dan dosen melalui sarana yang ada, akan berusaha semampunya melayani pertanyaan, keluhan, dan membantu proses pembelajaran peserta agar peserta bisa menjalani perkuliahan dan belajar semaksimal mungkin.

Sebagai selingan, bila rekan-rekan lelah dan bingung menghadapi _error_ yang belum kunjung terselesaikan, berikut ini ada video yang cukup populer dan mudah-mudahan bisa menambah semangat untuk tetap teguh mengerjakan dan berlatih demi kesuksesan di kemudian hari.

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/42-hh-iMJJI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><br /><br />

Selamat mengerjakan. 😄

## Aturan Umum Tugas Kelompok

1. Satu kelompok terdiri atas 5-7 orang. Pembagian kelompok dapat dilihat [disini](https://docs.google.com/spreadsheets/d/1JF-GmUqdlwyvogW1_A1kZdrMWuAoNH3yjAC_EzJ7BcQ/edit?usp=sharing).
2. Satu kelompok membuat satu repositori Git yang digunakan oleh seluruh anggota kelompok untuk bekerja sama. Kumpulkan tautan repositori ke Scele.
3. Setiap kelompok dipersilakan mencari ide sendiri mengenai aplikasi yang akan dibuat. Tema aplikasi berhubungan dengan isu-isu yang dibahas dalam G20. Referensi isu-isu yang dibahas dalam G20 adalah sebagai berikut.
    - https://www.g20.org/g20-presidency-of-indonesia/#priorities
    - https://www.oecd.org/g20/topics/
    - https://globalsmartcitiesalliance.org/
    - https://indonesia.go.id/kategori/kabar-terkini-g20/3789/indonesia-dorong-g20-mengembangkan-smart-city
4. Ide aplikasi adalah memberikan solusi terhadap isu-isu yang dibahas dalam G20, misalnya membuat aplikasi web tentang mobil listrik, bank sampah, donasi pohon, _smart city_ (seperti Qlue), pelaporan kebakaran hutan, aplikasi gotong royong untuk donasi orang kelaparan, aplikasi PeduliLindungi, aplikasi menunjang kesehatan tumbuh kembang anak Indonesia, dll.
5. Kalian dapat berdiskusi dengan anggota kelompok untuk menentukan ide aplikasi yang ingin dibuat.
6. Setiap anggota kelompok mengerjakan modul yang berbeda. Modul ditentukan oleh kelompok yang disesuaikan dengan ide aplikasi yang sudah didiskusikan dalam kelompok.
7. Tugas kelompok di-_deploy_ sebagai kesatuan aplikasi web dalam satu aplikasi Heroku.

## Aturan Khusus per Anggota Kelompok

1. Menerapkan _models_ dengan membuat, memanfaatkan yang sudah disediakan Django, atau memanfaatkan yang sudah dibuat oleh anggota kelompok (pada modul lain).
2. Menerapkan _views_ untuk memproses _request_ dan mengolah data untuk menghasilkan respons menggunakan templat HTML maupun mengembalikan respon JSON.
3. Menerapkan templat menggunakan _responsive_ framework (seperti Bootstrap dan Tailwind).
4. Memiliki halaman form yang dapat menerima masukan dari pengguna kemudian diproses oleh _views_. Contoh pemrosesan oleh _views_ adalah _insert_ ke dalam _model_, _query_ dari _model_, dan _update_ data di dalam model.
5. Menerapkan JavaScript dengan pemanggilan AJAX.
6. Menerapkan filter informasi bagi pengguna yang sudah login saja. Contohnya adalah data alamat, umur, dan nomor handphone hanya dapat dilihat oleh pengguna yang sudah login saja.

## Tahapan Tugas Kelompok

<table>
    <tr>
        <th>Tahapan dan <em>deliverables</em></th>
        <th>Tenggat Waktu dan Keterangan</th>
    </tr>
    <tr>
        <td>
            <b>Tahap I (40%)</b>
            <ul>
                <li>Pembuatan GitHub kelompok</li>
                <li>Pembuatan aplikasi Heroku kelompok</li>
                <li>README.md pada GitHub yang berisi:</li>
                    <ol>
                        <li>Nama-nama anggota kelompok</li>
                        <li>Tautan aplikasi Heroku</li>
                        <li>Cerita aplikasi yang diajukan serta manfaatnya</li>
                        <li>Daftar modul yang akan diimplementasikan</li>
                    </ol>
                <li><em>Role</em> atau peran pengguna beserta deskripsinya (karena bisa saja lebih dari satu jenis pengguna yang mengakses aplikasi)</li>
            </ul>
        </td>
        <td>
            <b>Tenggat Waktu:</b>
            <Countdown deadline={new Date("13 October 2022 23:55 GMT+7")} />
            <b>Kumpulkan tautan GitHub dan Heroku</b> dengan <em>code base</em> proyek Django yang sudah disiapkan di GitHub.
            <br />
            <br />
            <p><b>Kriteria Submisi:</b> <em>Code base</em> proyek Django sudah muncul di Herokuapp (minimal Hello World)</p>
        </td>
    </tr>
    <tr>
        <td>
            <b>Tahap II (60%)</b>
            <p>(Modul sudah terimplementasi dengan baik)</p>
            <ul>
                <li>Modul aplikasi dari tiap anggota kelompok</li>
                <li><em>URL Mapping</em> untuk modul</li>
                <li><em>Models</em> untuk modul</li>
                <li><em>Views</em> untuk modul</li>
                <li>Terintegrasi sebagai satu kesatuan aplikasi</li>
                <li>Fungsionalitas sesuai dengan rancangan desain</li>
            </ul>
        </td>
        <td>
            <b>Tenggat Waktu:</b>
            <Countdown deadline={new Date("2 November 2022 23:55 GMT+7")} />
            <p><b>Kriteria Submisi:</b> Seluruh modul yang dikerjakan oleh setiap anggota kelompok sudah muncul dan dapat diakses pada proyek Django</p>
        </td>
    </tr>
    <tr>
        <td>
            <b>Bonus (5%)</b>
            <ul>
                <li>Unit Test (<em>passed</em>) untuk semua aspek, diharapkan <em>code coverage</em> bisa mencapai minimal 80%</li>
                <li>GitHub Actions (CI/CD) sudah terkonfigurasi hingga <em>deployment</em></li>
                <li>README.md pada GitHub yang berisi <em>pipeline status</em></li>
            </ul>
        </td>
        <td></td>
    </tr>
</table>
