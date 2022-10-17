// manipulasi data array
// method splice() & slice();

// penggunaan method slice()
// slice(awal, akhir)
var car = ['hyundai', 'toyota', 'ferrari', 'bmw', 'bugatti'];
console.log(car.length);
console.log(car)

// slice(indexAwal, indexAkhir)
var car2 = car.slice(2, 4);
console.log(car2.length)
console.log(car2)
for(var i = 0 ; i < car2.length; i++) {
    console.log(car[i])
}

// var car masih normal
console.log(car.length);
console.log(car)
for(var i = 0; i < car.length; i++) {
    console.log(car[i])
}