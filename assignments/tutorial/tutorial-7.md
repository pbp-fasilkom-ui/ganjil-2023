---
sidebar_label: "Lab 7"
---

# Tutorial 7: Flutter Navigation, Input, dan Form

Pemrograman Berbasis Platform (CSGE602022) - diselenggarakan oleh Fakultas Ilmu Komputer, Universitas Indonesia, Semester Ganjil 2022/2023

## Tujuan Pembelajaran

Setelah menyelesaikan tutorial ini, mahasiswa diharapkan untuk:

- Memahami elemen input dan form pada Flutter.
- Memahami navigasi dan _routing_ dasar pada Flutter.
- Memahami alur pembuatan form dan data pada Flutter.

## Navigasi Halaman pada Flutter

Pada saat belajar pengembangan _web_, kalian pasti sudah belajar bahwa dalam sebuah _website_ kita dapat berpindah-pindah halaman sesuai dengan _url_ yang diakses. Begitu juga pada sebuah aplikasi, kita dapat melakukan perpindahan dari satu halaman ke halaman lain. Bedanya, pada sebuah aplikasi, yang kita gunakan untuk berpindah bukanlah dengan mengakses _url_.

Flutter menyediakan sistem yang cukup lengkap untuk melakukan navigasi antar halaman. Salah satu cara yang dapat kita gunakan untuk berpindah-pindah halaman adalah dengan menggunakan _widget_ `Navigator`. _Widget_ `Navigator` menampilkan layar seakan sebagai sebuah tumpukan (_stack_). Untuk menavigasi sebuah halaman baru, kita dapat mengakses `Navigator` melalui `BuildContext` dan memanggil fungsi `push()` atau `pop()`. Berikut contoh penggunaan `Navigator`.

```dart
...
onPressed: () {
    Navigator.of(context).push(
        MaterialPageRoute(
          builder: (context) => const MyNewScreen(myProp: prop),
        ),
    );
},
child: Text(myProp.someValue),
...
```

