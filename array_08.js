// method sort() / mengurutkan data array
var angka = [2,5,4,3,0,1,7,6,8,9,10,20,21];
// belum diurutkan
console.log(angka)
console.log(angka.join(' - '))
// sudah diurutkan
angka.sort()
console.log(angka.join(' - '))

// mengurutkan sesuai besar kecilnya bilangan
var angka2 = [2,5,4,3,0,1,7,6,8,9,10,20,21];
angka2.sort(function(a, b) {
    return a-b;
});

console.log(angka2.join(' - '))