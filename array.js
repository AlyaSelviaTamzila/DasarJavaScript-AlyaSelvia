// array string
let jurusan = ["Rekayasa Perangkat Lunak", "Teknik Komputer Jaringan"]

// array numeric
let tingkatan_kelas = [10,11,12]

//array objek
let siswa = [
    //objek pertama
    {
        nama: "Yaya", jurusan: "RPL"
    },

    //objek kedua
    {
        nama: "Ying", jurusan: "TKJ"
    },

    //objek ketiga
    {
        nama: "Gopal", jurusan: "RPL"
    }
]

//MENDAPTKAN JUMLAH DATA YANG TERSIMPAN PADA ARRAY
console.log("Jumlah elemen array jurusan = " + jurusan.length );
console.log("Jumlah elemen array tingkatan_kelas = " + tingkatan_kelas.length);
console.log("Jumlah elemen array siswa = " + siswa.length);

//MENAMBAH DATA ARRAY
let kota = ["Malang", "Surabaya", "Tulungaggung"]

console.log("Isi array kota");
console.log(kota);
console.log("Jumlah data = " + kota.length);

console.log("--------------------------------");

//tambah data kota baru
kota.push("Banyuwangi")

console.log("Isi array kota saat ini");
console.log("kota");
console.log("Jumlah data saat ini = " + kota.length);


let barang = [
    { nama: "Rinso", harga: 5000},
    { nama: "Moonlight", harga: 4000}
]

console.log("Isi array barang saat ini");
console.log(barang);
console.log("Jumah data saat ini = " + barang.length);

console.log("-----------------------------------------");

//Tambah data barang baru
barang.push(
    { nama: "Molto", harga: 1000}
)

console.log("Isi array barang saat ini");
console.log(barang);
console.log("Jumlah data saat ini = " + barang.length);


//MENGHAPUS DATA PADA ARRAY
let data = 
['Ana', 'Sulaiman', 'Putri', 'Gatot', 'Adit', 'Gico']

console.log("Data array");
console.log(data);
console.log("Jumlah data saat ini = " + data.length);

//Menghapus data pada array
data.splice(2,1)

console.log("Data array");
console.log(data);
console.log("Jumlah data saat ini = " + data.length);

// MENAMPILKAN DATA PADA ARRAY OBJECT
let siswa = [
    { nama_depan: "Jack", nama_belakang: "Ma"},
    { nama_depan: "Johnny", nama_belakang: "English"},
    { nama_depan: "Jogn", nama_belakang: "Cena"}
]

// menampilkan nama lengkap dari array
siswa.map(
    (sis, index) => {
        console.log(sis.nama_depan + " " + sis.nama_belakang);
        
    }
)












