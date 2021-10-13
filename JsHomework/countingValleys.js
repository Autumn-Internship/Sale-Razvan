let path = 'UDDDUDUU';
let pathArray = path.split('');
let x, actualLevel = 0, count = 0;

for (x=0;x<pathArray.length;x++) {
  if (pathArray[x] === 'U') actualLevel ++;
  else if (pathArray[x] === 'D' && actualLevel === 0) {
    count ++;
    actualLevel--;
  }
  else actualLevel--;
}
  
console.log(count);