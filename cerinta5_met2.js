let suma = Array.from({ length: 50 }, (_, i) => i + 1).reduce((acc, numar) => acc + numar, 0);
console.log(suma);
let produs = Array.from({ length: 15 }, (_, i) => i + 1).reduce((acc, numar) => acc * numar, 1);
console.log(produs);