function sumData() {
  hasil = 0;
  for (var i = 0; i < arguments.length; i++) {
    hasil = hasil + arguments[i];
  }

  console.log(hasil);
  return hasil;
}

sumData(1, 2, 3, 4, 5);
