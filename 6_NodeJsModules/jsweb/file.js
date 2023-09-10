function cetakNama(nama)
{
    console.log(`tampilkan ${nama}`)
}


const PI = 3.14;

//* Agar bisa diakses diluar module fileone.js
module.exports.cetakNama = cetakNama;
module.exports.PI = PI;