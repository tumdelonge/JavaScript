// manipulasi data array
// method splice() & slice();

// penggunaan method splice() (menyisipkan)
// splice(indexAwal, mauDiapusBerapa, elemenBaru1, elemenbaru2...)

// splice 1
var arr = ['ferrari', 'tesla', 'hyundai', 'bmw'];
console.log(arr.length)
console.log(arr)

arr.splice(2, 0, 'ford', 'bugati');
console.log(arr)
console.log(arr.length)
for(var i = 0; i < arr.length; i++) {
    console.log(arr[i])
}
console.log('------------------------')
console.log()

// splice 2
var flower = ['tulip', 'jasmine', 'rose', 'orchid'];
console.log(flower)
console.log(flower.length)

flower.splice(2, 2, 'lily','bougenvile', 'sakura')
console.log(flower) 