Untuk mengetahui lebih dalam terkait `Navigator`, dapat dibaca pada tautan berikut: [https://api.flutter.dev/flutter/widgets/Navigator-class.html](https://api.flutter.dev/flutter/widgets/Navigator-class.html)

## Input dan Form pada Flutter

Sama halnya dengan sebuah _web_, sebuah aplikasi juga dapat berinteraksi dengan pengguna melalui _input_ dan _form_. Flutter memiliki _widget_ `Form` yang dapat kita manfaatkan untuk menjadi wadah bagi beberapa _input field widget_ yang kita buat. Sama hal nya dengan _input field_ pada _web_, Flutter juga memiliki banyak tipe _input field_, salah satunya _widget_ `TextField`.

Untuk mencoba-coba, jalankan perintah berikut:

```bash
flutter create --sample=widgets.Form.1 formSample
```

Untuk mengetahui lebih lanjut terkait _widget_ `Form`, dapat dibaca pada tautan berikut: [https://api.flutter.dev/flutter/widgets/Form-class.html](https://api.flutter.dev/flutter/widgets/Form-class.html)

## Tutorial: Menambahkan Drawer Menu dan Navigasi

1. Buka proyek yang sebelumnya telah dibuat pada tutorial 6 dengan menggunakan IDE favoritmu.

2. Ubahlah kode pada `lib/main.dart` agar menjadi seperti berikut.

    ```dart
    class MyApp extends StatelessWidget {
        const MyApp({super.key});

        @override
        Widget build(BuildContext context) {
            return MaterialApp(
            title: 'Flutter Demo',
            theme: ThemeData(
                primarySwatch: Colors.blue,
            ),
            home: const MyHomePage(),
            );
        }
    }
    
    class MyHomePage extends StatefulWidget {
        const MyHomePage({super.key});

        final String title = 'Flutter Demo Home Page';

        @override
        State<MyHomePage> createState() => _MyHomePageState();
    }
    ...
    ```

3. Tambahkan potongan kode berikut pada file `lib/main.dart`.

    ```dart
      ...
      appBar: AppBar(
        title: Text(widget.title),
      ),
      // Menambahkan drawer menu
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
                    MaterialPageRoute(builder: (context) => const MyHomePage()),
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
            ],
          ),
        ),
      body: Center(
      ...
    ```

4. Jangan jalankan aplikasi terlebih dahulu, karena akan muncul _error_ akibat tidak ditemukannya halaman `MyFormPage`. Lakukan tutorial di bawah terlebih dahulu untuk membuat halaman tersebut.

## Tutorial: Membuat Halaman Baru

1. Buatlah file baru pada folder `lib` dengan nama `form.dart`.

2. Tambahkan _boilerplate_ berikut ke dalam file tersebut.

    ```dart
    class MyFormPage extends StatefulWidget {
        const MyFormPage({super.key});

        @override
        State<MyFormPage> createState() => _MyFormPageState();
    }

    class _MyFormPageState extends State<MyFormPage> {
        @override
        Widget build(BuildContext context) {
            return Scaffold(
                appBar: AppBar(
                    title: Text('Form'),
                ),
                body: Center(
                    child: Column(
                        mainAxisAlignment: MainAxisAlignment.center,
                        children: <Widget>[
                            Text('Hello World!'),
                        ],
                    ),
                ),
            );
        }
    }
    ```

3. Tambahkan ulang kode drawer yang sebelumnya ditambahkan pada halaman utama ke dalam halaman yang baru saja kamu buat.

4. Cek apakah setiap widget antar file telah diimpor. Jika belum, impor file ke dalam file lainnya. Berikut adalah contohnya.

    `/lib/main.dart`

    ```dart
    import 'package:flutter_app/form.dart';
    import 'package:flutter/material.dart';
    ...
    ```

    `/lib/form.dart`

    ```dart
    import 'package:flutter_app/main.dart';
    import 'package:flutter/material.dart';
    ...
    ```

5. Coba jalankan aplikasi untuk melihat perubahan yang baru saja kamu buat. Seharusnya terdapat drawer atau _hamburger menu_ pada pojok kiri atas dan halaman form berisi teks “Hello World!”.

## Tutorial: Menambahkan Form dan Elemen Input

Kita akan mencoba untuk menambahkan lima tipe input form yang ada di Flutter, yaitu `TextFormField`, `CheckboxListTile`, `SwitchListTile`, `DropdownButton`, dan `Slider`.

1. Ubah widget Center menjadi Form.

    ```dart
      ...
      body: Form(),
      ...
    ```

2. Tambahkan _form key_ sebagai _handle_ dari _form state_, validasi form, and penyimpanan form.

    ```dart
    ...
    class _MyFormPageState extends State<MyFormPage> {
    final _formKey = GlobalKey<FormState>();

    @override
    ...
        body: Form(
            key: _formKey,
        ),
        ...
    ```

3. Buatlah widget SingleChildScrollView sebagai _child_ dari widget Form.

    ```dart
      ...
      body: Form(
        key: _formKey,
        child: SingleChildScrollView(),
      ),
      ...
    ```

4. Buatlah widget Container sebagai _child_ dari widget SingleChildScrollView.

    ```dart
        ...
        child: SingleChildScrollView(
          child: Container(),
        ),
        ...
    ```

5. Tambahkan _padding_ pada widget Container agar tampilan rapi. Sebagai contoh, kita akan memakai _padding_ sebesar 20 _pixels_.

    ```dart
          ...
          child: Container(
            padding: const EdgeInsets.all(20.0),
          ),
          ...
    ```

6. Buatlah widget _Column_ sebagai _child_ dari widget Container.

    ```dart
          ...
          child: Container(
            padding: const EdgeInsets.all(20.0),
            child: Column(),
          ),
          ...
    ```

7. Buatlah widget TextFormField yang dibungkus oleh Padding sebagai salah satu _children_ dari widget Column. Selain itu, tambahkan variabel baru sebagai _placeholder_ dari _value_ yang diketik pada TextFormField nantinya. Buatlah TextFormField sebagai penampung variabel nama lengkap. Berikut adalah contohnya.

    ```dart
    ...
    class _MyFormPageState extends State<MyFormPage> {
    final _formKey = GlobalKey<FormState>();
    String _namaLengkap = "";

    @override
    ...
                child: Column(
                children: [
                    Padding(
                        // Menggunakan padding sebesar 8 pixels
                        padding: const EdgeInsets.all(8.0),
                        child: TextFormField(
                            decoration: InputDecoration(
                                hintText: "Contoh: Pak Dengklek",
                                labelText: "Nama Lengkap",
                                // Menambahkan icon agar lebih intuitif
                                icon: const Icon(Icons.people),
                                // Menambahkan circular border agar lebih rapi
                                border: OutlineInputBorder(
                                    borderRadius: BorderRadius.circular(5.0),
                                ),
                            ),
                            // Menambahkan behavior saat nama diketik 
                            onChanged: (String? value) {
                                setState(() {
                                    _namaLengkap = value!;
                                });
                            },
                            // Menambahkan behavior saat data disimpan
                            onSaved: (String? value) {
                                setState(() {
                                    _namaLengkap = value!;
                                });
                            },
                            // Validator sebagai validasi form
                            validator: (String? value) {
                                if (value == null || value.isEmpty) {
                                    return 'Nama lengkap tidak boleh kosong!';
                                }
                                return null;
                            },
                        ),
                    ),
                ],
                ...
    ```

8. Buatlah beberapa widget CheckboxListTile sebagai _children_ dari widget Column. Selain itu, tambahkan beberapa variabel baru sebagai _placeholder_ dari _value_ setiap CheckboxListTile nantinya. CheckboxListTile akan menjadi penampung pilihan jenjang Sarjana, Diploma, Magister, atau Doktor. Berikut adalah contohnya.

    ```dart
    ...
    bool jenjangSarjana = false;
    bool jenjangDiploma = false;
    bool jenjangMagister = false;
    bool jenjangDoktor = false;

    @override
    ...
                Container(
                margin: const EdgeInsets.all(8),
                decoration: BoxDecoration(
                    border: Border.all(color: Colors.grey),
                    borderRadius: BorderRadius.circular(5),
                ),
                child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                    const ListTile(
                        leading:  Icon(Icons.school),
                        title: Text("Jenjang"),
                    ),
                    CheckboxListTile(
                        title: const Text('Sarjana'),
                        value: jenjangSarjana,
                        onChanged: (bool? value) {
                        setState(() {
                            jenjangSarjana = value!;
                            if (value){
                                jenjangMagister = jenjangDiploma = jenjangDoktor = false;
                            }
                        });
                        },
                    ),
                    CheckboxListTile(
                        title: const Text('Diploma'),
                        value: jenjangDiploma,
                        onChanged: (bool? value) {
                        setState(() {
                            jenjangDiploma = value!;
                            if (value){
                                jenjangMagister = jenjangSarjana = jenjangDoktor = false;
                            }
                        });
                        },
                    ),
                    CheckboxListTile(
                        title: const Text('Magister'),
                        value: jenjangMagister,
                        onChanged: (bool? value) {
                        setState(() {
                            jenjangMagister = value!;
                            if (value){
                                jenjangDiploma = jenjangSarjana = jenjangDoktor = false;
                            }
                        });
                        },
                    ),
                    CheckboxListTile(
                        title: const Text('Doktor'),
                        value: jenjangDoktor,
                        onChanged: (bool? value) {
                        setState(() {
                            jenjangDoktor = value!;
                            if (value){
                                jenjangMagister = jenjangSarjana = jenjangDiploma = false;
                            }
                        });
                        },
                    ),
                ],
                ),
            ),
            ...
    ```

9. Buatlah widget Slider sebagai salah satu _children_ dari widget Column. Selain itu, tambahkan variabel baru sebagai _placeholder_ dari _value_ Slider nantinya. Slider akan menjadi penampung pilihan umur. Berikut adalah contohnya.

    ```dart
    ...
    double umur = 0;

    @override
    ...
                ListTile(
                leading: const Icon(Icons.co_present),
                title: Row(
                    children: [
                    Text('Umur: ${umur.round()}'),
                    ],
                ),
                subtitle: Slider(
                    value: umur,
                    max: 100,
                    divisions: 100,
                    label: umur.round().toString(),
                    onChanged: (double value) {
                    setState(() {
                        umur = value;
                    });
                    },
                ),
                ),
                ...
    ```

10. Buatlah widget DropdownButton sebagai salah satu _children_ dari widget Column. Tambahkan variabel baru sebagai _placeholder_ dari _value_ Slider nantinya. Selain itu, tambahkan pula List of String yang menampung opsi yang akan ditampilkan pada dropdown. Slider akan menjadi penampung pilihan kelas PBP. Berikut adalah contohnya.

    ```dart
    ...
    String kelasPBP = 'A';
    List<String> listKelasPBP = ['A', 'B', 'C', 'D', 'E', 'F', 'KI'];

    @override
    ...
                ListTile(
                leading: const Icon(Icons.class_),
                title: const Text(
                    'Kelas PBP',
                ),
                trailing: DropdownButton(
                    value: kelasPBP,
                    icon: const Icon(Icons.keyboard_arrow_down),
                    items: listKelasPBP.map((String items) {
                    return DropdownMenuItem(
                        value: items,
                        child: Text(items),
                    );
                    }).toList(),
                    onChanged: (String? newValue) {
                    setState(() {
                        kelasPBP = newValue!;
                    });
                    },
                ),
                ),
                ...
    ```

11. Buatlah widget SwitchListTile yang dibungkus oleh Padding sebagai salah satu _children_ dari widget Column. Selain itu, tambahkan variabel baru sebagai _placeholder_ dari _value_ dari SwitchListTile nantinya. Buatlah SwitchListTile sebagai penampung variabel status apakah sedang pada `Practice Mode` atau tidak. Berikut adalah contohnya.

    ```dart
    ...
    bool _nilaiSwitch = false;

    @override
    ...
                    SwitchListTile(
                    title: const Text('Practice Mode'),
                    value: _nilaiSwitch,
                    onChanged: (bool value) {
                        setState(() {
                        _nilaiSwitch = value;
                        });
                    },
                    secondary: const Icon(Icons.run_circle_outlined),
                    ),
                    ...
    ```

12. Buatlah tombol yang akan menyimpan data yang ada di setiap elemen input. Kali ini kita tidak akan menyimpan data ke dalam _database_, namun kita akan memunculkannya pada popup yang akan muncul setelah tombol ditekan.

    ```dart
                ...
                TextButton(
                  child: const Text(
                    "Simpan",
                    style: TextStyle(color: Colors.white),
                  ),
                  style: ButtonStyle(
                    backgroundColor: MaterialStateProperty.all(Colors.blue),
                  ),
                  onPressed: () {
                    if (_formKey.currentState!.validate()) {}
                  },
                ),
                ...
    ```

Setelah semua input dan logika form dibuat, maka kita akan membuat popup yang akan memunculkan data yang ada pada input form saat tombol `Simpan` ditekan.

## Tutorial: Memunculkan Data

1. Tambahkan fungsi `showDialog()` pada bagian `onPressed()` dan munculkan widget Dialog pada fungsi tersebut. Berikut adalah contoh potongan kodenya.

    ```dart
              ...
              onPressed: () {
                if (_formKey.currentState!.validate()) {
                  showDialog(
                    context: context,
                    builder: (context) {
                      return Dialog(
                        shape: RoundedRectangleBorder(
                          borderRadius: BorderRadius.circular(10),
                        ),
                        elevation: 15,
                        child: Container(
                          child: ListView(
                            padding: const EdgeInsets.only(top: 20, bottom: 20),
                            shrinkWrap: true,
                            children: <Widget>[
                              Center(child: const Text('Informasi Data')),
                              SizedBox(height: 20),
                              // TODO: Munculkan informasi yang didapat dari form
                              TextButton(
                                onPressed: () {
                                  Navigator.pop(context);
                                },
                                child: Text('Kembali'),
                              ), 
                            ],
                          ),
                        ),
                      );
                    },
                  );
                }
              },
              ...
    ```

2. Tambahkan informasi yang didapat dari form. Kamu dapat menggunakan widget `Text` dan melakukan _string concatenation_ agar keterangan data dan isi data dapat disajikan dalam satu widget. Contohnya adalah `Text('Judul: ' + _namaLengkap)`.

3. Coba jalankan program kamu, gunakan form yang telah dibuat, dan lihat hasilnya.

## Akhir Kata

Selamat, kamu telah mempelajari navigasi dasar dan pembuatan form dasar pada Flutter!

Setelah kamu menyelesaikan seluruh tutorial di atas, kamu dapat mencoba widget input lainnya yang ada di Flutter. Kamu juga dapat mencoba untuk membuat halaman baru dengan opsi navigasi yang berbeda, seperti `Navigator.push()` dan `Navigator.pop()`.

Jika kamu ingin mencoba tantangan, maka cobalah untuk menerapkan hal berikut pada tutorial ini.

- Modifikasi navigasi pada Drawer agar melakukan `Navigator.pop()` apabila halaman yang ingin dibuka adalah halaman yang sedang dibuka, alih-alih mengunakan `Navigator.pushReplacement()` untuk semua navigasi.
- Kustomisasi widget-widget yang telah kamu buat sebelumnya (_styling_), seperti warna, ikon, dll.

## Referensi Tambahan

- [Build a form with validation](https://docs.flutter.dev/cookbook/forms/validation)
- [Input widgets](https://docs.flutter.dev/development/ui/widgets/input)
- [Navigation and routing](https://docs.flutter.dev/development/ui/navigation)

## Kontributor

- Muhammad Athallah
- Brandon Ivander
- Sabyna Maharani
- Muhammad Azis Husein
