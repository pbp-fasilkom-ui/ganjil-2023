"use strict";(self.webpackChunk_pbp_fasilkom_ui_ganjil_2023=self.webpackChunk_pbp_fasilkom_ui_ganjil_2023||[]).push([[495],{3905:(e,a,t)=>{t.d(a,{Zo:()=>k,kt:()=>c});var n=t(7294);function i(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function r(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){i(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,i=function(e,a){if(null==e)return{};var t,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var m=n.createContext({}),p=function(e){var a=n.useContext(m),t=a;return e&&(t="function"==typeof e?e(a):r(r({},a),e)),t},k=function(e){var a=p(e.components);return n.createElement(m.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},o=n.forwardRef((function(e,a){var t=e.components,i=e.mdxType,l=e.originalType,m=e.parentName,k=s(e,["components","mdxType","originalType","parentName"]),o=p(t),c=i,d=o["".concat(m,".").concat(c)]||o[c]||u[c]||l;return t?n.createElement(d,r(r({ref:a},k),{},{components:t})):n.createElement(d,r({ref:a},k))}));function c(e,a){var t=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var l=t.length,r=new Array(l);r[0]=o;var s={};for(var m in a)hasOwnProperty.call(a,m)&&(s[m]=a[m]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var p=2;p<l;p++)r[p]=t[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,t)}o.displayName="MDXCreateElement"},4134:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>p,contentTitle:()=>s,default:()=>o,frontMatter:()=>r,metadata:()=>m,toc:()=>k});var n=t(7462),i=(t(7294),t(3905)),l=t(2556);const r={sidebar_label:"Tugas 6"},s="Tugas 6: Javascript dan AJAX",m={unversionedId:"tugas/tugas-6",id:"tugas/tugas-6",title:"Tugas 6: Javascript dan AJAX",description:"Pemrograman Berbasis Platform (CSGE602022) - diselenggarakan oleh Fakultas Ilmu Komputer",source:"@site/assignments/tugas/tugas-6.md",sourceDirName:"tugas",slug:"/tugas/tugas-6",permalink:"/ganjil-2023/assignments/tugas/tugas-6",draft:!1,tags:[],version:"current",frontMatter:{sidebar_label:"Tugas 6"},sidebar:"tutorialSidebar",previous:{title:"Tugas 5",permalink:"/ganjil-2023/assignments/tugas/tugas-5"},next:{title:"Proyek Tengah Semester",permalink:"/ganjil-2023/assignments/tugas-kelompok/tugas-kelompok-1"}},p={},k=[{value:"Deskripsi Tugas",id:"deskripsi-tugas",level:2},{value:"Tenggat Waktu Pengerjaan",id:"tenggat-waktu-pengerjaan",level:2},{value:"Bonus",id:"bonus",level:2}],u={toc:k};function o(e){let{components:a,...t}=e;return(0,i.kt)("wrapper",(0,n.Z)({},u,t,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"tugas-6-javascript-dan-ajax"},"Tugas 6: Javascript dan AJAX"),(0,i.kt)("p",null,"Pemrograman Berbasis Platform (CSGE602022) - diselenggarakan oleh Fakultas Ilmu Komputer\nUniversitas Indonesia, Semester Ganjil 2022/2023"),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"deskripsi-tugas"},"Deskripsi Tugas"),(0,i.kt)("p",null,"Pada tugas ini, kamu akan mengimplementasikan AJAX pada fungsionalitas ",(0,i.kt)("inlineCode",{parentName:"p"},"todolist")," yang telah kamu buat saat Tugas 4 dan 5."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Checklist")," untuk tugas ini adalah sebagai berikut:"),(0,i.kt)("ul",{className:"contains-task-list"},(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("input",{parentName:"p",type:"checkbox",checked:!1,disabled:!0})," ","Mengubah tugas 4 yang telah dibuat sebelumnya menjadi menggunakan AJAX."),(0,i.kt)("ul",{parentName:"li",className:"contains-task-list"},(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("input",{parentName:"p",type:"checkbox",checked:!1,disabled:!0})," ","AJAX GET"),(0,i.kt)("ul",{parentName:"li",className:"contains-task-list"},(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Buatlah ",(0,i.kt)("em",{parentName:"li"},"view")," baru yang mengembalikan seluruh data task dalam bentuk JSON."),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Buatlah ",(0,i.kt)("em",{parentName:"li"},"path")," ",(0,i.kt)("inlineCode",{parentName:"li"},"/todolist/json")," yang mengarah ke ",(0,i.kt)("em",{parentName:"li"},"view")," yang baru kamu buat."),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Lakukan pengambilan task menggunakan AJAX GET."))),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("input",{parentName:"p",type:"checkbox",checked:!1,disabled:!0})," ","AJAX POST"),(0,i.kt)("ul",{parentName:"li",className:"contains-task-list"},(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("input",{parentName:"p",type:"checkbox",checked:!1,disabled:!0})," ","Buatlah sebuah tombol ",(0,i.kt)("inlineCode",{parentName:"p"},"Add Task")," yang membuka sebuah modal dengan form untuk menambahkan task."),(0,i.kt)("blockquote",{parentName:"li"},(0,i.kt)("p",{parentName:"blockquote"},"Untuk mempelajari lebih lanjut mengenai modal Bootstrap, silakan baca dokumentasi berikut: ",(0,i.kt)("a",{parentName:"p",href:"https://getbootstrap.com/docs/4.0/components/modal/"},"https://getbootstrap.com/docs/4.0/components/modal/"),"."))),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("input",{parentName:"p",type:"checkbox",checked:!1,disabled:!0})," ","Buatlah ",(0,i.kt)("em",{parentName:"p"},"view")," baru untuk menambahkan task baru ke dalam ",(0,i.kt)("em",{parentName:"p"},"database"),".")),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("input",{parentName:"p",type:"checkbox",checked:!1,disabled:!0})," ","Buatlah ",(0,i.kt)("em",{parentName:"p"},"path")," ",(0,i.kt)("inlineCode",{parentName:"p"},"/todolist/add")," yang mengarah ke ",(0,i.kt)("em",{parentName:"p"},"view")," yang baru kamu buat. ")),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("input",{parentName:"p",type:"checkbox",checked:!1,disabled:!0})," ","Hubungkan form yang telah kamu buat di dalam modal kamu ke ",(0,i.kt)("em",{parentName:"p"},"path")," ",(0,i.kt)("inlineCode",{parentName:"p"},"/todolist/add"))),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("input",{parentName:"p",type:"checkbox",checked:!1,disabled:!0})," ","Tutup modal setelah penambahan task telah berhasil dilakukan.")),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("input",{parentName:"p",type:"checkbox",checked:!1,disabled:!0})," ","Lakukan ",(0,i.kt)("em",{parentName:"p"},"refresh")," pada halaman utama secara asinkronus untuk menampilkan ",(0,i.kt)("em",{parentName:"p"},"list")," terbaru tanpa ",(0,i.kt)("em",{parentName:"p"},"reload")," seluruh ",(0,i.kt)("em",{parentName:"p"},"page"),".")))))),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("input",{parentName:"p",type:"checkbox",checked:!1,disabled:!0})," ","Menjawab beberapa pertanyaan berikut pada ",(0,i.kt)("inlineCode",{parentName:"p"},"README-TWO.md")," pada folder ",(0,i.kt)("inlineCode",{parentName:"p"},"todolist"),"."),(0,i.kt)("ul",{parentName:"li",className:"contains-task-list"},(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Jelaskan perbedaan antara ",(0,i.kt)("em",{parentName:"li"},"asynchronous programming")," dengan ",(0,i.kt)("em",{parentName:"li"},"synchronous programming"),"."),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Dalam penerapan JavaScript dan AJAX, terdapat penerapan paradigma ",(0,i.kt)("em",{parentName:"li"},"Event-Driven Programming"),". Jelaskan maksud dari paradigma tersebut dan sebutkan salah satu contoh penerapannya pada tugas ini."),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Jelaskan penerapan ",(0,i.kt)("em",{parentName:"li"},"asynchronous programming")," pada AJAX."),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Jelaskan bagaimana cara kamu mengimplementasikan ",(0,i.kt)("em",{parentName:"li"},"checklist")," di atas.")))),(0,i.kt)("h2",{id:"tenggat-waktu-pengerjaan"},"Tenggat Waktu Pengerjaan"),(0,i.kt)("p",null,"Tenggat waktu pengerjaan Tugas 6: ",(0,i.kt)(l.Z,{deadline:new Date("13 October 2022 12:00 GMT+7"),mdxType:"Countdown"})),(0,i.kt)("p",null,"Asisten dosen akan mengecek ",(0,i.kt)("em",{parentName:"p"},"last commit")," dari repositori tugas lab, sehingga kamu tidak perlu mengumpulkan tautan repositori ke dalam slot submisi."),(0,i.kt)("h2",{id:"bonus"},"Bonus"),(0,i.kt)("p",null,"Kamu akan mendapatkan nilai bonus pada penilaian tugas ini apabila kamu membuat fitur berikut."),(0,i.kt)("ul",{className:"contains-task-list"},(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Menambahkan fungsionalitas hapus dengan menggunakan AJAX DELETE.",(0,i.kt)("ul",{parentName:"li",className:"contains-task-list"},(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Buatlah kolom baru pada task dengan tombol Hapus."),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Buatlah ",(0,i.kt)("em",{parentName:"li"},"view")," baru yang menghapus task dengan ID tertentu."),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Buatlah ",(0,i.kt)("em",{parentName:"li"},"path")," ",(0,i.kt)("inlineCode",{parentName:"li"},"/todolist/delete/{id}")," yang menerima ID dari ",(0,i.kt)("em",{parentName:"li"},"path")," dan meneruskannya kepada ",(0,i.kt)("em",{parentName:"li"},"view"),"."),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Buatlah fungsi JavaScript yang memanggil ",(0,i.kt)("em",{parentName:"li"},"endpoint")," penghapusan task."),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Lakukan ",(0,i.kt)("em",{parentName:"li"},"refresh")," pada halaman utama secara asinkronus untuk menampilkan ",(0,i.kt)("em",{parentName:"li"},"list")," terbaru tanpa ",(0,i.kt)("em",{parentName:"li"},"reload")," seluruh ",(0,i.kt)("em",{parentName:"li"},"page"),".")))))}o.isMDXComponent=!0},2556:(e,a,t)=>{t.d(a,{Z:()=>i});var n=t(7294);const i=e=>{let{deadline:a}=e;const t=(e=>{const[a,t]=n.useState({day:0,hour:0,minute:0,second:0});return n.useEffect((()=>{const a=setInterval((()=>{const a=Date.now(),n=e.getTime();if(n<a)return t({day:0,hour:0,minute:0,second:0});let i=(n-a)/1e3,l=Math.floor(i/86400);i%=86400;let r=Math.floor(i/3600);i%=3600;let s=Math.floor(i/60);i%=60;let m=Math.floor(i);t({day:l,hour:r,minute:s,second:m})}),1e3);return()=>clearInterval(a)}),[]),a})(a);return n.createElement("p",null,a.toLocaleString("id-ID",{dateStyle:"long",timeStyle:"long"}),n.createElement("span",null,"\xa0(",t.day," days ",t.hour," hours ",t.minute," minutes ",t.second," seconds left)"))}}}]);