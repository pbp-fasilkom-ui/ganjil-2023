---
sidebar_label: Lab 1
---
import Countdown from "@site/src/components/Countdown"

# Lab 1: Pengenalan Aplikasi Django dan Model-View-Template (MVT) pada Django

Pemrograman Berbasis Platform (CSGE602022) - diselenggarakan oleh Fakultas Ilmu Komputer Universitas Indonesia, Semester Ganjil 2022/2023

---
## Tujuan Pembelajaran

Setelah menyelesaikan tutorial ini, mahasiswa diharapkan untuk dapat:
- Mengerti konsep MVT pada aplikasi Django
- Mengerti bagaimana alur Django menampilkan sebuah halaman HTML
- Mengerti konfigurasi _routing_ yang ada pada `urls.py`
- Memahami kaitan _models_, _views_ dan _template_ pada Django
- Memahami sintaks dasar untuk melakukan _mapping_ data ke template HTML

---
## Tenggat Waktu Pengumpulan
#### Kelas A, B:
<Countdown deadline={new Date("08 September 2022 16:40 GMT+7")} />

#### Kelas C, D, E, F:
<Countdown deadline={new Date("08 September 2022 14:40 GMT+7")} />

---
## Pengenalan Aplikasi Django
Django adalah salah satu _web framework_ yang menggunakan bahasa pemrograman Python. _Web framework_ ini sangat berguna dalam pengembangan web karena sudah menyediakan komponen-komponen yang dibutuhkan untuk membuat dan menjalankan suatu web tanpa harus mulai dari nol. Sebelum memulai pengembangan web menggunakan Django, penting untuk memahami apa itu `virtual environment`  (virtualenv). Pada tutorial-0 sebelumnya, kamu sudah pernah membuat sebuah `virtual environment` untuk menjalankan aplikasi Django simpel di mesin lokalmu. Singkatnya, _virtual environment_ (lingkungan virtual) berfungsi untuk memisahkan pengaturan dan _package_ yang diinstal pada setiap proyek Django sehingga perubahan yang dilakukan pada satu proyek tidak mempengaruhi proyek lainnya. Dengan kata lain, setiap proyek Django sebaiknya memiliki `virtualenv`-nya sendiri.

## Konsep Model, Views, dan Template (MVT)

