console.log('ejercicios ids');

function caracteresDiferentes(a1, a2) {
  let max = Math.max(a1.length, a2.length);
  let count = 0;
  for (let i = 0; i < max; i++) {
    if (a1[i] !== a2[i]) {
      count++;
    }
  }

  return count;
}

function conteos(cadena) {
  let newCadena = '';
  let letter = cadena[0],
    count = 0;

  if (!cadena) {
    newCadena += 'ingresaste una cadena de texto vacía';
  }
  if (typeof cadena !== 'string') {
    newCadena += 'el dato ingresado no es un string';
  }
  for (let i = 0; i <= cadena.length; i++) {
    if (cadena[i] === letter) {
      count++;
    } else {
      newCadena += letter + `${count}`;
      letter = cadena[i];
      count = 1;
    }
  }
  return newCadena;
}

conteos('aabcccccaaa');
conteos('11111111112222222222');
conteos('aabbccaabbccaabbcc');

conteos('5544accaacc,,..,,');
conteos('');
conteos('111555');
conteos(455555);

Array.prototype.myCustomReduceFunction = function (callback) {
  if (!this.length) {
    throw new Error('Empty Array');
  }

  if (this.length === 1) {
    return this[0];
  }

  let accumulator = this[0];

  for (let i = 1; i < this.length; i++) {
    accumulator = callback(this[i], accumulator);
  }
  return accumulator;
};
