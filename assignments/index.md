---
sidebar_position: 1
sidebar_label: "Tugas dan Tutorial PBP"
---

# Repositori Tugas dan Tutorial Lab PBP Ganjil 2022/2023

Pemrograman Berbasis Platform (CSGE602022) - diselenggarakan oleh Fakultas Ilmu Komputer Universitas Indonesia, Semester Ganjil 2022/2023

## Daftar Konten

1. Tutorial Mingguan
2. [Pendahuluan](#pendahuluan)
3. [Aturan dan Skema Penilaian](#aturan-dan-skema-penilaian)
4. [Tutorial: Cara Mengerjakan](#tutorial-cara-mengerjakan)
5. [Tutorial: Menjalankan Aplikasi Django](#tutorial-menjalankan-aplikasi-django)
6. [Tutorial: Mendeploy Aplikasi](#tutorial-mendeploy-aplikasi)
7. [Sumber Bacaan](#sumber-bacaan)
8. [Credit](#credit)


## Pendahuluan

Selamat datang di repositori tugas dan tutorial lab PBP Ganjil 2022/2023. Repositori serta dokumen ini dimaksudkan sebagai wadah dari tutorial, instruksi, penjelasan serta _source code_ yang berhubungan dengan pembelajaran mata kuliah Pemrograman Berbasis Platform. 

Terdapat beberapa pekerjaan yang perlu Anda selesaikan selama pelaksanaan perkuliahan PBP Ganjil 2022/2023 ini, yaitu Esai Refleksi, Tutorial dan Tugas Lab. 

Setiap minggunya, Anda akan diberikan tutorial untuk mempelajari konsep-konsep serta praktisi dari pemrograman berbasis platform. 

Anda juga akan diminta untuk mengerjakan tugas lab sebagai bentuk implementasi dari pembelajaran yang Anda pelajari selama kelas dan sesi tutorial. 

Selain itu, Anda juga perlu menuliskan esai refleksi atas apa yang telah Anda pelajari dan implementasikan pada tugas lab yang telah Anda kerjakan. 

## Aturan dan Skema Penilaian

Tutorial, Esai dan Tugas Lab PBP Ganjil 2022/2023 berkontribusi kepada nilai akhir PBP dengan total **20%**.
Skema penilaian untuk **tutorial dan tugas pemrograman** adalah sebagai berikut:
1. **A** jika **semua checklist** dikerjakan
2. **B** jika **80% checklist** dikerjakan
3. **C** jika setidaknya **setengah checklist** dikerjakan
4. **D** jika hanya **30% checklist** dikerjakan
5. **E** jika tidak mengerjakan

Sedangkan untuk **tugas esai**, akan dinilai dengan skema sebagai berikut:
1. Orisinalitas karya dan keatraktifan judul (10 poin)
2. Format penulisan (10 poin)
3. Penggunaan bahasa Indonesia yang baik dan benar (15 poin)
4. Ketajaman analisis permasalahan (30 poin)
5. Manfaat dan urgensi permasalahan yang diangkat (15 poin)
6. Simpulan dan saran (15 poin)
7. Referensi (5 poin)

Setiap pekerjaan yang telah diselesaikan oleh mahasiswa harus didemonstrasikan kepada asisten dosen. Berikut merupakan ketentuan dari demo yang perlu diperhatikan:
1. Demonstrasi pekerjaan tutorial/tugas perlu dilakukan **paling lambat seminggu setelah deadline pengumpulan**. Waktu yang dialokasikan beserta jam akan disesuaikan dengan asisten dosen Anda masing-masing.
2. Apabila terdapat halangan sehingga Anda tidak dapat mendemonstrasikan pekerjaan Anda kepada asisten dosen dalam rentang waktu yang ditentukan, Anda perlu mengontak asisten dosen Anda serta mengirimkan email kepada dosen untuk susulan demonstrasi pekerjaan.

## Tutorial: Cara Mengerjakan
1. Misalkan Anda hendak mengerjakan tutorial lab 2. Bukalah README.md untuk tutorial 2 yang ada pada website PBP
2. Baca dan pahamilah dengan teliti berkas README. Berkas ini memuat tugas serta instruksi yang perlu Anda selesaikan.
3. Kerjakan tutorial tersebut.
4. Anda dapat mengerjakan tutorial-tutorial tersebut pada repositori yang sudah Anda buat sebelumnya maupun membuat sebuah repositori baru.
5. Gunakan `git add <FILES/DIRECTORIES>` atau `git rm <FILES/DIRECTORIES>` untuk stage/unstage berkas yang nantinya akan Anda simpan ke Git.
6. Apabila Anda ingin menyimpan progres Anda secara lokal, Anda dapat melakukan **commit** ke Git. Gunakan perintah `git commit -m "<MESSAGE>"` dengan keterangan `<MESSAGE>` sebagai deskripsi pekerjaan yang akan Anda simpan.
7. Ulangi langkah 4-6 hingga Anda selesai mengerjakan tugas Anda.
8. Setelah Anda siap untuk mengumpulkan pekerjaan Anda atau Anda ingin menyimpannya pada repositori GitHub Anda, lakukan sebuah **push**. Anda dapat menggunakan perintah `git push origin <NAMA_BRANCH>` dengan keterangan `<NAMA_BRANCH>` sebagai _branch_ yang Anda tuju untuk penyimpanan di GitHub.

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

