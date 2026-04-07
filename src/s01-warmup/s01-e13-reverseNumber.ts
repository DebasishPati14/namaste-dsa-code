function reverseNumber(givenNum: number){
    let numCopy = Math.abs(givenNum);
    let revNum = 0;

    while(numCopy > 0){
        console.log("Number is ", numCopy)
        const rem = numCopy % 10;
        revNum = 10 * revNum + rem;
        numCopy = Math.floor(numCopy / 10);
    }

    return (givenNum < 0) ? revNum * -1 : revNum;
 }


 const num = -6912;
 console.log(`Given Num ${num}, and reverse is ${reverseNumber(num)}`);
