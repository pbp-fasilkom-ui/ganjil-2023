---
sidebar_label: "Lab 5"
---

import CodeEditor from "@site/src/components/CodeEditor"
import { ajaxJQueryExample } from "@site/src/data/examples"

# Lab 5: JavaScript dan AJAX

Pemrograman Berbasis Platform (CSGE602022) - diselenggarakan oleh Fakultas Ilmu Komputer
Universitas Indonesia, Semester Ganjil 2022/2023

---

## Tujuan Pembelajaran

Setelah menyelesaikan tutorial ini, mahasiswa diharapkan untuk mengerti:

- Penggunaan fungsi JavaScript pada _front-end development_
- Penggunaan dasar JavaScript
- Penggunaan AJAX

## Pengenalan Javascript

### Apa itu Javascript?

JavaScript merupakan bahasa pemrograman multi-paradigma tingkat tinggi lintas
platform (_cross platform high-level multi-paradigm programming language_). Sifat
multi-paradigma membuat JavaScript mendukung konsep _object-oriented programming_,
_imperative programming_, dan _functional programming_. JavaScript sendiri merupakan
implementasi dari ECMAScript, yang merupakan inti dari bahasa JavaScript. Beberapa
implementasi lain dari ECMAScript yang mirip dengan JavaScript antara lain JScript
(Microsoft) dan ActionScript (Adobe).