![Visualisasi berjalannya aplikasi Django](https://1.bp.blogspot.com/-u-n0WYPhc3o/X9nFtvNZB-I/AAAAAAAADrE/kD5gMaz4kNQIZyaUcaJJFVpDxdKrfoOwgCLcBGAsYHQ/s602/3.%2BPython%2BDjango%2B-%2BModul%2B2_Page2_Image5.jpg)

Django merupakan _framework_ yang mengikuti struktur MVT (Model-View-Template). MVT adalah salah satu turunan dari struktur MVC (Model-View-Controller), namun _model_-nya lebih difokuskan sebagai objek yang mendefinisikan entitas pada _database_ beserta konfigurasinya, lalu _views_ berperan sebagai logika utama dari aplikasi yang akan melakukan pemrosesan terhadap permintaan yang masuk, dan _template_ berperan sebagai tampilan yang akan dikembalikan kepada pengguna. 

Adapun alur sebuah permintaan diproses di Django adalah sebagai berikut. Pertama, permintaan yang masuk ke dalam server Django akan diproses melalui `urls` untuk diteruskan ke `views` yang didefinisikan oleh pengembang untuk memproses permintaan tersebut. Apabila terdapat proses yang membutuhkan keterlibatan _database_, maka nantinya `views` akan memanggil _query_ ke `models` dan _database_ akan mengembalikan hasil dari _query_ tersebut ke `views`. Setelah permintaan telah selesai diproses, hasil proses tersebut akan dipetakan ke dalam HTML yang sudah didefinisikan sebelum akhirnya HTML tersebut dikembalikan ke pengguna sebagai respons.

## Tutorial: Permulaan

1. Masuk ke [https://github.com/pbp-fasilkom-ui/django-pbp-template](https://github.com/pbp-fasilkom-ui/django-pbp-template) dan pilih aksi `Use this template`. Kamu akan dialihkan ke suatu halaman untuk membuat repositori baru dengan template yang sama seperti repositori template Django.

2. Masukkan nama repositori sesuai dengan keinginanmu. Pastikan repositori kamu bersifat _public_ sehingga nantinya dapat diperiksa oleh asisten dosen. Bagian `Include all branches` tidak perlu dicentang.

3. _Clone_ repositori baru tersebut ke komputer dengan perintah `git clone <URL_REPOSITORI>` dengan keterangan `<URL_REPOSITORI>` disesuaikan dengan tautan repositori yang baru saja kamu buat.

4. Masuk ke dalam repositori yang sudah kamu _clone_ di komputermu dan buatlah sebuah _virtual environment_ dengan perintah berikut.
    
    ```
    python -m venv env
    ```
    
5. Nyalakan _virtual environment_ dengan perintah yang sesuai dengan jenis _operating system_ yang kamu gunakan.
    
    ```bash
    Windows:
    env\Scripts\activate.bat
    ```
    ```bash
    Unix (Linux & Mac OS):
    source env/bin/activate
    ```

6. Install _dependencies_ yang diperlukan untuk menjalankan proyek Django dengan perintah `pip install -r requirements.txt`.

7. Coba jalankan proyek Django yang telah kamu buat dengan perintah `python manage.py runserver` dan bukalah [http://localhost:8000](http://localhost:8000) di _browser_ favoritmu untuk mengetes apakah proyek Django dapat berjalan dengan baik.

Setelah kamu mengonfigurasi repositori dan proyek Django, sekarang kamu akan belajar bagaimana cara membuat sebuah `django-app`.

## Tutorial: Membuat Aplikasi Django beserta Konfigurasi Model

1. Buatlah sebuah `django-app` bernama `wishlist` dengan perintah `python manage.py startapp wishlist`.

2. Buka `settings.py` di folder `project_django` dan tambahkan aplikasi `wishlist` ke dalam variabel `INSTALLED_APPS` untuk mendaftarkan `django-app` yang sudah kamu buat ke dalam proyek Django-mu. Contohnya adalah sebagai berikut.
    
    ```
    INSTALLED_APPS = [
        ...,
        'wishlist',
    ]
    ```

3. Buka file `models.py` yang ada di folder `wishlist` dan tambahkan potongan kode berikut.
    
    ```
    from django.db import models

    class BarangWishlist(models.Model):
        nama_barang = models.CharField(max_length=50)
        harga_barang = models.IntegerField()
        deskripsi = models.TextField()
    ```

4. Lakukan perintah `python manage.py makemigrations` untuk mempersiapkan migrasi skema model ke dalam _database_ Django lokal.

5. Jalankan perintah `python manage.py migrate` untuk menerapkan skema model yang telah dibuat ke dalam _database_ Django lokal.

6. Buatlah sebuah folder bernama `fixtures` di dalam folder aplikasi `wishlist` dan buatlah sebuah berkas bernama `initial_wishlist_data.json` yang berisi kode berikut.
    
    ```
    [
        {
            "model":"wishlist.barangwishlist",
            "pk":1,
            "fields":{
                "nama_barang":"iPhone 14 Pro Maag",
                "harga_barang":"14000000",
                "deskripsi": "Bikin sakit Maag karena harganya mahal."
            }
    },
    {
            "model":"wishlist.barangwishlist",
            "pk":2,
            "fields":{
                "nama_barang":"Topi Bundar",
                "harga_barang":"99000",
                "deskripsi": "Bundar topi saya, kalau tidak bundar bukan topi saya."
            }
        },
        {
            "model":"wishlist.barangwishlist",
            "pk":3,
            "fields":{
                "nama_barang":"Kasur Lipat",
                "harga_barang":"500000",
                "deskripsi": "Berapa lapis? Ratusan!"
            }
        }
    ]
    ```

7. Jalankan perintah `python manage.py loaddata initial_wishlist_data.json` untuk memasukkan data tersebut ke dalam _database_ Django lokal.

## Tutorial: Implementasi Views Dasar

1. Buka `views.py` yang ada pada folder `wishlist` dan buatlah sebuah fungsi yang menerima parameter `request` dan mengembalikan `render(request, "wishlist.html")`. Contohnya adalah sebagai berikut.
    
    ```
    def show_wishlist(request):
        return render(request, "wishlist.html")
    ```

2. Buatlah sebuah folder bernama `templates` di dalam folder aplikasi `wishlist` dan buatlah sebuah berkas bernama `wishlist.html`. Isi dari `wishlist.html` dapat kamu isi dengan _template_ berikut.
    
    ```
    {% extends 'base.html' %}

    {% block content %}
    <h5>Nama: </h5>
    <p>Fill me!</p>

    <table>
        <tr>
        <th>Nama Barang</th>
        <th>Harga Barang</th>
        <th>Deskripsi</th>
        </tr>
        {% comment %} Tambahkan data di bawah baris ini {% endcomment %}
    </table>

    {% endblock content %}
    ```

3. Buatlah sebuah berkas di dalam folder aplikasi `wishlist` bernama `urls.py` untuk melakukan _routing_ terhadap fungsi `views` yang telah kamu buat sehingga nantinya halaman HTML dapat ditampilkan lewat _browser_-mu. Isi dari `urls.py` tersebut adalah sebagai berikut.
    
    ```
    from django.urls import path
    from wishlist.views import show_wishlist

    app_name = 'wishlist'

    urlpatterns = [
        path('', show_wishlist, name='show_wishlist'),
    ]
    ```

4. Daftarkan juga aplikasi `wishlist` ke dalam `urls.py` yang ada pada folder `project_django` dengan menambahkan potongan kode berikut pada variabel `urlpatterns`.
    
    ```
    ...
    path('wishlist/', include('wishlist.urls')),
    ...
    ```

5. Jalankan proyek Django-mu dengan perintah `python manage.py runserver` dan bukalah [http://localhost:8000/wishlist/](http://localhost:8000/wishlist/) di browser favoritmu untuk melihat halaman yang sudah kamu buat.

Apabila muncul sebuah halaman yang berisikan tabel _wishlist_, maka selamat! Kamu telah berhasil melakukan _routing_ sebuah fungsi views yang dapat melakukan _render_ sebuah halaman HTML. Akan tetapi seperti yang dapat kamu lihat, tidak ada data pada tabel _wishlist_ tersebut. Kamu juga dapat melihat tidak jelas milik siapa _wishlist_ tersebut sehingga kamu ingin menampilkan nama kamu ke dalam _wishlist_ tersebut. Sekarang, kamu akan mempelajari bagaimana menampilkan data ke dalam HTML dari _database_ Django lokal maupun data atau variabel yang kamu definisikan dalam berkas `views.py`.

## Tutorial: Menghubungkan Models dengan Views dan Template

1. Pada fungsi _views_ yang telah kamu buat, import _models_ yang sudah kamu buat sebelumnya ke dalam file `views.py`. Kamu akan menggunakan _class_ tersebut untuk melakukan pengambilan data dari _database_. Contohnya adalah sebagai berikut.
    
    ```
    from django.shortcuts import render
    from wishlist.models import BarangWishlist
    ...
    ```

2. Tambahkan potongan kode di bawah ini ke dalam fungsi `show_wishlist` yang sudah kamu buat sebelumnya. Potongan kode ini berfungsi untuk memanggil fungsi _query_ ke _model database_ dan menyimpan hasil _query_ tersebut ke dalam sebuah variabel.

    Sesuaikan isi variabel `nama` dengan nama kalian, ya. :wink:
    
    ```
    data_barang_wishlist = BarangWishlist.objects.all()
    context = {
        'list_barang': data_barang_wishlist,
        'nama': 'Kak Cinoy'
    }
    ```

3. Tambahkan `context` sebagai parameter ketiga pada pengembalian fungsi _render_ di fungsi yang sudah kamu buat sebelumnya. Data yang ada pada variabel `context` tersebut akan ikut di-_render_ oleh Django sehingga nantinya kamu dapat memunculkan data tersebut pada halaman HTML.
    
    ```
    return render(request, "wishlist.html", context)
    ```

Sekarang, kamu akan belajar melakukan _mapping_ terhadap data yang telah ikut di-_render_ pada fungsi `views` untuk dapat memunculkannya di halaman HTML. Untuk melakukan _mapping_ tersebut, kamu dapat menggunakan sintaks khusus _template_ yang ada pada Django, yakni `{{data}}`. Apabila kamu tertarik untuk mengetahui lebih jauh tentang sintaks dari _template_ yang ada pada Django, kamu dapat membaca dan mempelajari lebih dalam di [dokumentasi _template tags_ Django](https://docs.djangoproject.com/en/4.1/ref/templates/builtins/).

1. Bukalah file HTML yang sudah kamu buat sebelumnya pada folder `templates` yang ada di dalam direktori `wishlist`.

2. Ubah `Fill me!` yang ada di dalam HTML tag `<p>` menjadi `{{nama}}` untuk menampilkan nama kamu di halaman HTML. Contohnya adalah sebagai berikut.
    
    ```
    ...
    <h5>Nama: </h5>
    <b>{{nama}}</b>
    ...
    ```

3. Untuk menampilkan daftar barang ke dalam tabel, kamu perlu melakukan iterasi terhadap variabel `list_barang` yang telah kamu ikut _render_ ke dalam HTML. Perhatikan bahwa kamu tidak dapat memanggil daftar barang tersebut secara langsung seperti yang kamu lakukan pada langkah 2 sebab variabel `list_barang` merupakan sebuah kontainer yang berisikan objek. Kamu juga perlu memanggil nama variabel/atribut spesifik dari objek yang ada dalam kontainer tersebut untuk memanggil data dari objek tersebut. Contohnya adalah sebagai berikut.
    
    ```
    ...
    {% comment %} Tambahkan data di bawah baris ini {% endcomment %}
    {% for barang in list_barang %}
        <tr>
            <th>{{barang.nama_barang}}</th>
            <th>{{barang.harga_barang}}</th>
            <th>{{barang.deskripsi}}</th>
        </tr>
    {% endfor %}
    ...
    ```
    
Sekarang, cobalah untuk _refresh_ halaman tersebut dan lihatlah apakah data yang kamu ikut masukkan ke dalam `views` ikut muncul di dalam halaman web. Apabila sudah muncul, maka selamat! Kamu telah berhasil menyambungkan `models` dengan `views` dan `template` sekaligus mempelajari dasar dari sintaks _template_ dari Django.

Selanjutnya, silakan lakukan `add`, `commit`, dan `push` perubahan yang sudah kamu lakukan untuk menyimpannya ke dalam repositori GitHub.

## Akhir Kata

Akhirnya selesai juga! Selamat, kamu telah bertahan sampai sejauh ini mengikuti tutorial dan mempelajari seluk beluk tentang Django!

Setelah kamu menyelesaikan seluruh tutorial di atas, harapannya kini kamu lebih paham dan ke depannya kamu dapat lebih banyak bereksplorasi dengan _framework_ Django dalam membuat sebuah aplikasi web.

Sedikit tips dan trik bertahan hidup sebagai _developer_ (dan mahasiswa Fasilkom UI) ke depannya; **perbanyaklah PDKT dengan Google, YouTube, dan StackOverflow**. Situs web ini adalah "cahaya" yang akan membantu kamu menghadapi _error_ yang kamu temukan selama ngoding! Bahkan, seorang _Software Engineer_ yang bekerja di Google pun selalu "berguru" kepada ketiga ksatria tersebut ketika mereka sedang dihadapkan dengan masalah. Oleh karena itu, janganlah sungkan untuk bercerita kepada mereka! :blush:

![Petuah Hidup sebagai Anak Fasilkom](https://pbs.twimg.com/media/EWDAn-XWkAs3Y5T.jpg)

### HAPPY CODING!

## Sumber Bacaan Lebih Lanjut
- [Dokumentasi Django](https://docs.djangoproject.com/en/4.1/)
- [Membuat Data Inisial di Proyek Django](https://docs.djangoproject.com/en/4.1/howto/initial-data/)
- [Mengenal Django Framework](https://www.contohapps.com/2020/12/mengenal-django-framework.html)
- [Why Django is the Best Web Framework for Your Project](https://steelkiwi.com/blog/why-django-best-web-framework-your-project/)

## Kontributor
- Mohamad Rifqy Zulkarnaen
- Muhammad Athallah

## Credits
Tutorial ini dikembangkan berdasarkan [PBP Ganjil 2021](https://gitlab.com/PBP-2021/pbp-lab) yang ditulis oleh Tim Pengajar Pemrograman Berbasis Platform 2021 ([@prakashdivyy](https://gitlab.com/prakashdivyy)). Segala tutorial serta instruksi yang dicantumkan pada repositori ini dirancang sedemikian rupa sehingga mahasiswa yang sedang mengambil mata kuliah Pemrograman Berbasis Platform dapat menyelesaikan tutorial saat sesi lab berlangsung.
