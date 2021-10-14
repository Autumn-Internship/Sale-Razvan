let c = [0,0,0,1,0,0];
let i = 0; let jumps = 0;

while(i<c.length) {
  if (c[i+1] === 1 && c[i+2] === 0) {
    jumps++;
    i = i+2;
  }
  else if (c[i] === 0 && c[i+2] === 0) {
    jumps++;
    i = i+2;
  }
  else {
    jumps++;
    i++;
  }
  
}  

console.log(jumps-1);
