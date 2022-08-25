---
sidebar_label: Lab 0
sidebar_position: 1
---

# Lab 0: Basic git (on GitHub) dan Deployment Aplikasi Django

Pemrograman Berbasis Platform (CSGE602022) - diselenggarakan oleh Fakultas Ilmu Komputer Universitas Indonesia, Semester Ganjil 2022/2023

---

## Tujuan Pembelajaran

Setelah menyelesaikan tutorial ini, mahasiswa diharapkan untuk dapat:

- Mengerti perintah-perintah dasar git yang perlu diketahui untuk mengerjakan proyek aplikasi.
- Menggunakan perintah-perintah dasar git yang perlu diketahui untuk mengerjakan proyek aplikasi.
- Membuat repositori git lokal dan daring (GitHub).
- Menambahkan remote antara repositori git lokal dan pasangannya pada GitHub.
- Memahami branching pada git dan mampu melakukan _merge request/pull request_.
- Melakukan deployment aplikasi Django pada Heroku.

## Pengenalan git

Dalam kehidupanmu sebagai mahasiswa Ilmu Komputer atau Sistem Informasi, kamu mungkin pernah menggunakan sebuah **version control system**. Salah satu yang mungkin kamu pakai adalah fitur _undo_ pada _text editor_. Ketika kamu membuat suatu kesalahan, kamu bisa mengembalikan kesalahanmu ke waktu sebelum kamu membuat kesalahan dengan fitur _undo_ tersebut. Contoh lain adalah ketika kamu mengerjakan dokumen secara kolaboratif di Google Drive, kamu bisa melihat setiap perubahan yang dilakukan di dokumen tersebut dan kamu bisa mengembalikan ke perubahan sebelumnya.

