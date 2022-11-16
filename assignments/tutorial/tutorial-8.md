---
sidebar_label: Lab 8
---

# Tutorial 8: Flutter Model dan Komunikasi dengan Web Service

Pemrograman Berbasis Platform (CSGE602022) - diselenggarakan oleh Fakultas Ilmu Komputer, Universitas Indonesia, Semester Ganjil 2022/2023

## Tujuan Pembelajaran

Setelah menyelesaikan tutorial ini, mahasiswa diharapkan untuk:

- Memahami struktur dan pembuatan model pada Flutter.
- Memahami cara mengambil, mengolah, dan menampilkan data dari _web service_.

## Model pada Flutter

Pada tutorial kali ini, kita akan membuat sebuah pemanggilan _web service_ hingga menampilkannya ke halaman Flutter yang kita buat. Akan tetapi sebelum melakukan pemanggilan _web service_, kita perlu mendefinisikan model yang kita gunakan ketika melakukan pemanggilan _web service_. Model pada Flutter menggunakan prinsip _class_ seperti layaknya yang sudah dipelajari pada DDP2 bagian OOP.

```
Kode di bawah ini adalah contoh, tidak wajib diikuti, tetapi sangat disarankan dibaca karena konsepnya akan digunakan pada bagian-bagian selanjutnya.
```

Berikut merupakan contoh _class_ pada Flutter.

```dart
class Mobil {
	Mobil({
    	this.id,
    	this.brand,
        this.model
	    this.color
	});

	int id;
	String brand;
	String model;
	String color;
}
```

Sampai saat ini, kita telah berhasil membuat _class_. Selanjutnya, kita akan menambahkan beberapa kode sehingga terbentuk sebuah model `Mobil`. `Mobil` ini merupakan suatu model yang merepresentasikan response dari pemanggilan _web service_.

Tambahkan import dart convert pada bagian paling atas file.

```dart
import 'dart:convert';
...
```

Pada _class_ `Mobil`, tambahkan kode berikut.

```dart
factory Mobil.fromJson(Map<String, dynamic> json) => Mobil(
    id: json["id"],
    brand: json["brand"],
    model: json["model"],
    color: json["color"],
);

Map<String, dynamic> toJson() => {
    "id": id,
    "brand": brand,
    "model": model,
    "color": color,
};
```

Tambahkan kode berikut di luar _class_ `Mobil`.

```dart
Mobil mobilFromJson(String str) => Mobil.fromJson(json.decode(str));
String mobilToJson(Mobil data) => json.encode(data.toJson());
```

Sehingga kode akhirnya akan seperti berikut untuk menampilkan satu objek `Mobil` dari _web service_.

```dart
import 'dart:convert';

Mobil mobilFromJson(String str) => Mobil.fromJson(json.decode(str));
String mobilToJson(Mobil data) => json.encode(data.toJson());

class Mobil {
	Mobil({
    	this.id,
    	this.brand,
    	this.model,
    	this.color,
	});

	int id;
	String brand;
	String model;
	String color;

	factory Mobil.fromJson(Map<String, dynamic> json) => Mobil(
    	 id: json["id"],
    	 brand: json["brand"],
    	 model: json["model"],
    	 color: json["color"],
	);

	Map<String, dynamic> toJson() => {
    	  "id": id,
    	  "brand": brand,
    	  "model": model,
    	  "color": color,
	};
}
```

Penjelasan kode di atas adalah sebagai berikut.

Terdapat beberapa kode-kode tambahan seperti _method_ `toJson` dan `fromJson` di dalam _class_ `Mobil`. Hal tersebut disebabkan ketika kita me-_request_ suatu _web service_ dengan _method_ **GET**, umumnya kita mendapatkan hasil pemanggilan berupa JSON. Oleh karena itu, kita perlu melakukan konversi data dengan _method_ `fromJson` agar Flutter mengenali JSON tersebut sebagai objek _class_ `Mobil`. Selain itu, terdapat juga _method_ `toJson` yang akan digunakan ketika kita melakukan pengiriman data ke _web service_ (seperti **POST** atau **PUT**).

