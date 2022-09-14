---
sidebar_label: Lab 2
---

# Lab 2: Data Delivery

Pemrograman Berbasis Platform (CSGE602022) - diselenggarakan oleh Fakultas Ilmu Komputer Universitas Indonesia, Semester Ganjil 2022/2023

---

## Tujuan Pembelajaran​

Setelah menyelesaikan tutorial ini, mahasiswa diharapkan untuk dapat:
- Mengetahui XML dan JSON sebagai salah satu metode Data Delivery
- Mengerti cara mengirimkan data menggunakan format XML dan JSON
- Mengerti cara mengambil data spesifik berdasarkan IDx

## Pengenalan Data Delivery

Dalam mengembangkan suatu _platform_, ada kalanya kita perlu mengirimkan data dari satu _stack_ ke _stack_ lainnya. Data yang dikirimkan bisa bermacam-macam bentuknya. Beberapa contoh format data yang umum digunakan antara lain HTML, XML, dan JSON. Implementasi _data delivery_ dalam bentuk HTML sudah kamu pelajari pada tutorial sebelumnya. Pada tutorial ini akan diajarkan terkait XML dan JSON.

## XML (Extensible Markup Language)

XML adalah singkatan dari _eXtensible Markup Language_. XML didesain menjadi _self-descriptive_, jadi dengan membaca XML tersebut kita bisa mengerti informasi apa yang ingin disampaikan dari data yang tertulis. XML digunakan pada banyak aplikasi web maupun _mobile_, yaitu untuk menyimpan dan mengirimkan data. XML hanyalah informasi yang dibungkus di dalam _tag_. Kita perlu menulis program untuk mengirim, menerima, menyimpan, atau menampilkan informasi tersebut.

Contoh Format XML:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<phone>
  <brand>Apple</brand>
  <type>iPhone 14 plus</type>
  <color>Red</color>
  <memory>256</memory>
