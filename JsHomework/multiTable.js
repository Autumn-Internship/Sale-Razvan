let n = 3;
let a = [];
for(let x=0;x<n;x++) a.push([]);


for(let x=0;x<n;x++) {
    a[0][x] = x+1;
    a[x][0] = x+1;
}

for (let i=1;i<n;i++) {
    for(let j=1;j<n;j++) {
        a[i][j] = a[0][j] * a[i][0];       
    }
}

console.log(a);