Berikut adalah contoh respons dari _web service_ dengan _method_ **GET** yang dapat dikonversi ke _class_ model **Mobil** tersebut.

```json
{
   "id": 1,
   "brand": "Honda",
   "model": "Civic",
   "color": "Yellow"
}
```

Lalu, bagaimana jika respons dari _web service_ berupa kumpulan objek JSON? Sebenarnya sama saja dengan kode di atas, hanya saja terdapat pengubahan pada _method_ `mobilFromJson` dan `mobilToJson`.

Kodenya adalah sebagai berikut.

```dart
List<Mobil> mobilFromJson(String str) => List<Mobil>.from(json.decode(str).map((mobil) => Mobil.fromJson(mobil)));

String mobilToJson(List<Mobil> data) => json.encode(List<dynamic>.from(data.map((mobil) => mobil.toJson())));
```

Berikut adalah contoh respons dari _web service_ dengan _method_ **GET** yang dapat dikonversi ke model `Mobil` tersebut.

```json
[
  {
	"id": 1,
	"brand": "Honda",
	"model": "Civic",
	"color": "Yellow"
  },
  {
	"id": 2,
	"brand": "Toyota",
	"model": "Supra",
	"color": "Red"
  }
]
```

## Fetch Data dari Web Service pada Flutter

Sebagai seorang _developer_, tentunya kita membutuhkan data untuk ditampilkan ke _client_. Hal ini mengharuskan kalian untuk mengetahui bagaimana cara untuk melakukan _fetching data_ dari _web service_ kemudian menampilkannya ke aplikasi yang telah kita buat sebelumnya.

Secara umum terdapat beberapa langkah ketika ingin menampilkan data dari _web service_ lain ke aplikasi Flutter, yaitu:

1. Menambahkan _dependency_ `http` ke proyek, _dependency_ ini digunakan untuk bertukar data melalui _HTTP request_, seperti **GET**, **POST**, **PUT**, dan lain-lain.

2. Membuat model sesuai dengan respons dari data yang berasal dari _web service_ tersebut.

3. Membuat _http request_ ke _web service_ menggunakan _dependency_ `http`.

4. Mengkonversikan objek yang didapatkan dari _web service_ ke model yang telah kita buat di langkah kedua.

5. Menampilkan data yang telah dikonversi ke aplikasi dengan `FutureBuilder`.