</phone>
```

XML di atas sangatlah _self-descriptive_:
- Ada informasi merk (`brand`)
- Ada informasi tipe (`type`)
- Ada informasi warna (`color`)
- Ada informasi besaran memori (`memory`)

Dokumen XML membentuk struktur seperti tree yang dimulai dari _root_, lalu _branch_, hingga berakhir pada _leaves_. Dokumen XML **harus mengandung sebuah _root element_** yang merupakan _parent_ dari elemen lainnya. Pada contoh di atas, `<phone>` adalah _root element_.

Untuk baris `<?xml version="1.0" encoding="UTF-8"?>` biasa disebut sebagai **XML Prolog**. XML Prolog bersifat opsional, akan tetapi jika ada maka posisinya harus berada di awal dokumen XML. Pada dokumen XML **semua elemen wajib memiliki __closing tag__**. **Tag pada XML sifatnya __case sensitive__**, sehingga tag `<phone>` berbeda dengan tag `<Phone>`.

## JSON (JavaScript Object Notation)

JSON adalah singkatan dari _JavaScript Object Notation_. JSON didesain menjadi _self-describing_, sehingga JSON sangat mudah untuk dimengerti. JSON digunakan pada banyak aplikasi web maupun _mobile_, yaitu untuk menyimpan dan mengirimkan data. Sintaks JSON merupakan turunan dari _Object_ JavaScript. Akan tetapi format JSON berbentuk _text_, sehingga kode untuk membaca dan membuat JSON banyak terdapat dibanyak bahasa pemrograman.

Contoh format JSON:

```json
{
    "brand": "Samsung",
    "type": "S22 Ultra",
    "color": "Black",
    "memory": "256",
}
```

Data pada JSON disimpan dalam bentuk _key_ dan _value_. Pada contoh di atas yang menjadi _key_ adalah `brand`, `type`, `color`, dan `memory`. _Value_ dapat berupa tipe data primitif (_string, number, boolean_) ataupun berupa objek.

## Tutorial Mengembalikan Data dalam Bentuk XML

Catatan: Pada tutorial ini, kamu akan menggunakan proyek yang sudah kamu buat pada tutorial sebelumnya.

1. Buka `views.py` yang ada pada folder `wishlist` dan buatlah sebuah fungsi yang menerima parameter _request_.

2. Tambahkan _import_ `HttpResponse` dan `Serializer` pada bagian paling atas.

    ```python
    from django.http import HttpResponse
    from django.core import serializers
    ```

3. Buatlah sebuah variabel di dalam fungsi tersebut yang menyimpan hasil _query_ dari seluruh data yang ada pada `BarangWishlist`.

    ```python
    data = BarangWishlist.objects.all()
    ```

4. Tambahkan _return function_ berupa `HttpResponse` yang berisi parameter data hasil _query_ yang sudah diserialisasi menjadi XML dan parameter `content_type="application/xml"`.

    ```python
    return HttpResponse(serializers.serialize("xml", data), content_type="application/xml")
    ```

5. Buka `urls.py` yang ada pada folder `wishlist` dan _import_ fungsi yang sudah kamu buat tadi.

    ```python
    from wishlist.views import show_xml #sesuaikan dengan nama fungsi yang dibuat
    ```

6. Tambahkan _path url_ ke dalam `urlpatterns` untuk mengakses fungsi yang sudah diimpor tadi.

    ```python
    ...
    path('xml/', show_xml, name=’show_xml’), #sesuaikan dengan nama fungsi yang dibuat
    ...
    ```

7. Jalankan proyek Django-mu dengan perintah `python manage.py runserver` dan bukalah http://localhost:8000/xml/ (sesuaikan dengan _path url_ yang dibuat) di browser favoritmu untuk melihat hasilnya.

## Tutorial Mengembalikan Data dalam Bentuk JSON

1. Buka `views.py` yang ada pada folder `wishlist` dan buatlah sebuah fungsi baru yang menerima parameter _request_.

2. Buatlah sebuah variabel di dalam fungsi tersebut yang menyimpan hasil _query_ dari seluruh data yang ada pada `BarangWishlist`.

    ```python
    data = BarangWishlist.objects.all()
    ```

3. Tambahkan _return function_ berupa `HttpResponse` yang berisi parameter data hasil _query_ yang sudah diserialisasi menjadi JSON dan parameter `content_type="application/json"`.

    ```python
    return HttpResponse(serializers.serialize("json", data), content_type="application/json")
    ```

4. Buka `urls.py` yang ada pada folder `wishlist` dan _import_ fungsi yang sudah kamu buat tadi.

    ```python
    from wishlist.views import show_json #sesuaikan dengan nama fungsi yang dibuat
    ```

5. Tambahkan _path url_ ke dalam `urlpatterns` untuk mengakses fungsi yang sudah diimpor tadi.

    ```python
    ...
    path('json/', show_json, name=’show_json’), #sesuaikan dengan nama fungsi yang dibuat
    ...
    ```

6. Jalankan proyek Django-mu dengan perintah `python manage.py runserver` dan bukalah http://localhost:8000/json/ (sesuaikan dengan _path url_ yang dibuat) di browser favoritmu untuk melihat hasilnya.

## Tutorial Mengembalikan Data Berdasarkan ID dalam Bentuk JSON/XML

1. Buka `views.py` yang ada pada folder `wishlist` dan buatlah sebuah fungsi baru yang menerima parameter _request_ dan id.

2. Buatlah sebuah variabel di dalam fungsi tersebut yang menyimpan hasil _query_ dari data dengan id tertentu yang ada pada `BarangWishlist`.

    ```python
    data = BarangWishlist.objects.filter(pk=id)
    ```

3. Tambahkan _return function_ berupa `HttpResponse` yang berisi parameter data hasil _query_ yang sudah diserialisasi menjadi JSON/XML dan parameter `content_type` dengan value `"application/xml"` (jika format XML) atau `"application/json"` (jika format JSON).

    ```python
    // Jika JSON
    return HttpResponse(serializers.serialize("json", data), content_type="application/json")

    // Jika XML
    return HttpResponse(serializers.serialize("xml", data), content_type="application/xml")
    ```

4. Buka `urls.py` yang ada pada folder `wishlist` dan impor fungsi yang sudah kamu buat tadi.

    ```python
    from wishlist.views import show_json_by_id #sesuaikan dengan nama fungsi yang dibuat
    ```

5. Tambahkan _path url_ ke dalam `urlpatterns` untuk mengakses fungsi yang sudah diimpor tadi.

    ```python
    ...
    path('json/<int:id>', show_json_by_id, name=’show_json_by_id’), #sesuaikan dengan nama fungsi yang dibuat
    ...
    ```

6. Jalankan proyek Django-mu dengan perintah `python manage.py runserver` dan bukalah http://localhost:8000/json/<id> (sesuaikan dengan _path url_ yang dibuat dan id yang diinginkan) di browser favoritmu untuk melihat hasilnya.
