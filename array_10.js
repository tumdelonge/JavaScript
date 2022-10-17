// method javascript filter() & find()
// method find() hanya bias mencari satu nilai
// find() 1
var angka = [1,2,3,4,5,6,7,8,0,10];
var angka2 = angka.find(function(x) {
    return x == 8;
})

console.log(angka2)

// find() 2
var angk = [1,2,3,4,5,6,7,8,9,0,10];
var angk2 = angk.find(function(x) {
    return x > 9;
})
console.log(angk2)

// find() 3
var arr = [1,2,3,5,7,8,9,10,0];
var arr2 = arr.find(function(x) {
    return x < 5;
})

console.log(arr2)