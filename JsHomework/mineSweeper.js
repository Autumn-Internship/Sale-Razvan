let matrix = ([['E', '*', 'E', '*', 'E'], ['E', 'E', '*', 'E', 'E'], 
['E', 'E', '*', 'E', 'E'], ['E', 'E', 'E', 'E', 'E']]);

console.log(matrix);


for(let i=0;i<matrix.length;i++)
  for(let j=0;j<matrix[0].length;j++){
    if (matrix[i][j] === 'E' && matrix[i-1] && matrix [i+1] && (matrix[i-1][j-1] === '*' || 
    matrix[i-1][j] === '*' || matrix[i-1][j+1] === '*' || matrix[i][j-1] === '*' 
    || matrix[i][j+1] === '*' || matrix[i+1][j-1] === '*' || matrix[i+1][j] === '*' || 
    matrix[i+1][j+1] === '*'))
      console.log("Ceva mere");
    else if; // [TBA]
  }