"use strict";(self.webpackChunk_pbp_fasilkom_ui_ganjil_2023=self.webpackChunk_pbp_fasilkom_ui_ganjil_2023||[]).push([[868],{3905:(a,e,n)=>{n.d(e,{Zo:()=>o,kt:()=>d});var t=n(7294);function i(a,e,n){return e in a?Object.defineProperty(a,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):a[e]=n,a}function r(a,e){var n=Object.keys(a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(a);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),n.push.apply(n,t)}return n}function m(a){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){i(a,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(n,e))}))}return a}function p(a,e){if(null==a)return{};var n,t,i=function(a,e){if(null==a)return{};var n,t,i={},r=Object.keys(a);for(t=0;t<r.length;t++)n=r[t],e.indexOf(n)>=0||(i[n]=a[n]);return i}(a,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(a);for(t=0;t<r.length;t++)n=r[t],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(a,n)&&(i[n]=a[n])}return i}var l=t.createContext({}),s=function(a){var e=t.useContext(l),n=e;return a&&(n="function"==typeof a?a(e):m(m({},e),a)),n},o=function(a){var e=s(a.components);return t.createElement(l.Provider,{value:e},a.children)},k={inlineCode:"code",wrapper:function(a){var e=a.children;return t.createElement(t.Fragment,{},e)}},u=t.forwardRef((function(a,e){var n=a.components,i=a.mdxType,r=a.originalType,l=a.parentName,o=p(a,["components","mdxType","originalType","parentName"]),u=s(n),d=i,g=u["".concat(l,".").concat(d)]||u[d]||k[d]||r;return n?t.createElement(g,m(m({ref:e},o),{},{components:n})):t.createElement(g,m({ref:e},o))}));function d(a,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof a||i){var r=n.length,m=new Array(r);m[0]=u;var p={};for(var l in e)hasOwnProperty.call(e,l)&&(p[l]=e[l]);p.originalType=a,p.mdxType="string"==typeof a?a:i,m[1]=p;for(var s=2;s<r;s++)m[s]=n[s];return t.createElement.apply(null,m)}return t.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1247:(a,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>m,default:()=>k,frontMatter:()=>r,metadata:()=>p,toc:()=>s});var t=n(7462),i=(n(7294),n(3905));const r={sidebar_label:"Lab 3"},m="Lab 3: Form, Authentication, Session, dan Cookie",p={unversionedId:"tutorial/tutorial-3",id:"tutorial/tutorial-3",title:"Lab 3: Form, Authentication, Session, dan Cookie",description:"Pemrograman Berbasis Platform (CSGE602022) - diselenggarakan oleh Fakultas Ilmu Komputer Universitas Indonesia, Semester Gasal 2022/2023",source:"@site/assignments/tutorial/tutorial-3.md",sourceDirName:"tutorial",slug:"/tutorial/tutorial-3",permalink:"/ganjil-2023/assignments/tutorial/tutorial-3",draft:!1,tags:[],version:"current",frontMatter:{sidebar_label:"Lab 3"},sidebar:"tutorialSidebar",previous:{title:"Lab 2",permalink:"/ganjil-2023/assignments/tutorial/tutorial-2"},next:{title:"Lab 4",permalink:"/ganjil-2023/assignments/tutorial/tutorial-4"}},l={},s=[{value:"Tujuan Pembelajaran",id:"tujuan-pembelajaran",level:2},{value:"Pengenalan HTTP",id:"pengenalan-http",level:2},{value:"Pengenalan Cookies &amp; Session",id:"pengenalan-cookies--session",level:2},{value:"Tutorial: Membuat Form Registrasi",id:"tutorial-membuat-form-registrasi",level:2},{value:"Tutorial: Membuat Form Login",id:"tutorial-membuat-form-login",level:2},{value:"Tutorial: Membuat Fungsi Logout",id:"tutorial-membuat-fungsi-logout",level:2},{value:"Tutorial: Merestriksi Akses Halaman Wishlist",id:"tutorial-merestriksi-akses-halaman-wishlist",level:2},{value:"Tutorial: Menambahkan <em>Cookies</em>",id:"tutorial-menambahkan-cookies",level:2},{value:"Akhir Kata",id:"akhir-kata",level:2},{value:"Kontributor",id:"kontributor",level:2}],o={toc:s};function k(a){let{components:e,...n}=a;return(0,i.kt)("wrapper",(0,t.Z)({},o,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"lab-3-form-authentication-session-dan-cookie"},"Lab 3: Form, Authentication, Session, dan Cookie"),(0,i.kt)("p",null,"Pemrograman Berbasis Platform (CSGE602022) - diselenggarakan oleh Fakultas Ilmu Komputer Universitas Indonesia, Semester Gasal 2022/2023"),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"tujuan-pembelajaran"},"Tujuan Pembelajaran"),(0,i.kt)("p",null,"Setelah menyelesaikan tutorial ini, kamu diharapkan untuk dapat:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Memahami cara kerja submisi data yang diberikan oleh pengguna menggunakan elemen ",(0,i.kt)("inlineCode",{parentName:"li"},"form")),(0,i.kt)("li",{parentName:"ul"},"Memahami cara kerja autentikasi"),(0,i.kt)("li",{parentName:"ul"},"Memahami kegunaan ",(0,i.kt)("em",{parentName:"li"},"cookie")," dan ",(0,i.kt)("em",{parentName:"li"},"session")," dalam konteks pengembangan web"),(0,i.kt)("li",{parentName:"ul"},"Memahami cara kerja ",(0,i.kt)("em",{parentName:"li"},"Cookie & Session")," pada web"),(0,i.kt)("li",{parentName:"ul"},"Menggunakan ",(0,i.kt)("em",{parentName:"li"},"Cookie & Session"))),(0,i.kt)("h2",{id:"pengenalan-http"},"Pengenalan HTTP"),(0,i.kt)("p",null,"HTTP merupakan singkatan dari ",(0,i.kt)("em",{parentName:"p"},"HyperText Transfer Protocol"),". HTTP adalah protokol yang digunakan untuk berkomunikasi antara ",(0,i.kt)("em",{parentName:"p"},"client")," dan ",(0,i.kt)("em",{parentName:"p"},"server"),". HTTP bersifat ",(0,i.kt)("em",{parentName:"p"},"stateless"),"; artinya setiap transaksi/aktivitas yang dilakukan dianggap sebagai transaksi/aktivitas yang benar-benar baru, sehingga tidak ada data sebelumnya yang disimpan untuk transaksi/aktivitas saat ini."),(0,i.kt)("p",null,"Beberapa konsep dasar mengenai HTTP:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"Client/Server")),": Interaksi dilakukan antar ",(0,i.kt)("em",{parentName:"p"},"client/server"),". Klien melakukan ",(0,i.kt)("em",{parentName:"p"},"request")," dan server memberikan ",(0,i.kt)("em",{parentName:"p"},"response"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"Stateless")),": Setiap aktivitas (",(0,i.kt)("em",{parentName:"p"},"request/response"),") bersifat independen.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"OSI Layer/Model")),": Model Open Systems Interconnection (OSI) menjelaskan tujuh lapisan yang digunakan sistem komputer untuk berkomunikasi melalui jaringan. Model 7-layer OSI terdiri dari ",(0,i.kt)("em",{parentName:"p"},"Application Layer"),", ",(0,i.kt)("em",{parentName:"p"},"Presentation Layer"),", ",(0,i.kt)("em",{parentName:"p"},"Session Layer"),", ",(0,i.kt)("em",{parentName:"p"},"Transport Layer"),", ",(0,i.kt)("em",{parentName:"p"},"Network Layer"),", ",(0,i.kt)("em",{parentName:"p"},"Data Link Layer"),", dan ",(0,i.kt)("em",{parentName:"p"},"Physical Layer"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"Application Layer")),": Website berjalan pada ",(0,i.kt)("em",{parentName:"p"},"application layer"),". Proses ",(0,i.kt)("em",{parentName:"p"},"request/response")," terjadi pada ",(0,i.kt)("em",{parentName:"p"},"transport Layer")," yang umumnya menggunakan protokol TCP yang menentukan bagaimana data akan dikirim. ",(0,i.kt)("em",{parentName:"p"},"Application Layer")," tidak peduli apa yang dilakukan oleh ",(0,i.kt)("em",{parentName:"p"},"transport Layer")," (bagaimana data dikirim, diolah, dsb) karena ",(0,i.kt)("em",{parentName:"p"},"application layer"),") hanya berfokus kepada ",(0,i.kt)("em",{parentName:"p"},"request")," dan ",(0,i.kt)("em",{parentName:"p"},"response")),(0,i.kt)("blockquote",{parentName:"li"},(0,i.kt)("p",{parentName:"blockquote"},"Lapisan OSI lainnya akan diajarkan pada mata kuliah Jaringan Komputer/Jaringan Komunikasi Data. Kamu dapat mencarinya sendiri jika kamu penasaran. \ud83d\ude09"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"Client Actions Method")),": Merupakan metode yang digunakan oleh ",(0,i.kt)("em",{parentName:"p"},"client")," saat melakukan ",(0,i.kt)("em",{parentName:"p"},"request"),". Contoh: GET, POST, PUT, DELETE, dll. Penjelasan lebih detail dapat dibaca ",(0,i.kt)("a",{parentName:"p",href:"https://www.restapitutorial.com/lessons/httpmethods.html"},"di sini"),").")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"Server Status Code")),": Merupakan status kode yang diberikan oleh server saat meminta suatu halaman web Contoh: 200 (OK), 404 (",(0,i.kt)("em",{parentName:"p"},"Page Not Found"),"), 500 (",(0,i.kt)("em",{parentName:"p"},"Internal Server Error"),"), dsb. Penjelasan lebih detail dapat dibaca ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Status"},"di sini"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"Headers")),": Merupakan informasi kecil yang dikirim bersamaan dengan ",(0,i.kt)("em",{parentName:"p"},"request")," dan ",(0,i.kt)("em",{parentName:"p"},"response"),". Informasi-informasi tersebut berguna sebagai data tambahan yang digunakan untuk memproses ",(0,i.kt)("em",{parentName:"p"},"request/response"),". Contoh: Pada ",(0,i.kt)("em",{parentName:"p"},"headers"),", terdapat ",(0,i.kt)("inlineCode",{parentName:"p"},"content-type:json"),". Artinya, tipe konten yang diminta/dikirim adalah ",(0,i.kt)("inlineCode",{parentName:"p"},"json"),". ",(0,i.kt)("em",{parentName:"p"},"Headers")," juga menyimpan data ",(0,i.kt)("em",{parentName:"p"},"cookies"),"."))),(0,i.kt)("h2",{id:"pengenalan-cookies--session"},"Pengenalan Cookies & Session"),(0,i.kt)("p",null,"Semua komunikasi antara klien dan server dilakukan melalui protokol HTTP, di mana HTTP merupakan ",(0,i.kt)("em",{parentName:"p"},"stateless protocol"),". Artinya ",(0,i.kt)("em",{parentName:"p"},"state")," yang satu dengan yang lain tidak berhubungan (independen). Hal ini mengharuskan komputer klien yang menjalankan browser untuk membuat koneksi TCP ke server setiap kali melakukan ",(0,i.kt)("em",{parentName:"p"},"request"),". Tanpa adanya koneksi persisten antara klien dan server, ",(0,i.kt)("em",{parentName:"p"},"software")," pada setiap sisi (",(0,i.kt)("em",{parentName:"p"},"endpoint"),") tidak dapat bergantung hanya pada koneksi TCP untuk melakukan ",(0,i.kt)("em",{parentName:"p"},"holding state")," atau ",(0,i.kt)("em",{parentName:"p"},"holding session state"),". Apa yang dimaksud dengan ",(0,i.kt)("em",{parentName:"p"},"holding state"),"?"),(0,i.kt)("p",null,"Sebagai contoh, kamu ingin mengakses suatu halaman A pada suatu web yang mensyaratkan pengaksesnya sudah ",(0,i.kt)("em",{parentName:"p"},"login")," ke dalam web. Kemudian kamu ",(0,i.kt)("em",{parentName:"p"},"login")," ke web tersebut dan berhasil membuka halaman A. Saat ingin pindah ke halaman B pada web yang sama, tanpa adanya suatu proses ",(0,i.kt)("em",{parentName:"p"},"holding state")," maka kamu akan diminta untuk ",(0,i.kt)("em",{parentName:"p"},"login"),' kembali. Begitu yang akan terjadi setiap kali kamu mengakses halaman yang berbeda padahal masih pada web yang sama. Proses memberitahu "siapa" yang sedang ',(0,i.kt)("em",{parentName:"p"},"login")," dan menyimpan data ini dikenal sebagai bentuk dialog antara klien-server dan merupakan dasar ",(0,i.kt)("em",{parentName:"p"},"session")," - ",(0,i.kt)("em",{parentName:"p"},"a semi-permanent exchange of information"),". Merupakan hal yang sulit untuk membuat HTTP melakukan ",(0,i.kt)("em",{parentName:"p"},"holding state")," (karena HTTP merupakan ",(0,i.kt)("em",{parentName:"p"},"stateless protocol"),"). Oleh karena itu, dibutuhkan teknik untuk mengatasi masalah tersebut, yaitu ",(0,i.kt)("em",{parentName:"p"},"Cookie")," dan ",(0,i.kt)("em",{parentName:"p"},"Session"),"."),(0,i.kt)("p",null,"Salah satu cara yang paling banyak digunakan untuk melakukan ",(0,i.kt)("em",{parentName:"p"},"holding state")," adalah dengan menggunakan ",(0,i.kt)("em",{parentName:"p"},"session ID")," yang disimpan sebagai ",(0,i.kt)("em",{parentName:"p"},"cookie")," pada komputer klien. ",(0,i.kt)("em",{parentName:"p"},"Session ID")," dapat dianggap sebagai suatu ",(0,i.kt)("em",{parentName:"p"},"token")," (barisan karakter) untuk mengenali ",(0,i.kt)("em",{parentName:"p"},"session")," yang unik pada aplikasi web tertentu. Daripada menyimpan semua jenis informasi sebagai ",(0,i.kt)("em",{parentName:"p"},"cookies")," pada klien seperti ",(0,i.kt)("em",{parentName:"p"},"username"),", nama, dan password, hanya ",(0,i.kt)("em",{parentName:"p"},"Session ID")," yang disimpan. ",(0,i.kt)("em",{parentName:"p"},"Session ID")," ini kemudian dapat dipetakan ke suatu struktur data pada sisi web server. Pada struktur data tersebut, kamu dapat menyimpan semua informasi yang kamu butuhkan. Pendekatan ini jauh lebih aman untuk menyimpan informasi mengenai pengguna, daripada menyimpannya pada ",(0,i.kt)("em",{parentName:"p"},"cookie"),'. Dengan cara ini, informasi tidak dapat disalahgunakan oleh klien atau koneksi yang mencurigakan. Selain itu, pendekatan ini lebih "tepat" jika data yang akan disimpan ada banyak. Hal itu karena cookie hanya dapat menyimpan maksimal 4 KB data. Bayangkan kamu sudah ',(0,i.kt)("em",{parentName:"p"},"login")," ke suatu web/aplikasi dan mendapat ",(0,i.kt)("em",{parentName:"p"},"session ID")," (",(0,i.kt)("em",{parentName:"p"},"session identifier"),"). Untuk dapat melakukan ",(0,i.kt)("em",{parentName:"p"},"holding state")," pada HTTP yang ",(0,i.kt)("em",{parentName:"p"},"stateless"),", browser biasanya mengirimkan suatu ",(0,i.kt)("em",{parentName:"p"},"session ID")," ke server pada setiap ",(0,i.kt)("em",{parentName:"p"},"request"),". Dengan begitu, setiap kali datang suatu ",(0,i.kt)("em",{parentName:"p"},"request"),', maka server akan bereaksi (kurang lebih) "Oh, ini orang yang tepat!". Kemudian server akan mencari informasi ',(0,i.kt)("em",{parentName:"p"},"state")," di memori server atau di ",(0,i.kt)("em",{parentName:"p"},"database")," berdasarkan ",(0,i.kt)("em",{parentName:"p"},"session ID")," yang didapat, lalu mengembalikan data yang diminta."),(0,i.kt)("p",null,"Perbedaan penting yang perlu diingat adalah data ",(0,i.kt)("em",{parentName:"p"},"cookie")," disimpan pada sisi klien, sedangkan data ",(0,i.kt)("em",{parentName:"p"},"session")," biasanya disimpan pada sisi server. Untuk pembahasan lebih detail mengenai ",(0,i.kt)("em",{parentName:"p"},"stateless, stateful, cookie"),", dan ",(0,i.kt)("em",{parentName:"p"},"session")," dapat dibaca ",(0,i.kt)("a",{parentName:"p",href:"https://sethuramanmurali.wordpress.com/2013/07/07/stateful-stateless-cookie-and-session/"},"di sini"),"."),(0,i.kt)("p",null,"Berikut tabel singkat yang menjelaskan perbedaan antara ",(0,i.kt)("em",{parentName:"p"},"cookies"),", ",(0,i.kt)("em",{parentName:"p"},"session"),", dan ",(0,i.kt)("em",{parentName:"p"},"local storage")," secara singkat."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null}),(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},(0,i.kt)("em",{parentName:"strong"},"Cookies"))),(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},(0,i.kt)("em",{parentName:"strong"},"Local Storage"))),(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},(0,i.kt)("em",{parentName:"strong"},"Sessions"))))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Kapasitas")),(0,i.kt)("td",{parentName:"tr",align:null},"4 KB"),(0,i.kt)("td",{parentName:"tr",align:null},"5 MB"),(0,i.kt)("td",{parentName:"tr",align:null},"5 MB")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Teknologi Browser")),(0,i.kt)("td",{parentName:"tr",align:null},"HTML4/HTML5"),(0,i.kt)("td",{parentName:"tr",align:null},"HTML5"),(0,i.kt)("td",{parentName:"tr",align:null},"HTML5")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Aksesibilitas")),(0,i.kt)("td",{parentName:"tr",align:null},"Semua ",(0,i.kt)("em",{parentName:"td"},"window")),(0,i.kt)("td",{parentName:"tr",align:null},"Semua ",(0,i.kt)("em",{parentName:"td"},"window")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("em",{parentName:"td"},"Tab")," yang sama")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Kedaluwarsa")),(0,i.kt)("td",{parentName:"tr",align:null},"Diatur manual"),(0,i.kt)("td",{parentName:"tr",align:null},"Selamanya"),(0,i.kt)("td",{parentName:"tr",align:null},"Saat ",(0,i.kt)("em",{parentName:"td"},"tab")," ditutup")))),(0,i.kt)("p",null,"Beberapa tautan video yang dapat memperkaya pengetahuan terkait materi ini:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=64veb6tKTm0&t=10s"},"Session & Cookies")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=I01XMRo2ESg"},"Cookies History")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=AwicscsvGLg"},"Cookies vs. Local Storage vs. Session"))),(0,i.kt)("h2",{id:"tutorial-membuat-form-registrasi"},"Tutorial: Membuat Form Registrasi"),(0,i.kt)("p",null,"Catatan: Pada tutorial ini, kamu akan menggunakan proyek yang sudah kamu buat pada tutorial sebelumnya."),(0,i.kt)("p",null,"Kita akan membuat akses halaman ",(0,i.kt)("em",{parentName:"p"},"wishlist")," yang sebelumnya telah dibuat menjadi ",(0,i.kt)("em",{parentName:"p"},"restricted"),", dengan tujuan pengguna yang ingin mengakses halaman ",(0,i.kt)("em",{parentName:"p"},"wishlist")," harus mempunyai akun dan melakukan ",(0,i.kt)("em",{parentName:"p"},"login")," ke situs web agar mendapatkan akses."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Jalankan ",(0,i.kt)("em",{parentName:"p"},"virtual environment")," terlebih dahulu.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Buka ",(0,i.kt)("inlineCode",{parentName:"p"},"views.py")," yang ada pada folder ",(0,i.kt)("inlineCode",{parentName:"p"},"wishlist")," dan buatlah fungsi dengan nama ",(0,i.kt)("inlineCode",{parentName:"p"},"register")," yang menerima parameter ",(0,i.kt)("inlineCode",{parentName:"p"},"request"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Tambahkan ",(0,i.kt)("em",{parentName:"p"},"import")," ",(0,i.kt)("inlineCode",{parentName:"p"},"redirect"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"UserCreationForm"),", dan ",(0,i.kt)("inlineCode",{parentName:"p"},"messages")," pada bagian paling atas."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-python"},"from django.shortcuts import redirect\nfrom django.contrib.auth.forms import UserCreationForm\nfrom django.contrib import messages\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Tambahkan potongan kode di bawah ini ke dalam fungsi ",(0,i.kt)("inlineCode",{parentName:"p"},"register")," yang sudah kamu buat sebelumnya. Potongan kode ini berfungsi untuk menghasilkan formulir registrasi secara otomatis dan menghasilkan akun pengguna ketika data di-",(0,i.kt)("em",{parentName:"p"},"submit")," dari form."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-python"},"def register(request):\n    form = UserCreationForm()\n\n    if request.method == \"POST\":\n        form = UserCreationForm(request.POST)\n        if form.is_valid():\n            form.save()\n            messages.success(request, 'Akun telah berhasil dibuat!')\n            return redirect('wishlist:login')\n    \n    context = {'form':form}\n    return render(request, 'register.html', context)\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Buatlah berkas HTML baru dengan nama ",(0,i.kt)("inlineCode",{parentName:"p"},"register.html")," pada folder ",(0,i.kt)("inlineCode",{parentName:"p"},"wishlist/templates"),". Isi dari ",(0,i.kt)("inlineCode",{parentName:"p"},"register.html")," dapat kamu isi dengan ",(0,i.kt)("em",{parentName:"p"},"template")," berikut."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-html"},'{% extends \'base.html\' %}\n\n{% block meta %}\n<title>Registrasi Akun</title>\n{% endblock meta %}\n\n{% block content %}  \n\n<div class = "login">\n    \n    <h1>Formulir Registrasi</h1>  \n\n        <form method="POST" >  \n            {% csrf_token %}  \n            <table>  \n                {{ form.as_table }}  \n                <tr>  \n                    <td></td>\n                    <td><input type="submit" name="submit" value="Daftar"/></td>  \n                </tr>  \n            </table>  \n        </form>\n\n    {% if messages %}  \n        <ul>   \n            {% for message in messages %}  \n                <li>{{ message }}</li>  \n                {% endfor %}  \n        </ul>   \n    {% endif %}\n\n</div>  \n\n{% endblock content %}\n'))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Buka ",(0,i.kt)("inlineCode",{parentName:"p"},"urls.py")," yang ada pada folder ",(0,i.kt)("inlineCode",{parentName:"p"},"wishlist")," dan impor fungsi yang sudah kamu buat tadi."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-python"},"from wishlist.views import register #sesuaikan dengan nama fungsi yang dibuat\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Tambahkan ",(0,i.kt)("em",{parentName:"p"},"path url")," ke dalam ",(0,i.kt)("inlineCode",{parentName:"p"},"urlpatterns")," untuk mengakses fungsi yang sudah diimpor tadi."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-python"},"...\npath('register/', register, name='register'), #sesuaikan dengan nama fungsi yang dibuat\n...\n")))),(0,i.kt)("p",null,"Kita sudah menambahkan formulir registrasi akun dan membuat mekanisme ",(0,i.kt)("inlineCode",{parentName:"p"},"register"),". Selanjutnya, kita akan membuat form ",(0,i.kt)("em",{parentName:"p"},"login")," agar pengguna dapat melakukan autentikasi akun."),(0,i.kt)("h2",{id:"tutorial-membuat-form-login"},"Tutorial: Membuat Form Login"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Buka ",(0,i.kt)("inlineCode",{parentName:"p"},"views.py")," yang ada pada folder ",(0,i.kt)("inlineCode",{parentName:"p"},"wishlist")," dan buatlah fungsi dengan nama ",(0,i.kt)("inlineCode",{parentName:"p"},"login_user")," yang menerima parameter ",(0,i.kt)("inlineCode",{parentName:"p"},"request"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Tambahkan ",(0,i.kt)("em",{parentName:"p"},"import")," ",(0,i.kt)("inlineCode",{parentName:"p"},"authenticate")," dan ",(0,i.kt)("inlineCode",{parentName:"p"},"login")," pada bagian paling atas."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-python"},"from django.contrib.auth import authenticate, login\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Tambahkan potongan kode di bawah ini ke dalam fungsi ",(0,i.kt)("inlineCode",{parentName:"p"},"login")," yang sudah kamu buat sebelumnya. Potongan kode ini berfungsi untuk mengautentikasi pengguna yang ingin ",(0,i.kt)("em",{parentName:"p"},"login"),"."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-python"},"def login_user(request):\n    if request.method == 'POST':\n        username = request.POST.get('username')\n        password = request.POST.get('password')\n        user = authenticate(request, username=username, password=password)\n        if user is not None:\n            login(request, user)\n            return redirect('wishlist:show_wishlist')\n        else:\n            messages.info(request, 'Username atau Password salah!')\n    context = {}\n    return render(request, 'login.html', context)\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Buatlah berkas HTML baru dengan nama ",(0,i.kt)("inlineCode",{parentName:"p"},"login.html")," pada folder ",(0,i.kt)("inlineCode",{parentName:"p"},"wishlist/templates"),". Isi dari ",(0,i.kt)("inlineCode",{parentName:"p"},"login.html")," dapat kamu isi dengan ",(0,i.kt)("em",{parentName:"p"},"template")," berikut."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-html"},'{% extends \'base.html\' %}\n\n{% block meta %}\n<title>Login</title>\n{% endblock meta %}\n\n{% block content %}\n\n<div class = "login">\n\n    <h1>Login</h1>\n\n    <form method="POST" action="">\n        {% csrf_token %}\n        <table>\n            <tr>\n                <td>Username: </td>\n                <td><input type="text" name="username" placeholder="Username" class="form-control"></td>\n            </tr>\n                    \n            <tr>\n                <td>Password: </td>\n                <td><input type="password" name="password" placeholder="Password" class="form-control"></td>\n            </tr>\n\n            <tr>\n                <td></td>\n                <td><input class="btn login_btn" type="submit" value="Login"></td>\n            </tr>\n        </table>\n    </form>\n\n    {% if messages %}\n        <ul>\n            {% for message in messages %}\n                <li>{{ message }}</li>\n            {% endfor %}\n        </ul>\n    {% endif %}     \n        \n    Belum mempunyai akun? <a href="{% url \'wishlist:register\' %}">Buat Akun</a>\n\n</div>\n\n{% endblock content %}\n'))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Buka ",(0,i.kt)("inlineCode",{parentName:"p"},"urls.py")," yang ada pada folder ",(0,i.kt)("inlineCode",{parentName:"p"},"wishlist")," dan impor fungsi yang sudah kamu buat tadi."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-python"},"from wishlist.views import login_user #sesuaikan dengan nama fungsi yang dibuat\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Tambahkan ",(0,i.kt)("em",{parentName:"p"},"path url")," ke dalam ",(0,i.kt)("inlineCode",{parentName:"p"},"urlpatterns")," untuk mengakses fungsi yang sudah diimpor tadi."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-python"},"...\npath('login/', login_user, name='login'), #sesuaikan dengan nama fungsi yang dibuat\n...\n")))),(0,i.kt)("p",null,"Kita sudah menambahkan form ",(0,i.kt)("em",{parentName:"p"},"login")," akun dan membuat mekanisme ",(0,i.kt)("inlineCode",{parentName:"p"},"login"),". Selanjutnya, kita akan membuat mekanisme ",(0,i.kt)("em",{parentName:"p"},"logout")," dan menambahkan tombol ",(0,i.kt)("em",{parentName:"p"},"logout")," pada halaman ",(0,i.kt)("em",{parentName:"p"},"wishlist"),"."),(0,i.kt)("h2",{id:"tutorial-membuat-fungsi-logout"},"Tutorial: Membuat Fungsi Logout"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Buka ",(0,i.kt)("inlineCode",{parentName:"p"},"views.py")," yang ada pada folder ",(0,i.kt)("inlineCode",{parentName:"p"},"wishlist")," dan buatlah fungsi dengan nama ",(0,i.kt)("inlineCode",{parentName:"p"},"logout_user")," yang menerima parameter ",(0,i.kt)("inlineCode",{parentName:"p"},"request"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Tambahkan ",(0,i.kt)("em",{parentName:"p"},"import")," ",(0,i.kt)("inlineCode",{parentName:"p"},"logout")," pada bagian paling atas."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-python"},"from django.contrib.auth import logout\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Tambahkan potongan kode di bawah ini ke dalam fungsi ",(0,i.kt)("inlineCode",{parentName:"p"},"logout")," yang sudah kamu buat sebelumnya. Potongan kode ini berfungsi untuk melakukan mekanisme ",(0,i.kt)("em",{parentName:"p"},"logout"),"."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-python"},"def logout_user(request):\n    logout(request)\n    return redirect('wishlist:login')\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Bukalah berkas ",(0,i.kt)("inlineCode",{parentName:"p"},"wishlist.html")," yang ada pada folder ",(0,i.kt)("inlineCode",{parentName:"p"},"wishlist/templates"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Tambahkan potongan kode di bawah ini setelah ",(0,i.kt)("em",{parentName:"p"},"end tag table")," (",(0,i.kt)("inlineCode",{parentName:"p"},"</table>"),") pada berkas ",(0,i.kt)("inlineCode",{parentName:"p"},"wishlist.html"),". Potongan kode ini berfungsi untuk menambahkan tombol logout."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-html"},"...\n<button><a href=\"{% url 'wishlist:logout' %}\">Logout</a></button>\n...\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Buka ",(0,i.kt)("inlineCode",{parentName:"p"},"urls.py")," yang ada pada folder ",(0,i.kt)("inlineCode",{parentName:"p"},"wishlist")," dan impor fungsi yang sudah kamu buat tadi."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-python"},"from wishlist.views import logout_user #sesuaikan dengan nama fungsi yang dibuat\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Tambahkan ",(0,i.kt)("em",{parentName:"p"},"path url")," ke dalam ",(0,i.kt)("inlineCode",{parentName:"p"},"urlpatterns")," untuk mengakses fungsi yang sudah diimpor tadi."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-python"},"...\npath('logout/', logout_user, name='logout'), #sesuaikan dengan nama fungsi yang dibuat\n...\n")))),(0,i.kt)("p",null,"Kita sudah membuat mekanisme ",(0,i.kt)("inlineCode",{parentName:"p"},"logout")," dan menyelesaikan sistem autentikasi pada proyek ",(0,i.kt)("inlineCode",{parentName:"p"},"wishlist"),". Selanjutnya, kita akan merestriksi akses halaman ",(0,i.kt)("em",{parentName:"p"},"wishlist")," agar pengguna yang belum terautentikasi tidak dapat mengakses halaman ",(0,i.kt)("em",{parentName:"p"},"wishlist"),"."),(0,i.kt)("h2",{id:"tutorial-merestriksi-akses-halaman-wishlist"},"Tutorial: Merestriksi Akses Halaman Wishlist"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Buka ",(0,i.kt)("inlineCode",{parentName:"p"},"views.py")," yang ada pada folder ",(0,i.kt)("inlineCode",{parentName:"p"},"wishlist")," dan tambahkan ",(0,i.kt)("em",{parentName:"p"},"import")," ",(0,i.kt)("inlineCode",{parentName:"p"},"login_required")," pada bagian paling atas."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-python"},"from django.contrib.auth.decorators import login_required\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Tambahkan kode ",(0,i.kt)("inlineCode",{parentName:"p"},"@login_required(login_url='/wishlist/login/')")," di atas fungsi ",(0,i.kt)("inlineCode",{parentName:"p"},"show_wishlist")," agar halaman ",(0,i.kt)("em",{parentName:"p"},"wishlist")," hanya dapat diakses oleh pengguna yang sudah login (terautentikasi)."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-python"},"...\n@login_required(login_url='/wishlist/login/')\ndef show_wishlist(request):\n...\n")))),(0,i.kt)("p",null,"Setelah merestriksi akses halaman wishlist, jalankan proyek Django-mu dengan perintah ",(0,i.kt)("inlineCode",{parentName:"p"},"python manage.py runserver")," dan bukalah http://localhost:8000/wishlist di browser favoritmu untuk melihat hasilnya."),(0,i.kt)("h2",{id:"tutorial-menambahkan-cookies"},"Tutorial: Menambahkan ",(0,i.kt)("em",{parentName:"h2"},"Cookies")),(0,i.kt)("p",null,"Sekarang, kita akan melihat penggunaan ",(0,i.kt)("em",{parentName:"p"},"cookies")," dengan menambahkan data ",(0,i.kt)("em",{parentName:"p"},"last login")," dan menampilkannya ke halaman ",(0,i.kt)("em",{parentName:"p"},"wishlist"),"."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Lakukan ",(0,i.kt)("em",{parentName:"p"},"logout")," terlebih dahulu apabila kamu sedang menjalankan aplikasi Django-mu.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Buka ",(0,i.kt)("inlineCode",{parentName:"p"},"views.py")," yang ada pada folder ",(0,i.kt)("inlineCode",{parentName:"p"},"wishlist")," dan tambahkan ",(0,i.kt)("em",{parentName:"p"},"import")," ",(0,i.kt)("inlineCode",{parentName:"p"},"HttpResponseRedirect"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"reverse"),", dan ",(0,i.kt)("inlineCode",{parentName:"p"},"datetime")," pada bagian paling atas."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-python"},"import datetime\nfrom django.http import HttpResponseRedirect\nfrom django.urls import reverse\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Pada fungsi ",(0,i.kt)("inlineCode",{parentName:"p"},"login_user"),", kita akan menambahkan fungsi untuk menambahkan ",(0,i.kt)("em",{parentName:"p"},"cookie")," yang bernama ",(0,i.kt)("inlineCode",{parentName:"p"},"last_login")," untuk melihat kapan terakhir kali pengguna melakukan ",(0,i.kt)("em",{parentName:"p"},"login"),". Caranya adalah dengan mengganti kode yang ada pada blok ",(0,i.kt)("inlineCode",{parentName:"p"},"if user is not None")," menjadi potongan kode berikut."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-python"},"...\nif user is not None:\n    login(request, user) # melakukan login terlebih dahulu\n    response = HttpResponseRedirect(reverse(\"wishlist:show_wishlist\")) # membuat response\n    response.set_cookie('last_login', str(datetime.datetime.now())) # membuat cookie last_login dan menambahkannya ke dalam response\n    return response\n...\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Pada fungsi ",(0,i.kt)("inlineCode",{parentName:"p"},"show_wishlist"),", tambahkan potongan kode ",(0,i.kt)("inlineCode",{parentName:"p"},"'last_login': request.COOKIES['last_login']")," ke dalam variabel ",(0,i.kt)("inlineCode",{parentName:"p"},"context"),". Berikut adalah contoh kode yang sudah diubah."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-python"},"context = {\n    'list_barang': data_barang_wishlist,\n    'nama': 'Kak Cinoy',\n    'last_login': request.COOKIES['last_login'],\n}\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Ubah fungsi ",(0,i.kt)("inlineCode",{parentName:"p"},"logout_user")," menjadi seperti potongan kode berikut. Potongan kode ini menambahkan mekanisme penghapusan ",(0,i.kt)("em",{parentName:"p"},"cookie")," ",(0,i.kt)("inlineCode",{parentName:"p"},"last_login")," saat pengguna melakukan ",(0,i.kt)("inlineCode",{parentName:"p"},"logout"),"."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-python"},"def logout_user(request):\n    logout(request)\n    response = HttpResponseRedirect(reverse('wishlist:login'))\n    response.delete_cookie('last_login')\n    return response\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Buka berkas ",(0,i.kt)("inlineCode",{parentName:"p"},"wishlist.html")," dan tambahkan potongan kode berikut di antara tabel dan tombol ",(0,i.kt)("em",{parentName:"p"},"logout")," untuk menampilkan data ",(0,i.kt)("em",{parentName:"p"},"last login"),"."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-html"},"...\n<h5>Sesi terakhir login: {{ last_login }}</h5>\n...\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Silakan ",(0,i.kt)("em",{parentName:"p"},"refresh")," halaman ",(0,i.kt)("em",{parentName:"p"},"login")," (atau jalankan proyek Django-mu dengan perintah ",(0,i.kt)("inlineCode",{parentName:"p"},"python manage.py runserver")," jika kamu belum menjalankan proyekmu) dan cobalah untuk ",(0,i.kt)("em",{parentName:"p"},"login"),". Data ",(0,i.kt)("em",{parentName:"p"},"last login")," kamu akan muncul di halaman wishlist_.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Untuk melihat data ",(0,i.kt)("em",{parentName:"p"},"cookie")," ",(0,i.kt)("inlineCode",{parentName:"p"},"last_login"),", kamu dapat mengakses fitur ",(0,i.kt)("em",{parentName:"p"},"inspect element")," dan membuka bagian ",(0,i.kt)("em",{parentName:"p"},"Application/Storage"),". Klik bagian ",(0,i.kt)("em",{parentName:"p"},"Cookies")," dan kamu dapat melihat data ",(0,i.kt)("em",{parentName:"p"},"cookies")," yang tersedia. Selain ",(0,i.kt)("inlineCode",{parentName:"p"},"last_login"),", kamu juga dapat melihat data ",(0,i.kt)("inlineCode",{parentName:"p"},"sessionid")," dan ",(0,i.kt)("inlineCode",{parentName:"p"},"csrftoken"),". Berikut adalah contoh tampilannya."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{parentName:"p",src:"https://media.discordapp.net/attachments/1008373595719868426/1021428854897791076/unknown.png",alt:"Gambar Halaman Wishlist beserta Data Cookies"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Jika kamu melakukan ",(0,i.kt)("em",{parentName:"p"},"logout")," dan membuka bagian riwayat ",(0,i.kt)("em",{parentName:"p"},"cookie"),", ",(0,i.kt)("em",{parentName:"p"},"cookie")," yang dibuat sebelumnya akan hilang dan dibuat ulang ketika kamu ",(0,i.kt)("em",{parentName:"p"},"login")," kembali."))),(0,i.kt)("h2",{id:"akhir-kata"},"Akhir Kata"),(0,i.kt)("p",null,"Selamat! Kamu telah menyelesaikan Tutorial 3 dengan baik. \ud83d\ude04"),(0,i.kt)("p",null,"Setelah kamu menyelesaikan seluruh tutorial di atas, harapannya kamu sekarang lebih paham tentang penggunaan ",(0,i.kt)("em",{parentName:"p"},"form"),", autentikasi, ",(0,i.kt)("em",{parentName:"p"},"session"),", dan ",(0,i.kt)("em",{parentName:"p"},"cookie")," pada ",(0,i.kt)("em",{parentName:"p"},"framework")," Django."),(0,i.kt)("p",null,"Seperti biasa, jangan lupa untuk melakukan ",(0,i.kt)("inlineCode",{parentName:"p"},"add"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"commit"),", dan ",(0,i.kt)("inlineCode",{parentName:"p"},"push")," perubahan yang sudah kamu lakukan untuk menyimpannya ke dalam repositori GitHub sebelum kamu menutup pekerjaan kamu. \ud83d\ude09"),(0,i.kt)("h2",{id:"kontributor"},"Kontributor"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Muhammad Athallah"),(0,i.kt)("li",{parentName:"ul"},"Muhammad Azis Husein"),(0,i.kt)("li",{parentName:"ul"},"Zuhal 'Alimul Hadi")))}k.isMDXComponent=!0}}]);