JavaScript, bersama dengan HTML dan CSS, menjadi tiga teknologi utama yang dipakai
pada pengembangan web. Keuntungan menggunakan JavaScript dalam pengembangan
web, pada dasarnya, antara lain JavaScript dapat memanipulasi halaman web secara
dinamis dan memberikan interaksi lebih kepada pengguna. Oleh karena itu, hampir semua
situs web modern saat ini menggunakan JavaScript dalam halaman web mereka untuk memberikan
pengalaman terbaik kepada pengguna. Beberapa contoh hal yang dapat kita lakukan dengan
menggunakan JavaScript antara lain menampilkan informasi berdasarkan waktu, mengenali jenis
browser pengguna, melakukan validasi form atau data, membuat cookies (bukan kue, tapi
[cookies](https://en.wikipedia.org/wiki/HTTP_cookie)), mengganti _styling_ dan CSS suatu
_element_ secara dinamis, dan lain-lain.

Pada pengembangan web umumnya kode JavaScript digunakan pada _client-side_ suatu
web (_Client-side JavaScript_) namun beberapa jenis kode JavaScript saat ini digunakan pada
_server-side_ suatu web (_Server-side JavaScript_) seperti **node.js**. Istilah _client-side_
menunjukkan bahwa kode JavaScript akan dieksekusi atau dijalankan pada browser pengguna,
bukan pada server situs web. Hal ini berarti kompleksitas kode JavaScript tidak akan memengaruhi
performa server situs web tersebut namun memengaruhi performa browser dan komputer; semakin
kompleks kode JavaScript, maka semakin banyak memori komputer yang dikonsumsi oleh browser.

Pada mata kuliah PBP, kita hanya akan fokus kepada kode _client-side_ JavaScript.

### Bagaimana tahapan JavaScript dieksekusi oleh browser?

Perhatikan diagram berikut.

![javascript-works](https://preview.ibb.co/e258TG/Screenshot_from_2017_10_31_14_29_13.png)

Setelah browser mengunduh halaman HTML web maka tepat dimana tag `<script></script>`
berada, browser akan melihat _tag script_ tersebut, apakah tag tersebut berisi kode _embedded_
JavaScript atau merujuk file eksternal JavaScript. Jika merujuk pada file eksternal JavaScript,
maka browser akan mengunduh file tersebut terlebih dahulu.

**Cara penulisan Javascript**

Cara penulisan JavaScript bisa dilakukan dengan **_embedded JavaScript_** atau **_external JavaScript_**.
Kode JavaScript dapat didefinisikan atau dituliskan secara _embedded_ pada file HTML maupun
secara terpisah pada file tersendiri. Jika ditulis dalam file terpisah dari HTML, ekstensi file yang
digunakan untuk file JavaScript adalah `.js`. Berikut contoh beberapa pendefinisian dari JavaScript.

JavaScript dapat diletakkan pada _head_ atau _body_ dari halaman HTML. Selain itu, kode JavaScript
**HARUS** dimasukkan di antara tag `<script>` dan `</script>`. Anda dapat meletakkan lebih dari satu
_tag script_ yang berisi JavaScript pada suatu file HTML.

**Embedded JavaScript pada HTML**

`index.html`

```html
<script type="text/JavaScript">
  alert("Hello World!");
</script>
```

**External JavaScript pada HTML**

`index.html`

```html
<script type="text/JavaScript" src="js/script.js"></script>
```

`js/script.js`

```javascript
alert("Hello World!");
```

Pada file eksternal JavaScript, tag `<script>` tidak perlu lagi ditambahkan.

Memisahkan JavaScript pada file tersendiri dapat memberikan beberapa keuntungan seperti kode dapat
digunakan di file HTML lain, kode JavaScript dan HTML tidak bercampur sehingga lebih fokus saat
mengembangkan aplikasi, serta mempercepat loading halaman. File `.js` biasanya akan di-_cache_ oleh
browser sehingga jika kita membuka halaman yang sama dan tidak ada perubahan pada file `.js`, maka
browser tidak akan meminta file `.js` tersebut kepada server lagi, namun akan menggunakan file dari
_cache_ yang sudah disimpan sebelumnya.

### Eksekusi JavaScript

Setelah JavaScript sudah terunduh dengan sempurna, maka browser akan langsung mulai
mengeksekusi kode JavaScript. Jika kode tersebut BUKAN merupakan _event-triggered_,
maka kode langsung dieksekusi. Jika kode tersebut merupakan _event-triggered_, maka
kode tersebut hanya akan dieksekusi jika event yang didefinisikan terpicu (_triggered_).

```javascript
// langsung dieksekusi
alert("Hello World");

// langsung dieksekusi
var obj = document.getElementById("object");
// langsung dieksekusi, menambahkan event handler onclick untuk element object
obj.onclick = function () {
  // hanya dieksekusi jika element 'object' di klik
  alert("You just click the object!");
};
```

### Sintaks JavaScript

**Variabel**

Mendefinisikan variabel pada JavaScript cukup mudah. Contohnya seperti berikut.

```javascript
var example = 0; // var example merupakan sebuah bilangan
var example = "example"; // var example merupakan sebuah string
var example = true; // var example merupakan sebuah boolean
```

Javascript dapat menampung banyak tipe data; mulai dari string, integer, hingga _object_ sekalipun.
Berbeda dengan Java yang penandaan tipe datanya dibedakan dengan _head variable_ (contoh ingin
membuat variabel dengan tipe data `int`, maka sintaknya seperti `int x = 9`), JavaScript mempunyai
ciri khas _loosely typed_ atau _dynamic language_, yakni kalian tidak perlu menuliskan tipe data
pada _head variable_ dan JavaScript nantinya akan secara otomatis membaca tipe data kalian
berdasarkan standar yang ada (seperti pada contoh diatas).

Ada beberapa aturan dalam pemilihan _indentifiers_ atau nama variabel dalam JavaScript. Karakter
pertama HARUS merupakan alfabet, _underscore_ ( \_ ), atau karakter dollar ($). Selain itu,
JavaScript _identifiers_ bersifat _case sensitive_.

**_String Concatenation_**

Dalam JavaScript, kita juga dapat menyambungkan `string` dengan `string` lainnya seperti pada Java.

```javascript
var str1 = "PBP" + " " + "Fun";
var str2 = "PBP";
var str3 = "Fun";
var str4 = str2 + " " + str3;
var str5 = "Fun";
var str6 = `PBP ${str5}`;  // Memiliki hasil yang sama seperti "PBP" + " " + str5
```

### _Javascript Scope_

**Variabel Lokal**

Variabel yang didefinisikan dalam fungsi bersifat lokal,
sehingga hanya dapat diakses oleh kode didalam fungsi tersebut.

```javascript
// kode diluar fungsi thisFunction() tidak dapat mengakses variabel courseName
function thisFunction() {
  var courseName = "PBP";
  // kode di dalam fungsi ini dapat mengakses variabel courseName
}
```

**Variabel Global**

Variabel yang didefinisikan **DI LUAR** fungsi bersifat global
dan dapat diakses oleh kode lain dalam file JavaScript tersebut.

```javascript
var courseName = "PBP";
function thisFunction() {
  // kode di dalam fungsi ini dapat mengakses variabel courseName
}
```

**_Auto Global Variable_**

Value yang di-_assign_ pada variabel yang belum dideklarasikan otomatis menjadi
_global variable_ walaupun variabel tersebut berada di dalam suatu fungsi.

```javascript
thisFunction(); // function thisFunction() perlu dipanggil terlebih dahulu
console.log(courseName); // print "PBP" pada JavaScript console
function thisFunction() {
  courseName = "PBP";
}
```

**Mengakses Variabel Global dari HTML**

Anda dapat mengakses variabel yang berada dalam file JavaScript
pada file HTML yang mengunduh file JavaScript tersebut.

```html
...
<input type="text" onclick="this.value=courseName" />
...
```

```javascript
...
var courseName = "PBP";
...
```

### _Function_ dan _Event_

_Function_ adalah sekumpulan grup dari kode-kode yang bisa dipanggil dimanapun pada bagian
kode program (mirip dengan `method` pada Java). Hal ini mengurangi redundansi kode yang ada
(mengurangi kode-kode yang dapat sama berulang-ulang). Selain itu, _function_ pada JavaScript
sangat berguna untuk memudahkan elemen pemanggilan secara dinamis. _Function_ dapat dipanggil
sesama _function) dan dapat juga dipanggil karena _event_ (akan dijelaskan di bawah).
Sebagai contoh, berikut kode yang terdapat pada `index.html`.

```html
...
<input type="button" value="magicButton" id="magicButton" onclick="hooray();" />
...
```

Kemudian berikut adalah kode pada `javascript.js`.

```javascript
...
function hooray(){
    alert("Yahoo!");
}
...
```

Apabila `magicButton` ditekan, maka fungsi `onclick` akan menjalankan _function_ `hooray()`
pada `javascript.js`, lalu muncul _alert_ sesuai yang sudah di-_assign_ sebelumnya.

Kode `onclick` sebenarnya adalah salah satu contoh kemampuan JavaScript yang disebut
_event_. _Event_ adalah kemampuan JavaScript untuk membuat sebuah situs web dinamis. Maksud
dari `onclick` adalah penanda apa yang akan dilakukan JavaScript jika elemen tersebut ditekan.
Selain itu, _event_ biasanya diberikan sebuah fungsi yang berguna sebagai perintah-perintah
untuk JavaScript. Selain itu, banyak contoh-contoh _event_ lainnya seperti `onchange`,
`onmouseover`, `onmouseout`, dan lain sebagainya yang bisa kalian baca pada tautan
[ini](https://www.tutorialspoint.com/javascript/javascript_events.html).

### JavaScript HTML & CSS DOM

**HTML DOM**

HTML DOM (_Document Object Model_) adalah standar bagaimana mengubah,
mengambil, dan menghapus HTML _elements_. HTML DOM dapat diakses melalui
JavaScript atau dengan bahasa pemrograman lainnya. Detail lengkapnya dapat dilihat
[di sini](https://www.w3schools.com/js/js_htmldom.asp).

Berikut contoh implementasinya.

```html
...     
<div>
  <p onclick="myFunction()" id="demo">Example of HTML DOM</p>
      
</div>
...
```

```javascript
...
    function myFunction() {
document.getElementById("demo").innerHTML = "YOU CLICKED ME!";
    }
...
```

**CSS DOM**

Sama dengan HTML DOM, CSS DOM dapat mengubah CSS secara dinamis melalui JavaScript.
Detail lengkapnya dapat dilihat [di sini](https://www.w3schools.com/js/js_htmldom_css.asp).

Berikut adalah contohnya.

`index.html`

```html
...
<p id="blueText" onclick="changeColor()">Click me v2</p>
...
```

`javascript.js`

```javascript
...
function changeColor(){
    document.getElementById("blueText").style.color="blue";
}
...
```

## Pengenalan AJAX

AJAX merupakan singkatan dari _**A**synchronous **J**avaScript **A**nd **X**ML_.

AJAX bukanlah sebuah bahasa pemrograman. AJAX menggunakan browser untuk meminta data dari _web server_ dan JavaScript serta HTML DOM untuk menampilkan data. AJAX dapat menggunakan XML untuk mengirim data tetapi dapat juga menggunakan teks ataupun JSON. AJAX membuat halaman web memperbarui data secara asinkronus dengan mengirimkan data ke server di balik layar, artinya kita dapat memperbarui sebagian elemen data pada halaman tanpa harus me-_reload_ keseluruhan halaman.

Berikut ini adalah cara kerja AJAX.

![ajax-works](https://www.w3schools.com/js/pic_ajax.gif)

1. Sebuah _event_ terjadi pada halaman web (contohnya tombol _submit data_ ditekan)
2. Sebuah `XMLHttpRequest` _object_ dibuat oleh JavaScript
3. `XMLHttpRequest` _object_ mengirimkan _request_ ke server
4. Server memproses _request_ tersebut
5. Server mengembalikan _response_ kembali kepada halaman web
6. _Response_ dibaca oleh JavaScript
7. Aksi berikutnya akan dipicu oleh JavaScript sesuai dengan langkah yang dibuat (contohnya memperbarui data di halaman tersebut)

Anda bisa menggunakan `jQuery` untuk melakukan AJAX. JQuery adalah _library_ JavaScript yang dibuat untuk mempermudah akses ke beberapa *Core API* yang disediakan oleh browser. Berikut ini adalah contoh penggunaan JQuery dalam melakukan pemanggilan AJAX.

<CodeEditor outputHeight="50vh" defaultValue={ajaxJQueryExample} />

Selain itu, kalian juga dapat melakukan AJAX di browser modern dengan menggunakan fungsi `fetch()` yang diberikan oleh JavaScript. Penggunaan `fetch()` untuk melakukan pemanggilan AJAX dapat dilihat di tautan berikut ini: [https://www.w3schools.com/jsref/api_fetch.asp](https://www.w3schools.com/jsref/api_fetch.asp) 

## Tutorial

Anda diminta untuk menambahkan fungsionalitas AJAX ke projek `wishlist` yang sudah dibuat pada Tutorial 1.

- [ ] Buatlah templat baru bernama `wishlist_ajax.html` dengan isi yang sama seperti `wishlist.html`
- [ ] Buat _view_ baru yang mengarah ke halaman `wishlist_ajax.html`. Tambahkan pula _path_ `/wishlist/ajax` untuk mengakses _view_ tersebut.
- [ ] Implementasikan AJAX pada halaman `wishlist_ajax.html`
  - [ ] Lakukan pengambilan seluruh data `wishlist` dengan menggunakan **AJAX GET**. Anda dapat menggunakan endpoint JSON yang telah dibuat pada Lab 2 sebagai sumber data.
  - [ ] Buatlah `form` untuk menambahkan BarangWishlist dengan menggunakan **AJAX POST**.
    - [ ] Buatlah _view_ baru yang menerima data JSON dan menambahkan BarangWishlist baru ke _database_.
    - [ ] Tambahkan _path_ `/wishlist/ajax/submit` yang mengarah ke _view_ yang telah Anda buat.
    - [ ] Gunakan `jQuery` atau `fetch()` untuk melakukan submisi data form secara asinkronus ke _path_ yang telah dibuat.
    - [ ] Lakukan _refresh_ BarangWishlist pada tabel secara asinkronus untuk menampilkan barang yang ditambahkan tanpa _reload_ seluruh halaman. 

<u>Anda harus menggunakan AJAX saat mengimplementasikan tugas ini. Submisi yang tidak menggunakan AJAX **tidak dinilai**.</u>

## Bonus: Web Storage

Dengan penyimpanan lokal, aplikasi web dapat menyimpan data secara lokal dalam browser pengguna. Hal ini berguna apabila anda menggunakan _framework front-end_ seperti React ataupun Vue, karena kemampuan penggunaan _cookies_ pada _framework-framework_ tersebut terbatas.
Sebelum HTML5, data aplikasi harus disimpan dalam _cookies_ (termasuk dalam setiap permintaan server). Penyimpanan lokal bersifat lebih aman dan sejumlah besar data dapat disimpan secara lokal tanpa mempengaruhi kinerja situs web.
Tidak seperti _cookies_, batas penyimpanan jauh lebih besar (setidaknya 5MB) dan informasi yang disimpan tidak pernah ditransfer ke server.
Penyimpanan lokal adalah per asal (per domain dan protocol). Semua halaman (dari satu asal) dapat menyimpan dan mengakses data yang sama.

Terdapat 2 cara menyimpan data menggunakan web storage.

- `window.localStorage` - menyimpan data tanpa tanggal kadaluarsa

- `window.sessionStorage` - menyimpan data untuk satu session (data hilang ketika tab browser ditutup)

**localStorage Object**

Objek `localStorage` menyimpan data tanpa tanggal kedaluwarsa. Data tidak akan dihapus ketika browser ditutup, dan akan tersedia pada hari berikutnya, minggu, atau tahun.

Berikut adalah contoh implementasinya.

`index.html`

```html
...
<p><button onclick="clickCounter()" type="button">Click me!</button></p>
<div id="result"></div>
<p>Click the button to see the counter increase.</p>
<p>
  Close the browser tab (or window), and try again,
  and the counter will continue to count (is not reset).
</p>
...
```

`javascript.js`

```javascript
...
function clickCounter() {
    if(typeof(Storage) !== "undefined") {
        if (localStorage.clickcount) {
            localStorage.clickcount = Number(localStorage.clickcount)+1;
        } else {
            localStorage.clickcount = 1;
        }
        document.getElementById("result").innerHTML = "You have clicked the button " + localStorage.clickcount + " time(s).";
    } else {
        document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
    }
}
...
```

Apabila halaman tersebut dijalankan, ketika tombol ditekan maka terhitung jumlah _click_ akan bertambah.
Ketika browser ditutup dan kita membuka kembali halaman sebelumnya, dapat dilihat bahwa perhitungan jumlah _click_
akan dilanjutkan dari yang sebelumnya.

**sessionStorage Object**

Objek `sessionStorage` bekerja dengan cara yang mirip dengan `localStorage` (untuk mencoba `sessionStorage`, silakan gunakan kode sebelumnya namun ganti objek `localStorage` dengan `sessionStorage`). Namun apabila browser ditutup dan halaman sebelumnya dibuka kembali, _click count_ akan dimulai kembali dari 0.

Untuk membaca lebih lanut mengenai HTML5 WebStorage, silakan baca referensi berikut: 
[HTML5 WebStorage](http://www.w3im.com/id/html/html5_webstorage.html).

## Referensi

1. [JavaScript](https://www.w3schools.com/js/default.asp)
2. [jQuery](https://www.w3schools.com/jquery/default.asp)
3. [PBP-2017 Lab 6](https://gitlab.com/PPW-2017/ppw-lab/-/blob/master/lab_instruction/lab_6/README.md)
4. [PBP-2021 Lab 5](https://gitlab.com/PBP-2021/pbp-lab/-/tree/master/lab_instruction/lab_5)
5. [TheCatAPI](https://docs.thecatapi.com/)

## Akhir Kata
Selamat, Anda telah menyelesaikan tutorial Django terakhir! Jangan lupa melakukan *add, commit, push* dengan `git`.

---

## Kontributor
- [DRY] Adrian Ardizza
- [FAR] Muhammad Haqqi Al Farizi
- [VS] Vincent Suryakim
- [ZKA] Zidan Kharisma Adidarma
- [LAH] Muhammad Athallah (Korektor Dokumen)
