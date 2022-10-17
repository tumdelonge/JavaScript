// method map() (mengembalikan nilai array)
var angka = [1,2,3,4,6,8,7,5,9];
var angka2 = angka.map(function(e) {
    return e*2;
});

console.log(angka2)
console.log(angka2.join(' - '))