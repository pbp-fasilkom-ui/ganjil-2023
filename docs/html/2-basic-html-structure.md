---
sidebar_position: 2
---

# HTML - Struktur Dasar

Sebuah dokumen HTML tersusun atas elemen-elemen yang didefinisikan menggunakan sebuah **HTML tag**. HTML tag pada umumnya selalu ditulis secara berpasangan, dimana definisi sebuah elemen dimulai dengan *opening tag* yang memiliki nama dari elemen yang diapit dengan simbol panah (contoh: `<html>`) dan ditutup dengan *closing tag* yang berbentuk mirip dengan opening tag, namun diawali dengan `</` (contoh: `</html>`), dengan konten yang ingin kalian tampilkan pada website berada di antara kedua tag tersebut.

Berikut ini adalah contoh sebuah page HTML sederhana:

```html
<!-- You can also use this as a base later on in tutorials/assignments -->
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        Hello, World!
    </body>
</html>
```


Setiap elemen pada dokumen tersebut mewakili sebuah elemen pada halaman website yang akan di-render. Berikut ini adalah kegunaan dari setiap elemen yang ada pada dokumen tersebut:
- `<html>`: Elemen utama dari dokumen yang menjadi *parent* dari semua elemen lain-nya
- `<head>`: Menampung informasi tambahan mengenai website.
  - `<meta>`: Mendefinisikan informasi tambahan yang digunakan oleh browser saat proses *rendering*.
  - `<title>`: Mendefinisikan title dari halaman website.
- `<body>`: Menampung elemen-elemen yang mendefinisikan konten dan layout dari website.

