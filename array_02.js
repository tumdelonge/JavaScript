// manipulasi data array 2
// method shift & unshift
// hapus data array menggunakan shift
var buah = ['semangka', 'melon', 'pisang', 'pepaya'];
console.log(buah.length)
console.log(buah)
for(var i = 0; i < buah.length; i++) {
    console.log(buah[i])
}
console.log('---------------------')
console.log()

buah.shift();
console.log(buah.length);
console.log(buah)
for(var i = 0; i < buah.length; i++) {
    console.log(buah[i])
}
console.log('-------------------------');
console.log()

// tambah data array menggunakan method unshift()
var bunga = ['mawar', 'melati', 'tulip', 'anggrek'];
console.log(bunga.length);
console.log(bunga)
console.log(bunga[0])
console.log('------------------')

// method unshift()
bunga.unshift('sakura', 'kamboja')
console.log(bunga.length)
console.log(bunga)
console.log(bunga[0])
for(var i = 0; i < bunga.length; i++) {
    console.log(bunga[i])
}
