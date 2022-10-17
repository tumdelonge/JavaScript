// method javascript filter() & find()
// method filter() bisa mencari banyak nilai
// method filter() 1
var angka = [1,2,3,4,5,6,7,8,9,0,10,12];
var angka2 = angka.filter(function(x) {
    return x == 11;
})

console.log(angka2)

// method filter() 2
var angk = [1,2,3,5,7,8,9,10,11,13,14];
var angk2 = angk.filter(function(x) {
    return x > 5;
})

console.log(angk2.join(', '))

// method filter() 3
var arr = [1,2,3,4,5,6,7,8,9,0,10];
var arr2 = arr.filter(function(x) {
    return x >= 5 && x <=10; 
})

console.log(arr2.join(' - '))