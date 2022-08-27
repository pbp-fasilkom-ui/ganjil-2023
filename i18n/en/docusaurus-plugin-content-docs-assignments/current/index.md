---
sidebar_position: 1
sidebar_label: "PBD Tutorials & Assignments"
---

# PBD Tutorial And Assignment Repository 2022/2023

Pemrograman Berbasis Platform (CSGE602022) - diselenggarakan oleh Fakultas Ilmu Komputer Universitas Indonesia, Semester Ganjil 2022/2023

## Daftar Konten

1. Tutorial Mingguan
2. [Pendahuluan](#pendahuluan)
3. [Aturan dan Skema Penilaian](#aturan-dan-skema-penilaian)
4. [Tutorial: Permulaan](#tutorial-permulaan)
5. [Tutorial: Cara Mengerjakan](#tutorial-cara-mengerjakan)
6. [Tutorial: Melakukan pull dari upstream](#tutorial-melakukan-pull-dari-upstream)
7. [Tutorial: Menjalankan Aplikasi Django](#tutorial-menjalankan-aplikasi-django)
8. [Tutorial: Mendeploy Aplikasi](#tutorial-mendeploy-aplikasi)
9. [Sumber Bacaan](#sumber-bacaan)
10. [Credit](#credit)


## Pendahuluan

Selamat datang di repositori tugas dan tutorial lab PBP Ganjil 2022/2023. Repositori serta dokumen ini dimaksudkan sebagai wadah dari tutorial, instruksi, penjelasan serta _source code_ yang berhubungan dengan pembelajaran mata kuliah Pemrograman Berbasis Platform. 

Terdapat beberapa pekerjaan yang perlu Anda selesaikan selama pelaksanaan perkuliahan PBP Ganjil 2022/2023 ini, yaitu Esai Refleksi, Tutorial dan Tugas Lab. 

Setiap minggunya, Anda akan diberikan tutorial untuk mempelajari konsep-konsep serta praktisi dari pemrograman berbasis platform. 

Anda juga akan diminta untuk mengerjakan tugas lab sebagai bentuk implementasi dari pembelajaran yang Anda pelajari selama kelas dan sesi tutorial. 

Selain itu, Anda juga perlu menuliskan esai refleksi atas apa yang telah Anda pelajari dan implementasikan pada tugas lab yang telah Anda kerjakan. 

## Aturan dan Skema Penilaian

Tutorial, Esai dan Tugas Lab PBP Ganjil 2022/2023 berkontribusi kepada nilai akhir PBP dengan total **18%**. Untuk setiap pekerjaan yang dikerjakan, Anda bisa mendapatkan nilai dengan rentang **A** (4) sampai **E** (0). Beberapa aspek beserta bobotnya yang perlu Anda perhatikan dalam mengerjakan lab dan tugas adalah sebagai berikut.

1. Fungsionalitas program (45 poin)
2. Program dijalankan tanpa error (10 poin)
3. Kenyamanan penggunaan program (5 poin)
4. Validasi input (5 poin)
5. Standar penulisan kode (10 poin)
6. Dokumentasi (10 poin)
7. Efisiensi (10 poin)
8. Persyaratan submisi (5 poin)

Anda juga perlu menuliskan esai refleksi atas pekerjaan yang telah anda kumpulkan. Beberapa aspek beserta bobotnya yang perlu Anda perhatikan dalam pengerjaan esai refleksi adalah sebagai berikut.
1. Orisinalitas karya dan keatraktifan judul atau topik yang diangkat (10 poin)
2. Format penulisan (10 poin)
3. Penggunaan bahasa (15 poin)
4. Ketajaman analisis permasalahan (30 poin)
5. Manfaat dan urgensi permasalahan yang diangkat (15 poin)
6. Simpulan dan saran (15 poin)
7. Referensi (5 poin)

Setiap pekerjaan yang telah diselesaikan oleh mahasiswa harus didemonstrasikan kepada asisten dosen. Berikut merupakan ketentuan dari demo yang perlu diperhatikan:
1. Demonstrasi pekerjaan tutorial/tugas perlu dilakukan **paling lambat seminggu setelah deadline pengumpulan**. Waktu yang dialokasikan beserta jam akan disesuaikan dengan asisten dosen Anda masing-masing.
2. Apabila terdapat halangan sehingga Anda tidak dapat mendemonstrasikan pekerjaan Anda kepada asisten dosen dalam rentang waktu yang ditentukan, Anda perlu mengontak asisten dosen Anda serta mengirimkan email kepada dosen untuk susulan demonstrasi pekerjaan.

## Tutorial: Permulaan

Jika Anda sebelumnya belum pernah mengerjakan Tutorial Lab 1,

1. `fork` repositori ini ke akun GitHub milik Anda yang mana nantinya repositori ini akan secara otomatis di-copy ke akun GitHub Anda.
2. Bukalah halaman repositori anda di URL `https://github.com/<YOURNAME>/pbp-lab-2023` dengan keterangan `<YOURNAME>` sebagai GitHub username Anda.
3. Atur URL untuk Clone ke HTTPS dan copy URL tersebut ke clipboard.
4. Clone repositori tersebut ke komputer Anda dengan menggunakan command `git clone https://github.com/<YOURNAME>/pbp-lab-2023.git <PATH>` dengan keterangan `PATH` sebagai direktori tujuan.
5. Masuk ke dalam repositori yang telah di-clone pada komputer Anda dan jalankan `git remote add upstream https://github.com/pbp-fasilkom-ui/pbp-lab-2023` untuk menambahkan remote upstream.
6. Pastikan bahwa repository Anda memiliki visibiltas `Public`. Anda dapat mengaturnya pada halaman **Edit Project**.
7. Beritahukan kepada asisten dosen Anda bahwa URL dari repositori milik Anda untuk keperluan evaluasi dan penilaian.

Jika Anda pernah mengerjakan Tutorial Lab 1,

1. Masuk ke dalam repositori yang telah di-clone pada komputer Anda dan jalankan `git remote add upstream https://github.com/pbp-fasilkom-ui/pbp-lab-2023` untuk menambahkan remote upstream.
2. Pastikan bahwa repository Anda memiliki visibiltas `Public`. Anda dapat mengaturnya pada halaman **Edit Project**.
3. Beritahukan kepada asisten dosen Anda bahwa URL dari repositori milik Anda untuk keperluan evaluasi dan penilaian.


## Tutorial: Cara Mengerjakan
1. Misalkan Anda hendak mengerjakan tutorial lab 2. Pergilah ke dalam direktori yang berisikan README.md dari tutorial lab 2.
2. Untuk memastikan tutorial lab 2 tidak terganggu dengan tutorial lain, buatlah sebuah Django App yang spesifik untuk pengerjaan tutorial lab 2 dengan menggunakan perintah `python manage.py startapp lab_2` pada console.
3. Baca dan pahamilah dengan teliti berkas README. Berkas ini memuat tugas serta instruksi yang perlu Anda selesaikan.
4. Kerjakan tutorial tersebut.
5. Gunakan `git add <FILES/DIRECTORIES>` atau `git rm <FILES/DIRECTORIES>` untuk stage/unstage berkas yang nantinya akan Anda simpan ke Git.
6. Apabila Anda ingin menyimpan progres Anda secara lokal, Anda dapat melakukan **commit** ke Git. Gunakan perintah `git commit -m "<MESSAGE>"` dengan keterangan `<MESSAGE>` sebagai deskripsi pekerjaan yang akan Anda simpan.
7. Ulangi langkah 4-6 hingga Anda selesai mengerjakan tugas Anda.
8. Setelah Anda siap untuk mengumpulkan pekerjaan Anda atau Anda ingin menyimpannya pada repositori GitHub Anda, lakukan sebuah **push**. Anda dapat menggunakan perintah `git push origin <NAMA_BRANCH>` dengan keterangan `<NAMA_BRANCH>` sebagai _branch_ yang Anda tuju untuk penyimpanan di GitHub.


## Tutorial: Melakukan pull dari upstream

Apabila terdapat _update_ dari `upstream`, Anda dapat memperoleh _update commit_ tersebut dan mengintegrasikannya ke dalam repositori Anda secara lokal dengan menggunakan perintah `git pull upstream master`.

Ketika Anda melakukan pull dari upstream, Merge Conflicts dapat terjadi pada komputer lokal Anda maupun GitHub karena repositori berubah-ubah setiap minggunya dan mungkin terdapat perubahan yang bersinggungan dengan branch `master` yang ada pada repositori Anda.

Jika terdapat Merge Conflicts, gunakan commits terbaru yang berasal dari repositori `upstream`. Setelah Anda menyelesaikan segala konflik yang terjadi dan sukses menggabungkannya ke `branch` Anda, jangan lupa untuk melakukan `push` lagi ke repositori GitHub Anda dengan perintah `git push origin <NAMA_BRANCH>`.

## Tutorial: Menjalankan Aplikasi Django

Sebelumnya Anda perlu mendapatkan _copy_ dari repositori yang hendak Anda jalankan menggunakan perintah `git clone <URL_REPOSITORY>`.

1. Pada direktori yang telah Anda salin ke mesin Anda, bukalah _console_ di direktori tersebut dan mulailah dengan membuat sebuah _virtual environment_ terlebih dahulu dengan perintah:
```
python -m venv env
```
>Mohon pastikan Anda menjalankan perintah tersebut pada _root_ dari repositori di mesin Anda.

2. Setelah perintah tersebut selesai dieksekusi, Anda dapat melihat bahwa terdapat folder env pada repositori Anda. Folder env atau _virtual environment_ ini berfungsi untuk mengenkapsulasi segala _dependencies_ dari aplikasi sehingga tidak tercampur atau bertabrakan dengan versi yang tidak seharusnya.

3. Aktifkan _virtual environment_ tersebut dengan menggunakan perintah berikut. Perhatikan bahwa menjalankan perintah pengaktifan _virtual environment_ berbeda untuk Windows dengan sistem operasi berbasis UNIX:
```
Windows:
env\Scripts\activate.bat
pip install -r requirements.txt
```
```
Linux & Mac OS:
source env/bin/activate
pip install -r requirements.txt
```
4. Apabila _virtual environment_ berhasil diaktifkan, Anda akan melihat `(env)` di _console_ Anda. Jalankan perintah `python manage.py runserver` untuk menjalankan aplikasi Django di mesin Anda.
>Mohon pastikan terdapat file manage.py pada direktori aktif di console Anda sebelum menjalankan perintah tersebut.

5. Bukalah web server lokal dari aplikasi Django tersebut menggunakan browser di `http://localhost:8000`.

6. Apabila muncul sebuah halaman, selamat; Anda berhasil menjalankan aplikasi Django pada mesin Anda.

7. Apabila Anda sudah selesai mengerjakan tutorial atau ingin mengubah ke proyek Python lain, jangan lupa untuk mematikan _virtual environment_ yang telah diaktifkan sebelumnya dengan perintah:
```bash
deactivate
```

## Tutorial: Men-deploy Aplikasi

Apabila sebelumnya Anda belum memiliki akun Heroku dan/atau sebuah aplikasi Heroku aktif,
1. Buatlah akun Heroku. Anda dapat mulai membuat akun pada halaman Login Heroku yang dapat diakses pada link [berikut](https://id.heroku.com/login).
2. Setelah Anda masuk ke halaman dashboard Heroku, buatlah sebuah aplikasi Heroku.

Setelah Anda memiliki aplikasi Heroku,

1. Copy API Key dari akun anda. API Key dapat Anda temukan di `Account Settings -> API Key`. Simpanlah API Key beserta informasi tentang aplikasi Anda pada notepad/file lain dengan format berikut:
```
HEROKU_API_KEY: <VALUE_API_KEY_ANDA>
HEROKU_APP_NAME: <NAMA_APLIKASI_HEROKU_ANDA>
```
2. Bukalah konfigurasi repositori GitHub Anda bagian Secrets untuk GitHub Actions (`Settings -> Secrets -> Actions`).
3. Tambahkan variabel `repository secret` baru untuk melakukan deployment. Pasangan Name-Value dari variabel yang akan Anda buat dapat Anda ambil dari informasi yang Anda catat pada notepad sebelumnya. Sebagai contoh:
```
(NAME)HEROKU_APP_NAME
(VALUE)APLIKASI-SAYA
```
4. Simpan variabel-variabel tersebut.
5. Pada mesin lokal Anda, buatlah sebuah berkas baru yang bernama `Procfile` di _root_ dari repositori Anda. Berkas ini akan digunakan oleh Heroku untuk membaca aktivitas log aplikasi ke sistem monitoring internal Heroku. Isi dari berkas tersebut adalah sebagai berikut:
```
web: gunicorn aplikasi_django.wsgi --log-file -
```
>Ubah `aplikasi_django` sesuai dengan aplikasi yang hendak Anda deploy.

6. Buatlah sebuah berkas baru bernama `dpl.yml` di _.github/workflows_ dari repositori Anda. Berkas ini digunakan untuk mengeksekusi deployment oleh runner dari GitHub Actions. Copy dan paste baris script di bawah ini ke berkas `dpl.yml`:
```
name: Deploy

on:
  push:
    branches-ignore:
      - template
  pull_request:
    branches-ignore:
      - template

jobs:
  Deployment:
    runs-on: ubuntu-latest
    env:
      HEROKU_API_KEY: ${{ secrets.HEROKU_API_KEY }}
      HEROKU_APP_NAME: ${{ secrets.HEROKU_APP_NAME }}
    steps:
    - uses: actions/checkout@v2
    - name: Set up Ruby 2.7
      uses: actions/setup-ruby@v1
      with:
        ruby-version: 2.7
    - name: Install dpl
      run: gem install dpl
    - name: Install Heroku CLI
      run: wget -qO- https://cli-assets.heroku.com/install-ubuntu.sh | sh
    - name: Deploy to Heroku
      run: dpl --provider=heroku --app=$HEROKU_APP_NAME --api-key=$HEROKU_API_KEY
    - name: Run migrations on Heroku
      run: heroku run --app $HEROKU_APP_NAME migrate
    - uses: chrnorm/deployment-action@releases/v1
      name: Create GitHub deployment
      with:
        initial_status: success
        token: ${{ github.token }}
        target_url: https://${{ secrets.HEROKU_APP_NAME }}.herokuapp.com
        environment: production
```

7. **Add**, **Commit** dan **Push** berkas-berkas tersebut ke repositori GitHub Anda dengan perintah `git push origin <NAMA_BRANCH>`.
8. Jalankan/jalankan kembali workflow deployment dari aplikasi Anda di GitHub Actions. Anda dapat menemukan GitHub Actions tersebut di tab pada repositori Anda (`GitHub Actions -> Workflows`).
> Perhatian! Proses workflow mungkin saja terjadi **kegagalan** dikarenakan berbagai sebab. Kegagalan dari workflow dapat Anda lihat di repositori GitHub Anda dengan adanya simbol silang merah.
>
> Apabila workflow Anda gagal karena _dependencies_ atau konfigurasi dari aplikasi, periksa ulang konfigurasi aplikasi Django serta versi dari _dependencies_ yang digunakan. Pastikan semuanya berjalan dengan lancar di lokal Anda sebelum Anda melakukan proses _deployment_.
>
> Apabila workflow Anda gagal karena permasalahan dari GitHub Actions atau runner, cukup jalankan kembali workflow tersebut. Permasalahan ini terkadang muncul ketika runner dari GitHub Actions sedang sibuk atau mengalami kegagalan dari server GitHub.
>
> Apabila status workflow pending, Anda hanya perlu menunggu giliran workflow yang Anda sedang jalankan untuk dieksekusi oleh runner GitHub.

9. Jika seluruh proses dari workflow berhasil dieksekusi, Anda dapat melihat terdapat sebuah tanda centang hijau pada repositori Anda yang menandakan bahwa proses workflow telah berhasil. Apabila Anda menambahkan badges status README pada repositori Anda, status dari badges ini akan secara otomatis diperbarui berdasarkan workflow yang baru saja dijalankan.

10. Anda dapat mengakses aplikasi Anda yang sudah ter-deploy pada URL aplikasi Heroku yang Anda gunakan.
## Sumber Bacaan

Berikut adalah beberapa bacaan yang sekiranya dapat membantu selama proses pembelajaran PBP Ganjil 2022/2023.

- [Menulis Pesan Commit yang Baik](https://cbea.ms/git-commit/)

## Credit

Dokumen ini dibuat berdasarkan [Exercise 0: Introduction to Git](https://gitlab.com/CSUI-AdvProg-2017/lab-exercises) yang ditulis oleh Tim Pengajar Pemrograman Lanjut 2017 ([@addianto](https://gitlab.com/addianto), [@muhammad.ardhan](https://gitlab.com/muhammad.ardhan), [@fbenarto](https://gitlab.com/fbenarto), et al.) dan [PBP Ganjil 2021](https://gitlab.com/PBP-2021/pbp-lab) yang ditulis oleh Tim Pengajar Pemrograman Berbasis Platform 2021 ([@prakashdivyy](https://gitlab.com/prakashdivyy)). Segala tutorial serta instruksi yang dicantumkan pada repositori ini dirancang sedemikian rupa sehingga mahasiswa yang sedang mengambil mata kuliah Pemrograman Berbasis Platform dapat menyelesaikan tutorial saat sesi lab berlangsung.

