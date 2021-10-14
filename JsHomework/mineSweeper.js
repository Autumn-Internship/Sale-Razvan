let matrix = [['E', '*', 'E', '*', 'E'], ['E', 'E', '*', 'E', 'E'], 
['E', 'E', '*', 'E', 'E'], ['E', 'E', 'E', 'E', 'E']];
let n = matrix.length;
let m = matrix[0].length;
//console.log(n,m);
console.log(matrix);

function testBomb(i, j) {
  if(i>=n || j>=m || i<0 || j<0) return 'E';
  return matrix[i][j];
}

function calc() {
  for (let i=0;i<n;i++)
    for(let j=0;j<m;j++) {
      let count = 0;
      if(matrix[i][j] === '*') continue;
      if(testBomb(i-1,j-1) === '*') count++;
      if(testBomb(i-1, j) === '*') count++;
      if(testBomb(i-1, j+1) === '*') count++;
      if(testBomb(i, j-1) === '*') count++;
      if(testBomb(i, j+1) === '*') count++;
      if(testBomb(i+1, j-1) === '*') count++;
      if(testBomb(i+1, j) === '*') count++;
      if(testBomb(i+1, j+1) === '*') count++;
      matrix[i][j]=count;
    }
}

calc();
console.log(matrix)