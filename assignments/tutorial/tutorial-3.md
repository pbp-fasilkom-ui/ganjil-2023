---
sidebar_label: Lab 3
---

# Lab 3: Form, Authentication, Session, and Cookie

Pemrograman Berbasis Platform (CSGE602022) - diselenggarakan oleh Fakultas Ilmu Komputer Universitas Indonesia, Semester Gasal 2022/2023

---

## Tujuan Pembelajaran

Setelah menyelesaikan tutorial ini, kamu diharapkan untuk dapat:
- Memahami cara kerja submisi data yang diberikan oleh pengguna menggunakan elemen `form`
- Memahami cara kerja autentikasi
- Memahami kegunaan _cookie_ dan _session_ dalam konteks pengembangan web
- Memahami cara kerja _Cookie & Session_ pada web
- Menggunakan _Cookie & Session_

## Pengenalan HTTP

HTTP merupakan singkatan dari _HyperText Transfer Protocol_. HTTP adalah protokol yang digunakan untuk berkomunikasi antara _client_ dan _server_. HTTP bersifat _stateless_; artinya setiap transaksi/aktivitas yang dilakukan dianggap sebagai transaksi/aktivitas yang benar-benar baru, sehingga tidak ada data sebelumnya yang disimpan untuk transaksi/aktivitas saat ini.

Beberapa konsep dasar mengenai HTTP:

1. **_Client/Server_**: Interaksi dilakukan antar _client/server_. Klien melakukan _request_ dan server memberikan _response_.

2. **_Stateless_**: Setiap aktivitas (_request/response_) bersifat independen.

3. **_OSI Layer/Model_**: Model Open Systems Interconnection (OSI) menjelaskan tujuh lapisan yang digunakan sistem komputer untuk berkomunikasi melalui jaringan. Model 7-layer OSI terdiri dari _Application Layer_, _Presentation Layer_, _Session Layer_, _Transport Layer_, _Network Layer_, _Data Link Layer_, dan _Physical Layer_.

4. **_Application Layer_**: Website berjalan pada _application layer_. Proses _request/response_ terjadi pada _transport Layer_ yang umumnya menggunakan protokol TCP yang menentukan bagaimana data akan dikirim. _Application Layer_ tidak peduli apa yang dilakukan oleh _transport Layer_ (bagaimana data dikirim, diolah, dsb) karena _application layer_) hanya berfokus kepada _request_ dan _response_

    > Lapisan OSI lainnya akan diajarkan pada mata kuliah Jaringan Komputer/Jaringan Komunikasi Data. Kamu dapat mencarinya sendiri jika kamu penasaran. 😉

