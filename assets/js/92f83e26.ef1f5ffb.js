"use strict";(self.webpackChunk_pbp_fasilkom_ui_ganjil_2023=self.webpackChunk_pbp_fasilkom_ui_ganjil_2023||[]).push([[112],{3905:(a,e,t)=>{t.d(e,{Zo:()=>u,kt:()=>o});var n=t(7294);function i(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}function l(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(a);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),t.push.apply(t,n)}return t}function r(a){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?l(Object(t),!0).forEach((function(e){i(a,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(t,e))}))}return a}function s(a,e){if(null==a)return{};var t,n,i=function(a,e){if(null==a)return{};var t,n,i={},l=Object.keys(a);for(n=0;n<l.length;n++)t=l[n],e.indexOf(t)>=0||(i[t]=a[t]);return i}(a,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(a);for(n=0;n<l.length;n++)t=l[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(a,t)&&(i[t]=a[t])}return i}var m=n.createContext({}),p=function(a){var e=n.useContext(m),t=e;return a&&(t="function"==typeof a?a(e):r(r({},e),a)),t},u=function(a){var e=p(a.components);return n.createElement(m.Provider,{value:e},a.children)},k={inlineCode:"code",wrapper:function(a){var e=a.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(a,e){var t=a.components,i=a.mdxType,l=a.originalType,m=a.parentName,u=s(a,["components","mdxType","originalType","parentName"]),c=p(t),o=i,d=c["".concat(m,".").concat(o)]||c[o]||k[o]||l;return t?n.createElement(d,r(r({ref:e},u),{},{components:t})):n.createElement(d,r({ref:e},u))}));function o(a,e){var t=arguments,i=e&&e.mdxType;if("string"==typeof a||i){var l=t.length,r=new Array(l);r[0]=c;var s={};for(var m in e)hasOwnProperty.call(e,m)&&(s[m]=e[m]);s.originalType=a,s.mdxType="string"==typeof a?a:i,r[1]=s;for(var p=2;p<l;p++)r[p]=t[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,t)}c.displayName="MDXCreateElement"},260:(a,e,t)=>{t.r(e),t.d(e,{assets:()=>p,contentTitle:()=>s,default:()=>c,frontMatter:()=>r,metadata:()=>m,toc:()=>u});var n=t(7462),i=(t(7294),t(3905)),l=t(2556);const r={sidebar_label:"Tugas 9"},s="Tugas 9: Integrasi Web Service pada Flutter",m={unversionedId:"tugas/tugas-9",id:"tugas/tugas-9",title:"Tugas 9: Integrasi Web Service pada Flutter",description:"Pemrograman Berbasis Platform (CSGE602022) - diselenggarakan oleh Fakultas Ilmu Komputer, Universitas Indonesia, Semester Ganjil 2022/2023",source:"@site/assignments/tugas/tugas-9.md",sourceDirName:"tugas",slug:"/tugas/tugas-9",permalink:"/ganjil-2023/assignments/tugas/tugas-9",draft:!1,tags:[],version:"current",frontMatter:{sidebar_label:"Tugas 9"},sidebar:"tutorialSidebar",previous:{title:"Tugas 8",permalink:"/ganjil-2023/assignments/tugas/tugas-8"},next:{title:"Proyek Tengah Semester",permalink:"/ganjil-2023/assignments/tugas-kelompok/tugas-kelompok-1"}},p={},u=[{value:"Deskripsi Tugas",id:"deskripsi-tugas",level:2},{value:"Tenggat Waktu Pengerjaan",id:"tenggat-waktu-pengerjaan",level:2},{value:"Bonus",id:"bonus",level:2}],k={toc:u};function c(a){let{components:e,...t}=a;return(0,i.kt)("wrapper",(0,n.Z)({},k,t,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"tugas-9-integrasi-web-service-pada-flutter"},"Tugas 9: Integrasi Web Service pada Flutter"),(0,i.kt)("p",null,"Pemrograman Berbasis Platform (CSGE602022) - diselenggarakan oleh Fakultas Ilmu Komputer, Universitas Indonesia, Semester Ganjil 2022/2023"),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"deskripsi-tugas"},"Deskripsi Tugas"),(0,i.kt)("p",null,"Pada tugas ini, kamu akan mengintegrasikan ",(0,i.kt)("em",{parentName:"p"},"mywatchlist")," yang sudah kamu buat pada tugas 3 sebelumnya ke Flutter. Pengerjaan tugas ini akan menggunakan app yang sama dengan tugas Flutter sebelumnya."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Checklist")," untuk tugas ini adalah sebagai berikut."),(0,i.kt)("ul",{className:"contains-task-list"},(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("input",{parentName:"p",type:"checkbox",checked:!1,disabled:!0})," ","Menambahkan tombol navigasi pada drawer/hamburger untuk ke halaman ",(0,i.kt)("em",{parentName:"p"},"mywatchlist"),".")),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("input",{parentName:"p",type:"checkbox",checked:!1,disabled:!0})," ","Membuat satu file dart yang berisi model ",(0,i.kt)("em",{parentName:"p"},"mywatchlist"),".")),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("input",{parentName:"p",type:"checkbox",checked:!1,disabled:!0})," ","Menambahkan halaman ",(0,i.kt)("em",{parentName:"p"},"mywatchlist")," yang berisi semua ",(0,i.kt)("em",{parentName:"p"},"watch list")," yang ada pada endpoint JSON di Django yang telah kamu ",(0,i.kt)("em",{parentName:"p"},"deploy")," ke Heroku sebelumnya (Tugas 3). Pada bagian ini, kamu cukup menampilkan judul dari setiap ",(0,i.kt)("em",{parentName:"p"},"mywatchlist")," yang ada."),(0,i.kt)("ul",{parentName:"li",className:"contains-task-list"},(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("input",{parentName:"p",type:"checkbox",checked:!1,disabled:!0})," ","Membuat navigasi dari setiap judul ",(0,i.kt)("em",{parentName:"p"},"watch list")," ke halaman detail"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{parentName:"p",src:"https://i.ibb.co/dbnTnQz/mywatchlist.png",alt:"Mywatchlist"}))))),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("input",{parentName:"p",type:"checkbox",checked:!1,disabled:!0})," ","Menambahkan halaman detail untuk setiap ",(0,i.kt)("em",{parentName:"p"},"mywatchlist")," yang ada pada daftar tersebut. Halaman ini menampilkan judul, release date, rating, ",(0,i.kt)("em",{parentName:"p"},"review"),", dan status (sudah ditonton/belum).")),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("input",{parentName:"p",type:"checkbox",checked:!1,disabled:!0})," ","Menambahkan tombol untuk kembali ke daftar ",(0,i.kt)("em",{parentName:"p"},"mywatchlist")),(0,i.kt)("p",{parentName:"li"},"  ",(0,i.kt)("img",{parentName:"p",src:"https://i.ibb.co/rdCFcYy/detail.png",alt:"Detail"}))),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("input",{parentName:"p",type:"checkbox",checked:!1,disabled:!0})," ","Menjawab beberapa pertanyaan berikut pada ",(0,i.kt)("inlineCode",{parentName:"p"},"README.md")," pada ",(0,i.kt)("em",{parentName:"p"},"root folder")," (silakan modifikasi ",(0,i.kt)("inlineCode",{parentName:"p"},"README.md")," yang telah kamu buat sebelumnya; tambahkan subjudul untuk setiap tugas)."),(0,i.kt)("ul",{parentName:"li",className:"contains-task-list"},(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Apakah bisa kita melakukan pengambilan data JSON tanpa membuat model terlebih dahulu? Jika iya, apakah hal tersebut lebih baik daripada membuat model sebelum melakukan pengambilan data JSON?"),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Sebutkan widget apa saja yang kamu pakai di proyek kali ini dan jelaskan fungsinya."),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Jelaskan mekanisme pengambilan data dari json hingga dapat ditampilkan pada Flutter."),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Jelaskan bagaimana cara kamu mengimplementasikan ",(0,i.kt)("em",{parentName:"li"},"checklist")," di atas."))),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("input",{parentName:"p",type:"checkbox",checked:!1,disabled:!0})," ","Melakukan ",(0,i.kt)("inlineCode",{parentName:"p"},"add"),"-",(0,i.kt)("inlineCode",{parentName:"p"},"commit"),"-",(0,i.kt)("inlineCode",{parentName:"p"},"push")," ke GitHub."))),(0,i.kt)("h2",{id:"tenggat-waktu-pengerjaan"},"Tenggat Waktu Pengerjaan"),(0,i.kt)("p",null,"Tenggat waktu pengerjaan Tugas 9: ",(0,i.kt)(l.Z,{deadline:new Date("24 November 2022 12:00 GMT+7"),mdxType:"Countdown"})),(0,i.kt)("p",null,"Asisten dosen akan mengecek ",(0,i.kt)("em",{parentName:"p"},"last commit")," dari repositori tugas lab, sehingga kamu tidak perlu mengumpulkan tautan repositori ke dalam slot submisi."),(0,i.kt)("h2",{id:"bonus"},"Bonus"),(0,i.kt)("p",null,"Kamu akan mendapatkan nilai bonus pada penilaian tugas ini apabila kamu membuat fitur berikut."),(0,i.kt)("ul",{className:"contains-task-list"},(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Menambahkan ",(0,i.kt)("em",{parentName:"li"},"checkbox")," pada setiap ",(0,i.kt)("em",{parentName:"li"},"watchlist")," pada halaman ",(0,i.kt)("em",{parentName:"li"},"mywatchlist"),". Dimana ",(0,i.kt)("em",{parentName:"li"},"checkbox")," akan tercentang jika status ditonton bernilai ",(0,i.kt)("inlineCode",{parentName:"li"},"true")," dan tidak jika bernilai ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),".",(0,i.kt)("ul",{parentName:"li",className:"contains-task-list"},(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Jika ",(0,i.kt)("em",{parentName:"li"},"checkbox")," ditekan, maka status ditonton akan berubah (perubahan akan terjadi di lokal secara sementara saja, status pada endpoint tidak perlu diubah)"))),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Menambahkan warna untuk ",(0,i.kt)("em",{parentName:"li"},"outline")," pada setiap ",(0,i.kt)("em",{parentName:"li"},"mywatchlist")," pada halaman ",(0,i.kt)("em",{parentName:"li"},"mywatchlist")," berdasarkan status ditonton (Dua warna yang dipilih bebas)."),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,i.kt)("em",{parentName:"li"},"Refactor")," function fetch data dari web service ke sebuah file terpisah.")))}c.isMDXComponent=!0},2556:(a,e,t)=>{t.d(e,{Z:()=>i});var n=t(7294);const i=a=>{let{deadline:e}=a;const t=(a=>{const[e,t]=n.useState({day:0,hour:0,minute:0,second:0});return n.useEffect((()=>{const e=setInterval((()=>{const e=Date.now(),n=a.getTime();if(n<e)return t({day:0,hour:0,minute:0,second:0});let i=(n-e)/1e3,l=Math.floor(i/86400);i%=86400;let r=Math.floor(i/3600);i%=3600;let s=Math.floor(i/60);i%=60;let m=Math.floor(i);t({day:l,hour:r,minute:s,second:m})}),1e3);return()=>clearInterval(e)}),[]),e})(e);return n.createElement("p",null,e.toLocaleString("id-ID",{dateStyle:"long",timeStyle:"long"}),n.createElement("span",null,"\xa0(",t.day," days ",t.hour," hours ",t.minute," minutes ",t.second," seconds left)"))}}}]);