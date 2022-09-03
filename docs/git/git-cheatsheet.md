---
sidebar_label: Git Cheatsheet
---

# Git Cheatsheet

## Operasi Sederhana
### Melihat status branch
#### Gunakan `git status`
Untuk mengecek status dari sebuah projek git, anda dapat menggunakan command `git status` di terminal. Command ini akan memberikan kalian informasi mengenai *commit* serta *unstaged/staged file* yang ada pada projek kalian.
```bash
git status
```

**Jangan lupa untuk cek branch kalian menggunakan command ini sebelum membuat sebuah fitur baru**. Anda pasti tidak ingin mengerjakan sebuah fitur untuk 30-60 menit hanya untuk menemukan bahwa anda membuat fitur tersebut di branch yang salah. Kesalahan ini adalah ekuivalen dari *"Menggambar pada layer yang salah"* untuk seorang programmer.

### Staging (Menambahkan) File
#### Menambahkan satu file
```bash
git add <file_name>
```

#### Menambahkan banyak file sekaligus
```bash
git add <file-1> <file-2> <file-3> ... <file-n>
```

#### Menambahkan semua file yang belum di-*stage*
Gunakan command ini apabila kalian ingin *stage* semua file pada projek.
```bash
git add .
```

### Commit
#### Membuat *Commit* dengan *default text editor* (pada umumnya `vi`)
```bash
git commit
```

Ingat bahwa membuat commit menggunakan `vi` memiliki tingkat kesulitan yang cukup tinggi. Apabila kalian tidak sengaja memasuki mode ini, keluar dari editor tersebut dengan melakukan hal berikut ini:
1. Ketik `:`
2. Ketik `q!` dan pencet `ENTER`
3. Buat kembali commit dengan menggunakan `git commit -m "<MESSAGE>"`

#### Membuat *Commit* dengan command line flag `-m` (recommended)
```bash
git commit -m "COMMIT MESSAGE HERE"
```

Ingat bahwa sebelum melakukan commit, anda harus terlebih dahulu [menambahkan file yang ingin di-commit ke staging area](#staging-menambahkan-file)

### Branch
Pada umumnya, kalian dapat menggunakan command `git checkout` atau `git switch` untuk melakukan operasi pada branch. Tutorial di Google dan StackOverflow biasanya menggunakan command `git checkout`, tapi kalian dipersilahkan untuk menggunakan kedua command tersebut.

#### Pindah Branch
##### Opsi 1: menggunakan `git checkout`
```bash
git checkout <branch_name>
```

##### Opsi 2: menggunakan `git switch`
```bash
git switch <branch_name>
```

#### Membuat Branch Baru (berdasarkan branch yang aktif)
##### Opsi 1: menggunakan `git checkout`
```bash
git checkout -b <branch_name>
```

##### Opsi 2: using `git switch`
```bash
git switch -c <branch_name>
```

Branch digunakan untuk mengelola kode yang memiliki banyak versi/variasi. Fitur ini berguna saat kalian bekerja dalam sebuah tim dan/atau membutuhkan segregasi antara fitur yang sedang di-implementasikan agar lebih mudah untuk dikelola.

**Anda sebaiknya selalu memanfaatkan fitur branch pada proyek yang kompleks**, terutama saat sedang mengerjakan tugas kelompok agar dapat meminimalisir kesempatan terjadinya *merge conflict* antara anda dengan anggota kelompok yang lainnya.