Selengkapnya dapat dibaca pada tautan berikut: [https://docs.flutter.dev/cookbook/networking/fetch-data#5-display-the-data](https://docs.flutter.dev/cookbook/networking/fetch-data#5-display-the-data)

## Tutorial: Refactor File

Refaktorisasi kode (_refactor code_) adalah proses restrukturisasi kode program yang ada tanpa mengubah _behavior_ program. Proses ini dilakukan untuk meningkatkan keterbacaan, mengurangi kompleksitas kode, dan memudahkan proses _maintenance_ ke depannya.

1. Buka proyek yang sebelumnya telah dibuat pada tutorial sebelumnya dengan menggunakan IDE favoritmu.

2. Di dalam folder `lib`, buatlah dua folder baru dengan nama `model` dan `page`.

3. Pindahkan file selain `main.dart` ke dalam ke folder `page`.

## Tutorial: Membuat Model Kustom

Dalam membuat model yang menyesuaikan dengan data JSON, kita dapat memanfaatkan website [Quicktype](https://app.quicktype.io/) dengan tahapan sebagai berikut.

1. Buka situs web [https://jsonplaceholder.typicode.com/todos?_start=0&_limit=10](https://jsonplaceholder.typicode.com/todos?_start=0&_limit=10) untuk mendapatkan data JSON.

2. Salinlah data JSON pada situs web sebelumnya, kemudian buka situs web [Quicktype](https://app.quicktype.io/).

3. Pada situs web Quicktype, ubahlah _setup name_ menjadi `Todo`, _source type_ menjadi `JSON`, dan _language_ menjadi Dart.

4. Tempel data JSON yang telah disalin sebelumnya ke dalam _textbox_ yang tersedia pada Quicktype.

    Berikut adalah contoh hasilnya.

    ![Quicktype Example](https://i.ibb.co/B6Vjj44/quicktype-example.png)

5. Klik pilihan `Copy Code` pada Quicktype.

Setelah mendapatkan kode model melalui Quicktype, buka kembali proyek Flutter dan lakukan langkah-langkah berikut.

1. Buatlah file baru pada folder `lib/model` dengan nama `to_do.dart`.

2. Tempel kode yang telah disalin sebelumnya ke file `to_do.dart`.

## Tutorial: Menambahkan Dependensi HTTP

Untuk melakukan perintah _HTTP request_, kita membutuhkan _package_ tambahan yakni _package_ [http](https://pub.dev/packages/http).

1. Lakukan `flutter pub add http` pada terminal proyek Flutter untuk menambahkan _package_ `http`.

2. Pada file `android/app/src/main/AndroidManifest.xml`, tambahkan kode berikut untuk memperbolehkan akses Internet pada aplikasi Flutter yang sedang dibuat.

    ```xml
    ...
        <application>
        ...
        </application>
        <!-- Required to fetch data from the Internet. -->
        <uses-permission android:name="android.permission.INTERNET" />
    ...
    ```

## Tutorial: Mengambil dan Mengolah Data dari Web Service

1. Buatlah file baru pada folder `lib/page` dengan nama `to_do_page.dart`.

2. Pada file `to_do_page.dart`, tambahkan impor yang dibutuhkan. Ubahlah <APP_NAME> sesuai dengan nama proyek Flutter yang kalian buat.

    ```dart
    import 'package:http/http.dart' as http;
    import 'dart:convert';
    import 'package:<APP_NAME>/model/to_do.dart';
    ...
    ```

3. Buatlah _stateful widget_ dengan nama class `ToDoPage`. Contoh struktur stateful widget dapat dilihat pada tautan [berikut](https://api.flutter.dev/flutter/widgets/StatefulWidget-class.html).

4. Lakukan pengambilan data dari URL [https://jsonplaceholder.typicode.com/todos?_start=0&_limit=10](https://jsonplaceholder.typicode.com/todos?_start=0&_limit=10) menggunakan metode `http.get`.

    ```dart
    class ToDoPage extends StatefulWidget {
        const ToDoPage({Key? key}) : super(key: key);

        @override
        _ToDoPageState createState() => _ToDoPageState();
    }

    class _ToDoPageState extends State<ToDoPage> {
        Future<List<ToDo>> fetchToDo() async {
            var url = Uri.parse('https://jsonplaceholder.typicode.com/todos?_start=0&_limit=10');
            var response = await http.get(
            url,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json",
            },
            );

            // melakukan decode response menjadi bentuk json
            var data = jsonDecode(utf8.decode(response.bodyBytes));

            // melakukan konversi data json menjadi object ToDo
            List<ToDo> listToDo = [];
            for (var d in data) {
            if (d != null) {
                listToDo.add(ToDo.fromJson(d));
            }
            }

            return listToDo;
        }
        ...
    }
    ```

## Tutorial: Menampilkan Data dari Web Service

1. Pada file `main.dart` dan `form.dart` tambahkan kode berikut untuk menambahkan menu To Do pada drawer yang telah kita buat (letakkan di bawah menu ListTile form).

    ```dart
    ListTile(
                title: const Text('To Do'),
                onTap: () {
                    // Route menu ke halaman to do
                    Navigator.pushReplacement(
                    context,
                    MaterialPageRoute(builder: (context) => const ToDoPage()),
                    );
                },
            ),
    ```

    Sehingga kodenya menjadi seperti ini:

    ```dart
    ...
    ListTile(
        title: const Text('Form'),
        onTap: () {
        // Route menu ke halaman form
        Navigator.pushReplacement(
            context,
            MaterialPageRoute(builder: (context) => const MyFormPage()),
            );
        },
    ),
    ListTile(
            title: const Text('To Do'),
            onTap: () {
            // Route menu ke halaman to do
            Navigator.pushReplacement(
                context,
                MaterialPageRoute(builder: (context) => const ToDoPage()),
                );
            },
        ),
    ...
    ```

2. Pada bagian `Widget(BuildContext context)`, tambahkan kode berikut setelah `return`.

    ```dart
    Scaffold(
        appBar: AppBar(
            title: const Text('To Do'),
        ),
        drawer: Drawer(
            child: Column(
            children: [
                // Menambahkan clickable menu
                ListTile(
                title: const Text('Counter'),
                onTap: () {
                    // Route menu ke halaman utama
                    Navigator.pushReplacement(
                    context,
                    MaterialPageRoute(builder: (context) => const MyApp()),
                    );
                },
                ),
                ListTile(
                title: const Text('Form'),
                onTap: () {
                    // Route menu ke halaman form
                    Navigator.pushReplacement(
                    context,
                    MaterialPageRoute(builder: (context) => const MyFormPage()),
                    );
                },
                ),
                ListTile(
                title: const Text('ToDo'),
                onTap: () {
                    // Route menu ke halaman to do
                    Navigator.pushReplacement(
                    context,
                    MaterialPageRoute(builder: (context) => const ToDoPage()),
                    );
                },
                ),
            ],
            ),
        ),
        body: FutureBuilder(
            future: fetchToDo(),
            builder: (context, AsyncSnapshot snapshot) {
                if (snapshot.data == null) {
                return const Center(child: CircularProgressIndicator());
                } else {
                if (!snapshot.hasData) {
                    return Column(
                    children: const [
                        Text(
                        "Tidak ada to do list :(",
                        style: TextStyle(
                            color: Color(0xff59A5D8),
                            fontSize: 20),
                        ),
                        SizedBox(height: 8),
                    ],
                    );
                } else {
                    return ListView.builder(
                        itemCount: snapshot.data!.length,
                        itemBuilder: (_, index)=> Container(
                        margin: const EdgeInsets.symmetric(horizontal: 16, vertical: 12),
                        padding: const EdgeInsets.all(20.0),
                        decoration: BoxDecoration(
                            color:Colors.white,
                            borderRadius: BorderRadius.circular(15.0),
                            boxShadow: const [
                            BoxShadow(
                                color: Colors.black,
                                blurRadius: 2.0
                            )
                            ]
                        ),
                        child: Column(
                            mainAxisAlignment: MainAxisAlignment.start,
                            crossAxisAlignment: CrossAxisAlignment.start,
                            children: [
                            Text(
                                "${snapshot.data![index].title}",
                                style: const TextStyle(
                                fontSize: 18.0,
                                fontWeight: FontWeight.bold,
                                ),
                            ),
                            const SizedBox(height: 10),
                            Text("${snapshot.data![index].completed}"),
                            ],
                        ),
                        )
                    );
                }
                }
            }
        )
    );
    ```

3. _Restart_ aplikasi dengan menekan tombol `r` pada _command line_ atau _terminal_ di tempat kamu menjalankan Flutter. Hasilnya akan seperti gambar di bawah.

    ![Example App](https://i.ibb.co/q1tqwqR/todo-page-example.png)

## Akhir Kata

Selamat, kamu telah mempelajari mengenai model dan _web service_ pada Flutter!

Jika kamu ingin mencoba tantangan, maka cobalah untuk menerapkan hal berikut pada tutorial ini.

- Lakukan _refactor_ pada _method_ `fetchToDo` ke file terpisah.

## Referensi Tambahan

- [Fetch Data From the Internet](https://docs.flutter.dev/cookbook/networking/fetch-data)
- [How to create models in Flutter Dart](https://thegrowingdeveloper.org/coding-blog/how-to-create-models-in-flutter-dart)

## Kontributor

- Zuhal 'Alimul Hadi
- Sabyna Maharani
- Brandon Ivander
- Muhammad Athallah
