---
sidebar_label: Lab 4
---

# Lab 4: Web Design Menggunakan HTML dan CSS3

Pemrograman Berbasis Platform (CSGE602022) - diselenggarakan oleh Fakultas Ilmu Komputer Universitas Indonesia, Semester Gasal 2022/2023

---

## **Tujuan Pembelajaran**

Setelah menyelesaikan tutorial ini, mahasiswa diharapkan untuk:
- Mengerti susunan tag pada HTML5
- Mengetahui berbagai jenis tag HTML5
- Mengerti cara penulisan CSS
- Mengetahui _static files_ pada Django
- Mengerti penggunaan _selector_ pada CSS

## Pengenalan HTML

Silakan pelajari dan mencoba sendiri HTML pada referensi [ini](https://www.w3schools.com/html/default.asp).

Perbedaan antara HTML dan HTML5 bisa kamu baca pada referensi [ini](https://www.geeksforgeeks.org/difference-between-html-and-html5/).

## Pengenalan CSS

**Apa itu CSS?**

Cascading Style Sheets (CSS) adalah bahasa yang digunakan untuk mendeskripsikan tampilan dan format dari sebuah situs web yang ditulis pada _markup language_ (seperti HTML). Kegunaannya menjadikan tampilan situs web lebih menarik.

Untuk mempelajari perbedaan antara CSS dan CSS3 bisa kamu baca pada referensi [ini](https://www.geeksforgeeks.org/difference-between-css-and-css3/).

**Cara Penulisan CSS**

Secara umum, CSS dapat dituliskan dalam bentuk sebagai berikut.

```css
selector {
  properties: value;
}
```

Silakan pelajari dan mencoba sendiri CSS pada referensi [ini](https://www.w3schools.com/css/).

Terdapat tiga jenis cara penulisan CSS:

1. **Inline Styles**
2. **Internal Style Sheet**
3. **External Style Sheet**

Silakan pelajari tentang ketiga jenis CSS tersebut pada referensi [ini](https://www.geeksforgeeks.org/types-of-css-cascading-style-sheet/).

Perlu diperhatikan, jika kamu membuat jenis External Style Sheet, kamu perlu menambahkan tag `{% load staticfiles %}` pada halaman HTML kamu. Contohnya seperti potongan kode di bawah ini.

```html
{% load staticfiles %}
<html>
  <head>
    <title>Tutorial CSS Yay</title>
    <link rel="stylesheet" href="{% static 'css/tutorial.css' %}" />
  </head>
  <body>
    <div>
      <h1>Tutorial CSS Yay</h1>
    </div>
    <div id="main">
      <div>
        <p>published: 04 Oktober 2021</p>
        <h1><a href="">Tutorial CSS ku</a></h1>
        <p>Yay ini tutorial yang gampang!</p>
      </div>
    </div>
  </body>
</html>
```

Hal ini dapat terjadi karena CSS merupakan _static files_ di Django. _Static files_ akan dijelaskan pada bagian selanjutnya.

**Catatan Tambahan**

Jika terdapat lebih dari satu _style_ yang didefinisikan untuk suatu elemen, maka _style_ yang akan diterapkan adalah yang memiliki prioritas yang lebih tinggi. Berikut ini urutan prioritasnya, nomor 1 yang memiliki prioritas paling tinggi.

1. Inline style
2. External dan internal style sheets
3. Browser default

## _Static files_ pada Django
Pada _framework_ Django, terdapat file-file yang disebut dengan _static files_. _Static files_ merupakan file-file pendukung HTML pada suatu situs web. Contoh _static files_ antara lain seperti CSS, JavaScript dan gambar. Pengaturan untuk _static files_ terletak pada file `settings.py`.

```python
  ...
  # Static files (CSS, JavaScript, Images)
  # httpsdocs.djangoproject.comen1.9howtostatic-files
  STATIC_ROOT = os.path.join(PROJECT_ROOT, 'static')
  STATIC_URL = 'static'
  ...
```

Pada `settings.py`, terdapat `STATIC_ROOT` yang menentukan _absolute path_ ke direktori _static files_ ketika menjalankan perintah `collectstatic` pada proyek dan terdapat `STATIC_URL` yang merupakan URL yang dapat diakses publik untuk memperoleh _static files_ tersebut.

Perintah `collectstatic` adalah perintah untuk mengumpulkan _static files_ dari semua app sehingga mempermudah akses untuk semua app.

Penjelasan lebih lengkap mengenai _static files_ dapat kamu baca pada referensi [ini](https://docs.djangoproject.com/en/4.1/ref/contrib/staticfiles/).


## Selector pada CSS

Pada bagian ini kamu akan mempelajari 3 buah _selector_ pada CSS, yaitu _element selector_, _class selector_, dan _ID selector_.

1. Element Selector
  
    _Element selector_ menggunakan tag HTML sebagai _selector_ untuk mengubah properti yang terdapat dalam tag tersebut.

    ```css
    h1 {
      color: #fca205;
      font-family: "Monospace";
      font-style: italic;
    }
    ```

2. ID Selector
    
    _ID selector_ menggunakan ID pada tag sebagai _selector_-nya.
    
    Kamu dapat menambahkan ID pada templat HTML sebagai berikut (ID harus bersifat unik).

    ```css
    ...
    <body>
      <div id="header">
        <h1>Tutorial CSS Yay</h1>
      </div>
      ...
    </body>
    ```

    Kemudian tambahkan ID tersebut sebagai _selector_ pada file CSS kamu.

    ```css
    #header {
      background-color: #f0f0f0;
      margin-top: 0;
      padding: 20px 20px 20px 40px;
    }
    ```

    Dapat dilihat perubahan tampilan yang terjadi. Silakan menambahkan _ID selector_ lain untuk mengubah properti lainnya.

3. Class Selector
    
    Selanjutnya, class selector yang dapat digunakan untuk memperindah tampilan templat HTML.
    Tambahkan beberapa class pada tag HTML

    ```html
    ...
    <div id="main">
        <div class="content_section">
            <p class="date">published: 28 September 2022</p>
            <h2><a href="">Tutorial CSS ku</a></h2>
            <p id="content_1">Yay ini tutorial yang gampang!</p>
        </div>
        <div class="content_section">
            <p class="date ">published: 29 September 2022</p>
            <h2><a href="">Tutorial CSS mu</a></h2>
            <p id="content_2">Yay ini tutorial yang mudah!</p>
        </div>
        <div class="content_section">
            <p>published: 30 September 2022</p>
            <h2><a href="">Tutorial CSS semua</a></h2>
            <p id="content_3">Yay ini tutorial yang tidak sulit!</p>
        </div>
    </div>
    ...
    ```
    
    Kemudian taambahkan _class selector_ berikut pada file CSS kamu.

    ```css
    .content_section {
      background-color: #3696e1;
      margin-bottom: 30px;
      color: #000000;
      font-family: cursive;
      padding: 20px 20px 20px 40px;
    }
    ```

    Silakan menambahkan _class selector_ lain untuk mengubah properti lainnya.

Perbedaan penulisan _ID selector_ dan _class selector_ adalah _ID selector_ menggunakan format `#[id_name]` (selalu diawali `#`) sedangkan _class selector_ menggunakan format `.[class_name]` (diawali `.`).

Untuk memperdalam pengetahuan mengenai _CSS Selector Reference_, kamu dapat membaca referensi [ini](https://www.w3schools.com/cssref/css_selectors.asp).


## Tips & Trik untuk CSS

### Mengenal _Combinators_

Setelah mengetahui _selector_ pada CSS, kamu dapat mengenal _combinators_ pada CSS. _Combinators_ adalah suatu penanda yang menandakan hubungan antar elemen, _class_, atau ID pada CSS.

Terdapat empat _combinators_ pada CSS.

1. Descendant selector (_space_)
2. Child selector (>)
3. Adjacent sibling selector (+)
4. General sibling selector (~)

Silakan pelajari keempat jenis _combinators_ tersebut CSS tersebut pada referensi [ini](https://www.w3schools.com/css/css_combinators.asp).

### Mengenal CSS Pseudo-class

_Pseudo-class_ digunakan untuk mendefinisikan _state_ khusus dari sebuah elemen. Contoh beberapa _pseudo-class_ adalah sebagai berikut.

* **:active** memilih elemen yang sedang aktif
* **:checked** memilih elemen yang telah dicentang
* **:disabled** memilih elemen yang telah dinonaktifkan
* **:enabled** memilih elemen yang telah diaktifkan
* **:link** memilih tautan yang belum pernah dikunjungi
* **:hover** memilih elemen pada saat kursor berada diatasnya
* **:visited** memilih link yang sudah pernah dikunjungi

Umumnya _pseudo-class_ dituliskan dalam bentuk sebagai berikut.

```css
selector:pseudo-class {
  properties: value;
}
```

### Perbedaan Margin, Border dan Padding

Kamu dapat melihat perbedaan _margin_, _border_, dan _padding_ pada referensi [ini](https://www.w3schools.com/css/css_boxmodel.asp).

## Pengenalan Bootstrap

Terdapat banyak _framework_ CSS yang sering digunakan sekarang ini, salah satunya adalah Bootstrap CSS. Bootstrap CSS menyediakan _class_-_class_ yang sering digunakan dalam pengembangan suatu situs web. _Class_-_class_ yang disediakan seperti _navbar_, _card_, _footer_, _carousel_, dan lain-lain. Selain itu, Bootstrap CSS juga menyediakan banyak fitur yang berguna. Salah satu fitur yang berguna pada Bootstrap CSS adalah _grid system_ yang berguna untuk membagi halaman situs web menjadi lebih mudah dan menarik.

Untuk mempelajari lebih lanjut mengenai Bootstrap CSS, kamu dapat membaca referensi [ini](https://getbootstrap.com/docs/5.2/getting-started/introduction/).

## _Responsive Web Design_

_Responsive web design_ merupakan metode atau pendekatan sistem desain web yang bertujuan untuk memberikan tampilan situs web yang terlihat baik pada semua perangkat (baik pada komputer meja, tablet, atau ponsel). _Responsive web design_ tidak mengubah konten yang ada pada situs web, melainkan hanya mengubah cara penyajian pada setiap perangkat agar sesuai dengan ukuran layar dan perilaku perangkat masing-masing. _Responsive web design_ menggunakan CSS untuk mengubah ukuran (seperti menyusutkan dan membesarkan) suatu elemen.

Untuk mengecek penerapan _responsive web design_ pada suatu situs web, kamu dapat mengakses situs web tersebut dan membuka fitur `Toggle Device Mode` pada browser.

Berikut adalah _keyboard shortcut_ untuk mengakes fitur tersebut pada browser Google Chrome.

- Windows/Linux : `CTRL + SHIFT + M` 
- Mac : `Command + Shift + M`

Untuk mempelajari lebih lengkap mengenai Reponsive Web Design, kamu dapat membuka referensi [ini](https://web.dev/responsive-web-design-basics/).

## Tutorial: Menambahkan Bootstrap pada Aplikasi _Wishlist_

Berikut adalah hal yang perlu kamu lakukan untuk menyelesaikan bagian tutorial ini.

1. Menambahkan barisan kode yang dibutuhkan agar aplikasi kamu dapat menggunakan Bootstrap.

    > Silakan merujuk kepada informasi pada laman [ini](https://getbootstrap.com/docs/5.2/getting-started/introduction/).

2. Silakan lakukan modifikasi pada tampilan aplikasi `wishlist` kamu sekreatif mungkin dengan menggunakan Bootstrap.

## Tutorial: Menambahkan Navbar pada Keseluruhan Laman Aplikasi

Tambahkan *navigation bar* (boleh menggunakan Bootstrap) pada halaman `wishlist.html` kamu dan tampilkan **nama kamu** dan **tombol _logout_** pada *navigation bar* yang kamu buat. 

## Referensi Tambahan

- Kamu dapat membuka tautan [ini](https://getbootstrap.com/docs/5.2/components/navbar/) untuk melihat kode yang dapat kamu gunakan untuk menambahkan *navigation bar* dengan menggunakan Bootstrap.
- Kamu dapat membuka tautan [ini](https://www.w3schools.com/css/css_navbar.asp) untuk melihat kode yang dapat kamu gunakan untuk menambahkan *navigation bar* dengan menggunakan CSS secara manual.

## Akhir Kata

Selamat! Kamu telah menyelesaikan Tutorial 4 dengan baik. 😄

Seperti biasa, jangan lupa untuk melakukan `add`, `commit`, dan `push` perubahan yang sudah kamu lakukan untuk menyimpannya ke dalam repositori GitHub sebelum kamu menutup pekerjaan kamu. 😉

## Kontributor
- Christopher Ekaputra Loe
- Zefanya Soplantila
- Rafi Indrawan Dirgantara
- Muhammad Abdurrahman Basyah
- Muhammad Athallah

## Credits

Tutorial ini dikembangkan berdasarkan [PBP Ganjil 2021](https://gitlab.com/PBP-2021/pbp-lab) yang ditulis oleh Tim Pengajar Pemrograman Berbasis Platform 2021 ([@prakashdivyy](https://gitlab.com/prakashdivyy)). Segala tutorial serta instruksi yang dicantumkan pada repositori ini dirancang sedemikian rupa sehingga mahasiswa yang sedang mengambil mata kuliah Pemrograman Berbasis Platform dapat menyelesaikan tutorial saat sesi lab berlangsung.
