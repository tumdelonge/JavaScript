// penggunaan forEach() & map()
// forEach()
var flower = ['tulip', 'rose', 'jasmine', 'sakura']

flower.forEach(function(e) {
    console.log(e)
})
console.log('------------------');
console.log()

// atau

var cetak = function(e) {
    console.log(e)
}

flower.forEach(cetak)
console.log('----------------------')

// forEach() 2
var nama = ['alex', 'bernardo', 'cristopher', 'dejan'];
nama.forEach(function(e) {
    console.log('mahasiswa atas nama :' +e)
})

// forEach() 2
var nama2 = ['andreas', 'satni','robert', 'carlos']
nama2.forEach(function(e, i) {
    console.log('mahasiswa ke- '+(i+1)+' atas nama :'+e)
})