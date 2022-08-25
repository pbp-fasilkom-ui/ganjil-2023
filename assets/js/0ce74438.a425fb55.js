"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[342],{7654:(a,n,e)=>{e.d(n,{Z:()=>l});var t=e(7294),i=e(9604);const l=a=>{let{defaultValue:n,editorHeight:e="40vh",outputHeight:l="30vh"}=a;const[r,o]=t.useState(n),d=t.useRef(null);return t.useEffect((()=>{null!=d&&(d.current.src="data:text/html;charset=utf-8,"+encodeURIComponent(r))}),[r]),t.createElement("div",{style:{marginBottom:"1rem"}},t.createElement("div",{style:{borderRadius:"0.5rem",overflow:"hidden"}},t.createElement(i.ZP,{height:e,defaultLanguage:"html",defaultValue:n,theme:"vs-dark",onChange:a=>o(a),loading:"Loading Code Editor...",options:{minimap:{enabled:!1}}})),t.createElement("h4",{style:{marginTop:"1rem"}},"Output:"),t.createElement("iframe",{style:{width:"100%",minHeight:l,backgroundColor:"white",borderRadius:"0.5rem"},ref:d}))}},8346:(a,n,e)=>{e.d(n,{MX:()=>h,N1:()=>t,Qq:()=>l,SA:()=>s,YO:()=>d,Z1:()=>r,gU:()=>o,wP:()=>u,yq:()=>i});const t="\x3c!-- Anda bisa menggunakan ini sebagai dasar untuk bereksperimen/tugas --\x3e\n<!DOCTYPE html>\n<html>\n    <head>\n        <title>Document</title>\n    </head>\n    <body>\n        <p>Hello, World!</p>\n    </body>\n</html>",i="\x3c!-- UBAH KODE INI UNTUK MELIHAT PERUBAHANNYA DI OUTPUT --\x3e\n<html>\n    <body>\n        <h2>Berikut ini adalah contoh paragraf</h2>\n        <p>\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pharetra finibus porta. Fusce imperdiet\n            turpis felis, ut elementum felis lobortis auctor. Curabitur finibus, nunc sed sagittis placerat, lacus\n            massa venenatis lorem, malesuada rutrum ligula justo id lacus.\n        </p>\n        <p>\n            Donec posuere ipsum faucibus lectus lacinia, vitae efficitur dolor vestibulum. Nulla fringilla gravida mollis.\n            Aenean vel libero eleifend, luctus lacus ut, cursus mauris.\n        </p>\n    </body>\n</html>\n",l="\x3c!-- UBAH KODE INI UNTUK MELIHAT PERUBAHANNYA DI OUTPUT --\x3e\n<html>\n    <body>\n        <h1>Saya adalah h1</h1>\n        <h2>Saya adalah h2</h2>\n        <h3>Saya adalah h3</h3>\n        <h4>Saya adalah h4</h4>\n        <h5>Saya adalah h5</h5>\n        <h6>Saya adalah h6</h6>\n    </body>\n</html>\n",r='\x3c!-- UBAH KODE INI UNTUK MELIHAT PERUBAHANNYA DI OUTPUT --\x3e\n<html>\n    <body>\n        <p>\n            <a href="#">Halo, saya adalah link</a>\n        </p>\n        <p>\n            \x3c!-- Target _parent digunakan karena kode output di render dalam sebuah iframe --\x3e\n            <a href="https://google.com/" target="_parent">Link ini akan membuka Google di page yang sama</a>\n        </p>\n        <p>\n            \x3c!-- Target _blank akan membuka link pada page baru --\x3e\n            <a href="https://scele.cs.ui.ac.id/" target="_blank">Link ini akan membuka SCELE di tab baru</a>\n        </p>\n        <p>\n            Link dapat juga diselipkan diantara teks <a href="#">seperti ini</a>\n        </p>\n    </body>\n</html>\n',o='\x3c!-- UBAH KODE INI UNTUK MELIHAT PERUBAHANNYA DI OUTPUT --\x3e\n<html>\n    <body>\n        <p>Clickable Button</p>\n        <a href="https://google.com" target="_blank">\n            <button>Button juga dapat diubah menjadi link</button>\n        </a>\n        <p>Clickable Image</p>\n        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">\n            <img src="https://cs.ui.ac.id/wp-content/uploads/2021/06/logo-fasilkom-white-2.png" />\n        </a>\n    </body>\n</html>\n',d='\x3c!-- UBAH KODE INI UNTUK MELIHAT PERUBAHANNYA DI OUTPUT --\x3e\n<html>\n    <body>\n        <h4>Ini adalah gambar</h4>\n        <img src="https://via.placeholder.com/300x150" />\n\n        <h4>Gambar ini tidak bisa di load</h4>\n        <img src="lasflkasjf" alt="Unloadable Image" />\n\n        <h4>Gambar ini memiliki custom width 250px (Original Size: 300x150)</h4>\n        <img src="https://via.placeholder.com/300x150" width="250px" />\n    </body>\n</html>\n',h='\x3c!-- UBAH KODE INI UNTUK MELIHAT PERUBAHANNYA DI OUTPUT --\x3e\n<html>\n    <body>\n        <h4>Button dengan sendirinya tidak melakukan apapun</h4>\n        <button>Does Nothing</button>\n\n        <h4>Button ini adalah link</h4>\n        <a href="https://google.com/" target="_blank">\n            <button>Open Google</button>\n        </a>\n\n        <h4>Button ini akan menampilkan sebuah popup menggunakan JavaScript</h4>\n        <button id="click-me">Click Me</button>\n        <script>\n            // Line ini akan assign sebuah arrow function ke event onclick pada button.\n            // () => alert("Clicked!") memiliki arti "buatlah fungsi\n            // tak bernama yang membuat popup dengan tulisan \'Clicked!\'\n            document.getElementById("click-me").onclick = () => alert("Clicked!")\n        <\/script>\n    </body>\n</html>\n',s='\x3c!-- UBAH KODE INI UNTUK MELIHAT PERUBAHANNYA DI OUPUT --\x3e\n<html>\n    <body>\n        \x3c!-- Dengan div kita dapat mengaplikasikan sebuah CSS style ke sekelompok elemen --\x3e\n        <div style="background-color: lightgrey;">\n            <h3>Artikel 1</h3>\n            <p>Lorem ipsum yadda yadda this is the first article</p>\n        </div>\n        \x3c!-- Kita juga dapat mengaplikasikan style positioning ke kelompok elemen ini untuk memisahkannya dari container sebelumnya --\x3e\n        <div style="background-color: grey; margin-top: 2rem">\n            <h3>Artikel 2</h3>\n            <p>Lorem ipsum yadda yadda this is the second article</p>\n        </div>\n    </body>\n</html>\n',u='\x3c!-- UBAH KODE INI UNTUK MELIHAT PERUBAHANNYA DI OUPUT --\x3e\n<html>\n    <body>\n        <h4>Kelompok ini akan tersusun secara vertikal</h4>\n        <div>\n            <div style="background-color: lightgrey;">\n                <h3>Artikel 1</h3>\n                <p>Lorem ipsum yadda yadda this is the first article</p>\n            </div>\n            <div style="background-color: grey; margin-top: 2rem">\n                <h3>Artikel 2</h3>\n                <p>Lorem ipsum yadda yadda this is the second article</p>\n            </div>\n        </div>\n\n        \x3c!-- Berbagai macam recipe untuk layouting page akan dibahas di bagian Common Recipes --\x3e\n        <h4>Kelompok ini akan tersusun secara horizontal</h4>\n        <div style="display: flex; align-items: center;">\n            <div style="background-color: lightgrey;">\n                <h3>Artikel 1</h3>\n                <p>Lorem ipsum yadda yadda this is the first article</p>\n            </div>\n            <div style="background-color: grey; margin-left: 1rem;">\n                <h3>Artikel 2</h3>\n                <p>Lorem ipsum yadda yadda this is the second article</p>\n            </div>\n        </div>\n    </body>\n</html>\n'},3346:(a,n,e)=>{e.r(n),e.d(n,{default:()=>o});var t=e(7294),i=e(4669),l=e(7654),r=e(8346);const o=()=>t.createElement(i.Z,null,t.createElement("div",{style:{padding:"3rem"}},t.createElement("h1",{style:{fontSize:"2.5rem"}},"HTML Playground"),t.createElement("p",null,"Feel free to experiment using this code editor."),t.createElement(l.Z,{editorHeight:"40vh",outputHeight:"100vh",defaultValue:r.N1})))}}]);