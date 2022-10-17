// penggunaan method array pada javaScript
// filter()

var angka = [1,2,3,4,5,6,7,8,9,0,10];

angka2 = angka.filter(function(e) {
    return e > 3 && e <=9;
})

console.log(angka2.join(', '))
console.log(angka.join(', '))