Pada tutorial ini, kamu akan mempelajari sebuah _version control system_ bernama [git](https://git-scm.com). git merupakan sebuah _version control system_ yang umum digunakan untuk melacak perubahan pada artefak-artefak perangkat lunak seperti _source code_, halaman HTML, atau _stylesheet_. git akan mencatat perubahan-perubahan yang terjadi pada pekerjaan kamu sebagai sebuah rangkaian _**commit**_ yang tersusun dari _commit_ terlama hingga _commit_ yang terbaru. Perubahan tersebut seperti sebuah _graph_ yang mana node merepresentasikan sebuah _commit_ dan _directed edge(s)_ merepresentasikan hubungan antara suatu _commit_ dengan _commit_ sebelumnya.

> Jangan khawatir jika kamu masih asing dengan terminologi seperti: _node_, _edge_, dan
> _graph_. Kamu akan mempelajarinya lebih lanjut dalam mata kuliah Struktur Data &
> Algoritma dan Matematika Diskret.

Sebelum melakukan tutorial ini dan tutorial-tutorial selanjutnya, pastikan kamu telah
memasang _tools_ berikut:

- [git](https://git-scm.com/downloads)
- [Python (Latest Version)](https://www.python.org/downloads/)
- [EditorConfig](http://editorconfig.org)
- _Text editor_ atau IDE yang **baik**, seperti
  [Vim](http://www.vim.org/download.php),
  [Visual Studio Code](https://code.visualstudio.com/),
  [Sublime](https://www.sublimetext.com/), atau
  [PyCharm](https://www.jetbrains.com/pycharm/).

  > Apapun pilihan teks editormu, cobalah untuk belajar menggunakan vim.
  > Vim merupakan teks editor standar yang digunakan di git. Setidaknya
  > pelajari bagaimana navigasi menggunakan tombol `hjkl` dan mengoperasikan
  > editor pada NORMAL mode (contoh: `:w`, `:q`, `:wq`, tombol `ESC` untuk
  > beralih mode NORMAL, dan `i` untuk beralih ke mode INSERT). 

Untuk meringkas dokumen tutorial ini, cara penginstalan dan konfigurasi masing-masing
perlengkapan dapat dilihat melalui tautan diatas.

## Tutorial: Basic git dan GitHub

1.  Bukalah _command prompt_ atau _shell_ favoritmu. Jika kamu menggunakan Windows, gunakan `git Bash` atau `cmd` (hanya berlaku jika kamu telah menambahkan path ke _folder executable_ git ke PATH di _environment variable_). Jika kamu menggunakan OS berbasis Unix (Linux atau Mac OS), kamu bisa menggunakan _shell_ yang tersedia pada OS-mu, seperti [bash](https://www.gnu.org/software/bash/).

    > Walaupun kamu bisa menggunakan aplikasi GUI seperti built-in GUI git, 
    > [gitKraken](https://www.gitkraken.com), atau
    > [SourceTree](https://www.sourcetree.com), **kami merekomendasikan untuk
    > menggunakan perintah melalui _shell_**. _Shell_ merupakan salah satu tools
    > yang paling umum digunakan saat pengembangan Web, terutama saat kamu harus
    > men-deploy aplikasi web kamu ke _remote server_. Akan sangat berguna jika
    > kamu mengetahui perintah _shell_ dan git ketika GUI tidak dapat diakses.
    > Mengeksekusi perintah melalui _shell_ juga **lebih cepat** dibandingkan
    > menggunakan GUI.

2.  Ubah direktori ke _folder_ yang akan kamu gunakan untuk menyimpan pekerjaanmu. Gunakan perintah `cd` untuk melakukan navigasi ke direktori yang kamu inginkan.

3.  Buat _folder_ baru untuk menyimpan file yang berhubungan dengan tutorial ini. Cobalah untuk membuat _folder_ bernama `git-exercise` dan ubah direktori (`cd`) ke _folder_ tersebut.

4.  Dalam direktori tersebut, ketik `git init` untuk membuat repositori git kosong.

5.  Cobalah untuk mengeksekusi perintah `git status` untuk melihat status dari repositori kamu ketika perintah tersebut dijalankan.

Saat ini, kamu telah berhasil membuat respositori git lokal pertamamu. Sebelum melanjutkan tutorial, ada beberapa konfigurasi yang harus kamu lakukan ke repositori git lokalmu:

1.  Atur _username_ dan _email_ yang akan diasosiasikan dengan pekerjaanmu ke repositori git ini.

    ```bash
    git config user.name "<NAME>"
    git config user.email "<EMAIL>"
    ```

    Contoh:

    ```bash
    git config user.name "Adrian Holovaty"
    git config user.email "adrian.holovaty@ui.ac.id"
    ```

2.  Jika kamu ada dalam sebuah proxy (contoh: menggunakan PC di lab Fasilkom), kamu harus mengatur HTTP _proxy_ pada konfigurasi git.

    ```bash
    git config http.proxy <PROXYHOST>:<PORT>
    ```

    Contoh (Jika kamu menggunakan PC di lab Fasilkom):

    ```bash
    git config http.proxy 152.118.24.10:8080
    ```

3.  Jika kamu ingin mengatur konfigurasi secara global (untuk setiap repositori lokal), tambahkan _flag_ `--global` pada pemanggilan `git config`.

4.  Jika kamu ingin mengetahui konfigurasi yang diatur ke repositori lokalmu, kamu bisa menggunakan perintah berikut.

    ```bash
    git config --list --local
    ```

Setelah mengatur repositori git, silakan melanjutkan ke instruksi tutorial.

1.  Buat file baru dengan nama `README.md` dalam direktori yang kamu inisiasi dengan repositori git dan tulis nama, NPM, dan kelas pada baris **pertama**, **ketiga**,  dan **kelima** pada file `README.md` tersebut.

    Contoh:

    ```
    Nama    : Adrian Holovaty

    NPM     : 1006123456

    Kelas   : Z
    ```
2.  Eksekusi perintah `git status` dalam _bash_. Perhatikan bahwa terdapat _untracked file_ bernama `README.md`. Ini menandakan bahwa ada file yang belum di-_track_ oleh git.

3.  Beri tahu git untuk men-_track_ perubahan yang ada pada `README.md`.

    ```bash
    git add README.md
    ```

4.  Eksekusi perintah `git status` lagi. Pesan status akan berubah dari eksekusi sebelumnya. Sekarang file tersebut masuk pada bagian _Changes to be committed_. Ini menandakan file tersebut akan di-_track_ oleh git pada _commit_ selanjutnya.

    > Walaupun kamu sudah mengeksekusi perintah `git add`, file `README.md` belum sepenuhnya di-_track_ oleh git. `git add` hanya memberi tahu git untuk memasukan perubahan dari file tersebut ke dalam _staging area_.

5.  Untuk menyimpan perubahan secara permanen ke dalam git, eksekusi perintah `git commit`. _Text editor_ akan muncul untuk mengetikkan pesan yang menggambarkan _commit_ yang telah kamu buat dan akan disimpan pada riwayat git.

    > Sebuah _commit_ dapat berarti perubahan yang kamu lakukan pada repositori lokal. Perubahan tersebut dapat berupa penambahan, perubahan dalam file, atau penghapusan satu atau lebih file.

6.  Setelah kamu selesai menulis pesan _commit_, simpan dan keluar dari _text editor_ yang kamu gunakan untuk menulis pesan. Semua perubahan akan disimpan sebagai _commit_ dan akan disimpan dalam riwayat git.

Kamu baru saja membuat repositori git lokal dan mulai memantau perubahan dari suatu file yang ada pada repositori. Jika kamu ingin membagikan hasil pekerjaanmu dengan tutor atau dengan tim kamu, kamu harus mengatur repositori tersebut agar dapat diakses melalui Internet. Untuk melakukan ini, kamu harus menaruh salinan dari repositori lokalmu ke repositori git daring seperti [GitHub](https://github.com).

1.  Bukalah [GitHub](https://github.com) menggunakan _web browser_ favoritmu.
2.  Buatlah akun baru atau akun yang kamu punya jika kamu telah melakukan registrasi sebelum mengikuti tutorial ini.
3.  Buat repositori baru bernama **My First Repo** dan buka laman repositori. Pastikan kamu mengatur _project visibility_ menjadi **public**.
4.  Cari dan klik tombol **clone** pada laman repositorimu. Perhatikan bahwa terdapat dua tipe cara untuk meng-_clone_ repositori, yaitu dengan menggunakan **HTTPS** dan **SSH**. Salin URL yang menggunakan **HTTPS**.
5.  Perbarui repositori git lokalmu agar semua _commit_ dapat disimpan di repositori GitHub-mu. Gunakan perintah `git remote add origin <URL_REPOSITORY>` dan gunakan URL yang tadi kamu salin sebagai argumen dari perintah tersebut.

    ```bash
    git remote add origin <URL_REPOSITORY>
    ```

    Contoh:

    ```bash
    git remote add origin https://github.com/adrianholovaty/my-first-repo.git
    ```

    > `git remote add origin` akan memberi tahu repositori lokal untuk menambahkan _path_ bernama **origin** yang menunjuk ke URL yang diberikan. Dengan begitu, kamu dapat menyimpan semua _commit_ yang kamu buat ke repositori daring menggunakan perintah `git push`.

6.  Untuk menyimpan semua _commit_ ke repositori daring di GitHub, eksekusi perintah `git push`. Kamu juga harus menambahkan nama **remote** dan **branch** yang akan diunggah (atau di-_push_).

    ```bash
    git push -u <REMOTE_NAME> <DEFAULT_BRANCH>
    ```

    Contoh:

    ```bash
    git push -u origin main
    ```
    > `git push` akan memerintah git untuk mengunggah semua _commit_ yang ada di _branch_ lokal `main` ke repositori yang ditunjuk oleh _remote_ `origin`. flag `-u` akan memastikan pemanggilan `git push` saat _branch_ `main` aktif akan di kirim ke _branch_ `main` di `origin`.  

7.  Perhatikan laman repositori GitHub kamu. Kamu akan melihat file kamu berhasil disimpan dan dapat diakses di GitHub.

Kamu juga bisa unduh (**_clone_**) repositori git lainnya ke komputermu. Cobalah untuk membuat salinan dari repositori di GitHub pada direktori yang berbeda dalam komputermu.

1.  Bukalah laman repositori kamu di GitHub.
2.  Salin URL _clone_ dengan **HTTPS**.
3.  Bukalah _command prompt_ atau _shell_ dan navigasi ke direktori berbeda di luar direktori repositori lokal yang telah kamu buat sebelumnya.
4.  Eksekusi perintah `git clone <URL>` dengan keterangan `<URL>` adalah URL repositori yang akan di-_clone_.
5.  Perhatikan bahwa nama direktori baru yang telah dibuat sama dengan nama dari repositorimu.

Pada tahap ini, kamu sebenarnya sudah punya 3 repositori: (1) orisinil, repositori lokal, (2) repositori daring di GitHub yang telah terkoneksi dengan repositori pertama, dan (3) repositori lainnya yang kamu _clone_ dari repositori (2). Sekarang coba tambahkan _commit_ baru di repositori (1), _push_ ke repositori (2), dan unduh (istilah git: **pull**) ke repositori (3).

1.  Bukalah direktori repositori lokal yang kamu insiasi sebelumnya untuk pertama kalinya.
2.  Ubah file `README.md` dengan menambahkan _string_ yang mendeskripsikan hobi kamu pada baris ketujuh.

    Contoh:

    ```
    Nama    : Adrian Holovaty

    NPM     : 1006123456

    Kelas   : Z

    Hobi    : Ngoding
    ```

3.  Simpan file tersebut dan tambahkan ke repositori git lokal.
4.  _Commit_ file tersebut dan _push_ ke GitHub.
5.  Cek laman repositori GitHub kamu. Pastikan `README.md` sudah ter-_update_. Kamu bisa membandingkannya dengan versi sebelumnya dengan mengecek _diff_ antara _commit_ terakhir dengan _commit_ sebelumnya.
6.  Bukalah direktori repositori lokal hasil _clone_ repositori dari GitHub.
7.  _Update_ repositori tersebut dengan mengeksekusi perintah `git pull origin main`.
8.  Cek repositori yang kamu _clone_. Kamu dapat melihat bahwa file `README.md` juga telah ter-_update_.

Selamat! Anda setidaknya telah mengetahui perintah git dasar yang dapat kamu gunakan untuk mengelola pekerjaanmu di git dan GitHub. Kamu mungkin bertanya mengapa kita perlu bersusah-susah melakukan skilus _add-commit-push-pull_ ini? Mengapa kita tidak gunakan Dropbox atau Google Drive saja? 

Benar bahwa Dropbox, Google Drive, atau layanan _cloud storage_ lainnya lebih mudah digunakan. Namun, _tools_ tersebut digunakan untuk hal yang lebih umum. _Tools_ tersebut tidak dibuat secara spesifik untuk mengatasi perubahan terhadap artefak-artefak perangkat lunak, khususnya ketika ada perubahan yang dilakukan secara **bersamaan** dan melibatkan banyak pihak. git, sebagai _version control system_, dapat memastikan integritas dari semua perubahan ketika ada beberapa pihak yang bekerja secara bersamaan dalam satu repositori. Kamu akan belajar lebih lanjut mengenai cara menggunakan _version control system_ di lingkup keja tim selanjutnya di mata kuliah ini dan mata kuliah selanjutnya (IK: Advanced Programming, SI: Enterprise-Scale Programming).

## Tutorial: Branch dan Merge

Setelah mempelajari beberapa dasar dari git, kamu akan mulai mempelajari beberapa konsep lanjutan dari git. Pada pengembangan aplikasi, kita sebagai _developer_ akan lebih banyak bekerja sama dengan orang lain sebagai tim. Beruntungnya, git memiliki fitur untuk mengakomodasi kolaborasi antar developer. Beberapa fitur yang dimaksud adalah _branch_ dan _merge_. 

Secara sederhana, _branch_ adalah fitur git yang memungkinkan sebuah _source code_ yang disimpan pada git memiliki versi lain atau biasanya cabang yang berisikan perubahan-perubahan sesuai dengan kebutuhan dan _developer_ yang mengembangkannya. Umumnya setelah kita melakukan `git push`, perubahan yang kita simpan akan masuk ke dalam cabang yang dituju oleh kita. Kegunaan _branch_ ini adalah untuk menghindari tabrakan, konflik serta _race condition_ dalam hal melakukan perubahan ketika sedang dalam pengembangan.

Adapun _merge_ adalah fitur git yang digunakan untuk menggabungkan suatu perubahan yang telah disimpan dalam satu _branch_ ke dalam _branch_ target. Pada saat melakukan `git merge`, kejadian _merge conflict_ dapat terjadi. _Merge conflict_ adalah sebuah konflik yang terjadi apabila terdapat perubahan pada file yang sama dalam dua _branch_ berbeda atau ketika satu file telah dihapus pada _branch_ pertama, namun berkas tersebut ada dan mengalami perubahan pada _branch_ kedua. Untuk menyelesaikan _merge conflict_, biasanya _developer_ dapat menggunakan GUI yang telah disiapkan oleh git pada GitHub. Namun apabila platform tersebut sedang tidak dapat mengakomodasi proses _merge conflict_, biasanya _developer_ akan diminta untuk menyelesaikannya di repositori lokal mereka.

Sekarang kita akan mencoba untuk menerapkan konsep _branch_ dan _merge_.

1. Pada direktori git lokal yang telah kita kerjakan pada tutorial sebelumnya, buatlah sebuah _branch_ baru di repositori tersebut.

    ```bash
    git checkout -b <NAMA_BRANCH>
    ```

    Contoh:

      ```bash
      git checkout -b second
      ```

    > Sekarang, sebuah branch baru telah dibuat. Kamu bisa melihat branch apa saja yang ada di repositori lokal dengan command `git branch`. Untuk melakukan _switching_ ke branch lain, kamu dapat langsung melakukannya dengan perintah `git checkout <NAMA_BRANCH>`.

2. Buatlah sebuah perubahan pada file README.md dengan mengubah hobi kamu di baris ketujuh ke hobi lain.

    Contoh:

    ```
    Nama    : Adrian Holovaty

    NPM     : 1006123456

    Kelas   : Z

    Hobi    : Tidur
    ```

3.  Simpan file tersebut dan tambahkan ke repositori git lokal.

4.  _Commit_ file tersebut dan _push_ ke GitHub.

5.  Cek laman repositori GitHub kamu. Pada pilihan branch yang ada di repositori kamu, sekarang kamu dapat melihat terdapat branch baru yang baru saja kamu buat.

6. Sekarang _merge_ atau gabungkan _branch_ baru tersebut ke branch utama dari repositori. Kamu dapat melakukannya dengan memilih tab `pull request` pada halaman repositori kamu di GitHub dan memilih opsi `new pull request`.

7. Pilihlah _branch_ main sebagai base dan _branch_ baru kamu sebagai _compare_. Setelah memilih _branch_ tersebut, kamu dapat melihat perbedaan antara dua branch yang akan digabungkan. Pilihlah `create pull request` untuk menggabungkan kedua _branch_ tersebut.

8. Setelah itu, kamu akan masuk ke sebuah halaman form untuk mengisi informasi tentang _pull request_ yang akan kamu lakukan. Kamu dapat mengisi deskripsi tentang _pull request_ serta mengubah judul dari _pull request_. Untuk saat ini diamkan saja dulu dan langsung pilihlah `create pull request`.

9. GitHub akan secara otomatis melakukan cek dan membandingkan antara kedua _branch_ yang ingin digabungkan. Apabila tidak ada konflik, kamu bisa langsung memilih `merge pull request`.

10. Sekarang kedua _branch_ telah tergabung. Kamu bisa melihat perubahan yang kamu lakukan di branch baru telah tersimpan atau tergabung dalam _branch_ main.

## Tutorial: Django Init

1. Buatlah sebuah direktori baru bernama `django_exercise` dan masuklah ke dalam direktori tersebut.
2. Bukalah _command prompt_ atau _shell_ dan buatlah sebuah _virtual environment_. _Virtual environment_ ini berguna untuk mengisolasi _package_ serta _dependencies_ dari aplikasi sehingga tidak bertabrakan dengan versi lain yang ada pada komputermu. Kamu dapat membuat _virtual environment_ dengan perintah:
    ```bash
    python -m venv env
    ```
3. Nyalakan _virtual environment_ yang telah dibuat dengan perintah berikut. Pastikan saat ini kamu sedang berada pada direktori `django_exercise` yang telah dibuat sebelumnya. Perhatikan pula bahwa Windows dengan Unix memiliki perintah yang berbeda. Apabila virtual environment berhasil dinyalakan, kamu dapat melihat sebuah teks `(env)` di posisi paling kiri dari baris input _shell_ milikmu.
    ```
    Windows:
    env\Scripts\activate.bat
    pip install -r requirements.txt
    ```
    ```
    Unix (Linux & Mac OS):
    source env/bin/activate
    pip install -r requirements.txt
    ```

4. Instal _dependencies_ yang diperlukan untuk menjalankan aplikasi di lokal dengan perintah `pip install <NAMA_DEPENDENCIES>`. Adapun nama _dependencies_ yang perlu kamu instal dapat kamu lihat di bawah ini.
  - django 
  - gunicorn
  - whitenoise
  - psycopg2-binary
  - requests
  - urllib3

5. Simpan daftar _dependencies_ yang sudah kamu instal ke dalam sebuah file `txt`. Kamu dapat menggunakan perintah `pip freeze > requirements.txt`. 

6. Buatlah sebuah proyek Django dengan perintah `django-admin startproject <NAMA_PROYEK> .` dengan keterangan `<NAMA_PROYEK>` disesuaikan dengan nama yang kamu inginkan dan `.` merupakan keterangan untuk memberitahu `django_admin` untuk menginisiasi proyek Django di direktori saat ini sebagai _root_ dari proyek.

7. Eksekusi perintah `python manage.py runserver` di Windows atau `./manage.py runserver` di OS berbasis Unix untuk menjalankan aplikasi Django. Pastikan bahwa file `manage.py` ada pada direktori yang aktif pada _shell_ kamu saat ini.

8. Bukalah `http://localhost:8000` menggunakan _browser_ favoritmu untuk melihat aplikasi Django yang telah kamu buat. Kamu sekarang dapat melihat sebuah roket sedang meluncur di halaman tersebut. Selamat! Kamu telah berhasil membuat aplikasi Django dari awal.

9. Untuk mematikan server Django yang sedang berjalan, kamu dapat menggunakan tombol `Ctrl+C` pada Windows/Linux atau `Command+C` pada MacOS.

10. Untuk mematikan _virtual enviroment_, kamu dapat mengeksekusi perintah `deactivate` pada _shell_ yang sedang kamu gunakan. Teks `(env)` akan segera hilang yang menandakan bahwa _virtual environment_ telah dinonaktifkan.

## Tutorial: Melakukan Deploy Aplikasi Django ke Heroku

Setelah kamu belajar tentang git dan GitHub serta mempelajari cara membuat aplikasi Django, kamu akan mempelajari cara memanfaatkan GitHub untuk melakukan _deployment_ aplikasi Django ke Internet secara otomatis. Di PBP ini, kamu akan memanfaatkan Heroku sebagai _host_ dari aplikasi yang akan kamu _deploy_.

1. Buatlah sebuah repositori baru di GitHub kamu yang akan digunakan sebagai repositori aplikasi Django.

2. Lakukanlah `git init` pada direktori `django_exercise` yang telah kamu kerjakan sebelumnya dan atur _origin_ dari repositori git lokal baru tersebut ke repositori GitHub yang telah kamu buat.

3. Buatlah sebuah file bernama `Procfile` yang berisikan skrip berikut. Berkas ini akan digunakan oleh Heroku untuk membaca aktivitas log aplikasi ke sistem _monitoring_ internal Heroku. Isi dari berkas tersebut adalah sebagai berikut.
    ```
    web: gunicorn aplikasi_django.wsgi --log-file -
    ```
> Ubah `aplikasi_django` sesuai dengan nama proyek Django yang ingin kamu _deploy_.

4. Buatlah sebuah berkas baru bernama `dpl.yml` di _.github/workflows_ dari repositori kamu. Berkas ini digunakan untuk mengeksekusi _deployment_ oleh _runner_ dari GitHub Actions. Salin dan tempel baris skrip di bawah ini ke dalam berkas `dpl.yml`:
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

5. Buatlah sebuah berkas `.gitignore`. Berkas ini berfungsi untuk memberi tahu git mengenai berkas atau direktori mana sajakah yang tidak boleh ikut di-_push_ ke repositori daring milikmu. Kamu dapat mengisi berkas tersebut dengan menyalin isi berkas `.gitignore` dari [website](https://djangowaves.com/tips-tricks/gitignore-for-a-django-project/) berikut.

6. Tambahkan beberapa konfigurasi berikut pada file `settings.py` proyek Django-mu:
    ```
    import os
    PROJECT_ROOT = os.path.dirname(os.path.abspath(__file__))
    STATIC_ROOT = os.path.join(PROJECT_ROOT, 'static')
    ```

7. Tambahkan `*` ke dalam `ALLOWED_HOSTS` pada `settings.py` untuk dapat memberikan akses ke semua _host_.
Contoh:
    ```
    ALLOWED_HOSTS = ["*"]
    ```

8. Tambahkan _middleware_ baru ke dalam variabel `MIDDLEWARE` di `settings.py`:
    ```
    MIDDLEWARE = [
        ...,
        'whitenoise.middleware.WhiteNoiseMiddleware',
    ]
    ```

9. `Add`, `commit`, dan `push` perubahan yang telah kamu lakukan ke GitHub milikmu.

Setelah kamu melakukan prosedur di atas, aplikasi Django barumu siap untuk di-_deploy_ ke Heroku. Apabila kamu membuka tab GitHub Actions di repositorimu, terlihat bahwa _workflow_ sudah berjalan namun berstatus gagal karena terdapat _error_ yang mengatakan bahwa terdapat beberapa parameter dalam proses _deployment_ yang tidak ditemukan. Hal itu terjadi karena kamu belum mengonfigurasi parameter yang dibutuhkan oleh _workflow_. Sekarang, kamu akan melakukan konfigurasi terhadap parameter tersebut.

> Pastikan sebelumnya kamu telah memiliki akun Heroku dan telah membuat sebuah aplikasi Heroku.<br />
> Silakan baca README pada _root_ repositori PBP untuk melihat cara membuat akun dan aplikasi Heroku.

1. Salin API Key dari akun kamu. API Key dapat kamu temukan di `Account Settings -> API Key`. Simpanlah API Key beserta informasi tentang aplikasi Heroku kamu pada file teks dengan format berikut:
    ```
    HEROKU_API_KEY: <VALUE_API_KEY_ANDA>
    HEROKU_APP_NAME: <NAMA_APLIKASI_HEROKU_ANDA>
    ```

2. Bukalah konfigurasi repositori GitHub kamu dan bukalah bagian Secrets untuk GitHub Actions (`Settings -> Secrets -> Actions`).

3. Tambahkan variabel `repository secret` baru untuk melakukan _deployment_. Pasangan Name-Value dari variabel yang akan kamu buat dapat kamu ambil dari informasi yang kamu catat pada file teks sebelumnya. Contohnya adalah sebagai berikut.
    ```
    (NAME)HEROKU_APP_NAME
    (VALUE)APLIKASI-SAYA
    ```
4. Simpan variabel-variabel tersebut.

5. Bukalah tab GitHub Actions dan jalankan kembali _workflow_ yang gagal.

Setelah _workflow_ kamu jalankan kembali dan status _deployment_ menjadi sukses (dapat kamu lihat terdapat simbol centang hijau pada repositori kamu), kamu dapat mengakses aplikasi milikmu di `https://<nama-aplikasi-heroku>.herokuapp.com`. Selamat! Sekarang aplikasi Django milikmu dapat diakses di Internet.

## Sumber-Sumber Tambahan

- [git Tutorials & Training by Atlassian](https://www.atlassian.com/git/tutorials)
- [Try git in your Web browser](https://try.github.io)
- [Pro git e-Book by Scott Chacon & Ben Straub](https://git-scm.com/book/en/v2)
- [Graph theory](http://think-like-a-git.net/sections/graph-theory.html) and
  [its application in git](http://think-like-a-git.net/sections/graphs-and-git.html)
- [How to Write a git Commit Message](https://chris.beams.io/posts/git-commit/)

## Kontributor

- Rafi Indrawan Dirgantara
- Mohamad Rifqy Zulkarnaen
- Muhammad Athallah
- Muhammad Azis Husein

## Credits

Dokumen ini dibuat berdasarkan [Exercise 0: Introduction to git](https://gitlab.com/CSUI-AdvProg-2017/lab-exercises) yang ditulis oleh Tim Pengajar Pemrograman Lanjut 2017 ([@addianto](https://gitlab.com/addianto), [@muhammad.ardhan](https://gitlab.com/muhammad.ardhan), [@fbenarto](https://gitlab.com/fbenarto), et al.) dan [PBP Ganjil 2021](https://gitlab.com/PBP-2021/pbp-lab) yang ditulis oleh Tim Pengajar Pemrograman Berbasis Platform 2021 ([@prakashdivyy](https://gitlab.com/prakashdivyy)). Segala tutorial serta instruksi yang dicantumkan pada repositori ini dirancang sedemikian rupa sehingga mahasiswa yang sedang mengambil mata kuliah Pemrograman Berbasis Platform dapat menyelesaikan tutorial saat sesi lab berlangsung.