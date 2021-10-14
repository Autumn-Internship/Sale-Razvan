let s = 'abcac';
let n = 10;

let arrayS = s.split('');

function countA (array) {
  if (s === 'a') return n;
  let count = 0;
  for (letter in array)
    if(array[letter] === 'a')
      count++;
  return count;
}

let rep = Math.floor(n/s.length); // Obtinem de cate ori se poate repeta (intreg), in exemplul prezent 3 ori
let rem = n - rep*s.length; // Obtinen diferenta (daca exista), in exemplul prezent 1
let aDiferenta = countA(s.slice(0,rem)) //Numarul de a-uri din diferenta

let rezultat = countA(s)*rep + aDiferenta;
console.log (rezultat);
