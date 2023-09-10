console.log("hello from file one")


function cetakNama(nama)
{
    console.log(`tampilkan ${nama}`)
}


//* Agar bisa diakses diluar module fileone.js
module.exports = cetakNama;