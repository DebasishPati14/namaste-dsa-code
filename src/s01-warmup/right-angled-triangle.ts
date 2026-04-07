function printTriangle(size: number) {
  let patternStr = '';
  for (let i = 0; i <= size; i++) {
    for (let j = 0; j < i; j++) {
      patternStr += ' * ';
    }
    console.log(patternStr);
    patternStr = '';
  }
}

function printUpsideDownTriangle(size: number) {
  let printStr = '';
  for (let row = 1; row <= size ; row++)  { 
   
   /* for (let k = 0; i < size - i; k++) { 
     printStr += '   ';
     }*/
    for (let col = size; col <= size; col++) {
        if(row < col) {
            printStr += '   ';
        }
        else
	        printStr += `(${row},${col})`;
        }
    console.log(printStr);
    printStr  += '';
    }  
}

const num = 5 
console.log("original triangle");
//printTriangle(num);
console.log("Upside down triangle is as follow");
printUpsideDownTriangle(num);
