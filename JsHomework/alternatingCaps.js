let alternatingCaps = ["Create", "a", "sentence", "using", "alternating", "caps"];
let workingVar = String(alternatingCaps).replace(/,/g, ' ');
console.log(workingVar);
let chars = workingVar.split('');

for (let i=0;i<chars.length;i+=2) {
    chars[i] = chars[i].toUpperCase();
}

console.log(chars.join(''));