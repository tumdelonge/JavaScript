// manipulasi array
// isi data array manual
var buah = [0]
buah[0] = 'semangka';
buah[1] = 'melon'
buah[2] = 'nanas'
buah[3] = 'apel'

console.log(buah)
console.log(buah[1])
console.log('-------------------')
console.log()

// isi data array 2
var bunga = ['mawar', 'melati', 'anggrek', 'kamboja'];
console.log(bunga)
for(var i = 0; i < bunga.length; i++) {
    console.log(bunga[i])
}

// isi data array menggunakan method push()
bunga.push('sepatu', 'daun cinta')
console.log(bunga)
    for(var i = 0; i < bunga.length; i++) {
        console.log(bunga[i])
    }
    console.log('-------------------------');
    console.log()

// hapus data arrray menggunakan method pop()
var mobil = ['avanza', 'rush', 'terios', 'jazz'];
console.log(mobil.length)
console.log(mobil)
for(var i = 0; i < mobil.length; i++) {
    console.log(mobil[i])
}
console.log('------------------------')
console.log()
// method pop()
mobil.pop();
console.log(mobil.length)
console.log(mobil)
