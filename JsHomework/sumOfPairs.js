let a = [10,5,2,3,7,5];
let sum = 10;

function sumOfPairs (a, sum) {
for(let i=0; i<a.length;i++){
  let dummy = a[i];
  for (let j=i+1;j<a.length;j++){
    if (dummy + a[j] > sum) break;
    else if (dummy + a[j] === sum) 
      return (`${dummy} + ${a[j]} = ${sum}`);
  }
}
    return "No such values";
}

console.log(sumOfPairs(a,sum));