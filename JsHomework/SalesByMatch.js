let n=1; //random input
ar = [100]; //random input
let freqArray = new Array(101).fill(0);
let count = 0;
    for (i=0;i<ar.length;i++) {
        let dummy = ar[i];
        freqArray[dummy] ++;
    }

    for (x in freqArray){
      //console.log(freqArray[x]);
      count += Math.floor(freqArray[x] / 2);
    }
  console.log(count);