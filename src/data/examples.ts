export const paragraphExample = `<!-- RUBAH KODE INI UNTUK MELIHAT PERUBAHANNYA DI OUTPUT -->
<html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body>
        <h2>Berikut ini adalah contoh paragraf</h2>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pharetra finibus porta. Fusce imperdiet
            turpis felis, ut elementum felis lobortis auctor. Curabitur finibus, nunc sed sagittis placerat, lacus
            massa venenatis lorem, malesuada rutrum ligula justo id lacus.
        </p>
        <p>
            Donec posuere ipsum faucibus lectus lacinia, vitae efficitur dolor vestibulum. Nulla fringilla gravida mollis.
            Aenean vel libero eleifend, luctus lacus ut, cursus mauris.
        </p>
    </body>
</html>
`

export const headingExample = `<!-- RUBAH KODE INI UNTUK MELIHAT PERUBAHANNYA DI OUTPUT -->
<html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body>
        <h1>Saya adalah h1</h1>
        <h2>Saya adalah h2</h2>
        <h3>Saya adalah h3</h3>
        <h4>Saya adalah h4</h4>
        <h5>Saya adalah h5</h5>
        <h6>Saya adalah h6</h6>
    </body>
</html>
`

export const anchorExample1 = `<!-- RUBAH KODE INI UNTUK MELIHAT PERUBAHANNYA DI OUTPUT -->
<html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body>
        <p>
            <a href="#">Halo, saya adalah link</a>
        </p>
        <p>
            <!-- Target _parent digunakan karena kode output di render dalam sebuah iframe -->
            <a href="https://google.com/" target="_parent">Link ini akan membuka Google di page yang sama</a>
        </p>
        <p>
            <!-- Target _blank akan membuka link pada page baru -->
            <a href="https://scele.cs.ui.ac.id/" target="_blank">Link ini akan membuka SCELE di tab baru</a>
        </p>
        <p>
            Link dapat juga diselipkan diantara teks <a href="#">seperti ini</a>
        </p>
    </body>
</html>
`

export const anchorExample2 = `<!-- RUBAH KODE INI UNTUK MELIHAT PERUBAHANNYA DI OUTPUT -->
<html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body>
        <p>Clickable Button</p>
        <a href="https://google.com" target="_blank">
            <button>Button juga dapat dirubah menjadi link</button>
        </a>
        <p>Clickable Image</p>
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">
            <img src="https://cs.ui.ac.id/wp-content/uploads/2021/06/logo-fasilkom-white-2.png" />
        </a>
    </body>
</html>
`