5. **_Client Actions Method_**: Merupakan metode yang digunakan oleh _client_ saat melakukan _request_. Contoh: GET, POST, PUT, DELETE, dll. Penjelasan lebih detail dapat dibaca [di sini](https://www.restapitutorial.com/lessons/httpmethods.html)).

6. **_Server Status Code_**: Merupakan status kode yang diberikan oleh server saat meminta suatu halaman web Contoh: 200 (OK), 404 (_Page Not Found_), 500 (_Internal Server Error_), dsb. Penjelasan lebih detail dapat dibaca [di sini](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status).

7. **_Headers_**: Merupakan informasi kecil yang dikirim bersamaan dengan _request_ dan _response_. Informasi-informasi tersebut berguna sebagai data tambahan yang digunakan untuk memproses _request/response_. Contoh: Pada _headers_, terdapat `content-type:json`. Artinya, tipe konten yang diminta/dikirim adalah `json`. _Headers_ juga menyimpan data _cookies_.

## Pengenalan Cookies & Session

Semua komunikasi antara klien dan server dilakukan melalui protokol HTTP, di mana HTTP merupakan _stateless protocol_. Artinya _state_ yang satu dengan yang lain tidak berhubungan (independen). Hal ini mengharuskan komputer klien yang menjalankan browser untuk membuat koneksi TCP ke server setiap kali melakukan _request_. Tanpa adanya koneksi persisten antara klien dan server, _software_ pada setiap sisi (_endpoint_) tidak dapat bergantung hanya pada koneksi TCP untuk melakukan _holding state_ atau _holding session state_. Apa yang dimaksud dengan _holding state_?

Sebagai contoh, kamu ingin mengakses suatu halaman A pada suatu web yang mensyaratkan pengaksesnya sudah _login_ ke dalam web. Kemudian kamu _login_ ke web tersebut dan berhasil membuka halaman A. Saat ingin pindah ke halaman B pada web yang sama, tanpa adanya suatu proses _holding state_ maka kamu akan diminta untuk _login_ kembali. Begitu yang akan terjadi setiap kali kamu mengakses halaman yang berbeda padahal masih pada web yang sama. Proses memberitahu "siapa" yang sedang _login_ dan menyimpan data ini dikenal sebagai bentuk dialog antara klien-server dan merupakan dasar _session_ - _a semi-permanent exchange of information_. Merupakan hal yang sulit untuk membuat HTTP melakukan _holding state_ (karena HTTP merupakan _stateless protocol_). Oleh karena itu, dibutuhkan teknik untuk mengatasi masalah tersebut, yaitu _Cookie_ dan _Session_.

Salah satu cara yang paling banyak digunakan untuk melakukan _holding state_ adalah dengan menggunakan _session ID_ yang disimpan sebagai _cookie_ pada komputer klien. _Session ID_ dapat dianggap sebagai suatu _token_ (barisan karakter) untuk mengenali _session_ yang unik pada aplikasi web tertentu. Daripada menyimpan semua jenis informasi sebagai _cookies_ pada klien seperti _username_, nama, dan password, hanya _Session ID_ yang disimpan. _Session ID_ ini kemudian dapat dipetakan ke suatu struktur data pada sisi web server. Pada struktur data tersebut, kamu dapat menyimpan semua informasi yang kamu butuhkan. Pendekatan ini jauh lebih aman untuk menyimpan informasi mengenai pengguna, daripada menyimpannya pada _cookie_. Dengan cara ini, informasi tidak dapat disalahgunakan oleh klien atau koneksi yang mencurigakan. Selain itu, pendekatan ini lebih "tepat" jika data yang akan disimpan ada banyak. Hal itu karena cookie hanya dapat menyimpan maksimal 4 KB data. Bayangkan kamu sudah _login_ ke suatu web/aplikasi dan mendapat _session ID_ (_session identifier_). Untuk dapat melakukan _holding state_ pada HTTP yang _stateless_, browser biasanya mengirimkan suatu _session ID_ ke server pada setiap _request_. Dengan begitu, setiap kali datang suatu _request_, maka server akan bereaksi (kurang lebih) "Oh, ini orang yang tepat!". Kemudian server akan mencari informasi _state_ di memori server atau di _database_ berdasarkan _session ID_ yang didapat, lalu mengembalikan data yang diminta.

Perbedaan penting yang perlu diingat adalah data _cookie_ disimpan pada sisi klien, sedangkan data _session_ biasanya disimpan pada sisi server. Untuk pembahasan lebih detail mengenai _stateless, stateful, cookie_, dan _session_ dapat dibaca [di sini](https://sethuramanmurali.wordpress.com/2013/07/07/stateful-stateless-cookie-and-session/).

Berikut tabel singkat yang menjelaskan perbedaan antara _cookies_, _session_, dan _local storage_ secara singkat.

|                       | **_Cookies_**  | **_Local Storage_** | **_Sessions_**     |
|-----------------------|----------------|---------------------|--------------------|
| **Kapasitas**         | 4 KB           | 5 MB                | 5 MB               |
| **Teknologi Browser** | HTML4/HTML5    | HTML5               | HTML5              |
| **Aksesibilitas**     | Semua _window_ | Semua _window_      | _Tab_ yang sama    |
| **Kedaluwarsa**       | Diatur manual  | Selamanya           | Saat _tab_ ditutup |

Beberapa tautan video yang dapat memperkaya pengetahuan terkait materi ini:

- [Session & Cookies](https://www.youtube.com/watch?v=64veb6tKTm0&t=10s)
- [Cookies History](https://www.youtube.com/watch?v=I01XMRo2ESg)
- [Cookies vs. Local Storage vs. Session](https://www.youtube.com/watch?v=AwicscsvGLg)

## Tutorial: Membuat Form Registrasi

Catatan: Pada tutorial ini, kamu akan menggunakan proyek yang sudah kamu buat pada tutorial sebelumnya.

Kita akan membuat akses halaman _wishlist_ yang sebelumnya telah dibuat menjadi _restricted_, dengan tujuan pengguna yang ingin mengakses halaman _wishlist_ harus mempunyai akun dan melakukan _login_ ke situs web agar mendapatkan akses.

1. Jalankan _virtual environment_ terlebih dahulu.

2. Buka `views.py` yang ada pada folder `wishlist` dan buatlah fungsi dengan nama `register` yang menerima parameter `request`.

3. Tambahkan _import_ `redirect`, `UserCreationForm`, dan `messages` pada bagian paling atas.

    ```python
    from django.shortcuts import redirect
    from django.contrib.auth.forms import UserCreationForm
    from django.contrib import messages
    ```

4. Tambahkan potongan kode di bawah ini ke dalam fungsi `register` yang sudah kamu buat sebelumnya. Potongan kode ini berfungsi untuk menghasilkan formulir registrasi secara otomatis dan menghasilkan akun pengguna ketika data di-_submit_ dari form.

    ```python
    def register(request):
        form = UserCreationForm()

        if request.method == "POST":
            form = UserCreationForm(request.POST)
            if form.is_valid():
                form.save()
                messages.success(request, 'Akun telah berhasil dibuat!')
                return redirect('wishlist:login')
        
        context = {'form':form}
        return render(request, 'register.html', context)
    ```

5. Buatlah berkas HTML baru dengan nama `register.html` pada folder `wishlist/templates`. Isi dari `register.html` dapat kamu isi dengan _template_ berikut.

    ```html
    {% extends 'base.html' %}

    {% block meta %}
    <title>Registrasi Akun</title>
    {% endblock meta %}
    
    {% block content %}  
    
    <div class = "login">
        
        <h1>Formulir Registrasi</h1>  
    
            <form method="POST" >  
                {% csrf_token %}  
                <table>  
                    {{ form.as_table }}  
                    <tr>  
                        <td></td>
                        <td><input type="submit" name="submit" value="Daftar"/></td>  
                    </tr>  
                </table>  
            </form>

        {% if messages %}  
            <ul>   
                {% for message in messages %}  
                    <li>{{ message }}</li>  
                    {% endfor %}  
            </ul>   
        {% endif %}

    </div>  
    
    {% endblock content %}
    ```

6. Buka `urls.py` yang ada pada folder `wishlist` dan impor fungsi yang sudah kamu buat tadi.

    ```python
    from wishlist.views import register #sesuaikan dengan nama fungsi yang dibuat
    ```

7. Tambahkan _path url_ ke dalam `urlpatterns` untuk mengakses fungsi yang sudah diimpor tadi.

    ```python
    ...
    path('register/', register, name='register'), #sesuaikan dengan nama fungsi yang dibuat
    ...
    ```

Kita sudah menambahkan formulir registrasi akun dan membuat mekanisme `register`. Selanjutnya, kita akan membuat form _login_ agar pengguna dapat melakukan autentikasi akun.

## Tutorial: Membuat Form Login

1. Buka `views.py` yang ada pada folder `wishlist` dan buatlah fungsi dengan nama `login_user` yang menerima parameter `request`.

2. Tambahkan _import_ `authenticate` dan `login` pada bagian paling atas.

    ```python
    from django.contrib.auth import authenticate, login
    ```

3. Tambahkan potongan kode di bawah ini ke dalam fungsi `login` yang sudah kamu buat sebelumnya. Potongan kode ini berfungsi untuk mengautentikasi pengguna yang ingin _login_.

    ```python
    def login_user(request):
        if request.method == 'POST':
            username = request.POST.get('username')
            password = request.POST.get('password')
            user = authenticate(request, username=username, password=password)
            if user is not None:
                login(request, user)
                return redirect('wishlist:show_wishlist')
            else:
                messages.info(request, 'Username atau Password salah!')
        context = {}
        return render(request, 'login.html', context)
    ```

4. Buatlah berkas HTML baru dengan nama `login.html` pada folder `wishlist/templates`. Isi dari `login.html` dapat kamu isi dengan _template_ berikut.

    ```html
    {% extends 'base.html' %}

    {% block meta %}
    <title>Login</title>
    {% endblock meta %}
    
    {% block content %}

    <div class = "login">

        <h1>Login</h1>

        <form method="POST" action="">
            {% csrf_token %}
            <table>
                <tr>
                    <td>Username: </td>
                    <td><input type="text" name="username" placeholder="Username" class="form-control"></td>
                </tr>
                        
                <tr>
                    <td>Password: </td>
                    <td><input type="password" name="password" placeholder="Password" class="form-control"></td>
                </tr>

                <tr>
                    <td></td>
                    <td><input class="btn login_btn" type="submit" value="Login"></td>
                </tr>
            </table>
        </form>

        {% if messages %}
            <ul>
                {% for message in messages %}
                    <li>{{ message }}</li>
                {% endfor %}
            </ul>
        {% endif %}		
            
        Belum mempunyai akun? <a href="{% url 'wishlist:register' %}">Buat Akun</a>

    </div>

    {% endblock content %}
    ```

5. Buka `urls.py` yang ada pada folder `wishlist` dan impor fungsi yang sudah kamu buat tadi.

    ```python
    from wishlist.views import login_user #sesuaikan dengan nama fungsi yang dibuat
    ```

6. Tambahkan _path url_ ke dalam `urlpatterns` untuk mengakses fungsi yang sudah diimpor tadi.

    ```python
    ...
    path('login/', login_user, name='login'), #sesuaikan dengan nama fungsi yang dibuat
    ...
    ```

Kita sudah menambahkan form _login_ akun dan membuat mekanisme `login`. Selanjutnya, kita akan membuat mekanisme _logout_ dan menambahkan tombol _logout_ pada halaman _wishlist_.

## Tutorial: Membuat Fungsi Logout

1. Buka `views.py` yang ada pada folder `wishlist` dan buatlah fungsi dengan nama `logout_user` yang menerima parameter `request`.

2. Tambahkan _import_ `logout` pada bagian paling atas.

    ```python
    from django.contrib.auth import logout
    ```

3. Tambahkan potongan kode di bawah ini ke dalam fungsi `logout` yang sudah kamu buat sebelumnya. Potongan kode ini berfungsi untuk melakukan mekanisme _logout_.

    ```python
    def logout_user(request):
        logout(request)
        return redirect('wishlist:login')
    ```

4. Bukalah berkas `wishlist.html` yang ada pada folder `wishlist/templates`.

5. Tambahkan potongan kode di bawah ini setelah _end tag table_ (`</table>`) pada berkas `wishlist.html`. Potongan kode ini berfungsi untuk menambahkan tombol logout.

    ```html
    ...
    <button><a href="{% url 'wishlist:logout' %}">Logout</a></button>
    ...
    ```

6. Buka `urls.py` yang ada pada folder `wishlist` dan impor fungsi yang sudah kamu buat tadi.

    ```python
    from wishlist.views import logout_user #sesuaikan dengan nama fungsi yang dibuat
    ```

7. Tambahkan _path url_ ke dalam `urlpatterns` untuk mengakses fungsi yang sudah diimpor tadi.

    ```python
    ...
    path('logout/', logout_user, name='logout'), #sesuaikan dengan nama fungsi yang dibuat
    ...
    ```

Kita sudah membuat mekanisme `logout` dan menyelesaikan sistem autentikasi pada proyek `wishlist`. Selanjutnya, kita akan merestriksi akses halaman _wishlist_ agar pengguna yang belum terautentikasi tidak dapat mengakses halaman _wishlist_.

## Tutorial: Merestriksi Akses Halaman Wishlist

1. Buka `views.py` yang ada pada folder `wishlist` dan tambahkan _import_ `login_required` pada bagian paling atas.

    ```python
    from django.contrib.auth.decorators import login_required
    ```

2. Tambahkan kode `@login_required(login_url='/wishlist/login/')` di atas fungsi `show_wishlist` agar halaman _wishlist_ hanya dapat diakses oleh pengguna yang sudah login (terautentikasi).

    ```python
    ...
    @login_required(login_url='/wishlist/login/')
    def show_wishlist(request):
    ...
    ```

Setelah merestriksi akses halaman wishlist, jalankan proyek Django-mu dengan perintah `python manage.py runserver` dan bukalah http://localhost:8000/wishlist di browser favoritmu untuk melihat hasilnya.

## Tutorial: Menambahkan _Cookies_

Sekarang, kita akan melihat penggunaan _cookies_ dengan menambahkan data _last login_ dan menampilkannya ke halaman _wishlist_.

1. Lakukan _logout_ terlebih dahulu apabila kamu sedang menjalankan aplikasi Django-mu.

2. Buka `views.py` yang ada pada folder `wishlist` dan tambahkan _import_ `HttpResponseRedirect`, `reverse`, dan `datetime` pada bagian paling atas.

    ```python
    import datetime
    from django.http import HttpResponseRedirect
    from django.urls import reverse
    ```

3. Pada fungsi `login_user`, kita akan menambahkan fungsi untuk menambahkan _cookie_ yang bernama `last_login` untuk melihat kapan terakhir kali pengguna melakukan _login_. Caranya adalah dengan mengganti kode yang ada pada blok `if user is not None` menjadi potongan kode berikut.

    ```python
    ...
    if user is not None:
        login(request, user) # melakukan login terlebih dahulu
        response = HttpResponseRedirect(reverse("wishlist:show_wishlist")) # membuat response
        response.set_cookie('last_login', str(datetime.datetime.now())) # membuat cookie last_login dan menambahkannya ke dalam response
        return response
    ...
    ```

4. Pada fungsi `show_wishlist`, tambahkan potongan kode `'last_login': request.COOKIES['last_login']` ke dalam variabel `context`. Berikut adalah contoh kode yang sudah diubah.

    ```python
    context = {
        'list_barang': data_barang_wishlist,
        'nama': 'Kak Cinoy',
        'last_login': request.COOKIES['last_login'],
    }
    ```

5. Ubah fungsi `logout_user` menjadi seperti potongan kode berikut. Potongan kode ini menambahkan mekanisme penghapusan _cookie_ `last_login` saat pengguna melakukan `logout`.

    ```python
    def logout_user(request):
        logout(request)
        response = HttpResponseRedirect(reverse('wishlist:login'))
        response.delete_cookie('last_login')
        return response
    ```

6. Buka berkas `wishlist.html` dan tambahkan potongan kode berikut di antara tabel dan tombol _logout_ untuk menampilkan data _last login_.

    ```html
    ...
    <h5>Sesi terakhir login: {{ last_login }}</h5>
    ...
    ```

7. Silakan _refresh_ halaman _login_ (atau jalankan proyek Django-mu dengan perintah `python manage.py runserver` jika kamu belum menjalankan proyekmu) dan cobalah untuk _login_. Data _last login_ kamu akan muncul di halaman wishlist_.

8. Untuk melihat data _cookie_ `last_login`, kamu dapat mengakses fitur _inspect element_ dan membuka bagian _Application/Storage_. Klik bagian _Cookies_ dan kamu dapat melihat data _cookies_ yang tersedia. Selain `last_login`, kamu juga dapat melihat data `sessionid` dan `csrftoken`. Berikut adalah contoh tampilannya.

    ![Gambar Halaman Wishlist beserta Data Cookies](https://media.discordapp.net/attachments/1008373595719868426/1021428854897791076/unknown.png)

9. Jika kamu melakukan _logout_ dan membuka bagian riwayat _cookie_, _cookie_ yang dibuat sebelumnya akan hilang dan dibuat ulang ketika kamu _login_ kembali.

## Akhir Kata

Selamat! Kamu telah menyelesaikan Tutorial 3 dengan baik. 😄

Setelah kamu menyelesaikan seluruh tutorial di atas, harapannya kamu sekarang lebih paham tentang penggunaan _form_, autentikasi, _session_, dan _cookie_ pada _framework_ Django.

Seperti biasa, jangan lupa untuk melakukan `add`, `commit`, dan `push` perubahan yang sudah kamu lakukan untuk menyimpannya ke dalam repositori GitHub sebelum kamu menutup pekerjaan kamu. 😉

## Kontributor

- Muhammad Athallah
- Muhammad Azis Husein
- Zuhal 'Alimul Hadi
